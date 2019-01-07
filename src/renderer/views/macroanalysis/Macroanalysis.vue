<template>
    <div>
        <v-chart :options="option"/>
    </div>
</template>

<script>
    import 'echarts/lib/chart/line'
    export default {
      name: 'Macroanalysis',
      data () {
        return {
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