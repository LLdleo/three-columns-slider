import React from 'react';
// import echartTheme from './../themeLight'
// dont import the whole echarts dependencies cause they are too large
// import echarts from 'echarts'
// import on demand
import echarts from 'echarts/lib/echarts'
// using line char
import 'echarts/lib/chart/line';  // pie, bar as well
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
  getOption =()=> {
    let option = {
      title:{
        text:'Plot of Something',
        x:'center',
        y:'top'
      },
      tooltip:{
        trigger:'axis',
      },
      xAxis:{
        data:['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
      },
      yAxis:{
        type:'value'
      },
      series:[
        {
          name:'Some Thing',
          type:'line',   //这块要定义type类型，柱形图是bar,饼图是pie
          data:[100,200,150,300,200,120,80]
        }
      ]
    }
    return option
  }

  render(){
    return(
      <div>
        <div>
          <ReactEcharts option={this.getOption()} style={{height:'300px'}}/>
        </div>
        <div>
          <ReactEcharts option={this.getOption()} style={{height:'300px'}}/>
        </div>
      </div>

    )
  }
}
