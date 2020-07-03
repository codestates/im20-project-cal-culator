import React from 'react';
import { Bar } from 'react-chartjs-2';

const state = {
  labels: ['Mon', 'Tue', 'Wed',
    'Thu', 'Fri', 'Sat', "Sun"],
  datasets: [
    {
      label: 'Calorie',
      backgroundColor: ['rgba(209, 239, 162, 0.5)', // 월요일
                        'rgba(123, 188, 155, 0.5)', // 화요일
                        'rgba(87, 165, 29, 0.5)', // 수요일
                        'rgba(123, 187, 154, 0.5)', // 목요일
                        'rgba(107, 210, 180, 0.5)', // 금요일
                        'rgba(170, 218, 170, 0.5)', // 토요일
                        'rgba(191, 251, 91, 0.5)', // 일요일
                      ],
      borderColor: 'rgba(0,0,0,0.5)',
      borderWidth: 2,
      data: [23, 34, 45, 12, 23, 14, 34]
    }
  ]
}

const ChartBarWeekly = () => {

  return (
    <div>
      <Bar
        data={state}
        width={10}
        height={200}
        options={{
          title: {
            display: true,
            text: 'Weekly Calorie Report',
            fontSize: 25
          },
          legend: {
            display: false,
            position: 'right'
          },
          scales: {
            yAxes: [{
              ticks: {
                min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
                stepSize: 5, // 스케일에 대한 사용자 고정 정의 값
              }
            }]
          },
          maintainAspectRatio: false // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
        }
        }
      />
    </div>
  )
}

export default ChartBarWeekly;