/*

select er.id_a,
       er.kind_a,
       er.id_b,
       er.kind_b,
       md.name milestone_name,
       md.external_id,
       m.milestone_date,
       m.comment,
       hv.name hosting_venue
from entity_relationship er
         inner join relationship_kind rk on er.kind_a = rk.kind_a
    and er.kind_b = rk.kind_b
    and er.relationship = rk.code
         inner join dw_milestone_definition md on md.qualifier_entity_id = rk.id
    and md.qualifier_entity_kind = 'RELATIONSHIP_KIND'
         inner join dw_milestone m on er.id = m.entity_id
    and m.entity_kind = 'ENTITY_RELATIONSHIP'
    and m.milestone_definition_id = md.id
         inner join measurable hv on er.id_b = hv.id and er.kind_b = 'MEASURABLE'
where er.relationship = 'HOSTED_BY::HOSTS';

 */
export default [
    {
        "id_a": 40336,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40336,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Retirement Date",
        "external_id": "TP_HV_PLANNED_RETIREMENT",
        "milestone_date": "2022-06-30",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40336,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Actual Retirement Date",
        "external_id": "TP_HV_ACTUAL_RETIREMENT",
        "milestone_date": "2023-12-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40336,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Sell Date",
        "external_id": "TP_HV_SELL",
        "milestone_date": "2021-06-30",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40336,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Hold Date",
        "external_id": "TP_HV_HOLD",
        "milestone_date": "2020-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40311,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2018-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40330,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40330,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Retirement Date",
        "external_id": "TP_HV_PLANNED_RETIREMENT",
        "milestone_date": "2020-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40330,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Actual Retirement Date",
        "external_id": "TP_HV_ACTUAL_RETIREMENT",
        "milestone_date": "2020-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40330,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Sell Date",
        "external_id": "TP_HV_SELL",
        "milestone_date": "2019-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40179,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2019-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40179,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Actual Retirement Date",
        "external_id": "TP_HV_ACTUAL_RETIREMENT",
        "milestone_date": "2023-12-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40339,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2019-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40339,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Actual Retirement Date",
        "external_id": "TP_HV_ACTUAL_RETIREMENT",
        "milestone_date": "2023-12-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40002,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40002,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Hold Date",
        "external_id": "TP_HV_HOLD",
        "milestone_date": "2019-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40258,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40258,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Retirement Date",
        "external_id": "TP_HV_PLANNED_RETIREMENT",
        "milestone_date": "2020-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40258,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Actual Retirement Date",
        "external_id": "TP_HV_ACTUAL_RETIREMENT",
        "milestone_date": "2020-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40258,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Sell Date",
        "external_id": "TP_HV_SELL",
        "milestone_date": "2019-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40016,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40016,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Hold Date",
        "external_id": "TP_HV_HOLD",
        "milestone_date": "2019-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40046,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40046,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Hold Date",
        "external_id": "TP_HV_HOLD",
        "milestone_date": "2019-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 39984,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 39984,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Retirement Date",
        "external_id": "TP_HV_PLANNED_RETIREMENT",
        "milestone_date": "2022-06-30",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 39984,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Actual Retirement Date",
        "external_id": "TP_HV_ACTUAL_RETIREMENT",
        "milestone_date": "2021-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 39984,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Sell Date",
        "external_id": "TP_HV_SELL",
        "milestone_date": "2019-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40324,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40324,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Actual Retirement Date",
        "external_id": "TP_HV_ACTUAL_RETIREMENT",
        "milestone_date": "2023-12-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 43924,
        "kind_a": "MEASURABLE",
        "id_b": 50297,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2021-06-30",
        "comment": "",
        "hosting_venue": "Hybrid Cloud"
    },
    {
        "id_a": 43924,
        "kind_a": "MEASURABLE",
        "id_b": 50297,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Date",
        "external_id": "TP_HV_PLANNED",
        "milestone_date": "2020-01-01",
        "comment": "",
        "hosting_venue": "Hybrid Cloud"
    },
    {
        "id_a": 40007,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2019-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40007,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Hold Date",
        "external_id": "TP_HV_HOLD",
        "milestone_date": "2019-06-30",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40177,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2019-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40177,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Hold Date",
        "external_id": "TP_HV_HOLD",
        "milestone_date": "2019-06-30",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40381,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40381,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Retirement Date",
        "external_id": "TP_HV_PLANNED_RETIREMENT",
        "milestone_date": "2021-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40381,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Actual Retirement Date",
        "external_id": "TP_HV_ACTUAL_RETIREMENT",
        "milestone_date": "2020-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40381,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Sell Date",
        "external_id": "TP_HV_SELL",
        "milestone_date": "2019-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40408,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40408,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Retirement Date",
        "external_id": "TP_HV_PLANNED_RETIREMENT",
        "milestone_date": "2020-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40408,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Actual Retirement Date",
        "external_id": "TP_HV_ACTUAL_RETIREMENT",
        "milestone_date": "2020-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40408,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Sell Date",
        "external_id": "TP_HV_SELL",
        "milestone_date": "2019-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40201,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40201,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Retirement Date",
        "external_id": "TP_HV_PLANNED_RETIREMENT",
        "milestone_date": "2021-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40201,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Actual Retirement Date",
        "external_id": "TP_HV_ACTUAL_RETIREMENT",
        "milestone_date": "2021-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40201,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Sell Date",
        "external_id": "TP_HV_SELL",
        "milestone_date": "2019-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 39960,
        "kind_a": "MEASURABLE",
        "id_b": 50297,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "Hybrid Cloud"
    },
    {
        "id_a": 39960,
        "kind_a": "MEASURABLE",
        "id_b": 50297,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Retirement Date",
        "external_id": "TP_HV_PLANNED_RETIREMENT",
        "milestone_date": "2023-06-30",
        "comment": "",
        "hosting_venue": "Hybrid Cloud"
    },
    {
        "id_a": 39960,
        "kind_a": "MEASURABLE",
        "id_b": 50297,
        "kind_b": "MEASURABLE",
        "milestone_name": "Sell Date",
        "external_id": "TP_HV_SELL",
        "milestone_date": "2022-01-01",
        "comment": "",
        "hosting_venue": "Hybrid Cloud"
    },
    {
        "id_a": 39960,
        "kind_a": "MEASURABLE",
        "id_b": 50297,
        "kind_b": "MEASURABLE",
        "milestone_name": "Hold Date",
        "external_id": "TP_HV_HOLD",
        "milestone_date": "2020-01-01",
        "comment": "",
        "hosting_venue": "Hybrid Cloud"
    },
    {
        "id_a": 39961,
        "kind_a": "MEASURABLE",
        "id_b": 50297,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2018-01-01",
        "comment": "",
        "hosting_venue": "Hybrid Cloud"
    },
    {
        "id_a": 39961,
        "kind_a": "MEASURABLE",
        "id_b": 50296,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2018-01-01",
        "comment": "",
        "hosting_venue": "GCP"
    },
    {
        "id_a": 39961,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2018-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 48260,
        "kind_a": "MEASURABLE",
        "id_b": 50297,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2020-06-01",
        "comment": "",
        "hosting_venue": "Hybrid Cloud"
    },
    {
        "id_a": 48260,
        "kind_a": "MEASURABLE",
        "id_b": 50297,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Date",
        "external_id": "TP_HV_PLANNED",
        "milestone_date": "2020-01-01",
        "comment": "",
        "hosting_venue": "Hybrid Cloud"
    },
    {
        "id_a": 40395,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40395,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Hold Date",
        "external_id": "TP_HV_HOLD",
        "milestone_date": "2021-06-30",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40140,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40140,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Retirement Date",
        "external_id": "TP_HV_PLANNED_RETIREMENT",
        "milestone_date": "2021-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40140,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Sell Date",
        "external_id": "TP_HV_SELL",
        "milestone_date": "2020-06-18",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40360,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40360,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Retirement Date",
        "external_id": "TP_HV_PLANNED_RETIREMENT",
        "milestone_date": "2021-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40360,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Sell Date",
        "external_id": "TP_HV_SELL",
        "milestone_date": "2020-06-18",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40438,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40438,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Retirement Date",
        "external_id": "TP_HV_PLANNED_RETIREMENT",
        "milestone_date": "2021-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40438,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Sell Date",
        "external_id": "TP_HV_SELL",
        "milestone_date": "2020-06-18",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40165,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40165,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Retirement Date",
        "external_id": "TP_HV_PLANNED_RETIREMENT",
        "milestone_date": "2021-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40165,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Actual Retirement Date",
        "external_id": "TP_HV_ACTUAL_RETIREMENT",
        "milestone_date": "2023-12-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40165,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Sell Date",
        "external_id": "TP_HV_SELL",
        "milestone_date": "2020-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40165,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Hold Date",
        "external_id": "TP_HV_HOLD",
        "milestone_date": "2019-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 44549,
        "kind_a": "MEASURABLE",
        "id_b": 50297,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2020-03-30",
        "comment": "",
        "hosting_venue": "Hybrid Cloud"
    },
    {
        "id_a": 44549,
        "kind_a": "MEASURABLE",
        "id_b": 50297,
        "kind_b": "MEASURABLE",
        "milestone_name": "Hold Date",
        "external_id": "TP_HV_HOLD",
        "milestone_date": "2022-12-31",
        "comment": "",
        "hosting_venue": "Hybrid Cloud"
    },
    {
        "id_a": 44549,
        "kind_a": "MEASURABLE",
        "id_b": 50297,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Date",
        "external_id": "TP_HV_PLANNED",
        "milestone_date": "2020-01-01",
        "comment": "",
        "hosting_venue": "Hybrid Cloud"
    },
    {
        "id_a": 40037,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40025,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2019-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 39937,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2019-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 39976,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2019-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 39976,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Hold Date",
        "external_id": "TP_HV_HOLD",
        "milestone_date": "2022-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40380,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40380,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Actual Retirement Date",
        "external_id": "TP_HV_ACTUAL_RETIREMENT",
        "milestone_date": "2023-12-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40303,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40303,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Retirement Date",
        "external_id": "TP_HV_PLANNED_RETIREMENT",
        "milestone_date": "2021-06-30",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40303,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Actual Retirement Date",
        "external_id": "TP_HV_ACTUAL_RETIREMENT",
        "milestone_date": "2020-09-30",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40303,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Sell Date",
        "external_id": "TP_HV_SELL",
        "milestone_date": "2019-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40335,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40335,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Retirement Date",
        "external_id": "TP_HV_PLANNED_RETIREMENT",
        "milestone_date": "2021-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 40335,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Sell Date",
        "external_id": "TP_HV_SELL",
        "milestone_date": "2020-06-18",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 39955,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Launch Date",
        "external_id": "TP_HV_LAUNCH",
        "milestone_date": "2017-01-01",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 39955,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Planned Retirement Date",
        "external_id": "TP_HV_PLANNED_RETIREMENT",
        "milestone_date": "2020-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 39955,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Actual Retirement Date",
        "external_id": "TP_HV_ACTUAL_RETIREMENT",
        "milestone_date": "2020-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    },
    {
        "id_a": 39955,
        "kind_a": "MEASURABLE",
        "id_b": 50298,
        "kind_b": "MEASURABLE",
        "milestone_name": "Sell Date",
        "external_id": "TP_HV_SELL",
        "milestone_date": "2019-12-31",
        "comment": "",
        "hosting_venue": "On-Prem"
    }
]