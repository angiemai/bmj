
var RocknCoder = RocknCoder || {};
RocknCoder.Pages = RocknCoder.Pages || {};
alert(line1);
alert(line2);
RocknCoder.Pages.Kernel = function (event) {
	var that = this,
		eventType = event.type,
		pageName = $(this).attr("data-rockncoder-jspage");
	pageName = "managePlotChart";
	alert(pageName);
		    RocknCoder.Pages["managePlotChart"]["pageshow"].call(this);
};

RocknCoder.Pages.Events = function () {
    alert("RocknCoder.Pages.Events");
	$("div[data-rockncoder-jspage]").on(
		'pageshow',
		RocknCoder.Pages.Kernel);
} ();


RocknCoder.Pages.managePlotChart = function () {
    alert("dddd");
	var pageshow = function () {
			updateChart();
		},
		updateChart= function(){
			showChart(line1, line2);
		},
		showChart = function (val1, val2) {
		    alert(val1);
		       $.jqplot('plotChart', [line1, line2], {
		        title:'Blood Pressure Readings',
		        axes:{
		            xaxis:{
		                renderer:$.jqplot.DateAxisRenderer,
		                tickOptions:{
		                     formatString:'%#d/%#m'
    
		},
		                min: '23-May-08',
                        tickInterval: '1 day'
		            },
		            yaxis:{
		                tickOptions:{
		                    formatString:'$%.2f'
		                }
		            }
		        },
		        highlighter: {
		            show: true,
		            sizeAdjust: 7.5
		        },
		        cursor: {
		            show: false
		        },
		        series: [
          { label: 'Systolic' },
          { label: 'Diastolic' },
                ],
		        // Show the legend and put it outside the grid, but inside the
		        // plot container, shrinking the grid to accomodate the legend.
		        // A value of "outside" would not shrink the grid and allow
		        // the legend to overflow the container. outsideGrid, outside,
		        legend: {
		            show: true,
		            placement: 'inside'
		        }

		    });
		};


	return {
		pageshow: pageshow
	}
}();



