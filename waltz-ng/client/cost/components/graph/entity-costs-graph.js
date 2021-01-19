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
import _ from "lodash";
import "d3-selection-multi";
import {initialiseData, isEmpty} from "../../../common";
import {scaleBand, scaleLinear} from "d3-scale";
import {select} from "d3-selection";
import {extent} from "d3-array";
import {axisBottom, axisLeft} from "d3-axis";
import {format} from "d3-format";
import namedSettings from "../../../system/named-settings";
import {currenciesByCode} from "../../../common/currency-utils";
import {truncateMiddle} from "../../../common/string-utils";


const template = "<div class='waltz-asset-costs-graph'></div>";

const bindings = {
    costs: "<",
};


const initialState = {
    costs: [],
};


const startColor = "#c4eeff";
const endColor = "#55d3ff";


const dimensions = {
    graph: {
        width: 600
    },
    margin: {
        top: 0,
        left: 150,
        right: 50,
        bottom: 50
    },
    circleSize: 24
};


function drawXAxis(xScale, container, currencyFormat) {
    const xAxis = axisBottom(xScale)
        .tickFormat(currencyFormat)
        .ticks(5);

    container
        .append("g")
        .attr("transform", `translate(0, ${dimensions.graph.height - (dimensions.margin.top + dimensions.margin.bottom)})`)
        .call(xAxis);
}


function drawYAxis(yScale,
                   container) {
    const yAxis = axisLeft(yScale);

    container
        .append("g")
        .attr("transform", `translate(${dimensions.margin.left}, ${dimensions.margin.top})`)
        .call(yAxis);
}


function draw(svg,
              costs = [],
              currencyFormat) {
    // remove any previous elements
    svg
        .selectAll("*")
        .remove();

    const totalExtent = extent(costs, c => c.amount);

    const xScale = scaleLinear()
        .range([0, dimensions.graph.width - dimensions.margin.left - dimensions.margin.right])
        .domain([0, totalExtent[1]]);

    const nameArray = _.map(costs, c => truncateMiddle(c.entityReference.name, 25));

    const yScale = scaleBand()
        .domain(nameArray)
        .range([0, dimensions.graph.height - (dimensions.margin.top + dimensions.margin.bottom)])
        .padding(0.2);

    const colorScale = scaleLinear()
        .domain(totalExtent)
        .range([startColor, endColor]);

    const g = svg
        .append("g")
        .attr("transform", `translate(${dimensions.margin.left},${dimensions.margin.top})`);

    const bars = g
        .selectAll(".wacg-bar")
        .data(costs, d => d.entityReference.id)
        .enter()
        .append("g")
        .classed("wacg-bar", true)
        .attr("transform", (d) => `translate(0, ${yScale(truncateMiddle(d.entityReference.name, 25))})`)

    bars.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", d => xScale(d.amount))
        .attr("height", yScale.bandwidth())
        .attr("fill", (d) => colorScale(d.amount));

    bars.append("text")
        .attr("x", 10)
        .attr("y", yScale.bandwidth() / 2 + 3)  // middle of the bar
        .text(d => currencyFormat(d.amount));

    drawXAxis(xScale, g, currencyFormat);
    drawYAxis(yScale, svg);
}


function controller($element, $scope, settingsService) {
    const vm = initialiseData(this, initialState);

    const holder = $element.find("div")[0];
    const svg = select(holder)
        .append("svg")
        .attr("id", "waltz-entity-costs-graph")
        .style("min-height", "300px")
        .attr("preserveAspectRatio", "xMinYMin meet");

    let currencyFormat = null;

    const refresh = () => {
        if (isEmpty(vm.costs) || ! currencyFormat) {
            return;
        }

        dimensions.graph.height = 100 + (vm.costs.length * 20);

        svg.attr("viewBox", `0 0 ${dimensions.graph.width} ${dimensions.graph.height}`);

        draw(
            svg,
            vm.costs,
            currencyFormat);

    };


    vm.$onInit = () => {
        settingsService
            .findOrDefault(namedSettings.defaultCurrency, "EUR")
            .then(code => {
                const currency = currenciesByCode[code];
                currencyFormat = d => `${currency.symbol}${format(",d")(d)}`;
                refresh();
            });
    };

    vm.$onChanges = refresh;

}


controller.$inject = [
    "$element",
    "$scope",
    "SettingsService"
];


const component = {
    bindings,
    template,
    controller
};


export default {
    component,
    id: "waltzEntityCostsGraph"
};
