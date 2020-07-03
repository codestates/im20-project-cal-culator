import React from "react";
import { Bar } from "react-chartjs-2";

const state = {
  labels: "Today",
  datasets: [
    {
      label: "Calorie",
      backgroundColor: "rgba(140,211,65,0.5)",
      borderColor: "rgba(0,0,0,0.5)",
      borderWidth: 2,
      data: [23, 34, 45, 12, 23, 14, 34],
    },
  ],
};

const ChartBarDaily = () => {
  return (
    <div>
      <Bar
        data={state}
        width={10}
        height={200}
        options={{
          title: {
            display: true,
            text: "Daily Calorie Report",
            fontSize: 25,
          },
          legend: {
            display: false,
            position: "right",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
                  stepSize: 5, // 스케일에 대한 사용자 고정 정의 값
                },
              },
            ],
          },
          maintainAspectRatio: false, // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
        }}
      />
    </div>
  );
};

export default ChartBarDaily;
