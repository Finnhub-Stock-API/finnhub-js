const finnhub = require('finnhub');
// const finnhub = require('./dist/index.js');
const finnhubClient = new finnhub.DefaultApi("bm9b5n7rh5rb24oa6teg") // Replace this

// //Financials
finnhubClient.stockSymbols("US", {}, (error, data, response) => {
    console.log(data);
});