import React, { useState, useContext } from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsStockChart, Chart, HighchartsProvider, XAxis, YAxis, Title, AreaSplineSeries, FlagsSeries, Navigator, PlotBand
} from 'react-jsx-highstock';
import { Context } from '../TEST/C'

const App = () => {


  const array = [[1603437055070, 1], [1603437055100, 2], [1603437055200, 3], [1603437055300, 4], [1603437055400, 5], [1603437055500, 6]]

  const { tda } = useContext(Context)

  const renderPlotBand = ({ from, to, title }) => {
    const id = `band-${from}-${to}`;
    return (
      <PlotBand key={id} from={from} to={to} color="rgba(68, 170, 213, 0.3)">
        <PlotBand.Label>{title}</PlotBand.Label>
      </PlotBand>
    );
  };


  const campaigns = [
    {
      from: array[0][0],
      to: array[5][0],
      //   from: unitSales[9][0],
      //   to: unitSales[23][0],
      title: "Wybrany Stan",
    },
  ];

  const Coments = () => {
    return (
      <div>

        {/* // const now = Date.now()+7200000; */}

        {/* // Highcharts.setOptions({
//     global: {
//         useUTC: true,
//         timezoneOffset: 0
//     }
// });



//     const timezone = new Date().getTimezoneOffset()  * 1000 + 7200000

// Highcharts.setOptions({
//     global: {
//         timezoneOffset: timezone
//     }
// });


// const array = [[Number(now+1000), 10],[Number(2000+now), 20],
// [Number(3000+now), 5],[Number(4000+now), 30],[Number(5000+now), 25],
// [Number(6000+now), 15]]




//  let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

//   // request a weekday along with a long date
//   let options = { month: "long", day: "numeric" };
//   // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

//   console.log(date.toLocaleString("pl-PL", options));
//   // → "Donnerstag, 20. Dezember 2012"
//   let myDate = date.toLocaleString("pl-PL", options);
//   //==============================================================

//   var highchartsOptions = Highcharts.setOptions({
//     lang: {
//       // loading: 'Aguarde...',
//       // months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
//       months: [
//         "Styczeń",
//         "Luty",
//         "Marzec",
//         "Kwiecień",
//         "Maj",
//         "Czerwiec",
//         "Lipiec",
//         "Sierpień",
//         "Wrzesień",
//         "Październik",
//         "Listopad",
//         "Grudzień",
//       ],
//       weekdays: [
//         "Poniedziałek",
//         "Wtorek",
//         "Środa",
//         "Czwartek",
//         "Piątek",
//         "Sobota",
//         "Niedziela",
//       ],
//       shortMonths: [
//         "Styczeń",
//         "Luty",
//         "Marzec",
//         "Kwiecień",
//         "Maj",
//         "Czerwiec",
//         "Lipiec",
//         "Sierpień",
//         "Wrzesień",
//         "Październik",
//         "Listopad",
//         "Grudzień",
//       ],
//       // shortMonths: ['Sty', 'Lut', 'Marz', 'Kwie', 'Maj', 'Czer', 'Lip', 'Sierp', 'Wrze', 'Paź', 'List', 'Gru'],
//       // exportButtonTitle: "Exportar",
//       // printButtonTitle: "Imprimir",
//       // rangeSelectorFrom: "De",
//       // rangeSelectorTo: "Até",
//       // rangeSelectorZoom: "Periodo",
//       // downloadPNG: 'Download imagem PNG',
//       // downloadJPEG: 'Download imagem JPEG',
//       // downloadPDF: 'Download documento PDF',
//       // downloadSVG: 'Download imagem SVG'
//       //===============================
//       // resetZoom: "Reset",
//       // resetZoomTitle: "Reset,
//       // thousandsSep: ".",
//       // decimalPoint: ','
//     },
//   }); */}


      </div>
    )
  }



  console.log(tda)
  return (
    <div>
      {  tda ?

        <HighchartsProvider Highcharts={Highcharts}>
          <HighchartsStockChart  >
            <Chart zoomType="x" />

            <Title>Tabela Stanów</Title>

            <XAxis>
              <XAxis.Title>Czas</XAxis.Title>
              {campaigns.map(renderPlotBand)}
            </XAxis>

            <YAxis>
              <YAxis.Title>Liczba</YAxis.Title>
              {/* <AreaSplineSeries /> */}
              <AreaSplineSeries data={tda} />
            </YAxis>

          </HighchartsStockChart>
        </HighchartsProvider>

        : "loading ..."}

    </div>
  );

}

export default App;


