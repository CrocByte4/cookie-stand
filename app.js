function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

//creating Shop constructor
function Shop(name, minCust, maxCust, avgSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.custPerHr = [];
  this.cookPerHr = [];
}

Shop.prototype.genCustPerHr = function () {
  for (let i = 0; i < hours.length; i++) {
    let numbCust = randomNum(this.minCust, this.maxCust);
    this.custPerHr.push(numbCust);
  }
};

Shop.prototype.genCookPerHr = function () {
  for (let i = 0; i < this.custPerHr.length; i++) {
    let cookSold = Math.floor(this.custPerHr[i] * this.avgSales);
    this.cookPerHr.push(cookSold);
  }
};

Shop.prototype.render = function () {
  this.genCustPerHr();
  this.genCookPerHr();
  //new table
  const table = document.getElementById("salesTable");

  //new table row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  //new table cell/data
  let td = document.createElement("td");
  td.textContent = this.name;
  tr.appendChild(td);

  //inserting data into row
  for (let i = 0; i < this.cookPerHr.length; i++) {
    td = document.createElement("td");
    td.textContent = this.cookPerHr[i];
    tr.appendChild(td);
  }
};

function makeHeaderRow() {
  //table
  const table = document.getElementById("salesTable");

  //table row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  //starting cell
  let th = document.createElement("th");
  tr.appendChild(th);
  //get data into the row
  for (let i = 0; i < hours.length; i++) {
    th = document.createElement("th");
    th.textContent = hours[i];
    tr.appendChild(th);
  }
}

makeHeaderRow();

const seattle = new Shop("Seattle", 23, 65, 6.3);
const tokyo = new Shop("Tokyo", 3, 24, 1.2);
const dubai = new Shop("Dubai", 11, 38, 3.7);
const paris = new Shop("Paris", 20, 38, 2.3);
const lima = new Shop("Lima", 2, 16, 4.6);
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("mouseover", function () {
  submitButton.classList.toggle("pinkHili");
});
submitButton.addEventListener("click", function () {
  submitButton.classList.toggle("greenSub");
});
const form = document.getElementById("shop-sub-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const shopNameInput = event.target.name.value;
  const minCustInput = event.target.minCust.value;
  const maxCustInput = event.target.maxCust.value;
  const avgSalesInput = event.target.avgSales.value;

  console.log(shopNameInput);
  console.log(minCustInput);
  console.log(maxCustInput);
  console.log(avgSalesInput);

  form.reset();

  const newShop = new Shop(
    shopNameInput,
    minCustInput,
    maxCustInput,
    avgSalesInput
  );

  newShop.render();
});

//OLD CODE
// get the "container" for shop data
//const containerEl = document.getElementById("shopData");

//adding a table
//const tableEl = document.createElement("table");
// article.appendChild(tableEl);

//add header row
// const headerRow = document.createElement("hedrow");

//class 06 version
//const seattle = {
//  name: "Seattle",
//  minCust: 23,
//  maxCust: 65,
//  avgSales: 6.3,
//  custPerHr: [],
//  cookPerHr: [],
//  calcCustPerHr: function () {
//    for (let i = 0; i < hours.length; i++) {
//      let numbCust = randomNum(this.minCust, this.maxCust);
//      this.custPerHr.push(numbCust);
//    }
//    this.calcCookPerHr();
// },
//  calcCookPerHr: function () {
//    for (let i = 0; i < this.custPerHour.length; i++) {
//      this.calcCookPerHr.push(Math.floor(this.custPerHr[i] * 6.3));
//    }
//  },
// render: function () {
//    this.calcCustPerHr();
//    this.calcCookPerHr();
//
//   const div = document.getElementById(this.name);
// },
//};

//seattle.calcCustPerHr();
//console.log(seattle);

//The business needs a proof of concept application to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and production schedule. The number of products to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

//The minimum number of customers per hour.
//The maximum number of customers per hour.
//The average number of products purchased per customer.

//create seperate JS objects for each shop location. Each location will be responsible for generating sales data and prociding output on an html document. You should be able to perform the following tasks:

//1 store the min/max hourly customers and the average cookies per customer in object properties

//2 Use a method of that obect to generate a random number of customers per hour. Ovjects/Math/random

//3 Calculate and store the simulated amount of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

//4 Store the results for each location in a seperate array - perhaps as a property of the object representing that location

//5 Display the values of each array as unordered lists in the browser

//6 Calculating the sum of theses hourly totals, your output for each location should be in a list. display the lists on sales.html. we will be adding features to this application and working with its layout in the upcoming labs

// starting numbers for locations will be A(23 min, 65 Max, 6.3avg),B(3min, 24max, 1.2avg), C(11min, 38max, 3.7avg), D(20min, 38max, 2.3avg), E(2min, 16max, 4.6avg)
