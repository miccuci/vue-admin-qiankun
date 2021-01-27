<template>
  <div class="border homepage-card">
    <div v-if="title" class="title-wrap">
      <span class="title-wrap__prefix" />
      <span>{{ title }}</span>
    </div>
    <div id="surgery_pie" :style="{height:height,width:width}" />
  </div>
</template>

<script>
import resize from '@/utils/mixins/resize'
import echarts from 'echarts'
// import { operationCountByGrade } from '@/api/ma/homepagecount'

export default {
  mixins: [resize],
  props: {
    chartData: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
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
    this.initChart()
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
      this.chart = echarts.init(document.getElementById('surgery_pie'))
      this.setOptions(this.chartData)
    },
    setOptions(chartData) {
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          y: 'center',
          // 设置图例图形的宽
          itemWidth: 24,
          itemHeight: 18,
          data: chartData.map(item => item.name)
        },
        series: [
          {
            type: 'pie',
            radius: '70%',
            avoidLabelOverlap: true,
            center: ['50%', '50%'],
            data: chartData,
            label: {
              normal: {
                formatter: '{b|{b}, }{c|{c} }({a|{d}%})',
                show: true,
                rich: {
                  a: {
                    color: '#333',
                    fontSize: 12,
                    lineHeight: 20
                  },
                  b: {
                    fontSize: 12,
                    lineHeight: 20,
                    color: '#333'
                  },
                  c: {
                    fontSize: 12,
                    lineHeight: 20,
                    color: '#333'
                  }
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 3,
                borderColor: '#fff'
              }
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scpoed>

</style>
