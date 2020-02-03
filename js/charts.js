//----------------------- CHART TRAFFIC------------------

var ctx = document.getElementById('myChartTraffic').getContext('2d');

var TrafficChartData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '2-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [500, 1000, 750, 1250, 1750, 1500, 1000, 1500, 2000, 1500, 2000],
        backgroundColor: 'rgba(115, 119, 191, 0.2)',
        tension: 0,
        borderWidth: 1,
        borderColor: '#7377bf',
        pointRadius: 5,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#7377bf',
        pointBorderWidth: 2
    }]
};

var hourlyTrafficChartData = {
    labels: ['6AM', '8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM', '10PM', '12AM', '2AM', '4AM'],
    datasets: [{
        data: [50, 100, 75, 125, 175, 125, 150, 100, 150, 200, 150, 200],
    }]
};

var dailyTrafficChartData = {
    labels: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
    datasets: [{
        data: [250, 350, 500, 350, 250, 450, 550],
    }]
};

var weeklyTrafficChartData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '2-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [500, 1000, 750, 1250, 1750, 1500, 1000, 1500, 2000, 1500, 2000],
    }]
};

var monthlyTrafficChartData = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'],
    datasets: [{
        data: [2000, 4000, 3300, 5000, 7000, 5000, 6000, 4000, 6000, 8000, 6000, 8000],
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 1000
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
    };

let trafficChart = new Chart(ctx, {
    type: 'line',
    data: TrafficChartData,
    options: trafficOptions
    });


//------------------------ CHART DAILY TRAFFIC-------------------------------

var ctx = document.getElementById('myChartDailyTraffic').getContext('2d');
var dailyChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
        datasets: [{
            label: '# of Hits',
            data: [50, 75, 150, 100, 200, 175, 75],
            backgroundColor: '#7377bf',
            borderWidth: 1,
            borderRadius: 5
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//----------------------CHART MOBILE USERS---------------------------

var ctx = document.getElementById('myChartMobileUsers').getContext('2d');
var mobileChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Phones','Tablets','Desktop'],
        datasets: [{
            label: '# of Users',
            data: [50, 58, 252],
            backgroundColor: ['#88d9a0',
                             '#4da2bb',
                             '#7377bf']
        }]
    },
    options: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        },
        scales: {
            gridLines: {
                display: false
            }
        }
    }
});

