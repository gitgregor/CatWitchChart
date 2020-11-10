import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsStockChart, Chart, HighchartsProvider, XAxis, YAxis, Title, AreaSplineSeries, FlagsSeries, Navigator, PlotBand
} from 'react-jsx-highstock';
import { createRandomData } from './data-helper';

import Paper from '../../Apis/paper/Paper'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      unitSales,
      campaigns: [
        {
          from: unitSales[3][0],
          to: unitSales[7][0],
        }]
    }
    const now = Date.now();
    const unitSales = createRandomData(now, 1e8);
  }



  renderPlotBand = ({ from, to, title }) => {
    const id = `band-${from}-${to}`;
    return (
      <PlotBand key={id} from={from} to={to} color="rgba(68, 170, 213, 0.3)">
        <PlotBand.Label>{title}</PlotBand.Label>
      </PlotBand>
    );
  }

  renderNavPlotBand = ({ from, to }) => {
    const id = `nav-band-${from}-${to}`;
    return (
      <PlotBand key={id} from={from} to={to} color="rgba(68, 170, 213, 0.3)" />
    );
  }

  render() {
    const { unitSales, notableEvents, campaigns } = this.state;

    console.log(unitSales)

    return (
      <div className="app">
        <HighchartsProvider Highcharts={Highcharts}>
          <HighchartsStockChart>
            <Chart zoomType="x" />

            <Title>Highstocks with Navigator Plot Bands</Title>

            <XAxis>
              <XAxis.Title>Date</XAxis.Title>
              {campaigns.map(this.renderPlotBand)}
            </XAxis>

            <YAxis>
              <YAxis.Title>Cars sold per day</YAxis.Title>
              <AreaSplineSeries id="unitSales" name="Unit Sales" data={unitSales} />
            </YAxis>


          </HighchartsStockChart>
        </HighchartsProvider>
      </div>
    );
  }
}

export default App;
