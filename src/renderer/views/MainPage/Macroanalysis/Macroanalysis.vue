<template>
    <div>
        <div class="top-banner">
            <div class="banner-box">
                <div class="content-left">
                    <span>经济指标总览</span>
                    <el-date-picker
                            style="width: 100px"
                            v-model="mainData.year"
                            type="year"
                            placeholder="选择年"
                            :picker-options="timeOption"
                            size="mini">
                    </el-date-picker>
                </div>
            </div>
        </div>
        <v-chart :options="option"/>
    </div>
</template>

<script>
    import 'echarts/lib/chart/line'
    export default {
      name: 'Macroanalysis',
      data () {
        return {
          mainData: {
            year: Date.now()
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
      }
    }
</script>

<style scoped lang="scss">
    .top-banner{
        height: 60px;
        line-height: 60px;
        .banner-box{
            /*padding: 0 50px 0 50px;*/
            font-size: 14px;
            height: 60px;
            .content-left{
                width: 200px;
            }
        }
    }
</style>