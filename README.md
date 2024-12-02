### Использование

Для сборки плагина, выполните следующие команды:
```
npm i
npm run build
```

В качестве альтернативы, чтобы запустить плагин в режиме разработки (= пересоздавать каждый раз при внесении изменений), запустите сервер разработки с помощью следующей команды:
```
npm run dev
```

Чтобы добавить пакет в Superset, перейдите в подкаталог `superset-frontend` в исходной папке Superset (при условии, что плагин `plugin-chart-paulz-echarts` и репозитории `superset` находятся в одном корневом каталоге) и запустите
```
npm i -S ../../plugin-chart-paulz-table
```

Если ваш плагин Superset существует в каталоге `superset-frontend` и вы хотите устранить ошибки TypeScript, связанные с неправильным разрешением `@superset-ui/core`, добавьте следующее в ваш файл `tsconfig.json`:
```
"references": [
  {
    "path": "../../packages/superset-ui-chart-controls"
  },
  {
    "path": "../../packages/superset-ui-core"
  }
]
```

Вы также можете добавить следующее в массив `include` в `tsconfig.json`, чтобы сделать типы Superset доступными для вашего плагина:
```
"../../types/**/*"
```

Наконец, если вы хотите убедиться, что ваш плагин `tsconfig.json` согласован с корневым проектом Superset, вы можете добавить следующее в свой файл `tsconfig.json`:
```
"extends": "../../tsconfig.json",
```

После этого отредактируйте `superset-frontend/src/visualizations/presets/MainPreset.js` и внесите следующие изменения:
```js
import {
    PaulzBigNumberChartPlugin,
    PaulzBigNumberTotalChartPlugin,
    PaulzEchartsPieChartPlugin,
    PaulzEchartsBoxPlotChartPlugin,
    PaulzEchartsAreaChartPlugin,
    PaulzEchartsTimeseriesChartPlugin,
    PaulzEchartsTimeseriesBarChartPlugin,
    PaulzEchartsTimeseriesLineChartPlugin,
    PaulzEchartsTimeseriesScatterChartPlugin,
    PaulzEchartsTimeseriesSmoothLineChartPlugin,
    PaulzEchartsTimeseriesStepChartPlugin,
    PaulzEchartsGraphChartPlugin,
    PaulzEchartsGaugeChartPlugin,
    PaulzEchartsRadarChartPlugin,
    PaulzEchartsFunnelChartPlugin,
    PaulzEchartsTreemapChartPlugin,
    PaulzEchartsMixedTimeseriesChartPlugin,
    PaulzEchartsTreeChartPlugin,
    PaulzEchartsSunburstChartPlugin,
    PaulzEchartsBubbleChartPlugin,
    PaulzEchartsWaterfallChartPlugin,
} from '@paulz-web/plugin-chart-paulz-echarts';
```

чтобы импортировать плагин, а затем добавить следующее в массив, переданный свойству `plugins`:
```js
    new PaulzBigNumberChartPlugin().configure({
        key: 'paulz_big_number',
    }),
    new PaulzBigNumberTotalChartPlugin().configure({
        key: 'paulz_big_number_total',
    }),
    new PaulzEchartsBoxPlotChartPlugin().configure({
        key: 'paulz_box_plot',
    }),
    new PaulzEchartsFunnelChartPlugin().configure({
        key: 'paulz_funnel',
    }),
    new PaulzEchartsTreemapChartPlugin().configure({
        key: 'paulz_treemap_v2',
    }),
    new PaulzEchartsGaugeChartPlugin().configure({
        key: 'paulz_gauge_chart',
    }),
    new PaulzEchartsGraphChartPlugin().configure({
        key: 'paulz_graph_chart',
    }),
    new PaulzEchartsRadarChartPlugin().configure({
        key: 'paulz_radar',
    }),
    new PaulzEchartsMixedTimeseriesChartPlugin().configure({
        key: 'paulz_mixed_timeseries',
    }),
    new PaulzEchartsPieChartPlugin().configure({
        key: 'paulz_pie',
    }),
    new PaulzEchartsAreaChartPlugin().configure({
        key: 'paulz_echarts_area',
    }),
    new PaulzEchartsTimeseriesChartPlugin().configure({
        key: 'paulz_echarts_timeseries',
    }),
    new PaulzEchartsTimeseriesBarChartPlugin().configure({
        key: 'paulz_echarts_timeseries_bar',
    }),
    new PaulzEchartsTimeseriesLineChartPlugin().configure({
        key: 'paulz_echarts_timeseries_line',
    }),
    new PaulzEchartsTimeseriesSmoothLineChartPlugin().configure({
        key: 'paulz_echarts_timeseries_smooth',
    }),
    new PaulzEchartsTimeseriesScatterChartPlugin().configure({
        key: 'paulz_echarts_timeseries_scatter',
    }),
    new PaulzEchartsTimeseriesStepChartPlugin().configure({
        key: 'paulz_echarts_timeseries_step',
    }),
    new PaulzEchartsTreeChartPlugin().configure({
        key: 'paulz_tree_chart',
    }),
    new PaulzEchartsSunburstChartPlugin().configure({
        key: 'paulz_sunburst_v2',
    }),
    new PaulzEchartsWaterfallChartPlugin().configure({
        key: 'paulz_waterfall',
    }),
    new PaulzEchartsBubbleChartPlugin().configure({
        key: 'paulz_bubble_v2',
    }),
```

После этого плагин должен появиться при запуске Superset, например. сервер разработки:
```
npm run dev-server
```
