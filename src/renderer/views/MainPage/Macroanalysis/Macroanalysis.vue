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
                <div class="content-box">
                    <div class="box-left text-left">1</div>
                    <div class="box-right text-left">2</div>
                </div>
                <div class="content-box">
                    <div class="box-left text-left">1</div>
                    <div class="box-right text-left">2</div>
                </div>
                <div class="content-box">
                    <div class="box-left text-left">1</div>
                    <div class="box-right text-left">2</div>
                </div>
                <div class="content-box-bottom">
                    <div class="box-bottom">
                        <div class="bottom-left text-left">
                            0
                        </div>
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
    import 'echarts/lib/component/title'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/legend'
    export default {
      name: 'Macroanalysis',
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
            backgroundColor: '#fff',
            title: {
              text: '旅客流量（万人次）',
              textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#333'
              },
              left: '6%'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                lineStyle: {
                  color: '#abcdef'
                }
              }
            },
            legend: {
              icon: 'rect',
              itemWidth: 14,
              itemHeight: 5,
              itemGap: 13,
              data: ['航空', '铁路', '公路', '水路'],
              right: '4%',
              textStyle: {
                fontSize: 12,
                color: '#333'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [{
              type: 'category',
              boundaryGap: false,
              axisLine: {
                lineStyle: {
                  color: '#abcdef'
                }
              },
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }],
            yAxis: [{
              type: 'value',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#abcdef'
                }
              },
              axisLabel: {
                margin: 10,
                textStyle: {
                  fontSize: 14
                }
              },
              splitLine: {
                lineStyle: {
                  color: '#abcdef'
                }
              }
            }],
            series: [
              {
                name: '航空',
                type: 'line',
                smooth: true,
                lineStyle: {
                  normal: {
                    width: 1
                  }
                },
                areaStyle: {
                  normal: {
                    color: [
                      {
                        offset: 0,
                        color: 'rgba(137, 189, 27, 0.3)'
                      }, {
                        offset: 0.8,
                        color: 'rgba(137, 189, 27, 0)'
                      }],
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                  }
                },
                itemStyle: {
                  normal: {
                    color: 'rgb(137,189,27)'
                  }
                },
                data: [96.3, 96.4, 97.5, 95.6, 98.1, 94.8, 89.6, 94.1, 80.1, 52.4, 75.8, 94.7]
              }, {
                name: '铁路',
                type: 'line',
                smooth: true,
                lineStyle: {
                  normal: {
                    width: 1
                  }
                },
                areaStyle: {
                  normal: {
                    color: [
                      {
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.3)'
                      }, {
                        offset: 0.8,
                        color: 'rgba(0, 136, 212, 0)'
                      }],
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                  }
                },
                itemStyle: {
                  normal: {
                    color: 'rgb(0,136,212)'
                  }
                },
                data: [97.3, 99.2, 99.3, 100.0, 99.6, 90.6, 80.0, 91.5, 69.8, 67.5, 90.4, 84.9]
              }, {
                name: '公路',
                type: 'line',
                smooth: true,
                lineStyle: {
                  normal: {
                    width: 1
                  }
                },
                areaStyle: {
                  normal: {
                    color: [
                      {
                        offset: 0,
                        color: 'rgba(219, 50, 51, 0.3)'
                      },
                      {
                        offset: 0.8,
                        color: 'rgba(219, 50, 51, 0)'
                      }],
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                  }
                },
                itemStyle: {
                  normal: {
                    color: 'rgb(219,50,51)'
                  }
                },
                data: [84.2, 81.0, 67.5, 72.1, 43.7, 88.5, 91.9, 101.8, 79.7, 87.6, 92.9, 55]
              }, {
                name: '水路',
                type: 'line',
                smooth: true,
                lineStyle: {
                  normal: {
                    width: 1
                  }
                },
                areaStyle: {
                  normal: {
                    color: [{
                      offset: 0,
                      color: 'rgba(129, 21, 36, 0.3)'
                    }, {
                      offset: 0.8,
                      color: 'rgba(129, 21, 36, 0)'
                    }],
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                  }
                },
                itemStyle: {
                  normal: {
                    color: 'rgb(129, 21, 36)'
                  }
                },
                data: [84.2, 56.0, 78.5, 72.1, 43.7, 66.5, 91.9, 45.8, 56.7, 78.6, 32.9, 55]
              } ]
          }
        }
      },
      created () {
        // console.error(this.mainData.year)
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
            /*padding: 0 50px 0 50px;*/
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
            .content-box{
                width: 1100px;
                margin-top: 10px;
                .box-left{
                    width: 530px;
                    height: 140px;
                }
                .box-right{
                    margin-left: 40px;
                    width: 530px;
                    height: 140px;
                }
            }
            .content-box-bottom{
                width: 1100px;
                margin-top: 10px;
                .box-bottom{
                    width: 1100px;
                    height: 200px;
                    .bottom-left{
                        width: 80px;
                        height: 200px;
                    }
                    .bottom-right{
                        width: 1020px;
                        height: 200px;
                        .echarts{
                            width: 1020px;
                            height: 200px;
                        }
                    }
                }
            }
        }
    }
</style>