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

const liverpool = {
  name: "Liverpool",
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,
  custPerHour: [],
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numbCust = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numbCust);
    }
  },
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

liverpool.getCustPerHour();
console.log(liverpool);

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
