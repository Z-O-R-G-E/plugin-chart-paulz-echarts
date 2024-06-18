/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import {
  PaulzEchartsBoxPlotChartPlugin,
  PaulzEchartsPieChartPlugin,
  PaulzEchartsTimeseriesChartPlugin,
  PaulzEchartsGraphChartPlugin,
  PaulzEchartsFunnelChartPlugin,
  PaulzEchartsTreemapChartPlugin,
  PaulzEchartsAreaChartPlugin,
  PaulzEchartsTimeseriesBarChartPlugin,
  PaulzEchartsTimeseriesLineChartPlugin,
  PaulzEchartsTimeseriesScatterChartPlugin,
  PaulzEchartsTimeseriesSmoothLineChartPlugin,
  PaulzEchartsTimeseriesStepChartPlugin,
  PaulzEchartsMixedTimeseriesChartPlugin,
  PaulzEchartsGaugeChartPlugin,
  PaulzEchartsRadarChartPlugin,
  PaulzEchartsTreeChartPlugin,
  PaulzBigNumberChartPlugin,
  PaulzBigNumberTotalChartPlugin,
  PaulzEchartsSunburstChartPlugin,
} from '../src';

import { EchartsChartPlugin } from '../src/types';

test('@superset-ui/plugin-chart-echarts exists', () => {
  expect(PaulzEchartsBoxPlotChartPlugin).toBeDefined();
  expect(PaulzEchartsPieChartPlugin).toBeDefined();
  expect(PaulzEchartsTimeseriesChartPlugin).toBeDefined();
  expect(PaulzEchartsGraphChartPlugin).toBeDefined();
  expect(PaulzEchartsFunnelChartPlugin).toBeDefined();
  expect(PaulzEchartsTreemapChartPlugin).toBeDefined();
  expect(PaulzEchartsAreaChartPlugin).toBeDefined();
  expect(PaulzEchartsTimeseriesBarChartPlugin).toBeDefined();
  expect(PaulzEchartsTimeseriesLineChartPlugin).toBeDefined();
  expect(PaulzEchartsTimeseriesScatterChartPlugin).toBeDefined();
  expect(PaulzEchartsTimeseriesSmoothLineChartPlugin).toBeDefined();
  expect(PaulzEchartsTimeseriesStepChartPlugin).toBeDefined();
  expect(PaulzEchartsMixedTimeseriesChartPlugin).toBeDefined();
  expect(PaulzEchartsGaugeChartPlugin).toBeDefined();
  expect(PaulzEchartsRadarChartPlugin).toBeDefined();
  expect(PaulzEchartsTreeChartPlugin).toBeDefined();
  expect(PaulzBigNumberChartPlugin).toBeDefined();
  expect(PaulzBigNumberTotalChartPlugin).toBeDefined();
  expect(PaulzEchartsSunburstChartPlugin).toBeDefined();
});

test('@superset-ui/plugin-chart-echarts-parsemethod-validation', () => {
  const plugins: EchartsChartPlugin[] = [
    new PaulzEchartsBoxPlotChartPlugin().configure({
      key: 'paulz_box_plot',
    }),
    new PaulzEchartsPieChartPlugin().configure({
      key: 'paulz_pie',
    }),
    new PaulzEchartsTimeseriesChartPlugin().configure({
      key: 'paulz_echarts_timeseries',
    }),
    new PaulzEchartsGraphChartPlugin().configure({
      key: 'paulz_graph_chart',
    }),
    new PaulzEchartsFunnelChartPlugin().configure({
      key: 'paulz_funnel',
    }),
    new PaulzEchartsTreemapChartPlugin().configure({
      key: 'paulz_treemap_v2',
    }),
    new PaulzEchartsAreaChartPlugin().configure({
      key: 'paulz_echarts_area',
    }),
    new PaulzEchartsTimeseriesBarChartPlugin().configure({
      key: 'paulz_echarts_timeseries_bar',
    }),
    new PaulzEchartsTimeseriesLineChartPlugin().configure({
      key: 'paulz_echarts_timeseries_line',
    }),
    new PaulzEchartsTimeseriesScatterChartPlugin().configure({
      key: 'paulz_echarts_timeseries_scatter',
    }),
    new PaulzEchartsTimeseriesSmoothLineChartPlugin().configure({
      key: 'paulz_echarts_timeseries_smooth',
    }),
    new PaulzEchartsTimeseriesStepChartPlugin().configure({
      key: 'paulz_echarts_timeseries_step',
    }),
    new PaulzEchartsMixedTimeseriesChartPlugin().configure({
      key: 'paulz_mixed_timeseries',
    }),
    new PaulzEchartsGaugeChartPlugin().configure({
      key: 'paulz_gauge_chart',
    }),
    new PaulzEchartsRadarChartPlugin().configure({
      key: 'paulz_radar',
    }),
    new PaulzEchartsTreeChartPlugin().configure({
      key: 'paulz_tree',
    }),
    new PaulzBigNumberChartPlugin().configure({
      key: 'paulz_big_number',
    }),
    new PaulzBigNumberTotalChartPlugin().configure({
      key: 'paulz_big_number_total',
    }),
    new PaulzEchartsSunburstChartPlugin().configure({
      key: 'paulz_sunburst',
    }),
  ];

  plugins.forEach(plugin => {
    expect(plugin.metadata.parseMethod).toEqual('json');
  });
});
