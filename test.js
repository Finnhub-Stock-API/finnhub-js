const finnhub = require('finnhub');
const finnhubClient = new finnhub.DefaultApi("d1f6f3hr01qsg7dao6t0d1f6f3hr01qsg7dao6tg") // Replace this

//Financials
finnhubClient.financials("AAPL", "ic", "annual", (error, data, response) => {
    console.log(data)
});