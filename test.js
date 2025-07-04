// Test script for new minimal finnhub-js client
import DefaultApi from './src/api/DefaultApi.js';

const API_KEY = 'd1f6f3hr01qsg7dao6t0d1f6f3hr01qsg7dao6tg';
const finnhubClient = new DefaultApi(API_KEY);

// Stock candles example from README
finnhubClient.stockCandles('AAPL', 'D', 1590988249, 1591852249, (error, data, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Data:', data);
  }
});
