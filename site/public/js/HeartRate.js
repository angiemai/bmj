

jQuery(document).ready(function () {
    alert("hi");
    urlDataJSON = '~/Contact/HearthRateDataJSON';

    $.getJSON(urlDataJSON, "", function (data) {
        var dataLines = [];
        var dataLabels = "";
        $.each(data, function (entryindex, entry) {
            dataLines.push(entry['Serie']);
            dataLabels = dataLabels + entry['Name'];
        });

        Plot(dataLines, dataLabels);
    });
});

function Plot(dataLines, dataLabels) {
    var line1 = "{ label: 'line1.0' }";
    options = {
        legend: { show: true },
        title: 'Heart rate overview',
        axesDefaults: { pad: 1 },
        seriesDefaults: { showMarker: false, trendline: { show: false }, lineWidth: 3 },
        axes: {
            yaxis: { min: 0, autoscale: true, label: 'HR[bpm]', labelRenderer: $.jqplot.CanvasAxisLabelRenderer },
            xaxis: { autoscale: true, label: 'Time', labelRenderer: $.jqplot.CanvasAxisLabelRenderer }
        }
    };

    //Data from database is already an array!
    plot = $.jqplot('chartdiv', dataLines, options);

    plot.redraw(); // gets rid of previous axis tick markers
}
