//Declares properties
var Shop = function (name, minCust, maxCust, avDonuts) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avDonuts = avDonuts;
  this.hoursOpen = 11;
  this.total = 0;
};

//Creates total donuts per hour(based on random number of customers and average donuts bought) for 11 hours and places values in an array
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
  tr.id = this.name;

  //Appends donut per hour array to table
  var donutsArr = this.donutsPerHour();
  for (var i = 0; i < this.hoursOpen; i++) {
    var td = document.createElement("td");
    td.innerHTML = donutsArr[i];
    tr.appendChild(td);
    this.total += donutsArr[i];
  }

  //Appends total donuts per day to table
  var totalDonuts = document.createElement("td");
  totalDonuts.innerHTML = this.total;
  tr.appendChild(totalDonuts);
};

//This creates new shop obects in an array
var locationArray = [];

locationArray.push(new Shop ("Downtown", 8, 43, 4.5));
locationArray.push(new Shop ("Capitol Hill", 4, 37, 2));
locationArray.push(new Shop ("South Lake Union", 9, 23, 6.33));
locationArray.push(new Shop ("Wedgewood", 2, 28, 1.25));
locationArray.push(new Shop ("Ballard", 8, 58, 3.75));

for (var i=0; i < locationArray.length; i++) {
  locationArray[i].display();
}

//This is the event listener to add a new shop.
var addNewShop = document.getElementById("addNewShop");
addNewShop.addEventListener("submit", function(e) {
  e.preventDefault();
  var newLocation = document.getElementById("newLocation").value;
  var newMin = parseInt(document.getElementById("newMin").value);
  var newMax = parseInt(document.getElementById("newMax").value);
  var newAv = parseInt(document.getElementById("newAv").value);
  var newShop = new Shop (newLocation, newMin, newMax, newAv);

  for (var i = 0; i < locationArray.length; i++) {

    //If the location already exists, update values. **THIS DOES NOT WORK** It updates the array correctly but adds new line to the bottom of the table instead of updating existing values.
    var check = false;

    if (locationArray[i].name == newLocation) {
      locationArray[i] = newShop;
      locationArray[i].donutsPerHour();
      locationArray[i].display(); //incorporate GetElementById and/or replaceChild??

      check = true;

      break;
    }
  }

  //If it doesn't exist, it will add the newShop to the end of the table.
  if (check == false) {
    locationArray.push(newShop);
    newShop.display();
  }
}, false);

