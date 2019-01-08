<template>
    <div>
        <div style="height: 60px;line-height: 60px;">
            <span>经济指标总览</span>
            <el-date-picker
                    v-model="mainData.year"
                    type="year"
                    placeholder="选择年">
            </el-date-picker>
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
            year: '2018'
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

<style scoped>

</style>