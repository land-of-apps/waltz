package com.khartec.waltz.web.endpoints.extracts;

import com.khartec.waltz.data.InlineSelectFieldFactory;
import com.khartec.waltz.model.EntityKind;
import org.jooq.*;
import org.jooq.impl.DSL;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.khartec.waltz.schema.Tables.*;
import static com.khartec.waltz.schema.tables.Application.APPLICATION;
import static com.khartec.waltz.web.WebUtilities.getId;
import static com.khartec.waltz.web.WebUtilities.mkPath;
import static spark.Spark.get;


@Service
public class SurveyRunExtractor extends BaseDataExtractor {

    private static final Logger LOG = LoggerFactory.getLogger(SurveyRunExtractor.class);

    @Autowired
    public SurveyRunExtractor(DSLContext dsl) {
        super(dsl);
    }

    @Override
    public void register() {
        String surveyRunPath = mkPath("data-extract", "survey-run", ":id");
        String surveyInstanceResponsesPath = mkPath("data-extract", "survey-run-response" , "instance", ":id");
        String surveyRunResponsesPath = mkPath("data-extract", "survey-run-response",":id");

        get(surveyRunPath, (request, response) -> {
            long runId = getId(request);

            LOG.info("Survey run has been exported successfully");
            return writeExtract(
                    mkFilename(getSurveyRunNameById(runId)),
                    getSurveyRunInstances(runId),
                    request,
                    response);
        });

        get(surveyInstanceResponsesPath, (request, response) -> {
            long instanceId = getId(request);

            LOG.info("Survey instance with responses has been exported successfully");
            return writeExtract(
                    mkFilename(getSurveyRunNameByInstanceId(instanceId)),
                    getSurveyInstanceResponses(instanceId),
                    request,
                    response);
        });

        get(surveyRunResponsesPath, (request, response) -> {
            long runId = getId(request);

            LOG.info("Survey run with responses has been exported successfully");
            return writeExtract(
                    mkFilename(getSurveyRunNameById(runId)),
                    getSurveyRunWithResponses(runId),
                    request,
                    response);
        });

    }

    private SelectSeekStep2<Record4<String, String, String, String>, Integer, String> getSurveyInstanceResponses(
            long surveyInstanceId) {
        Field<String> ENTITY_RESPONSE_NAME_FIELD = InlineSelectFieldFactory.mkNameField(
                SURVEY_QUESTION_RESPONSE.ENTITY_RESPONSE_ID,
                SURVEY_QUESTION_RESPONSE.ENTITY_RESPONSE_KIND);

        return dsl.select(SURVEY_QUESTION.SECTION_NAME.as("Section"),
                SURVEY_QUESTION.QUESTION_TEXT.as("Question"),
                DSL.concat(SURVEY_QUESTION_RESPONSE.STRING_RESPONSE.coalesce(""),
                        SURVEY_QUESTION_RESPONSE.NUMBER_RESPONSE.cast(String.class).coalesce(""),
                        SURVEY_QUESTION_RESPONSE.BOOLEAN_RESPONSE.cast(String.class).coalesce(""),
                        SURVEY_QUESTION_RESPONSE.DATE_RESPONSE.cast(String.class).coalesce(""),
                        ENTITY_RESPONSE_NAME_FIELD.coalesce("")).as("Answer"),
                SURVEY_QUESTION_RESPONSE.COMMENT.as("Comment"))
                .from(SURVEY_QUESTION)
                .join(SURVEY_QUESTION_RESPONSE)
                .on(SURVEY_QUESTION_RESPONSE.QUESTION_ID.eq(SURVEY_QUESTION.ID))
                .where(SURVEY_QUESTION_RESPONSE.SURVEY_INSTANCE_ID.eq(surveyInstanceId))
                .orderBy(SURVEY_QUESTION.POSITION, SURVEY_QUESTION.QUESTION_TEXT);
    }

    private SelectConditionStep<?> getSurveyRunInstances(long surveyRunId) {
        return dsl
                .select(APPLICATION.NAME.coalesce(CHANGE_INITIATIVE.NAME).as("Entity Name"),
                        APPLICATION.ASSET_CODE.coalesce(CHANGE_INITIATIVE.EXTERNAL_ID).as("Entity Id"),
                        SURVEY_INSTANCE.ENTITY_KIND.as("Entity Kind"),
                        SURVEY_INSTANCE.STATUS.as("Status"),
                        SURVEY_INSTANCE.DUE_DATE.as("Due Date"),
                        SURVEY_INSTANCE.SUBMITTED_BY.as("Submitted By"),
                        SURVEY_INSTANCE.SUBMITTED_AT.as("Submitted At"),
                        SURVEY_INSTANCE.APPROVED_BY.as("Approved By"),
                        SURVEY_INSTANCE.APPROVED_AT.as("Approved At"))
                .from(SURVEY_INSTANCE)
                .leftOuterJoin(APPLICATION).on(SURVEY_INSTANCE.ENTITY_KIND.eq(EntityKind.APPLICATION.name())
                        .and(APPLICATION.ID.eq(SURVEY_INSTANCE.ENTITY_ID)))
                .leftOuterJoin(CHANGE_INITIATIVE).on(SURVEY_INSTANCE.ENTITY_KIND.eq(EntityKind.CHANGE_INITIATIVE.name())
                        .and(CHANGE_INITIATIVE.ID.eq(SURVEY_INSTANCE.ENTITY_ID)))
                .where(SURVEY_INSTANCE.SURVEY_RUN_ID.eq(surveyRunId))
                .and(SURVEY_INSTANCE.ORIGINAL_INSTANCE_ID.isNull());
    }

    private SelectConditionStep<?> getSurveyRunWithResponses(long surveyRunId) {
        Field<String> ENTITY_RESPONSE_NAME_FIELD = InlineSelectFieldFactory.mkNameField(
                SURVEY_QUESTION_RESPONSE.ENTITY_RESPONSE_ID,
                SURVEY_QUESTION_RESPONSE.ENTITY_RESPONSE_KIND);
        return dsl
                .select(
                        APPLICATION.NAME.coalesce(CHANGE_INITIATIVE.NAME).as("Entity Name"),
                        APPLICATION.ASSET_CODE.coalesce(CHANGE_INITIATIVE.EXTERNAL_ID).as("Entity Id"),
                        SURVEY_INSTANCE.ENTITY_KIND.as("Entity Kind"),
                        SURVEY_INSTANCE.STATUS.as("Survey Instance Status"),
                        SURVEY_QUESTION.QUESTION_TEXT.as("Question"),
                        DSL.concat(SURVEY_QUESTION_RESPONSE.STRING_RESPONSE.coalesce(""),
                                SURVEY_QUESTION_RESPONSE.NUMBER_RESPONSE.cast(String.class).coalesce(""),
                                SURVEY_QUESTION_RESPONSE.BOOLEAN_RESPONSE.cast(String.class).coalesce(""),
                                SURVEY_QUESTION_RESPONSE.DATE_RESPONSE.cast(String.class).coalesce(""),
                                ENTITY_RESPONSE_NAME_FIELD.coalesce("")).as("Answer"),
                        SURVEY_QUESTION_RESPONSE.COMMENT.as("Comment"),
                        PERSON.EMAIL.as("Participant Email"),
                        SURVEY_INSTANCE.SUBMITTED_BY.as("Submitted By"),
                        SURVEY_INSTANCE.SUBMITTED_AT.as("Submitted At"),
                        SURVEY_INSTANCE.DUE_DATE.as("Due Date"),
                        SURVEY_QUESTION_RESPONSE.LAST_UPDATED_AT.as("Last Updated At")
                )
                .from(SURVEY_INSTANCE)
                .leftOuterJoin(APPLICATION).on(SURVEY_INSTANCE.ENTITY_KIND.eq(EntityKind.APPLICATION.name())
                        .and(APPLICATION.ID.eq(SURVEY_INSTANCE.ENTITY_ID)))
                .leftOuterJoin(CHANGE_INITIATIVE).on(SURVEY_INSTANCE.ENTITY_KIND.eq(EntityKind.CHANGE_INITIATIVE.name())
                        .and(CHANGE_INITIATIVE.ID.eq(SURVEY_INSTANCE.ENTITY_ID)))
                .join(SURVEY_RUN).on(SURVEY_RUN.ID.eq(SURVEY_INSTANCE.SURVEY_RUN_ID))
                .join(SURVEY_QUESTION).on(SURVEY_QUESTION.SURVEY_TEMPLATE_ID.eq(SURVEY_RUN.SURVEY_TEMPLATE_ID))
                .leftOuterJoin(SURVEY_QUESTION_RESPONSE).on(SURVEY_QUESTION_RESPONSE.QUESTION_ID.eq(SURVEY_QUESTION.ID)
                        .and(SURVEY_QUESTION_RESPONSE.SURVEY_INSTANCE_ID.eq(SURVEY_INSTANCE.ID)))
                .join(PERSON).on(PERSON.ID.eq(SURVEY_QUESTION_RESPONSE.PERSON_ID))
                .where(SURVEY_INSTANCE.SURVEY_RUN_ID.eq(surveyRunId))
                .and(SURVEY_INSTANCE.ORIGINAL_INSTANCE_ID.isNull());
    }

    private String mkFilename(String postfix) {
        return "survey-run-instances-" + postfix;
    }

    private String getSurveyRunNameById(long id) {
        return dsl.select(SURVEY_RUN.NAME)
                .from(SURVEY_RUN)
                .where(SURVEY_RUN.ID.eq(id))
                .fetchOne().component1();
    }

    private String getSurveyRunNameByInstanceId(long surveyInstanceId) {
        return dsl.select(SURVEY_RUN.NAME)
                .from(SURVEY_RUN)
                .where(SURVEY_RUN.ID.in(
                        dsl.select(SURVEY_INSTANCE.SURVEY_RUN_ID)
                                .from(SURVEY_INSTANCE)
                                .where(SURVEY_INSTANCE.ID.eq(surveyInstanceId))
                ))
                .fetchOne().component1();
    }
}