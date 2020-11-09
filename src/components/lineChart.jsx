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

export default class Line extends React.Component{
  // componentWillMount(){
  //   // theme setting in willMounted
  //   echarts.registerTheme('Imooc',echartTheme);
  // }
  getOption1 =(expName)=> {
    return {
      title: {
        text: 'Scribe Rating Plot of ' + expName,
        x: 'center',
        y: 'top'
      },
      tooltip: {
        trigger: 'item',
      },
      xAxis: {
        name: 'date',
        data: ['2018-08-29', '2018-02-11', '2019-03-05']
      },
      yAxis: {
        name: 'Scribe Rating',
        type: 'value'
      },
      series: [
        {
          type: 'line',
          data: [9, 8, 7],
          lineStyle: {
            normal: {
              width: 3,
              color: "#b3875b"
            }
          },
        },
        {
          type: 'scatter',
          data: [null, 8, null],
          label: {show: false},
          itemStyle: {
            color: "#82664a"
          }
        }
      ]
    }
  }
  getOption2 =(expName)=> {
    return {
      title: {
        text: 'Blister Rating Plot of ' + expName,
        x: 'center',
        y: 'top'
      },
      tooltip: {
        trigger: 'item',
      },
      xAxis: {
        name: 'date',
        data: ['2018-08-29', '2018-12-11', '2019-03-05']
      },
      yAxis: {
        name: 'Blister Rating',
        type: 'value'
      },
      series: [
        {
          type: 'line',
          data: [10, 10, 10],
          lineStyle: {
            normal: {
              width: 3,
              color: "#81a862"
            }
          },
        },
        {
          type: 'scatter',
          data: [null, 10, null],
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
          <ReactEcharts option={this.getOption1(this.props.expName)} style={{height:'300px'}}/>
        </div>
        <div>
          <ReactEcharts option={this.getOption2(this.props.expName)} style={{height:'300px'}}/>
        </div>
      </div>

    )
  }
}
