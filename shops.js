//Declares properties
var Shop = function (name, minCust, maxCust, avDonuts) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avDonuts = avDonuts;
  this.hoursOpen = 11;
  this.total = 0;
};

//Displays info on webpage
Shop.prototype.display = function () {
  var table = document.getElementById("table");
  var tr = document.createElement("tr");

  //Appends location name to table
  tr.innerHTML = this.name;
  table.appendChild(tr);

  //Appends donut per hour array to table
  var donutsArr = this.donutsPerHour();
  for (var i = 0; i < this.hoursOpen; i++) {
    var td = document.createElement("td");
    td.innerHTML = donutsArr[i];
    tr.appendChild(td);
    this.total += donutsArr[i];
  }

  //Append totals donuts per day to table
  var totalDonuts = document.createElement("td");
  totalDonuts.innerHTML = this.total;
  tr.appendChild(totalDonuts);
};

//Creates total donuts per hour(based on random number of customers and average donuts bought) for 11 hours and places values in an array by using.push
Shop.prototype.donutsPerHour = function() {
  var hourly = [];
  for (var i = 0; i < this.hoursOpen; i++) {
    hourly.push(Math.floor(((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avDonuts));
  }
  return hourly;
};

var downtown = new Shop ("Downtown", 8, 43, 4.5);
var capitolHill = new Shop ("Capitol Hill", 4, 37, 2);
var southLakeUnion = new Shop ("South Lake Union", 9, 23, 6.33);
var wedgewood = new Shop ("Wedgewood", 2, 28, 1.25);
var ballard = new Shop ("Ballard", 8, 58, 3.75);

downtown.display();
capitolHill.display();
southLakeUnion.display();
wedgewood.display();
ballard.display();
