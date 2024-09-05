<template>
    <v-contanior class="chart-contanior">
    <Bar
        v-if="chartRendered" 
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
    />
    {{ chartData }}
    </v-contanior>
    
  </template>
  
<script>
  import { Bar } from 'vue-chartjs'
  import characterInfo from "@/service/characterInfo"
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
    return {
      chartRendered: false,
      characterData: null,
      chartData: {
        labels: [], // charactersId가 들어갈 배열
        datasets: [{
          label: 'Views', // 그래프에 대한 설명 (조회수)
          data: [], // views가 들어갈 배열
          backgroundColor: [
                    'rgba(0, 64, 232, 1)', // 막대 배경색
                    'rgba(249, 127, 181, 1)',
                    'rgba(234, 23, 10, 1)',
                    'rgba(237, 219, 0, 1)',
                    'rgba(101, 93, 198, 1)',
                    'rgba(255, 164, 0, 1)',
                    'rgba(0, 178, 227, 1)',
                    'rgba(0, 187, 180, 1)',
                    'rgba(123, 160, 196, 1)',
                    'rgba(201, 17, 190, 1)',
                    'rgba(234, 16, 22, 1)'
                ],
                borderColor: [
                    'rgba(0, 64, 232, 1)', // 막대 테두리색
                    'rgba(249, 127, 181, 1)',
                    'rgba(234, 23, 10, 1)',
                    'rgba(237, 219, 0, 1)',
                    'rgba(101, 93, 198, 1)',
                    'rgba(255, 164, 0, 1)',
                    'rgba(0, 178, 227, 1)',
                    'rgba(0, 187, 180, 1)',
                    'rgba(123, 160, 196, 1)',
                    'rgba(201, 17, 190, 1)',
                    'rgba(234, 16, 22, 1)'
                ],
          borderWidth: 1
        }]
      },
      chartOptions: {
        responsive: true,
        scales: {
                x: {
                    barPercentage: 0.5, // 막대 너비 비율 조정
                    categoryPercentage: 0.5, // 카테고리 너비 비율 조정
                    grid: {
                        display: false // x축 격자선 숨기기
                    }
                },
                y: {
                    beginAtZero: true, // y축 0부터 시작
                    grid: {
                        display: false // y축 격자선 숨기기
                    } 
                }
            },
            plugins: {
                legend: {
                    display: true
                }
            }
      }
    }
  },

    methods: {
      async fetchCharacterDetails() {
      try {
        const response = await characterInfo.getCharacterView();
        this.characterData = response.data;
        
        this.chartData.labels = this.characterData.map(item => item.characters.name);
        this.chartData.datasets[0].data = this.characterData.map(item => item.views);
        this.chartRendered = true;

      } catch (error) {
        console.error(error);
      }
    },

    },

    created() {
    this.fetchCharacterDetails();
  }

  }
</script>
