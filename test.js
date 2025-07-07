import finnhub from './src/index.js';
const finnhubClient = new finnhub.DefaultApi("d1f6f3hr01qsg7dao6t0d1f6f3hr01qsg7dao6tg")

// Stock candles
finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error, data, response) => {
    console.log(data)
});
