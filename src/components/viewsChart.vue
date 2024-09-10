<template>
    <v-contanior class="chart-contanior">
    <Bar
        id="my-chart-id"
        :options="_chartOptions"
        :data="chartData"
    />
    </v-contanior>
    
  </template>
  
<script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import ChartDataLabels from 'chartjs-plugin-datalabels'
  import {chartOptions} from '../mixins/chartInfo'

  // Chart.js에 플러그인 등록
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ChartDataLabels)

  export default {
    name: 'BarChart',
    components: { Bar },
    props: {
      chartData: {
        type: Object,
        required: true
      },
      test: {
        type: Number,
      }
    },
    data() {
      return {
        _chartOptions: chartOptions,
      };
    },

  methods: {
  },

  created() {
    
  }
}

</script>


<style scoped>
#app {
  background-color: #ffffff; /* 원하는 배경색 */
}

.chart-container {
  border: 20px solid #000; /* 검정색 테두리, 두께 2px */
  padding: 16px; /* 내용과 테두리 사이의 패딩 */
  border-radius: 8px; /* 테두리의 모서리를 둥글게 */
  background-color: #f9f9f9; /* 배경 색상 (선택 사항) */
}


</style>