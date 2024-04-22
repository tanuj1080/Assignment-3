document.addEventListener('DOMContentLoaded', function() {
// Horizontal Bar Chart - Annual Sales Comparison
const ctxHorizontalBar = document.getElementById('annualSalesChart').getContext('2d');
const salesComparisonData = {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [{
        label: 'Sales',
        data: [120, 150, 180, 210],
        backgroundColor: [
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'
        ]
    }]
};

new Chart(ctxHorizontalBar, {
    type: 'bar',
    data: salesComparisonData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y', // Changes the bar chart to horizontal
        scales: {
            x: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
});

});
