/*--------------------------------------------------------------------------------
----- POPULATION LINECHART (representing the population evolution according game steps)
--------------------------------------------------------------------------------*/

function initialize_population_linechart(labels, population) {
    // Create and initialize the datapoints to plot the line chart
    var datapoints = {
        labels: labels,
        datasets: [{
            label: 'Population',
            data: population,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            tension: 0.4
        }]
    };

    // Retrieve the canvas from the HTML DOM structure, to create the chart inside
    var context = document.getElementById('line_chart_canvas').getContext('2d');

    // Create the line chart with the right configuration
    var line_chart = new Chart(context, {
        type: 'line',
        data: datapoints,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
