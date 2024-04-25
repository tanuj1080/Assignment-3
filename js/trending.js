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
    
        // Polar Area Chart - Monthly User Engagement
    const ctxPolarArea = document.getElementById('userEngagementChart').getContext('2d');
    const userEngagementData = {
        labels: ['Commenting', 'Sharing', 'Rating', 'Browsing'],
        datasets: [{
            label: 'User Engagement',
            data: [50, 75, 25, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(201, 203, 207, 0.5)'
            ],
        }]
    };
    
    new Chart(ctxPolarArea, {
        type: 'polarArea',
        data: userEngagementData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scale: {
                ticks: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });
    
      // Context for the trending books line chart
      const ctxTrending = document.getElementById('trendingBooksChart').getContext('2d');
      
      // Sample data for the line chart
      const bookData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'], // Months for this example
        datasets: [
          {
            label: 'Fantasy',
            data: [15, 12, 12, 18],
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
            pointRadius: 5,
            pointHitRadius: 10,
            pointHoverBackgroundColor: 'rgba(255, 159, 64, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
          },
          {
            label: 'Mystery',
            data: [10, 6, 8, 12],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            pointRadius: 5,
            pointHitRadius: 10,
            pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
          },
          {
            label: 'Manga',
            data: [8, 4, 9, 13],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            pointRadius: 5,
            pointHitRadius: 10,
            pointHoverBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
          },
          {
            label: 'Science Fiction',
            data: [4, 7, 5, 8],
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            pointRadius: 5,
            pointHitRadius: 10,
            pointHoverBackgroundColor: 'rgba(153, 102, 255, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
          }
        ],
      };
    
        new Chart(ctxTrending, {
          type: 'line',
          data: bookData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true
              }
            },
            legend: {
              display: true,
              labels: {
                fontColor: 'black'
              },
            },
            aspectRatio: 2,
            tooltips: {
              enabled: true,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              bodyColor: 'white',
              titleFontColor: '#6e707e',
              bodyFontSize: 14,
              titleMarginBottom: 10,
            },
          }
        });
      
    
      // Bar Chart - Sales Chart
      const ctxSales = document.getElementById('salesChart').getContext('2d');
      const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
          label: 'Book Sales',
          data: [200, 150, 300, 250],
          backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)'],
          borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
          borderWidth: 1
        }]
      };
    
      new Chart(ctxSales, {
        type: 'bar',
        data: salesData,
        options: {
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    
      // Pie Chart - Genre Distribution
      const ctxGenre = document.getElementById('genrePieChart').getContext('2d');
      const genreData = {
        labels: ['Fantasy', 'Mystery', 'Sci-Fi', 'Non-Fiction'],
        datasets: [{
          data: [300, 250, 100, 150],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        }]
      };
    
      new Chart(ctxGenre, {
        type: 'pie',
        data: genreData,
        options: {
            responsive: true, // Ensures the chart resizes depending on the container size
            maintainAspectRatio: false, // Makes sure the chart fits into container dimensions without preserving the aspect ratio
            plugins: {
                legend: {
                    position: 'top', // You can adjust the legend position if needed
                    labels: {
                        padding: 20, // Adds padding around each label in the legend for better spacing
                        color: 'black' // Ensures the text color of the legend is black (adjustable as needed)
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    bodyColor: 'white',
                    titleFontColor: '#6e707e',
                    bodyFontSize: 14,
                    titleMarginBottom: 10,
                }
            }
        }
      });
    
      // Radar Chart - Reader Demographics
      const ctxDemographics = document.getElementById('readerDemographics').getContext('2d');
      const demographicsData = {
        labels: ['Teens', 'Twenties', 'Thirties', 'Forties', 'Fifties+'],
        datasets: [{
          label: 'Reader Age Groups',
          data: [65, 59, 90, 81, 56],
          backgroundColor: 'rgba(179, 181, 198, 0.2)',
          borderColor: 'rgba(179, 181, 198, 1)',
          pointBackgroundColor: 'rgba(179, 181, 198, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179, 181, 198, 1)'
        }]
      };
    
      new Chart(ctxDemographics, {
        type: 'radar',
        data: demographicsData,
        options: {
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: {
                display: false
              },
              suggestedMin: 50,
              suggestedMax: 100
            }
          }
        }
      });
      
    });
    