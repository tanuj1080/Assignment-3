// Code for trending books chart and handling dropdown selection

const ctx = document.getElementById('trendingBooksChart').getContext('2d');

// Sample data for chart (replace with actual data fetching logic)
const bookData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'], // Months for this example
  datasets: [
    {
      label: 'Fantasy',
      data: [15, 12, 12, 18], // Replace with actual data for trending counts
      backgroundColor: 'rgba(255, 159, 64, 0.5)', // Orange with transparency
      borderColor: 'rgba(255, 159, 64, 1)', // Orange border
      borderWidth: 1,
      pointRadius: 5, // Set point size
      pointHitRadius: 10, // Increase clickable area for points
      pointHoverBackgroundColor: 'rgba(255, 159, 64, 1)', // Orange on hover
      pointHoverBorderColor: 'rgba(220, 220, 220, 1)', // White border on hover
    },
    {
      label: 'Mystery',
      data: [10, 6, 8, 12], // Replace with actual data for trending counts
      backgroundColor: 'rgba(54, 162, 235, 0.5)', // Light blue with transparency
      borderColor: 'rgba(54, 162, 235, 1)', // Blue border
      borderWidth: 1,
      pointRadius: 5, // Set point size
      pointHitRadius: 10, // Increase clickable area for points
      pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)', // Blue on hover
      pointHoverBorderColor: 'rgba(220, 220, 220, 1)', // White border on hover
    },
    {
        label: 'Manga',
        data: [8, 4, 9, 13],
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Light pink with transparency
        borderColor: 'rgba(255, 99, 132, 1)', // Pink border
        borderWidth: 1,
        pointRadius: 5,
        pointHitRadius: 10,
        pointHoverBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
      },
      {
        label: 'Non-Fiction',
        data: [6, 2, 7, 10],
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Light turquoise with transparency
        borderColor: 'rgba(75, 192, 192, 1)', // Turquoise border
        borderWidth: 1,
        pointRadius: 5,
        pointHitRadius: 10,
        pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
      },
      {
        label: 'Science Fiction',
        data: [4, 7, 5, 8],
        backgroundColor: 'rgba(153, 102, 255, 0.5)', // Light purple with transparency
        borderColor: 'rgba(153, 102, 255, 1)', // Purple border
        borderWidth: 1,
        pointRadius: 5,
        pointHitRadius: 10,
        pointHoverBackgroundColor: 'rgba(153, 102, 255, 1)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
      }
  ],
};

const categoryDropdown = document.getElementById('categoryDropdown');

// Function to generate the chart based on selected category
function updateChart(selectedCategory) {
  let chartData = { labels: bookData.labels }; // Initialize with labels

  // Handle both valid and invalid category selections
  if (selectedCategory) {
    const matchingDataset = bookData.datasets.find(dataset => dataset.label === selectedCategory);
    if (matchingDataset) {
      chartData.datasets = [matchingDataset]; // Include only the matching dataset
    } else {
      chartData.datasets = []; // No matching category found, display empty chart
      console.warn(`Category "${selectedCategory}" not found in data.`); // Log warning
    }
  } else {
    // No category selected, show all datasets
    chartData.datasets = bookData.datasets.slice(); // Create a copy to avoid reference issue
  }

  new Chart(ctx, {
    type: 'line', // Use line chart type for this example (can be changed)
    data: chartData,
    options: {
      responsive: true, // Adjust chart based on screen size
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true, // Start y-axis at 0
          },
        }],
      },
      legend: { // Display legend for category labels
        display: true,
        labels: {
          fontColor: 'black', // Set legend text color
        },
      },
      // Chart customization options
      aspectRatio: 2, // Set a wider aspect ratio for better readability
      tooltips: { // Customize tooltips
        enabled: true, // Enable tooltips
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Black background with transparency
        bodyColor: 'white', // White text color
        titleFontColor: '#6e707e', // Gray title text color
        bodyFontSize: 14, // Set tooltip body font size
        titleMarginBottom: 10, // Add space between title and body
      },
    },
  });
}

// Update chart on initial page load (show all categories initially)
updateChart();

// Update chart on category selection change
categoryDropdown.addEventListener('change', (event) => {
  const selectedCategory = event.target.value;
  updateChart(selectedCategory);
});
