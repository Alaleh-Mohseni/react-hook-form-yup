import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { useChart } from "../hooks/useChart";

ChartJS.register(...registerables);

const btnChart = [
  {
    value: 360,
    title: '1Y',
    interval: 'yearly'
  },
  {
    value: 180,
    title: '6M',
    interval: 'monthly'
  },
  {
    value: 30,
    title: '1M',
    interval: 'monthly'
  },
  {
    value: 7,
    title: '1W',
    interval: 'daily'
  },
  {
    value: 1,
    title: '1D',
    interval: 'hourly'
  },
]

function Charts() {
  const { cryptoId, setId, days, dataInChart, id, oneDay, oneMonth, sixMonths, oneWeek, oneYear } = useChart()
  const [activeBtn, setActiveBtn] = useState(0)

  function changeTime(value) {
    if (value === 1) {
      return oneDay()
    } else if (value === 7) {
      return oneWeek()
    } else if (value === 30) {
      return oneMonth()
    } else if (value === 180) {
      return sixMonths()
    } else if (value === 365) {
      return oneYear()
    } else {
      return null
    }
  }


  return (
    <div className="flex space-x-8 py-6 w-[850px]">
      <div className="flex flex-col rounded-lg bg-gray-900 w-full p-8 justify-center">
        Expenses Graph

        <div className="container-fluid bg-opacity-10 backdrop-blur-md mt-4 mb-2 rounded-lg shadow-sm px-2 pt-3 relative">
          <div className="text-gray-300 absolute top-[100px] left-8 text-md font-semibold">
            USD
          </div>
          <div className="flex items-center justify-end text-slate-400">
            <div className="flex space-x-4 me-3">
              {btnChart.map((item, index) => (
                <button
                  key={index}
                  value={item.value}
                  className={`px-3 py-1.5 rounded-md text-xs text-white border border-slate-400 backdrop-blur-md font-semibold lg:mt-2
              ${(activeBtn === index
                      ? 'bg-indigo-500 text-white font-semibold border-none'
                      : ''
                    )}`}
                  onClick={() => {
                    setActiveBtn(index),
                    changeTime(item.value)
                  }}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="flex">
              <div className="flex items-center rounded-lg border border-slate-400 text-md text-white px-2 py-[7px] w-24 ml-2">
                <select
                  onChange={(e) => setId(e.target.value)}
                  className="w-full bg-transparent text-transform: capitalize outline-none -mr-2"
                >
                  {cryptoId.map(item => (
                    <option key={item.id} value={item.id} name={item.name} className="text-gray-600">
                      {item.id}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="row mx-2">
            <div className="w-full h-[350px] my-4 mt-16 px-2">
              <Line
                height={500}
                datasetIdKey="id"
                data={{
                  labels: dataInChart.map((val) => {
                    let date = new Date(val.x);
                    let time =
                      date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()}PM`
                        : `${date.getHours()}:${date.getMinutes()}AM`;
                    return days === 1 ? time : date.toLocaleDateString("default", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    });
                  }),
                  datasets: [
                    {
                      spanGaps: true,
                      id: 1,
                      borderColor: "#6366f1",
                      backgroundColor: "#6366f1",
                      pointBorderColor: "transparent",
                      pointBorderWidth: 3,
                      pointRadius: 2,
                      label: `${id}`,
                      data: dataInChart.map((val) => val.y),
                    },
                  ],
                }}
                options={{
                  color: "white",
                  responsive: true,
                  indexAxis: "x",
                  tension: 0.4,
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawBorder: false,
                        borderDash: [6],
                        border: false,
                      },
                      ticks: {
                        source: "auto",
                        maxTicksLimit: 14,
                        font: {
                          size: "10px",
                        },
                        color: "white",
                      },
                    },
                    y: {
                      grid: {
                        border: false,
                        drawBorder: false,
                      },
                      ticks: {
                        color: "white"
                      }
                    },
                  },
                  plugins: {
                    tooltip: {
                      displayColors: false,
                      backgroundColor: "gray",
                    },
                    legend: {
                      display: true,
                      align: "end",
                      labels: {
                        color: "white",
                        pointStyleWidth: 16,
                        usePointStyle: true,
                        pointStyle: "circle",
                        padding: 3,
                      },
                    },
                    title: {
                      display: true,
                    },
                  },
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts