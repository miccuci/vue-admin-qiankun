<template>
  <div class="border homepage-card">
    <div v-if="title" class="title-wrap">
      <span class="title-wrap__prefix" />
      <span>{{ title }}</span>
    </div>
    <div :id="id" :style="{height:height,width:width}" />
  </div>
</template>

<script>
import resize from '@/utils/mixins/resize'
import echarts from 'echarts'

export default {
  mixins: [resize],
  props: {
    id: {
      type: String,
      default: 'chart-' + Math.random().slice(2, 8)
    },
    chartData: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: '规则数'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.setOptions(this.chartData)
    },
    setOptions(chartData) {
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: chartData.map(item => item.name),
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: '数量',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: chartData.map(item => item.value)
        }]
      })
    }
  }
}
</script>
