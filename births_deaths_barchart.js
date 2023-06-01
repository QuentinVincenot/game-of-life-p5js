/*--------------------------------------------------------------------------------
----- BIRTHS/DEATHS BARCHART (representing the births and deaths at every game step)
--------------------------------------------------------------------------------*/

function initialize_births_deaths_barchart(labels, births, deaths) {
    // Create and initialize the datapoints to plot the stacked bar chart
    let datapoints = {
        labels: labels,
        datasets: [{
            label: 'Births',
            data: births,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: 'Deaths',
            data: deaths,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    // Retrieve the canvas from the HTML DOM structure, to create the chart inside
    let context = document.getElementById('bar_chart_canvas').getContext('2d');

    // Create the stacked bar chart with the right configuration
    let stacked_bar_chart = new Chart(context, {
        type: 'bar',
        data: datapoints,
        options: {
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        }
    });
}
