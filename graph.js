document.addEventListener("DOMContentLoaded", function () {
    // Generate random data for demonstration
    var numDataPoints = 20;
    var brightnessData = Array.from({ length: numDataPoints }, () => Math.floor(Math.random() * 100));
    var statusData = Array.from({ length: numDataPoints }, () => Math.random() > 0.5 ? "Online" : "Offline");

    // Create traces for brightness and status
    var brightnessTrace = {
        x: Array.from({ length: numDataPoints }, (_, i) => i + 1),
        y: brightnessData,
        mode: 'lines+markers',
        type: 'scatter',
        name: 'Brightness',
        line: { shape: 'linear' },
        marker: { size: 10 }
    };

    var statusTrace = {
        x: Array.from({ length: numDataPoints }, (_, i) => i + 1),
        y: statusData,
        mode: 'markers',
        type: 'scatter',
        name: 'Status',
        marker: { size: 12, symbol: 'square-open-dot' }
    };

    // Layout configuration
    var layout = {
        title: 'Light Data Visualization',
        xaxis: {
            title: 'Data Points'
        },
        yaxis: {
            title: 'Value'
        }
    };

    // Plot the data
    var data = [brightnessTrace, statusTrace];
    Plotly.newPlot('plot', data, layout);
});
