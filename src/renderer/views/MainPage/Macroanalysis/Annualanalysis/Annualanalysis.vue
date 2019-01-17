<template>
    <div>
        <div class="top-banner">
            <div class="banner-box">
                <div class="content-left text-left">
                    <span>经济指标总览</span>
                    <el-date-picker
                            style="width: 100px"
                            v-model="mainData.year"
                            type="year"
                            placeholder="选择年"
                            :picker-options="timeOption"
                            size="mini"
                            @change="changeDate">
                    </el-date-picker>
                </div>
                <div class="content-right text-left">
                    <el-button-group>
                        <el-button class="content-button">年度经济指标分析</el-button>
                        <el-button class="content-button">月度经济指标分析</el-button>
                    </el-button-group>
                </div>
            </div>
        </div>
        <div class="middle-content">
            <div class="middle-box">
                <div class="content-box-top">
                    <div class="left-icon background-color3">
                        <div class="icon-center">
                            <font-awesome-icon :icon="['fas', 'school']" size="3x"/>
                        </div>
                    </div>
                    <div class="box-top background-color1">
                        <div class="top-title">年度生产总值</div>
                        <div class="top-count color1">9999.99 万元</div>
                    </div>
                    <div class="box-top background-color2">
                        <div class="top-title">去年同期生产总值</div>
                        <div class="top-count color2">7999.99 万元</div>
                    </div>
                    <div class="box-top background-color1">
                        <div class="top-title">同比增长总值</div>
                        <div class="top-count color1">2000.99 万元</div>
                    </div>
                    <div class="box-top background-color2">
                        <div class="top-title">同比增长总值</div>
                        <div class="top-count color2">+ 31.98 %</div>
                    </div>
                </div>
                <div class="content-box-bottom">
                    <div class="box-bottom">
                        <div class="bottom-right text-left">
                            <v-chart :options="option"/>
                        </div>                    `
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'echarts/lib/chart/line'
    import 'echarts/lib/chart/bar'
    import 'echarts/lib/component/title'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/dataZoom'
    export default {
      name: 'Annualanalysis',
      data () {
        return {
          mainData: {
            // year: Date.now()
            year: new Date()
          },
          timeOption: {
            disabledDate: (time) => {
              if (this.mainData.year !== '') {
                return time.getTime() > Date.now()
              }
            }
          },
          option: {
            backgroundColor: '#e9e9e9',
            'title': {
              'text': '生产总值',
              'subtext': '',
              x: '4%',

              textStyle: {
                color: '#fff',
                fontSize: '22'
              },
              subtextStyle: {
                color: '#90979c',
                fontSize: '16'

              }
            },
            'tooltip': {
              'trigger': 'axis',
              'axisPointer': {
                'type': 'shadow',
                textStyle: {
                  color: '#fff'
                }

              }
            },
            'grid': {
              'borderWidth': 0,
              'top': 110,
              'bottom': 95,
              textStyle: {
                color: '#fff'
              }
            },
            'legend': {
              x: '4%',
              top: '11%',
              textStyle: {
                color: '#90979c'
              },
              'data': ['去年同期生产总值', '同比增长值', '今年同期生产总值']
            },

            'calculable': true,
            'xAxis': [{
              'type': 'category',
              'axisLine': {
                lineStyle: {
                  color: '#90979c'
                }
              },
              'splitLine': {
                'show': false
              },
              'axisTick': {
                'show': false
              },
              'splitArea': {
                'show': false
              },
              'axisLabel': {
                'interval': 0

              },
              'data': ['1月份', '2月份', '3月份', '4月份', '5月份', '6月份', '7月份', '8月份', '9月份', '10月份', '11月份', '12月份']
            }],
            'yAxis': [{
              'type': 'value',
              'splitLine': {
                'show': false
              },
              'axisLine': {
                lineStyle: {
                  color: '#90979c'
                }
              },
              'axisTick': {
                'show': false
              },
              'axisLabel': {
                'interval': 0

              },
              'splitArea': {
                'show': false
              }

            }],
            'dataZoom': [{
              'show': true,
              'height': 30,
              'xAxisIndex': [
                0
              ],
              bottom: 30,
              'start': 10,
              'end': 80,
              handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
              handleSize: '110%',
              handleStyle: {
                color: '#d3dee5'

              },
              textStyle: {
                color: '#fff'},
              borderColor: '#90979c'

            }, {
              'type': 'inside',
              'show': true,
              'height': 15,
              'start': 1,
              'end': 35
            }],
            'series': [{
              'name': '去年同期生产总值',
              'type': 'bar',
              'stack': '总量',
              'barMaxWidth': 35,
              'barGap': '10%',
              'itemStyle': {
                'normal': {
                  'color': 'rgba(255,144,128,1)',
                  'label': {
                    'show': true,
                    'textStyle': {
                      'color': '#fff'
                    },
                    'position': 'insideTop',
                    formatter: function (p) {
                      return p.value > 0 ? (p.value) : ''
                    }
                  }
                }
              },
              'data': [
                709,
                1917,
                2455,
                2610,
                1719,
                1433,
                1544,
                3285,
                5208,
                3372,
                2484,
                4078
              ]
            },

            {
              'name': '同比增长值',
              'type': 'bar',
              'stack': '总量',
              'itemStyle': {
                'normal': {
                  'color': 'rgba(0,191,183,1)',
                  'barBorderRadius': 0,
                  'label': {
                    'show': true,
                    'position': 'top',
                    formatter: function (p) {
                      return p.value > 0 ? (p.value) : ''
                    }
                  }
                }
              },
              'data': [
                327,
                1776,
                507,
                1200,
                800,
                482,
                204,
                1390,
                1001,
                951,
                381,
                220
              ]
            }, {
              'name': '今年同期生产总值',
              'type': 'line',
              'stack': '总量',
              symbolSize: 10,
              symbol: 'circle',
              'itemStyle': {
                'normal': {
                  'color': 'rgba(252,230,48,1)',
                  'barBorderRadius': 0,
                  'label': {
                    'show': true,
                    'position': 'top',
                    formatter: function (p) {
                      return p.value > 0 ? (p.value) : ''
                    }
                  }
                }
              },
              'data': [
                1036,
                3693,
                2962,
                3810,
                2519,
                1915,
                1748,
                4675,
                6209,
                4323,
                2865,
                4298
              ]
            }
            ]
          }
        }
      },
      created () {
        console.error(this.mainData.year)
      },
      methods: {
        changeDate () {
          console.error(this.mainData.year)
        }
      }
    }
</script>

<style scoped lang="scss">
    .text-left{
        float: left;
        text-align: left;
    }
    .top-banner{
        width: 1200px;
        height: 60px;
        line-height: 60px;
        .banner-box{
            padding: 0 50px 0 50px;
            font-size: 14px;
            height: 60px;
            .content-left{
                width: 200px;
            }
            .content-right{
                margin-left: 650px;
                width: 240px;
                .content-button{
                    width: 120px;
                    height:30px;
                    padding: 0 0;
                }
            }
        }
    }
    .middle-content{
        width: 1200px;
        height: 660px;
        overflow: hidden;
        .middle-box{
            padding: 0 50px 0 50px;
            font-size: 14px;
            .content-box-top{
                width: 1200px;
                margin-top: 10px;
                height: 130px;
                .box-top{
                    width: 255px;
                    height: 130px;
                    float: left;
                    .top-title{
                        font-size: 24px;
                        font-weight: bold;
                        margin-left: 20px;
                        margin-top: 15px;
                    }
                    .top-count{
                        width: 200px;
                        height: 50px;
                        font-size: 24px;
                        margin-top: 20px;
                        margin-left: auto;
                        margin-right: auto;
                        /*background: rgba(242,242,242,242);*/
                        color: #fff;
                        padding: 0;
                    }
                }
            }
            .content-box-bottom{
                width: 1200px;
                margin-top: 10px;
                .box-bottom{
                    width: 1200px;
                    height: 600px;
                    .bottom-right{
                        width: 1100px;
                        height: 600px;
                        .echarts{
                            width: 1100px;
                            height: 520px;
                        }
                    }
                }
            }
        }
    }
    .background-color1{
        background: rgba(0, 238, 227, 0.46);
    }
    .background-color2{
        background: rgba(255, 142, 119, 0.5);
    }
    .background-color3{
        background: rgba(255, 253, 52, 0.5);
    }
    .left-icon{
        width: 80px;
        height: 130px;
        float: left;
    }
    .icon-center{
        margin-top: 35px;
        margin-left: 14px;
    }
</style>
