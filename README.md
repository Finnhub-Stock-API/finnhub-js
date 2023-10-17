# finnhub-js

Official JavaScript client for Finnhub https://finnhub.io/

- API version: 1.0.0
- Package version: 1.2.18

## Installation

```shell
npm install finnhub --save
```

## Getting Started

```javascript
const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "<API_key>" // Replace this
const finnhubClient = new finnhub.DefaultApi()

// Stock candles
finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error, data, response) => {
    console.log(data)
});

//Company News
finnhubClient.companyNews("AAPL", "2020-01-01", "2020-05-01", (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data)
    }
});

// Investor Ownership
let optsLimit = {'limit': 10};
finnhubClient.ownership("AAPL", optsLimit, (error, data, response) => {
    console.log(data)
});

//Aggregate Indicator
finnhubClient.aggregateIndicator("AAPL", "D", (error, data, response) => {
    console.log(data)
});

// Basic financials
finnhubClient.companyBasicFinancials("AAPL", "margin", (error, data, response) => {
    console.log(data)
});

// Company earnings
finnhubClient.companyEarnings("AAPL", {'limit': 10}, (error, data, response) => {
    console.log(data)
});

// Company EPS estimates
finnhubClient.companyEpsEstimates("AAPL", {}, (error, data, response) => {
    console.log(data)
});

// Ebitda Estimates
finnhubClient.companyEbitdaEstimates("AAPL", {"freq": "annual"}, (error, data, response) => {
    console.log(data)
});

// Ebit Estimates
finnhubClient.companyEbitEstimates("AAPL", {"freq": "annual"}, (error, data, response) => {
    console.log(data)
});

// Company executive
finnhubClient.companyExecutive("AAPL", (error, data, response) => {
    console.log(data)
});

// Company peers
finnhubClient.companyPeers("AAPL", (error, data, response) => {
    console.log(data)
});

// Company profile
finnhubClient.companyProfile({'symbol': 'AAPL'}, (error, data, response) => {
    console.log(data)
});
finnhubClient.companyProfile({'isin': 'US0378331005'}, (error, data, response) => {
    console.log(data)
});
finnhubClient.companyProfile({'cusip': '037833100'}, (error, data, response) => {
    console.log(data)
});

//Company profile2
finnhubClient.companyProfile2({'symbol': 'AAPL'}, (error, data, response) => {
    console.log(data)
});

// Revenue Estimates
finnhubClient.companyRevenueEstimates("AAPL", {}, (error, data, response) => {
    console.log(data)
});

// List country
finnhubClient.country((error, data, response) => {
    console.log(data)
});

// Covid-19
finnhubClient.covid19((error, data, response) => {
    console.log(data)
});

// Crypto candles
finnhubClient.cryptoCandles("BINANCE:BTCUSDT", "D", 1590988249, 1591852249, (error, data, response) => {
    console.log(data)
});

// Crypto exchanges
finnhubClient.cryptoExchanges((error, data, response) => {
    console.log(data)
});

//Crypto symbols
finnhubClient.cryptoSymbols("BINANCE", (error, data, response) => {
    console.log(data)
});

// Earnings calendar
finnhubClient.earningsCalendar({"from": "2020-06-01", "to": "2020-06-30"}, (error, data, response) => {
    console.log(data)
});

// Economic code
finnhubClient.economicCode((error, data, response) => {
    console.log(data)
});

// Economic data
finnhubClient.economicData("MA-USA-656880", (error, data, response) => {
    console.log(data)
});

// Filings
finnhubClient.filings({"symbol": "AAPL"}, (error, data, response) => {
    console.log(data)
});

//Financials
finnhubClient.financials("AAPL", "ic", "annual", (error, data, response) => {
    console.log(data)
});

// Financials Reported
finnhubClient.financialsReported({"symbol": "AAPL"}, (error, data, response) => {
    console.log(data)
});

// Forex candles
finnhubClient.forexCandles("OANDA:EUR_USD", "D", 1590988249, 1591852249, (error, data, response) => {
    console.log(data)
});

// Forex exchanges
finnhubClient.forexExchanges((error, data, response) => {
    console.log(data)
});

// Forex rates
finnhubClient.forexRates({"base": "USD"}, (error, data, response) => {
    console.log(data)
});

// Forex symbols
finnhubClient.forexSymbols("OANDA", (error, data, response) => {
    console.log(data)
});

//Fund ownership
finnhubClient.fundOwnership("AAPL", {'limit': 10}, (error, data, response) => {
    console.log(data)
});

// General news
finnhubClient.marketNews("general", {}, (error, data, response) => {
    console.log(data)
});

// Ipo calendar
finnhubClient.ipoCalendar("2020-01-01", "2020-06-15", (error, data, response) => {
    console.log(data)
});

//Major development
finnhubClient.pressReleases("AAPL", {}, (error, data, response) => {
    console.log(data)
});

// News sentiment
finnhubClient.newsSentiment("AAPL", (error, data, response) => {
    console.log(data)
});

// Pattern recognition
finnhubClient.patternRecognition("AAPL", "D", (error, data, response) => {
    console.log(data)
});

// Price target
finnhubClient.priceTarget("AAPL", (error, data, response) => {
    console.log(data)
});

//Quote
finnhubClient.quote("AAPL", (error, data, response) => {
    console.log(data)
});

// Recommendation trends
finnhubClient.recommendationTrends("AAPL", (error, data, response) => {
    console.log(data)
});

// Stock dividends
finnhubClient.stockDividends("KO", "2019-01-01", "2020-06-30", (error, data, response) => {
    console.log(data)
});

// Splits
finnhubClient.stockSplits("AAPL", "2000-01-01", "2020-06-15", (error, data, response) => {
    console.log(data)
});

// Stock symbols
finnhubClient.stockSymbols("US", (error, data, response) => {
    console.log(data)
});

// Support resistance
finnhubClient.supportResistance("AAPL", "D", (error, data, response) => {
    console.log(data)
});

// Technical indicator
finnhubClient.technicalIndicator("AAPL", "D", 1580988249, 1591852249, "macd", {}, (error, data, response) => {
    console.log(data)
});

// Transcripts
finnhubClient.transcripts("AAPL_162777", (error, data, response) => {
    console.log(data)
});

// Transcripts list
finnhubClient.transcriptsList("AAPL", (error, data, response) => {
    console.log(data)
});

// Upgrade/downgrade
finnhubClient.upgradeDowngrade({"symbol": "AAPL"}, (error, data, response) => {
    console.log(data)
});

// Tick Data
finnhubClient.stockTick("AAPL", "2020-03-25", 500, 0, (error, data, response) => {
    console.log(data);
});

// Indices Constituents
finnhubClient.indicesConstituents("^GSPC", (error, data, response) => {
    console.log(data);
});

// Indices Historical Constituents
finnhubClient.indicesHistoricalConstituents("^GSPC", (error, data, response) => {
    console.log(data);
});

// ETFs Profile
finnhubClient.etfsProfile({'symbol': 'SPY'}, (error, data, response) => {
    console.log(data);
});

// ETFs Holdings
finnhubClient.etfsHoldings({'symbol': 'ARKK'}, (error, data, response) => {
    console.log(data);
});

// ETFs Industry Exposure
finnhubClient.etfsSectorExposure('SPY', (error, data, response) => {
    console.log(data);
});

// ETFs Country Exposure
finnhubClient.etfsCountryExposure('SPY', (error, data, response) => {
    console.log(data);
});

// Mutual Funds Profile
finnhubClient.mutualFundProfile({'symbol': 'VTSAX'}, (error, data, response) => {
    console.log(data);
});

// Mutual Funds Holdings
finnhubClient.mutualFundHoldings({'symbol': 'VTSAX'}, (error, data, response) => {
    console.log(data);
});

// Mutual Funds Industry Exposure
finnhubClient.mutualFundSectorExposure('VTSAX', (error, data, response) => {
    console.log(data);
});

// Mutual Funds Country Exposure
finnhubClient.mutualFundCountryExposure('VTSAX', (error, data, response) => {
    console.log(data);
});

// Insider Transactions
finnhubClient.insiderTransactions('AAPL', (error, data, response) => {
    console.log(data);
});

// Revenue Breakdown
finnhubClient.revenueBreakdown({'symbol': 'AAPL'}, (error, data, response) => {
    console.log(data);
});

// Social Sentiment
finnhubClient.socialSentiment('GME', (error, data, response) => {
    console.log(data);
});

// Investment Theme
finnhubClient.investmentThemes('financialExchangesData', (error, data, response) => {
    console.log(data);
});

// Supply Chain
finnhubClient.supplyChainRelationships('AAPL', (error, data, response) => {
    console.log(data);
});

// Company ESG
finnhubClient.companyEsgScore('AAPL', (error, data, response) => {
    console.log(data);
});

// Company Earnings Quality Score
finnhubClient.companyEarningsQualityScore('AAPL', 'quarterly', (error, data, response) => {
    console.log(data);
});

// Crypto Profile
finnhubClient.cryptoProfile('BTC', (error, data, response) => {
    console.log(data);
});

// USPO Patent
finnhubClient.stockUsptoPatent('NVDA', '2021-01-01', '2021-12-31', (error, data, response) => {
    console.log(data);
});

// Visa Application
finnhubClient.stockVisaApplication('AAPL', '2021-01-01', '2021-12-31', (error, data, response) => {
    console.log(data);
});

```

## License

Apache License
