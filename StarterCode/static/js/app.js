
// var tableData = data;
var tbody = d3.select("tbody");

data.forEach((data) => {
    var row = tbody.append("tr");  
    Object.entries(data).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
// // YOUR CODE HERE!
 var submit = d3.select("#filter-btn");

 submit.on("click", function() {
     d3.event.preventDefault();
     var date = d3.select("#datetime");
     var inputvalue = date.property("value");
     var filterdata = data.filter(date1 => date1.datetime === inputvalue);
     console.log("file",filterdata);
     var date2= filterdata.map(date2=>date2.datetime);
     console.log(date2);
    //  new table
    tbody.html(" ");
    filterdata.forEach((filterdata) => {
        var row = tbody.append("tr");
        Object.entries(filterdata).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});

