// chartConfig.js
export const chartData = {
    labels: [], // charactersId가 들어갈 배열
    datasets: [{
      label: 'Views', // 그래프에 대한 설명 (조회수)
      data: [], // views가 들어갈 배열
      backgroundColor: [
        'rgba(0, 64, 232, 1)', 
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
  };
  
  export const chartOptions = {
    responsive: true,
    scales: {
      x: {
        barPercentage: 0.5, // 막대 너비 비율 조정
        categoryPercentage: 0.5, // 카테고리 너비 비율 조정
        grid: {
          display: false // x축 격자선 숨기기
        },
        ticks: {
          color: '#FFFFFF' // x축 라벨 텍스트 색상
        }
      },
      y: {
        ticks: {
          display: true,
          color: "#ffffff"
        },
        beginAtZero: true, // y축 0부터 시작
        grid: {
          display: true, // y축 격자선 보이기
          color: "#212121"
        }
      }
    },
    plugins: {
      legend: {
        display: true
      },
      tooltip: {
        enabled: true, // 툴팁 활성화
        callbacks: {
          label: function(tooltipItem) {
            return `Total Views: ${tooltipItem.raw}`; // 커스터마이즈된 텍스트
          }
        }
      },
      datalabels: {
        color: 'white', // 데이터 레이블의 색상
        anchor: 'end', // 막대 끝에 표시
        align: 'top', // 수직으로 막대 위에 맞추기
        formatter: function(value) {
          return value; // 표시할 값
        }
      },
    }
  };
  