var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
        datasets: [{
            label: 'GDP Per Capita',
            data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
            backgroundColor: [
                '#0096FF'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'GDP Per Capita By Region',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The region with the highest GDP Per Capita— Europe and Central Asia— has more than eight times that of South Asia, which has the lowest GDP Per Capita'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});

//Line Chart

var ctx = document.getElementById('myChartLine').getContext('2d');
var myChartLine = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['1800', '1825', '1850', '1875', '1900','1925','1950','1975','2000','2021'],
        datasets: [{
            label: 'Brazil',
            data: [32, 32, 31.99, 32.06, 32.4, 32.75, 51.75, 63.65, 71.44, 76.33],
            fill: false,
            borderColor: 'rgba(255, 8, 0)',
            backgroundColor: 'rgba(255, 8, 0)',
            tension: 0.1},
        {
            label: 'China',
            data: [32, 32, 32, 31.96, 31.75, 31.55, 40.73, 63.26, 70.03, 77.4],
            fill: false,
            borderColor: 'rgba(255, 165, 0)',
            backgroundColor: 'rgba(255, 165, 0)',
            tension: 0.1},
        {
            label: 'India',
            data: [25.44, 25.44, 25.44, 25.11, 18.37, 26.69, 34.92, 51.51, 62.34, 69.77],
            fill: false,
            borderColor: 'rgba(135, 206, 235)',
            backgroundColor: 'rgba(135, 206, 235)', 
            tension: 0.1},
        {
            label: 'Indonesia',
            data: [30, 30, 30, 30.04, 30.24, 30.43, 37.16, 56.49, 67.27, 72.51],
            fill: false,
            borderColor: 'rgba(148, 0, 211)',
            backgroundColor: 'rgba(148, 0, 211)',
            tension: 0.1},
        {
            label: 'United States',
            data: [39.41, 39.41, 39.41, 39.41, 48.92, 58.47, 68.07, 72.44, 76.9, 79.59],
            fill: false,
            borderColor: 'rgba(0, 255, 0)',
            backgroundColor: 'rgba(0, 255, 0)',
            tension: 0.1}
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Life Expectancy by year',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Brazil and China had similar life expectancies until 1925. Their life expectancies got closer agin in 1975.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});

//Scatterplot

var ctx = document.getElementById('myChartScatter').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 3678, y: 71.5},
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 2548, y: 61.1},
                ],
                label: "India",
                borderColor: "#0FFF50",
                backgroundColor: "rgb(15,255,80)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 45986, y: 77.1},
                ],
                label: "US",
                borderColor: "#ff0000",
                backgroundColor:"rgb(265,0,0)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 5878, y: 68.3},
                ],
                label: "Indonesia",
                borderColor: "#FF5F1F",
                backgroundColor:"rgb(255,95,31)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 11461, y: 71.9},
                ],
                label: "Brazil",
                borderColor: "#FBEC5D",
                backgroundColor:"rgb(251,236,93)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 13173, y: 65.4},
                ],
                label: "Russia",
                borderColor: "#800080",
                backgroundColor:"rgb(128,0,128)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 3366, y: 62.6},
                ],
                label: "Pakistan",
                borderColor: "#355E3B",
                backgroundColor:"rgb(53,94,59)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 1632, y: 65.8},
                ],
                label: "Bangladesh",
                borderColor: "#0047AB",
                backgroundColor:"rgb(0,71,171)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 32193, y: 81.1},
                ],
                label: "Japan",
                borderColor: "#FF69B4",
                backgroundColor:"rgb(255,105,180)",
                borderWidth:2,
                
              }
            ]
          },
          options: {
            plugins: {
                title: {
                    display: true,
                    text: 'GDP Per Capita Compared to Life Expectancy',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'Japan and the United States are outliers in both GDP and Life Expectancy'
                }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Life Expectancy'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'GDP Per Capita'
                  }
              }
            }
          }
        });