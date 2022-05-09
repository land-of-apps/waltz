/*
 * Waltz - Enterprise Architecture
 * Copyright (C) 2016, 2017, 2018, 2019 Waltz open source project
 * See README.md for more information
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific
 *
 */

package org.finos.waltz.data.orgunit;


import org.finos.waltz.data.entity_hierarchy.AbstractIdSelectorFactory;
import org.finos.waltz.model.HierarchyQueryScope;
import org.finos.waltz.model.IdSelectionOptions;
import org.finos.waltz.schema.Tables;
import org.jooq.Record1;
import org.jooq.Select;
import org.jooq.impl.DSL;

import static org.finos.waltz.model.EntityKind.*;
import static org.finos.waltz.schema.Tables.APPLICATION_GROUP_OU_ENTRY;

public class OrganisationalUnitIdSelectorFactory extends AbstractIdSelectorFactory {


    public OrganisationalUnitIdSelectorFactory() {
        super(ORG_UNIT);
    }

    @Override
    protected Select<Record1<Long>> mkForOptions(IdSelectionOptions options) {
        switch (options.entityReference().kind()) {
            case APP_GROUP:
                return mkForAppGroup(options);
            default:
                throw new UnsupportedOperationException("Cannot create orgUnit selector from kind: " + options.entityReference().kind());
        }
    }

    private Select<Record1<Long>> mkForAppGroup(IdSelectionOptions options) {
        if (options.scope().equals(HierarchyQueryScope.EXACT)) {
            return DSL
                    .select(APPLICATION_GROUP_OU_ENTRY.ORG_UNIT_ID)
                    .from(APPLICATION_GROUP_OU_ENTRY)
                    .where(APPLICATION_GROUP_OU_ENTRY.GROUP_ID.eq(options.entityReference().id()));
        } else if (options.scope().equals(HierarchyQueryScope.CHILDREN)) {
            return DSL
                    .select(Tables.ENTITY_HIERARCHY.ID)
                    .from(APPLICATION_GROUP_OU_ENTRY)
                    .innerJoin(Tables.ENTITY_HIERARCHY).on(APPLICATION_GROUP_OU_ENTRY.ORG_UNIT_ID.eq(Tables.ENTITY_HIERARCHY.ANCESTOR_ID))
                    .where(APPLICATION_GROUP_OU_ENTRY.GROUP_ID.eq(options.entityReference().id()));
        } else {
            return DSL
                    .select(Tables.ENTITY_HIERARCHY.ANCESTOR_ID)
                    .from(APPLICATION_GROUP_OU_ENTRY)
                    .innerJoin(Tables.ENTITY_HIERARCHY).on(APPLICATION_GROUP_OU_ENTRY.ORG_UNIT_ID.eq(Tables.ENTITY_HIERARCHY.ID))
                    .where(APPLICATION_GROUP_OU_ENTRY.GROUP_ID.eq(options.entityReference().id()));
        }
    }
}
