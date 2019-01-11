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
                    `   <v-chart :options="option"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'echarts/lib/chart/line'
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
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              areaStyle: {}
            }]
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
    .echarts {
        width: 1000px;
        height: 200px;
    }
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
                }
            }
        }
    }
</style>