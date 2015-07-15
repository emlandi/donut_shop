//Declares properties
var Shop = function (name, minCust, maxCust, avDonuts) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avDonuts = avDonuts;
  this.hoursOpen = 11;
  this.total = 0;
};

//Creates total donuts per hour(based on random number of customers and average donuts bought) for 11 hours and places values in an array by using.push
Shop.prototype.donutsPerHour = function() {
  var hourly = [];
  for (var i = 0; i < this.hoursOpen; i++) {
    hourly.push(Math.floor(((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avDonuts));
  }
  return hourly;
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

//This puts all of the different shop objects into an array
var locationArray = [];

locationArray.push(new Shop ("Downtown", 8, 43, 4.5));
locationArray.push(new Shop ("Capitol Hill", 4, 37, 2));
locationArray.push(new Shop ("South Lake Union", 9, 23, 6.33));
locationArray.push(new Shop ("Wedgewood", 2, 28, 1.25));
locationArray.push(new Shop ("Ballard", 8, 58, 3.75));

for (var i=0; i < locationArray.length; i++) {
  locationArray[i].display();
}

//This adds the same new shop over and over and over...need to fix so that user can enter multiple new stores
var addNewShop = document.getElementById("addNewShop");
addNewShop.addEventListener("submit", function(e) {
  e.preventDefault();
  var newLocation = document.getElementById("newLocation").value;
  var newMin = parseInt(document.getElementById("newMin").value);
  var newMax = parseInt(document.getElementById("newMax").value);
  var newAv = parseInt(document.getElementById("newAv").value);

  //This will add new shop to table. Over & Over.
  locationArray.push(new Shop(newLocation, newMin, newMax, newAv));
  locationArray[i].display();

  // //This should check if the location already exists.
  // for (i = 0; i < locationArray.length; i++) {
  //   //If the new location does not exist, add it to the table.
  //   if (newLocation !== locationArray[i].name) {
  //     locationArray.push(new Shop(newLocation, newMin, newMax, newAv));
  //     locationArray[locationArray.length - 1].display();
  //   }

  // //   If the new location already exists, delete it.
  // //   if (check === true) {
  // //   code here;
  // //   }
  // }
}, false);





// var downtown = new Shop ("Downtown", 8, 43, 4.5);
// var capitolHill = new Shop ("Capitol Hill", 4, 37, 2);
// var southLakeUnion = new Shop ("South Lake Union", 9, 23, 6.33);
// var wedgewood = new Shop ("Wedgewood", 2, 28, 1.25);
// var ballard = new Shop ("Ballard", 8, 58, 3.75);

// downtown.display();
// capitolHill.display();
// southLakeUnion.display();
// wedgewood.display();
// ballard.display();
