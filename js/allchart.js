var lineg = document.getElementById('line').getContext('2d');
var lineChart = new Chart(lineg, {
  type: 'line',
  data: {
    responsive: false,
    maintainAspectRatio: false,
    xLabels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    yLabels: ["500", "1000", "1500", "2000", "2500"],
    datasets: [{
 backgroundColor: 'rgb(45, 47, 75, 0.2)',
     borderColor: '#7477bf',
     borderWidth: 2,
     lineTension: 0,
     pointRadius: 5,
     pointBackgroundColor: '#fff',
     data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
    }],
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
            offsetGridLines: true
        }
      }],
      yAxes: [{
        gridLines: {
            offsetGridLines: true
        }
      }]
    }
  }
});
var barc = document.getElementById('bar').getContext('2d');
var barChart = new Chart(barc, {
  type: 'bar',
  data: {
  labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
  datasets: [
    {
      backgroundColor: ["blue","blue","blue","blue","blue","blue","blue"],
      data: [75,100,175,125,225,200,100]
    }
    
    
  ]},
  options:{
      legend:{display:false},
  }

})
var piec = document.getElementById('pie').getContext('2d');
var pieChart = new Chart(piec, {
  type: 'doughnut',
  data: {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
        data: [15,15,70]
      }
    ]
  },
  options: {
      legend:{
          position:'right',
      },
    title: {
      display: false,
      text: 'mobile users'
    }
  }
})
