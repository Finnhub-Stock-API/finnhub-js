# finnhub-js

Official JavaScript client for Finnhub https://finnhub.io/

- API version: 1.0.0
- Package version: 1.1.0

## Installation

```shell
npm install finnhub --save
```

## Getting Started

```javascript
const util = require('util')
const finnhub = require('finnhub');

const defaultClient = finnhub.ApiClient.instance;
const api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR_API_KEY" // get from https://finnhub.io/
const api = new finnhub.DefaultApi()

// Company News
api.companyNews("AAPL", "2020-01-01", "2020-05-01", (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log(util.inspect(data, false, null, true))
    }
});

// Investor Ownership
let opts = { 'limit': 789 };
api.investorsOwnership("AAPL", opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log(util.inspect(data, false, null, true))
    }
});

// Stock Candles
const stockCandlesOpts = {
    'from': 1572651390,
    'to': 1575243390
};
api.stockCandles("AAPL", "D", stockCandlesOpts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log(util.inspect(data, false, null, true))
    }
});
```

## Endpoints

All URIs are relative to *https://finnhub.io/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*finnhub.DefaultApi* | [**aggregateIndicator**](docs/DefaultApi.md#aggregateIndicator) | **GET** /scan/technical-indicator | Aggregate Indicators
*finnhub.DefaultApi* | [**companyBasicFinancials**](docs/DefaultApi.md#companyBasicFinancials) | **GET** /stock/metric | Basic Financials
*finnhub.DefaultApi* | [**companyEarnings**](docs/DefaultApi.md#companyEarnings) | **GET** /stock/earnings | Earnings Surprises
*finnhub.DefaultApi* | [**companyEpsEstimates**](docs/DefaultApi.md#companyEpsEstimates) | **GET** /stock/eps-estimate | Earnings Estimates
*finnhub.DefaultApi* | [**companyExecutive**](docs/DefaultApi.md#companyExecutive) | **GET** /stock/executive | Company Executive
*finnhub.DefaultApi* | [**companyNews**](docs/DefaultApi.md#companyNews) | **GET** /company-news | Company News
*finnhub.DefaultApi* | [**companyPeers**](docs/DefaultApi.md#companyPeers) | **GET** /stock/peers | Peers
*finnhub.DefaultApi* | [**companyProfile**](docs/DefaultApi.md#companyProfile) | **GET** /stock/profile | Company Profile
*finnhub.DefaultApi* | [**companyProfile2**](docs/DefaultApi.md#companyProfile2) | **GET** /stock/profile2 | Company Profile 2
*finnhub.DefaultApi* | [**companyRevenueEstimates**](docs/DefaultApi.md#companyRevenueEstimates) | **GET** /stock/revenue-estimate | Revenue Estimates
*finnhub.DefaultApi* | [**country**](docs/DefaultApi.md#country) | **GET** /country | Country Metadata
*finnhub.DefaultApi* | [**covid19**](docs/DefaultApi.md#covid19) | **GET** /covid19/us | COVID-19
*finnhub.DefaultApi* | [**cryptoCandles**](docs/DefaultApi.md#cryptoCandles) | **GET** /crypto/candle | Crypto Candles
*finnhub.DefaultApi* | [**cryptoExchanges**](docs/DefaultApi.md#cryptoExchanges) | **GET** /crypto/exchange | Crypto Exchanges
*finnhub.DefaultApi* | [**cryptoSymbols**](docs/DefaultApi.md#cryptoSymbols) | **GET** /crypto/symbol | Crypto Symbol
*finnhub.DefaultApi* | [**earningsCalendar**](docs/DefaultApi.md#earningsCalendar) | **GET** /calendar/earnings | Earnings Calendar
*finnhub.DefaultApi* | [**economicCode**](docs/DefaultApi.md#economicCode) | **GET** /economic/code | Economic Code
*finnhub.DefaultApi* | [**economicData**](docs/DefaultApi.md#economicData) | **GET** /economic | Economic Data
*finnhub.DefaultApi* | [**filings**](docs/DefaultApi.md#filings) | **GET** /stock/filings | Filings
*finnhub.DefaultApi* | [**financials**](docs/DefaultApi.md#financials) | **GET** /stock/financials | Financial Statements
*finnhub.DefaultApi* | [**financialsReported**](docs/DefaultApi.md#financialsReported) | **GET** /stock/financials-reported | Financials As Reported
*finnhub.DefaultApi* | [**forexCandles**](docs/DefaultApi.md#forexCandles) | **GET** /forex/candle | Forex Candles
*finnhub.DefaultApi* | [**forexExchanges**](docs/DefaultApi.md#forexExchanges) | **GET** /forex/exchange | Forex Exchanges
*finnhub.DefaultApi* | [**forexRates**](docs/DefaultApi.md#forexRates) | **GET** /forex/rates | Forex rates
*finnhub.DefaultApi* | [**forexSymbols**](docs/DefaultApi.md#forexSymbols) | **GET** /forex/symbol | Forex Symbol
*finnhub.DefaultApi* | [**fundOwnership**](docs/DefaultApi.md#fundOwnership) | **GET** /stock/fund-ownership | Fund Ownership
*finnhub.DefaultApi* | [**generalNews**](docs/DefaultApi.md#generalNews) | **GET** /news | General News
*finnhub.DefaultApi* | [**investorsOwnership**](docs/DefaultApi.md#investorsOwnership) | **GET** /stock/investor-ownership | Investors Ownership
*finnhub.DefaultApi* | [**ipoCalendar**](docs/DefaultApi.md#ipoCalendar) | **GET** /calendar/ipo | IPO Calendar
*finnhub.DefaultApi* | [**majorDevelopments**](docs/DefaultApi.md#majorDevelopments) | **GET** /major-development | Major Developments
*finnhub.DefaultApi* | [**newsSentiment**](docs/DefaultApi.md#newsSentiment) | **GET** /news-sentiment | News Sentiment
*finnhub.DefaultApi* | [**patternRecognition**](docs/DefaultApi.md#patternRecognition) | **GET** /scan/pattern | Pattern Recognition
*finnhub.DefaultApi* | [**priceTarget**](docs/DefaultApi.md#priceTarget) | **GET** /stock/price-target | Price Target
*finnhub.DefaultApi* | [**quote**](docs/DefaultApi.md#quote) | **GET** /quote | Quote
*finnhub.DefaultApi* | [**recommendationTrends**](docs/DefaultApi.md#recommendationTrends) | **GET** /stock/recommendation | Recommendation Trends
*finnhub.DefaultApi* | [**stockCandles**](docs/DefaultApi.md#stockCandles) | **GET** /stock/candle | Stock Candles
*finnhub.DefaultApi* | [**stockDividends**](docs/DefaultApi.md#stockDividends) | **GET** /stock/dividend | Dividends
*finnhub.DefaultApi* | [**stockSplits**](docs/DefaultApi.md#stockSplits) | **GET** /stock/split | Splits
*finnhub.DefaultApi* | [**stockSymbols**](docs/DefaultApi.md#stockSymbols) | **GET** /stock/symbol | Stock Symbol
*finnhub.DefaultApi* | [**stockTick**](docs/DefaultApi.md#stockTick) | **GET** /stock/tick | Tick Data
*finnhub.DefaultApi* | [**supportResistance**](docs/DefaultApi.md#supportResistance) | **GET** /scan/support-resistance | Support/Resistance
*finnhub.DefaultApi* | [**technicalIndicator**](docs/DefaultApi.md#technicalIndicator) | **GET** /indicator | Technical Indicators
*finnhub.DefaultApi* | [**transcripts**](docs/DefaultApi.md#transcripts) | **GET** /stock/transcripts | Earnings Call Transcripts
*finnhub.DefaultApi* | [**transcriptsList**](docs/DefaultApi.md#transcriptsList) | **GET** /stock/transcripts/list | Earnings Call Transcripts List
*finnhub.DefaultApi* | [**upgradeDowngrade**](docs/DefaultApi.md#upgradeDowngrade) | **GET** /stock/upgrade-downgrade | Stock Upgrade/Downgrade


## Models

 - [finnhub.AggregateIndicators](docs/AggregateIndicators.md)
 - [finnhub.BasicFinancials](docs/BasicFinancials.md)
 - [finnhub.Company](docs/Company.md)
 - [finnhub.CompanyExecutive](docs/CompanyExecutive.md)
 - [finnhub.CompanyNewsStatistics](docs/CompanyNewsStatistics.md)
 - [finnhub.CompanyProfile](docs/CompanyProfile.md)
 - [finnhub.CompanyProfile2](docs/CompanyProfile2.md)
 - [finnhub.Covid19](docs/Covid19.md)
 - [finnhub.CryptoCandles](docs/CryptoCandles.md)
 - [finnhub.CryptoSymbol](docs/CryptoSymbol.md)
 - [finnhub.Development](docs/Development.md)
 - [finnhub.Dividends](docs/Dividends.md)
 - [finnhub.EarningEstimate](docs/EarningEstimate.md)
 - [finnhub.EarningRelease](docs/EarningRelease.md)
 - [finnhub.EarningResult](docs/EarningResult.md)
 - [finnhub.EarningsCalendar](docs/EarningsCalendar.md)
 - [finnhub.EarningsCallTranscripts](docs/EarningsCallTranscripts.md)
 - [finnhub.EarningsCallTranscriptsList](docs/EarningsCallTranscriptsList.md)
 - [finnhub.EarningsEstimates](docs/EarningsEstimates.md)
 - [finnhub.EconomicCalendar](docs/EconomicCalendar.md)
 - [finnhub.EconomicCode](docs/EconomicCode.md)
 - [finnhub.EconomicData](docs/EconomicData.md)
 - [finnhub.EconomicEvent](docs/EconomicEvent.md)
 - [finnhub.Estimate](docs/Estimate.md)
 - [finnhub.Filing](docs/Filing.md)
 - [finnhub.FinancialStatements](docs/FinancialStatements.md)
 - [finnhub.FinancialsAsReported](docs/FinancialsAsReported.md)
 - [finnhub.ForexCandles](docs/ForexCandles.md)
 - [finnhub.ForexSymbol](docs/ForexSymbol.md)
 - [finnhub.Forexrates](docs/Forexrates.md)
 - [finnhub.FundOwnership](docs/FundOwnership.md)
 - [finnhub.IPOCalendar](docs/IPOCalendar.md)
 - [finnhub.IPOEvent](docs/IPOEvent.md)
 - [finnhub.Indicator](docs/Indicator.md)
 - [finnhub.Investor](docs/Investor.md)
 - [finnhub.InvestorsOwnership](docs/InvestorsOwnership.md)
 - [finnhub.MajorDevelopments](docs/MajorDevelopments.md)
 - [finnhub.News](docs/News.md)
 - [finnhub.NewsSentiment](docs/NewsSentiment.md)
 - [finnhub.PatternRecognition](docs/PatternRecognition.md)
 - [finnhub.PriceTarget](docs/PriceTarget.md)
 - [finnhub.Quote](docs/Quote.md)
 - [finnhub.RecommendationTrend](docs/RecommendationTrend.md)
 - [finnhub.Report](docs/Report.md)
 - [finnhub.RevenueEstimates](docs/RevenueEstimates.md)
 - [finnhub.Sentiment](docs/Sentiment.md)
 - [finnhub.Split](docs/Split.md)
 - [finnhub.Stock](docs/Stock.md)
 - [finnhub.StockCandles](docs/StockCandles.md)
 - [finnhub.StockTranscripts](docs/StockTranscripts.md)
 - [finnhub.SupportResistance](docs/SupportResistance.md)
 - [finnhub.TechnicalAnalysis](docs/TechnicalAnalysis.md)
 - [finnhub.TechnicalIndicators](docs/TechnicalIndicators.md)
 - [finnhub.TickData](docs/TickData.md)
 - [finnhub.TranscriptContent](docs/TranscriptContent.md)
 - [finnhub.TranscriptParticipant](docs/TranscriptParticipant.md)
 - [finnhub.Trend](docs/Trend.md)
 - [finnhub.UpgradeDowngrade](docs/UpgradeDowngrade.md)


## License

Apache License
