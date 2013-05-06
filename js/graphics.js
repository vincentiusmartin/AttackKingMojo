// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

// Create the data table.
var data1 = new google.visualization.DataTable();
data1.addColumn('string', 'Resources');
data1.addColumn('number', 'Amount');
data1.addRows([
  ['Armor', 10],
  ['People', 8]
]);

// Set chart options
var options1 = {'title':'Resistance bases Jurong Point MRT:',
			   'width':400,
			   'height':100};

// Instantiate and draw our chart, passing in some options.
var chart1 = new google.visualization.BarChart(document.getElementById('chart_div'));
chart1.draw(data1, options1);

// Create the data table.
var data2 = new google.visualization.DataTable();
data2.addColumn('string', 'Resources');
data2.addColumn('number', 'Amount');
data2.addRows([
  ['Armor', 14],
  ['People', 17]
]);

// Set chart options
var options2 = {'title':'Resistance bases Bedok MRT:',
			   'width':400,
			   'height':100};

// Instantiate and draw our chart, passing in some options.
var chart2 = new google.visualization.BarChart(document.getElementById('chart_div2'));
chart2.draw(data2, options2);

// Create the data table.
var data3 = new google.visualization.DataTable();
data3.addColumn('string', 'Resources');
data3.addColumn('number', 'Amount');
data3.addRows([
  ['Armor', 12],
  ['People', 13]
]);

// Set chart options
var options3 = {'title':'Resistance bases Singapore Zoo:',
			   'width':400,
			   'height':100};

// Instantiate and draw our chart, passing in some options.
var chart3 = new google.visualization.BarChart(document.getElementById('chart_div3'));
chart3.draw(data3, options3);

// Create the data table.
var data4 = new google.visualization.DataTable();
data4.addColumn('string', 'Resources');
data4.addColumn('number', 'Amount');
data4.addRows([
  ['Armor', 15],
  ['People', 10]
]);

// Set chart options
var options4 = {'title':'Resistance bases Sentosa Cove:',
			   'width':400,
			   'height':100};

// Instantiate and draw our chart, passing in some options.
var chart4 = new google.visualization.BarChart(document.getElementById('chart_div4'));
chart4.draw(data4, options4);

// Create the data table.
var data5 = new google.visualization.DataTable();
data5.addColumn('string', 'Resources');
data5.addColumn('number', 'Amount');
data5.addRows([
  ['Armor', 12],
  ['People', 21]
]);

// Set chart options
var options5 = {'title':'Resistance bases Punggol MRT:',
			   'width':400,
			   'height':100};

// Instantiate and draw our chart, passing in some options.
var chart5 = new google.visualization.BarChart(document.getElementById('chart_div5'));
chart5.draw(data5, options5);

}
