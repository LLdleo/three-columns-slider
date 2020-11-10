import React from 'react';
// import echartTheme from './../themeLight'
// dont import the whole echarts dependencies cause they are too large
// import echarts from 'echarts'
// import on demand
// using line char
import 'echarts/lib/chart/line'; // pie, bar as well
import 'echarts/lib/chart/scatter'; // pie, bar as well
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';

export default class CustomChart extends React.Component{
  getOption1 = (plotData)=> {
    return {
      title: {
        text: 'Scribe Rating Plot of ' + plotData.title,
        x: 'center',
        y: 'top'
      },
      tooltip: {
        trigger: 'item',
      },
      xAxis: {
        name: 'date',
        data: plotData.x
      },
      yAxis: {
        name: 'Scribe Rating',
        type: 'value'
      },
      series: [
        {
          type: 'line',
          data: plotData.scribe,
          lineStyle: {
            normal: {
              width: 3,
              color: "#b3875b"
            }
          },
        },
        {
          type: 'scatter',
          data: plotData.scribePoint,
          label: {show: false},
          itemStyle: {
            color: "#82664a"
          }
        }
      ]
    }
  }
  getOption2 =(plotData)=> {
    return {
      title: {
        text: 'Blister Rating Plot of ' + plotData.title,
        x: 'center',
        y: 'top'
      },
      tooltip: {
        trigger: 'item',
      },
      xAxis: {
        name: 'date',
        data: plotData.x
      },
      yAxis: {
        name: 'Blister Rating',
        type: 'value'
      },
      series: [
        {
          type: 'line',
          data: plotData.blister,
          lineStyle: {
            normal: {
              width: 3,
              color: "#81a862"
            }
          },
        },
        {
          type: 'scatter',
          data: plotData.blisterPoint,
          label: {show: false},
          itemStyle: {
            color: "#5f7b49"
          }
        }
      ]
    }
  }

  render(){
    return(
      <div>
        <div>
          <ReactEcharts option={this.getOption1(this.props.plotData)} style={{height:'300px'}}/>
        </div>
        <div>
          <ReactEcharts option={this.getOption2(this.props.plotData)} style={{height:'300px'}}/>
        </div>
      </div>

    )
  }
}
