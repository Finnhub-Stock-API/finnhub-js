# finnhub.DefaultApi

All URIs are relative to *https://finnhub.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aggregateIndicator**](DefaultApi.md#aggregateIndicator) | **GET** /scan/technical-indicator | Aggregate Indicators
[**companyBasicFinancials**](DefaultApi.md#companyBasicFinancials) | **GET** /stock/metric | Basic Financials
[**companyEarnings**](DefaultApi.md#companyEarnings) | **GET** /stock/earnings | Earnings Surprises
[**companyEpsEstimates**](DefaultApi.md#companyEpsEstimates) | **GET** /stock/eps-estimate | Earnings Estimates
[**companyEsgScore**](DefaultApi.md#companyEsgScore) | **GET** /stock/esg | Company ESG Scores
[**companyExecutive**](DefaultApi.md#companyExecutive) | **GET** /stock/executive | Company Executive
[**companyNews**](DefaultApi.md#companyNews) | **GET** /company-news | Company News
[**companyPeers**](DefaultApi.md#companyPeers) | **GET** /stock/peers | Peers
[**companyProfile**](DefaultApi.md#companyProfile) | **GET** /stock/profile | Company Profile
[**companyProfile2**](DefaultApi.md#companyProfile2) | **GET** /stock/profile2 | Company Profile 2
[**companyRevenueEstimates**](DefaultApi.md#companyRevenueEstimates) | **GET** /stock/revenue-estimate | Revenue Estimates
[**country**](DefaultApi.md#country) | **GET** /country | Country Metadata
[**covid19**](DefaultApi.md#covid19) | **GET** /covid19/us | COVID-19
[**cryptoCandles**](DefaultApi.md#cryptoCandles) | **GET** /crypto/candle | Crypto Candles
[**cryptoExchanges**](DefaultApi.md#cryptoExchanges) | **GET** /crypto/exchange | Crypto Exchanges
[**cryptoSymbols**](DefaultApi.md#cryptoSymbols) | **GET** /crypto/symbol | Crypto Symbol
[**earningsCalendar**](DefaultApi.md#earningsCalendar) | **GET** /calendar/earnings | Earnings Calendar
[**economicCalendar**](DefaultApi.md#economicCalendar) | **GET** /calendar/economic | Economic Calendar
[**economicCode**](DefaultApi.md#economicCode) | **GET** /economic/code | Economic Code
[**economicData**](DefaultApi.md#economicData) | **GET** /economic | Economic Data
[**etfsCountryExposure**](DefaultApi.md#etfsCountryExposure) | **GET** /etf/country | ETFs Country Exposure
[**etfsHoldings**](DefaultApi.md#etfsHoldings) | **GET** /etf/holdings | ETFs Holdings
[**etfsProfile**](DefaultApi.md#etfsProfile) | **GET** /etf/profile | ETFs Profile
[**etfsSectorExposure**](DefaultApi.md#etfsSectorExposure) | **GET** /etf/sector | ETFs Sector Exposure
[**fdaCommitteeMeetingCalendar**](DefaultApi.md#fdaCommitteeMeetingCalendar) | **GET** /fda-advisory-committee-calendar | FDA Committee Meeting Calendar
[**filings**](DefaultApi.md#filings) | **GET** /stock/filings | SEC Filings
[**filingsSentiment**](DefaultApi.md#filingsSentiment) | **GET** /stock/filings-sentiment | SEC Sentiment Analysis
[**financials**](DefaultApi.md#financials) | **GET** /stock/financials | Financial Statements
[**financialsReported**](DefaultApi.md#financialsReported) | **GET** /stock/financials-reported | Financials As Reported
[**forexCandles**](DefaultApi.md#forexCandles) | **GET** /forex/candle | Forex Candles
[**forexExchanges**](DefaultApi.md#forexExchanges) | **GET** /forex/exchange | Forex Exchanges
[**forexRates**](DefaultApi.md#forexRates) | **GET** /forex/rates | Forex rates
[**forexSymbols**](DefaultApi.md#forexSymbols) | **GET** /forex/symbol | Forex Symbol
[**fundOwnership**](DefaultApi.md#fundOwnership) | **GET** /stock/fund-ownership | Fund Ownership
[**indicesConstituents**](DefaultApi.md#indicesConstituents) | **GET** /index/constituents | Indices Constituents
[**indicesHistoricalConstituents**](DefaultApi.md#indicesHistoricalConstituents) | **GET** /index/historical-constituents | Indices Historical Constituents
[**insiderTransactions**](DefaultApi.md#insiderTransactions) | **GET** /stock/insider-transactions | Insider Transactions
[**internationalFilings**](DefaultApi.md#internationalFilings) | **GET** /stock/international-filings | International Filings
[**investmentThemes**](DefaultApi.md#investmentThemes) | **GET** /stock/investment-theme | Investment Themes (Thematic Investing)
[**ipoCalendar**](DefaultApi.md#ipoCalendar) | **GET** /calendar/ipo | IPO Calendar
[**marketNews**](DefaultApi.md#marketNews) | **GET** /news | Market News
[**mutualFundCountryExposure**](DefaultApi.md#mutualFundCountryExposure) | **GET** /mutual-fund/country | Mutual Funds Country Exposure
[**mutualFundHoldings**](DefaultApi.md#mutualFundHoldings) | **GET** /mutual-fund/holdings | Mutual Funds Holdings
[**mutualFundProfile**](DefaultApi.md#mutualFundProfile) | **GET** /mutual-fund/profile | Mutual Funds Profile
[**mutualFundSectorExposure**](DefaultApi.md#mutualFundSectorExposure) | **GET** /mutual-fund/sector | Mutual Funds Sector Exposure
[**newsSentiment**](DefaultApi.md#newsSentiment) | **GET** /news-sentiment | News Sentiment
[**ownership**](DefaultApi.md#ownership) | **GET** /stock/ownership | Ownership
[**patternRecognition**](DefaultApi.md#patternRecognition) | **GET** /scan/pattern | Pattern Recognition
[**pressReleases**](DefaultApi.md#pressReleases) | **GET** /press-releases | Major Press Releases
[**priceTarget**](DefaultApi.md#priceTarget) | **GET** /stock/price-target | Price Target
[**quote**](DefaultApi.md#quote) | **GET** /quote | Quote
[**recommendationTrends**](DefaultApi.md#recommendationTrends) | **GET** /stock/recommendation | Recommendation Trends
[**revenueBreakdown**](DefaultApi.md#revenueBreakdown) | **GET** /stock/revenue-breakdown | Revenue Breakdown
[**similarityIndex**](DefaultApi.md#similarityIndex) | **GET** /stock/similarity-index | Similarity Index
[**socialSentiment**](DefaultApi.md#socialSentiment) | **GET** /stock/social-sentiment | Social Sentiment
[**stockBasicDividends**](DefaultApi.md#stockBasicDividends) | **GET** /stock/dividend2 | Dividends 2 (Basic)
[**stockBidask**](DefaultApi.md#stockBidask) | **GET** /stock/bidask | Last Bid-Ask
[**stockCandles**](DefaultApi.md#stockCandles) | **GET** /stock/candle | Stock Candles
[**stockDividends**](DefaultApi.md#stockDividends) | **GET** /stock/dividend | Dividends
[**stockNbbo**](DefaultApi.md#stockNbbo) | **GET** /stock/bbo | Historical NBBO
[**stockSplits**](DefaultApi.md#stockSplits) | **GET** /stock/split | Splits
[**stockSymbols**](DefaultApi.md#stockSymbols) | **GET** /stock/symbol | Stock Symbol
[**stockTick**](DefaultApi.md#stockTick) | **GET** /stock/tick | Tick Data
[**supplyChainRelationships**](DefaultApi.md#supplyChainRelationships) | **GET** /stock/supply-chain | Supply Chain Relationships
[**supportResistance**](DefaultApi.md#supportResistance) | **GET** /scan/support-resistance | Support/Resistance
[**symbolSearch**](DefaultApi.md#symbolSearch) | **GET** /search | Symbol Lookup
[**technicalIndicator**](DefaultApi.md#technicalIndicator) | **POST** /indicator | Technical Indicators
[**transcripts**](DefaultApi.md#transcripts) | **GET** /stock/transcripts | Earnings Call Transcripts
[**transcriptsList**](DefaultApi.md#transcriptsList) | **GET** /stock/transcripts/list | Earnings Call Transcripts List
[**upgradeDowngrade**](DefaultApi.md#upgradeDowngrade) | **GET** /stock/upgrade-downgrade | Stock Upgrade/Downgrade



## aggregateIndicator

> AggregateIndicators aggregateIndicator(symbol, resolution)

Aggregate Indicators

Get aggregate signal of multiple technical indicators such as MACD, RSI, Moving Average v.v.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | symbol
let resolution = "resolution_example"; // String | Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange.
apiInstance.aggregateIndicator(symbol, resolution, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| symbol | 
 **resolution** | **String**| Supported resolution includes &lt;code&gt;1, 5, 15, 30, 60, D, W, M &lt;/code&gt;.Some timeframes might not be available depending on the exchange. | 

### Return type

[**AggregateIndicators**](AggregateIndicators.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyBasicFinancials

> BasicFinancials companyBasicFinancials(symbol, metric)

Basic Financials

Get company basic financials such as margin, P/E ratio, 52-week high/low etc.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol of the company: AAPL.
let metric = "metric_example"; // String | Metric type. Can be 1 of the following values <code>all</code>
apiInstance.companyBasicFinancials(symbol, metric, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol of the company: AAPL. | 
 **metric** | **String**| Metric type. Can be 1 of the following values &lt;code&gt;all&lt;/code&gt; | 

### Return type

[**BasicFinancials**](BasicFinancials.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyEarnings

> [EarningResult] companyEarnings(symbol, opts)

Earnings Surprises

Get company historical quarterly earnings surprise going back to 2000.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol of the company: AAPL.
let opts = {
  'limit': 789 // Number | Limit number of period returned. Leave blank to get the full history.
};
apiInstance.companyEarnings(symbol, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol of the company: AAPL. | 
 **limit** | **Number**| Limit number of period returned. Leave blank to get the full history. | [optional] 

### Return type

[**[EarningResult]**](EarningResult.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyEpsEstimates

> EarningsEstimates companyEpsEstimates(symbol, opts)

Earnings Estimates

Get company&#39;s EPS estimates.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol of the company: AAPL.
let opts = {
  'freq': "freq_example" // String | Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code>
};
apiInstance.companyEpsEstimates(symbol, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol of the company: AAPL. | 
 **freq** | **String**| Can take 1 of the following values: &lt;code&gt;annual, quarterly&lt;/code&gt;. Default to &lt;code&gt;quarterly&lt;/code&gt; | [optional] 

### Return type

[**EarningsEstimates**](EarningsEstimates.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyEsgScore

> CompanyESG companyEsgScore(symbol)

Company ESG Scores

&lt;p&gt;This endpoint provides ESG scores and important indicators for 1000+ global companies. The data is collected through company&#39;s public ESG disclosure and public sources.&lt;/p&gt;&lt;p&gt;Our ESG scoring models takes into account more than 150 different inputs to calculate the level of ESG risks and how well a company is managing them. A higher score means lower ESG risk or better ESG management. ESG scores are in the the range of 0-100. Some key indicators might contain letter-grade score from C- to A+ with C- is the lowest score and A+ is the highest score.&lt;/p&gt;

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol.
apiInstance.companyEsgScore(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol. | 

### Return type

[**CompanyESG**](CompanyESG.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyExecutive

> CompanyExecutive companyExecutive(symbol)

Company Executive

Get a list of company&#39;s executives and members of the Board.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol of the company: AAPL.
apiInstance.companyExecutive(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol of the company: AAPL. | 

### Return type

[**CompanyExecutive**](CompanyExecutive.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyNews

> [CompanyNews] companyNews(symbol, from, to)

Company News

List latest company news by symbol. This endpoint is only available for North American companies.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Company symbol.
let from = new Date("2013-10-20"); // Date | From date <code>YYYY-MM-DD</code>.
let to = new Date("2013-10-20"); // Date | To date <code>YYYY-MM-DD</code>.
apiInstance.companyNews(symbol, from, to, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Company symbol. | 
 **from** | **Date**| From date &lt;code&gt;YYYY-MM-DD&lt;/code&gt;. | 
 **to** | **Date**| To date &lt;code&gt;YYYY-MM-DD&lt;/code&gt;. | 

### Return type

[**[CompanyNews]**](CompanyNews.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyPeers

> [String] companyPeers(symbol)

Peers

Get company peers. Return a list of peers in the same country and GICS sub-industry

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol of the company: AAPL.
apiInstance.companyPeers(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol of the company: AAPL. | 

### Return type

**[String]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyProfile

> CompanyProfile companyProfile(opts)

Company Profile

Get general information of a company. You can query by symbol, ISIN or CUSIP

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let opts = {
  'symbol': "symbol_example", // String | Symbol of the company: AAPL e.g.
  'isin': "isin_example", // String | ISIN
  'cusip': "cusip_example" // String | CUSIP
};
apiInstance.companyProfile(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol of the company: AAPL e.g. | [optional] 
 **isin** | **String**| ISIN | [optional] 
 **cusip** | **String**| CUSIP | [optional] 

### Return type

[**CompanyProfile**](CompanyProfile.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyProfile2

> CompanyProfile2 companyProfile2(opts)

Company Profile 2

Get general information of a company. You can query by symbol, ISIN or CUSIP. This is the free version of &lt;a href&#x3D;\&quot;#company-profile\&quot;&gt;Company Profile&lt;/a&gt;.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let opts = {
  'symbol': "symbol_example", // String | Symbol of the company: AAPL e.g.
  'isin': "isin_example", // String | ISIN
  'cusip': "cusip_example" // String | CUSIP
};
apiInstance.companyProfile2(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol of the company: AAPL e.g. | [optional] 
 **isin** | **String**| ISIN | [optional] 
 **cusip** | **String**| CUSIP | [optional] 

### Return type

[**CompanyProfile2**](CompanyProfile2.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyRevenueEstimates

> RevenueEstimates companyRevenueEstimates(symbol, opts)

Revenue Estimates

Get company&#39;s revenue estimates.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol of the company: AAPL.
let opts = {
  'freq': "freq_example" // String | Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code>
};
apiInstance.companyRevenueEstimates(symbol, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol of the company: AAPL. | 
 **freq** | **String**| Can take 1 of the following values: &lt;code&gt;annual, quarterly&lt;/code&gt;. Default to &lt;code&gt;quarterly&lt;/code&gt; | [optional] 

### Return type

[**RevenueEstimates**](RevenueEstimates.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## country

> [CountryMetadata] country()

Country Metadata

List all countries and metadata.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
apiInstance.country((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[CountryMetadata]**](CountryMetadata.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## covid19

> [CovidInfo] covid19()

COVID-19

Get real-time updates on the number of COVID-19 (Corona virus) cases in the US with a state-by-state breakdown. Data is sourced from CDC and reputable sources. You can also access this API &lt;a href&#x3D;\&quot;https://rapidapi.com/Finnhub/api/finnhub-real-time-covid-19\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;nofollow\&quot;&gt;here&lt;/a&gt;

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
apiInstance.covid19((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[CovidInfo]**](CovidInfo.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cryptoCandles

> CryptoCandles cryptoCandles(symbol, resolution, from, to)

Crypto Candles

Get candlestick data for crypto symbols.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Use symbol returned in <code>/crypto/symbol</code> endpoint for this field.
let resolution = "resolution_example"; // String | Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange.
let from = 789; // Number | UNIX timestamp. Interval initial value.
let to = 789; // Number | UNIX timestamp. Interval end value.
apiInstance.cryptoCandles(symbol, resolution, from, to, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Use symbol returned in &lt;code&gt;/crypto/symbol&lt;/code&gt; endpoint for this field. | 
 **resolution** | **String**| Supported resolution includes &lt;code&gt;1, 5, 15, 30, 60, D, W, M &lt;/code&gt;.Some timeframes might not be available depending on the exchange. | 
 **from** | **Number**| UNIX timestamp. Interval initial value. | 
 **to** | **Number**| UNIX timestamp. Interval end value. | 

### Return type

[**CryptoCandles**](CryptoCandles.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cryptoExchanges

> [String] cryptoExchanges()

Crypto Exchanges

List supported crypto exchanges

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
apiInstance.cryptoExchanges((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cryptoSymbols

> [CryptoSymbol] cryptoSymbols(exchange)

Crypto Symbol

List supported crypto symbols by exchange

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let exchange = "exchange_example"; // String | Exchange you want to get the list of symbols from.
apiInstance.cryptoSymbols(exchange, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **String**| Exchange you want to get the list of symbols from. | 

### Return type

[**[CryptoSymbol]**](CryptoSymbol.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## earningsCalendar

> EarningsCalendar earningsCalendar(opts)

Earnings Calendar

Get historical and coming earnings release. EPS and Revenue in this endpoint are non-GAAP, which means they are adjusted to exclude some one-time or unusual items. This is the same data investors usually react to and talked about on the media. Estimates are sourced from both sell-side and buy-side analysts.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let opts = {
  'from': new Date("2013-10-20"), // Date | From date: 2020-03-15.
  'to': new Date("2013-10-20"), // Date | To date: 2020-03-16.
  'symbol': "symbol_example", // String | Filter by symbol: AAPL.
  'international': true // Boolean | Set to <code>true</code> to include international markets. Default value is <code>false</code>
};
apiInstance.earningsCalendar(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **Date**| From date: 2020-03-15. | [optional] 
 **to** | **Date**| To date: 2020-03-16. | [optional] 
 **symbol** | **String**| Filter by symbol: AAPL. | [optional] 
 **international** | **Boolean**| Set to &lt;code&gt;true&lt;/code&gt; to include international markets. Default value is &lt;code&gt;false&lt;/code&gt; | [optional] 

### Return type

[**EarningsCalendar**](EarningsCalendar.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## economicCalendar

> EconomicCalendar economicCalendar()

Economic Calendar

&lt;p&gt;Get recent and upcoming economic releases.&lt;/p&gt;&lt;p&gt;Historical events and surprises are available for Enterprise clients.&lt;/p&gt;

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
apiInstance.economicCalendar((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**EconomicCalendar**](EconomicCalendar.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## economicCode

> [EconomicCode] economicCode()

Economic Code

List codes of supported economic data.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
apiInstance.economicCode((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[EconomicCode]**](EconomicCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## economicData

> EconomicData economicData(code)

Economic Data

Get economic data.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let code = "code_example"; // String | Economic code.
apiInstance.economicData(code, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Economic code. | 

### Return type

[**EconomicData**](EconomicData.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## etfsCountryExposure

> ETFsCountryExposure etfsCountryExposure(symbol)

ETFs Country Exposure

Get ETF country exposure data.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | ETF symbol.
apiInstance.etfsCountryExposure(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| ETF symbol. | 

### Return type

[**ETFsCountryExposure**](ETFsCountryExposure.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## etfsHoldings

> ETFsHoldings etfsHoldings(opts)

ETFs Holdings

Get full ETF holdings/constituents. This endpoint has global coverage. Widget only shows top 10 holdings.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let opts = {
  'symbol': "symbol_example", // String | ETF symbol.
  'isin': "isin_example", // String | ETF isin.
  'skip': 789 // Number | Skip the first n results. You can use this parameter to query historical constituents data. The latest result is returned if skip=0 or not set.
};
apiInstance.etfsHoldings(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| ETF symbol. | [optional] 
 **isin** | **String**| ETF isin. | [optional] 
 **skip** | **Number**| Skip the first n results. You can use this parameter to query historical constituents data. The latest result is returned if skip&#x3D;0 or not set. | [optional] 

### Return type

[**ETFsHoldings**](ETFsHoldings.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## etfsProfile

> ETFsProfile etfsProfile(opts)

ETFs Profile

Get ETF profile information. This endpoint has global coverage.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let opts = {
  'symbol': "symbol_example", // String | ETF symbol.
  'isin': "isin_example" // String | ETF isin.
};
apiInstance.etfsProfile(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| ETF symbol. | [optional] 
 **isin** | **String**| ETF isin. | [optional] 

### Return type

[**ETFsProfile**](ETFsProfile.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## etfsSectorExposure

> ETFsSectorExposure etfsSectorExposure(symbol)

ETFs Sector Exposure

Get ETF sector exposure data.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | ETF symbol.
apiInstance.etfsSectorExposure(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| ETF symbol. | 

### Return type

[**ETFsSectorExposure**](ETFsSectorExposure.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fdaCommitteeMeetingCalendar

> [FDAComitteeMeeting] fdaCommitteeMeetingCalendar()

FDA Committee Meeting Calendar

FDA&#39;s advisory committees are established to provide functions which support the agency&#39;s mission of protecting and promoting the public health, while meeting the requirements set forth in the Federal Advisory Committee Act. Committees are either mandated by statute or established at the discretion of the Department of Health and Human Services. Each committee is subject to renewal at two-year intervals unless the committee charter states otherwise.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
apiInstance.fdaCommitteeMeetingCalendar((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[FDAComitteeMeeting]**](FDAComitteeMeeting.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filings

> [Filing] filings(opts)

SEC Filings

List company&#39;s filing. Limit to 250 documents at a time. This data is available for bulk download on &lt;a href&#x3D;\&quot;https://www.kaggle.com/finnhub/sec-filings\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Kaggle SEC Filings database&lt;/a&gt;.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let opts = {
  'symbol': "symbol_example", // String | Symbol. Leave <code>symbol</code>,<code>cik</code> and <code>accessNumber</code> empty to list latest filings.
  'cik': "cik_example", // String | CIK.
  'accessNumber': "accessNumber_example", // String | Access number of a specific report you want to retrieve data from.
  'form': "form_example", // String | Filter by form. You can use this value <code>NT 10-K</code> to find non-timely filings for a company.
  'from': new Date("2013-10-20"), // Date | From date: 2020-03-15.
  'to': new Date("2013-10-20") // Date | To date: 2020-03-16.
};
apiInstance.filings(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol. Leave &lt;code&gt;symbol&lt;/code&gt;,&lt;code&gt;cik&lt;/code&gt; and &lt;code&gt;accessNumber&lt;/code&gt; empty to list latest filings. | [optional] 
 **cik** | **String**| CIK. | [optional] 
 **accessNumber** | **String**| Access number of a specific report you want to retrieve data from. | [optional] 
 **form** | **String**| Filter by form. You can use this value &lt;code&gt;NT 10-K&lt;/code&gt; to find non-timely filings for a company. | [optional] 
 **from** | **Date**| From date: 2020-03-15. | [optional] 
 **to** | **Date**| To date: 2020-03-16. | [optional] 

### Return type

[**[Filing]**](Filing.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filingsSentiment

> SECSentimentAnalysis filingsSentiment(accessNumber)

SEC Sentiment Analysis

Get sentiment analysis of 10-K and 10-Q filings from SEC. An abnormal increase in the number of positive/negative words in filings can signal a significant change in the company&#39;s stock price in the upcoming 4 quarters. We make use of &lt;a href&#x3D; \&quot;https://sraf.nd.edu/textual-analysis/resources/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Loughran and McDonald Sentiment Word Lists&lt;/a&gt; to calculate the sentiment for each filing.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let accessNumber = "accessNumber_example"; // String | Access number of a specific report you want to retrieve data from.
apiInstance.filingsSentiment(accessNumber, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessNumber** | **String**| Access number of a specific report you want to retrieve data from. | 

### Return type

[**SECSentimentAnalysis**](SECSentimentAnalysis.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## financials

> FinancialStatements financials(symbol, statement, freq)

Financial Statements

&lt;p&gt;Get standardized balance sheet, income statement and cash flow for global companies going back 30+ years. Data is sourced from original filings most of which made available through &lt;a href&#x3D;\&quot;#filings\&quot;&gt;SEC Filings&lt;/a&gt; and &lt;a href&#x3D;\&quot;#international-filings\&quot;&gt;International Filings&lt;/a&gt; endpoints.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Wondering why our standardized data is different from Bloomberg, Reuters, Factset, S&amp;P or Yahoo Finance ? Check out our &lt;a href&#x3D;\&quot;/faq\&quot;&gt;FAQ page&lt;/a&gt; to learn more&lt;/i&gt;&lt;/p&gt;

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol of the company: AAPL.
let statement = "statement_example"; // String | Statement can take 1 of these values <code>bs, ic, cf</code> for Balance Sheet, Income Statement, Cash Flow respectively.
let freq = "freq_example"; // String | Frequency can take 1 of these values <code>annual, quarterly, ttm, ytd</code>.  TTM (Trailing Twelve Months) option is available for Income Statement and Cash Flow. YTD (Year To Date) option is only available for Cash Flow.
apiInstance.financials(symbol, statement, freq, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol of the company: AAPL. | 
 **statement** | **String**| Statement can take 1 of these values &lt;code&gt;bs, ic, cf&lt;/code&gt; for Balance Sheet, Income Statement, Cash Flow respectively. | 
 **freq** | **String**| Frequency can take 1 of these values &lt;code&gt;annual, quarterly, ttm, ytd&lt;/code&gt;.  TTM (Trailing Twelve Months) option is available for Income Statement and Cash Flow. YTD (Year To Date) option is only available for Cash Flow. | 

### Return type

[**FinancialStatements**](FinancialStatements.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## financialsReported

> FinancialsAsReported financialsReported(opts)

Financials As Reported

Get financials as reported. This data is available for bulk download on &lt;a href&#x3D;\&quot;https://www.kaggle.com/finnhub/reported-financials\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Kaggle SEC Financials database&lt;/a&gt;.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let opts = {
  'symbol': "symbol_example", // String | Symbol.
  'cik': "cik_example", // String | CIK.
  'accessNumber': "accessNumber_example", // String | Access number of a specific report you want to retrieve financials from.
  'freq': "freq_example" // String | Frequency. Can be either <code>annual</code> or <code>quarterly</code>. Default to <code>annual</code>.
};
apiInstance.financialsReported(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol. | [optional] 
 **cik** | **String**| CIK. | [optional] 
 **accessNumber** | **String**| Access number of a specific report you want to retrieve financials from. | [optional] 
 **freq** | **String**| Frequency. Can be either &lt;code&gt;annual&lt;/code&gt; or &lt;code&gt;quarterly&lt;/code&gt;. Default to &lt;code&gt;annual&lt;/code&gt;. | [optional] 

### Return type

[**FinancialsAsReported**](FinancialsAsReported.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## forexCandles

> ForexCandles forexCandles(symbol, resolution, from, to)

Forex Candles

Get candlestick data for forex symbols.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Use symbol returned in <code>/forex/symbol</code> endpoint for this field.
let resolution = "resolution_example"; // String | Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange.
let from = 789; // Number | UNIX timestamp. Interval initial value.
let to = 789; // Number | UNIX timestamp. Interval end value.
apiInstance.forexCandles(symbol, resolution, from, to, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Use symbol returned in &lt;code&gt;/forex/symbol&lt;/code&gt; endpoint for this field. | 
 **resolution** | **String**| Supported resolution includes &lt;code&gt;1, 5, 15, 30, 60, D, W, M &lt;/code&gt;.Some timeframes might not be available depending on the exchange. | 
 **from** | **Number**| UNIX timestamp. Interval initial value. | 
 **to** | **Number**| UNIX timestamp. Interval end value. | 

### Return type

[**ForexCandles**](ForexCandles.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## forexExchanges

> [String] forexExchanges()

Forex Exchanges

List supported forex exchanges

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
apiInstance.forexExchanges((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## forexRates

> Forexrates forexRates(opts)

Forex rates

Get rates for all forex pairs. Ideal for currency conversion

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let opts = {
  'base': "base_example" // String | Base currency. Default to EUR.
};
apiInstance.forexRates(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **base** | **String**| Base currency. Default to EUR. | [optional] 

### Return type

[**Forexrates**](Forexrates.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## forexSymbols

> [ForexSymbol] forexSymbols(exchange)

Forex Symbol

List supported forex symbols.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let exchange = "exchange_example"; // String | Exchange you want to get the list of symbols from.
apiInstance.forexSymbols(exchange, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **String**| Exchange you want to get the list of symbols from. | 

### Return type

[**[ForexSymbol]**](ForexSymbol.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fundOwnership

> FundOwnership fundOwnership(symbol, opts)

Fund Ownership

Get a full list fund and institutional investors of a company in descending order of the number of shares held. Data is sourced from &lt;code&gt;13F form&lt;/code&gt;, &lt;code&gt;Schedule 13D&lt;/code&gt; and &lt;code&gt;13G&lt;/code&gt; for US market, &lt;code&gt;UK Share Register&lt;/code&gt; for UK market, &lt;code&gt;SEDI&lt;/code&gt; for Canadian market and equivalent filings for other international markets.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol of the company: AAPL.
let opts = {
  'limit': 789 // Number | Limit number of results. Leave empty to get the full list.
};
apiInstance.fundOwnership(symbol, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol of the company: AAPL. | 
 **limit** | **Number**| Limit number of results. Leave empty to get the full list. | [optional] 

### Return type

[**FundOwnership**](FundOwnership.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indicesConstituents

> IndicesConstituents indicesConstituents(symbol)

Indices Constituents

Get a list of index&#39;s constituents. A list of supported indices for this endpoint can be found &lt;a href&#x3D;\&quot;https://docs.google.com/spreadsheets/d/1Syr2eLielHWsorxkDEZXyc55d6bNx1M3ZeI4vdn7Qzo/edit?usp&#x3D;sharing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | symbol
apiInstance.indicesConstituents(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| symbol | 

### Return type

[**IndicesConstituents**](IndicesConstituents.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indicesHistoricalConstituents

> IndicesHistoricalConstituents indicesHistoricalConstituents(symbol)

Indices Historical Constituents

Get full history of index&#39;s constituents including symbols and dates of joining and leaving the Index. Currently support &lt;code&gt;^GSPC (S&amp;P 500)&lt;/code&gt;, &lt;code&gt;^NDX (Nasdaq 100)&lt;/code&gt;, &lt;code&gt;^DJI (Dow Jones)&lt;/code&gt;

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | symbol
apiInstance.indicesHistoricalConstituents(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| symbol | 

### Return type

[**IndicesHistoricalConstituents**](IndicesHistoricalConstituents.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insiderTransactions

> InsiderTransactions insiderTransactions(symbol, opts)

Insider Transactions

Company insider transactions data sourced from &lt;code&gt;Form 3,4,5&lt;/code&gt;. This endpoint only covers US companies at the moment. Limit to 100 transactions per API call.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol of the company: AAPL.
let opts = {
  'from': new Date("2013-10-20"), // Date | From date: 2020-03-15.
  'to': new Date("2013-10-20") // Date | To date: 2020-03-16.
};
apiInstance.insiderTransactions(symbol, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol of the company: AAPL. | 
 **from** | **Date**| From date: 2020-03-15. | [optional] 
 **to** | **Date**| To date: 2020-03-16. | [optional] 

### Return type

[**InsiderTransactions**](InsiderTransactions.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## internationalFilings

> [InternationalFiling] internationalFilings(opts)

International Filings

List filings for international companies which covers 95%+ of global market cap. Limit to 250 documents at a time. These are the documents we use to source our fundamental data.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let opts = {
  'symbol': "symbol_example", // String | Symbol. Leave empty to list latest filings.
  'country': "country_example" // String | Filter by country using country's 2-letter code.
};
apiInstance.internationalFilings(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol. Leave empty to list latest filings. | [optional] 
 **country** | **String**| Filter by country using country&#39;s 2-letter code. | [optional] 

### Return type

[**[InternationalFiling]**](InternationalFiling.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## investmentThemes

> InvestmentThemes investmentThemes(theme)

Investment Themes (Thematic Investing)

&lt;p&gt;Thematic investing involves creating a portfolio (or portion of a portfolio) by gathering together a collection of companies involved in certain areas that you predict will generate above-market returns over the long term. Themes can be based on a concept such as ageing populations or a sub-sector such as robotics, and drones. Thematic investing focuses on predicted long-term trends rather than specific companies or sectors, enabling investors to access structural, one-off shifts that can change an entire industry.&lt;/p&gt;&lt;p&gt;This endpoint will help you get portfolios of different investment themes that are changing our life and are the way of the future.&lt;/p&gt;&lt;p&gt;A full list of themes supported can be found &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://docs.google.com/spreadsheets/d/1ULj9xDh4iPoQj279M084adZ2_S852ttRthKKJ7madYc/edit?usp&#x3D;sharing\&quot;&gt;here&lt;/a&gt;. The theme coverage and portfolios are updated bi-weekly by our analysts. Our approach excludes penny, super-small cap and illiquid stocks.&lt;/p&gt;

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let theme = "theme_example"; // String | Investment theme. A full list of themes supported can be found <a target=\"_blank\" href=\"https://docs.google.com/spreadsheets/d/1ULj9xDh4iPoQj279M084adZ2_S852ttRthKKJ7madYc/edit?usp=sharing\">here</a>.
apiInstance.investmentThemes(theme, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **theme** | **String**| Investment theme. A full list of themes supported can be found &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://docs.google.com/spreadsheets/d/1ULj9xDh4iPoQj279M084adZ2_S852ttRthKKJ7madYc/edit?usp&#x3D;sharing\&quot;&gt;here&lt;/a&gt;. | 

### Return type

[**InvestmentThemes**](InvestmentThemes.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ipoCalendar

> IPOCalendar ipoCalendar(from, to)

IPO Calendar

Get recent and upcoming IPO.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let from = new Date("2013-10-20"); // Date | From date: 2020-03-15.
let to = new Date("2013-10-20"); // Date | To date: 2020-03-16.
apiInstance.ipoCalendar(from, to, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **Date**| From date: 2020-03-15. | 
 **to** | **Date**| To date: 2020-03-16. | 

### Return type

[**IPOCalendar**](IPOCalendar.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## marketNews

> [MarketNews] marketNews(category, opts)

Market News

Get latest market news.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let category = "category_example"; // String | This parameter can be 1 of the following values <code>general, forex, crypto, merger</code>.
let opts = {
  'minId': 789 // Number | Use this field to get only news after this ID. Default to 0
};
apiInstance.marketNews(category, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**| This parameter can be 1 of the following values &lt;code&gt;general, forex, crypto, merger&lt;/code&gt;. | 
 **minId** | **Number**| Use this field to get only news after this ID. Default to 0 | [optional] 

### Return type

[**[MarketNews]**](MarketNews.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mutualFundCountryExposure

> MutualFundCountryExposure mutualFundCountryExposure(symbol)

Mutual Funds Country Exposure

Get Mutual Funds country exposure data.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol.
apiInstance.mutualFundCountryExposure(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol. | 

### Return type

[**MutualFundCountryExposure**](MutualFundCountryExposure.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mutualFundHoldings

> MutualFundHoldings mutualFundHoldings(opts)

Mutual Funds Holdings

Get full Mutual Funds holdings/constituents.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let opts = {
  'symbol': "symbol_example", // String | Fund's symbol.
  'isin': "isin_example", // String | Fund's isin.
  'skip': 789 // Number | Skip the first n results. You can use this parameter to query historical constituents data. The latest result is returned if skip=0 or not set.
};
apiInstance.mutualFundHoldings(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Fund&#39;s symbol. | [optional] 
 **isin** | **String**| Fund&#39;s isin. | [optional] 
 **skip** | **Number**| Skip the first n results. You can use this parameter to query historical constituents data. The latest result is returned if skip&#x3D;0 or not set. | [optional] 

### Return type

[**MutualFundHoldings**](MutualFundHoldings.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mutualFundProfile

> MutualFundProfile mutualFundProfile(opts)

Mutual Funds Profile

Get mutual funds profile information. This endpoint covers US mutual funds only.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let opts = {
  'symbol': "symbol_example", // String | Fund's symbol.
  'isin': "isin_example" // String | Fund's isin.
};
apiInstance.mutualFundProfile(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Fund&#39;s symbol. | [optional] 
 **isin** | **String**| Fund&#39;s isin. | [optional] 

### Return type

[**MutualFundProfile**](MutualFundProfile.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mutualFundSectorExposure

> MutualFundSectorExposure mutualFundSectorExposure(symbol)

Mutual Funds Sector Exposure

Get Mutual Funds sector exposure data.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Mutual Fund symbol.
apiInstance.mutualFundSectorExposure(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Mutual Fund symbol. | 

### Return type

[**MutualFundSectorExposure**](MutualFundSectorExposure.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## newsSentiment

> NewsSentiment newsSentiment(symbol)

News Sentiment

Get company&#39;s news sentiment and statistics. This endpoint is only available for US companies.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Company symbol.
apiInstance.newsSentiment(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Company symbol. | 

### Return type

[**NewsSentiment**](NewsSentiment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ownership

> Ownership ownership(symbol, opts)

Ownership

Get a full list of shareholders of a company in descending order of the number of shares held. Data is sourced from &lt;code&gt;13F form&lt;/code&gt;, &lt;code&gt;Schedule 13D&lt;/code&gt; and &lt;code&gt;13G&lt;/code&gt; for US market, &lt;code&gt;UK Share Register&lt;/code&gt; for UK market, &lt;code&gt;SEDI&lt;/code&gt; for Canadian market and equivalent filings for other international markets.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol of the company: AAPL.
let opts = {
  'limit': 789 // Number | Limit number of results. Leave empty to get the full list.
};
apiInstance.ownership(symbol, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol of the company: AAPL. | 
 **limit** | **Number**| Limit number of results. Leave empty to get the full list. | [optional] 

### Return type

[**Ownership**](Ownership.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patternRecognition

> PatternRecognition patternRecognition(symbol, resolution)

Pattern Recognition

Run pattern recognition algorithm on a symbol. Support double top/bottom, triple top/bottom, head and shoulders, triangle, wedge, channel, flag, and candlestick patterns.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol
let resolution = "resolution_example"; // String | Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange.
apiInstance.patternRecognition(symbol, resolution, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol | 
 **resolution** | **String**| Supported resolution includes &lt;code&gt;1, 5, 15, 30, 60, D, W, M &lt;/code&gt;.Some timeframes might not be available depending on the exchange. | 

### Return type

[**PatternRecognition**](PatternRecognition.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pressReleases

> PressRelease pressReleases(symbol, opts)

Major Press Releases

Get latest major press releases of a company. This data can be used to highlight the most significant events comprised of mostly press releases sourced from the exchanges, BusinessWire, AccessWire, GlobeNewswire, Newsfile, and PRNewswire.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Company symbol.
let opts = {
  'from': new Date("2013-10-20"), // Date | From time: 2020-01-01.
  'to': new Date("2013-10-20") // Date | To time: 2020-01-05.
};
apiInstance.pressReleases(symbol, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Company symbol. | 
 **from** | **Date**| From time: 2020-01-01. | [optional] 
 **to** | **Date**| To time: 2020-01-05. | [optional] 

### Return type

[**PressRelease**](PressRelease.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## priceTarget

> PriceTarget priceTarget(symbol)

Price Target

Get latest price target consensus.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol of the company: AAPL.
apiInstance.priceTarget(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol of the company: AAPL. | 

### Return type

[**PriceTarget**](PriceTarget.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## quote

> Quote quote(symbol)

Quote

&lt;p&gt;Get real-time quote data for US stocks. Constant polling is not recommended. Use websocket if you need real-time updates.&lt;/p&gt;&lt;p&gt;Real-time stock prices for international markets are supported for Enterprise clients via our partner&#39;s feed. &lt;a href&#x3D;\&quot;mailto:support@finnhub.io\&quot;&gt;Contact Us&lt;/a&gt; to learn more.&lt;/p&gt;

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol
apiInstance.quote(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol | 

### Return type

[**Quote**](Quote.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recommendationTrends

> [RecommendationTrend] recommendationTrends(symbol)

Recommendation Trends

Get latest analyst recommendation trends for a company.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol of the company: AAPL.
apiInstance.recommendationTrends(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol of the company: AAPL. | 

### Return type

[**[RecommendationTrend]**](RecommendationTrend.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## revenueBreakdown

> RevenueBreakdown revenueBreakdown(opts)

Revenue Breakdown

Get revenue breakdown by product. This dataset is only available for US companies which disclose their revenue breakdown in the annual or quarterly reports.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let opts = {
  'symbol': "symbol_example", // String | Symbol.
  'cik': "cik_example" // String | CIK.
};
apiInstance.revenueBreakdown(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol. | [optional] 
 **cik** | **String**| CIK. | [optional] 

### Return type

[**RevenueBreakdown**](RevenueBreakdown.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## similarityIndex

> SimilarityIndex similarityIndex(opts)

Similarity Index

&lt;p&gt;Calculate the textual difference between a company&#39;s 10-K / 10-Q reports and the same type of report in the previous year using Cosine Similarity. For example, this endpoint compares 2019&#39;s 10-K with 2018&#39;s 10-K. Companies breaking from its routines in disclosure of financial condition and risk analysis section can signal a significant change in the company&#39;s stock price in the upcoming 4 quarters.&lt;/p&gt;

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let opts = {
  'symbol': "symbol_example", // String | Symbol. Required if cik is empty
  'cik': "cik_example", // String | CIK. Required if symbol is empty
  'freq': "freq_example" // String | <code>annual</code> or <code>quarterly</code>. Default to <code>annual</code>
};
apiInstance.similarityIndex(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol. Required if cik is empty | [optional] 
 **cik** | **String**| CIK. Required if symbol is empty | [optional] 
 **freq** | **String**| &lt;code&gt;annual&lt;/code&gt; or &lt;code&gt;quarterly&lt;/code&gt;. Default to &lt;code&gt;annual&lt;/code&gt; | [optional] 

### Return type

[**SimilarityIndex**](SimilarityIndex.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## socialSentiment

> SocialSentiment socialSentiment(symbol, opts)

Social Sentiment

&lt;p&gt;Get social sentiment for stocks on Reddit and Twitter. This endpoint is currently in Beta.&lt;/p&gt;

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Company symbol.
let opts = {
  'from': new Date("2013-10-20"), // Date | From date <code>YYYY-MM-DD</code>.
  'to': new Date("2013-10-20") // Date | To date <code>YYYY-MM-DD</code>.
};
apiInstance.socialSentiment(symbol, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Company symbol. | 
 **from** | **Date**| From date &lt;code&gt;YYYY-MM-DD&lt;/code&gt;. | [optional] 
 **to** | **Date**| To date &lt;code&gt;YYYY-MM-DD&lt;/code&gt;. | [optional] 

### Return type

[**SocialSentiment**](SocialSentiment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stockBasicDividends

> Dividends2 stockBasicDividends(symbol)

Dividends 2 (Basic)

Get global dividends data.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol.
apiInstance.stockBasicDividends(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol. | 

### Return type

[**Dividends2**](Dividends2.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stockBidask

> LastBidAsk stockBidask(symbol)

Last Bid-Ask

Get last bid/ask data for US stocks.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol.
apiInstance.stockBidask(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol. | 

### Return type

[**LastBidAsk**](LastBidAsk.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stockCandles

> StockCandles stockCandles(symbol, resolution, from, to)

Stock Candles

&lt;p&gt;Get candlestick data (OHLCV) for stocks.&lt;/p&gt;&lt;p&gt;Daily data will be adjusted for Splits. Intraday data will remain unadjusted.&lt;/p&gt;

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol.
let resolution = "resolution_example"; // String | Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange.
let from = 789; // Number | UNIX timestamp. Interval initial value.
let to = 789; // Number | UNIX timestamp. Interval end value.
apiInstance.stockCandles(symbol, resolution, from, to, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol. | 
 **resolution** | **String**| Supported resolution includes &lt;code&gt;1, 5, 15, 30, 60, D, W, M &lt;/code&gt;.Some timeframes might not be available depending on the exchange. | 
 **from** | **Number**| UNIX timestamp. Interval initial value. | 
 **to** | **Number**| UNIX timestamp. Interval end value. | 

### Return type

[**StockCandles**](StockCandles.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stockDividends

> [Dividends] stockDividends(symbol, from, to)

Dividends

Get dividends data for common stocks going back 30 years.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol.
let from = new Date("2013-10-20"); // Date | YYYY-MM-DD.
let to = new Date("2013-10-20"); // Date | YYYY-MM-DD.
apiInstance.stockDividends(symbol, from, to, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol. | 
 **from** | **Date**| YYYY-MM-DD. | 
 **to** | **Date**| YYYY-MM-DD. | 

### Return type

[**[Dividends]**](Dividends.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stockNbbo

> HistoricalNBBO stockNbbo(symbol, date, limit, skip)

Historical NBBO

&lt;p&gt;Get historical best bid and offer for US stocks, LSE, TSX, Euronext and Deutsche Borse.&lt;/p&gt;&lt;p&gt;For US market, this endpoint only serves historical NBBO from the beginning of 2020. To download more historical data, please visit our bulk download page in the Dashboard &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;/dashboard/download\&quot;,&gt;here&lt;/a&gt;.&lt;/p&gt;

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol.
let date = new Date("2013-10-20"); // Date | Date: 2020-04-02.
let limit = 789; // Number | Limit number of ticks returned. Maximum value: <code>25000</code>
let skip = 789; // Number | Number of ticks to skip. Use this parameter to loop through the entire data.
apiInstance.stockNbbo(symbol, date, limit, skip, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol. | 
 **date** | **Date**| Date: 2020-04-02. | 
 **limit** | **Number**| Limit number of ticks returned. Maximum value: &lt;code&gt;25000&lt;/code&gt; | 
 **skip** | **Number**| Number of ticks to skip. Use this parameter to loop through the entire data. | 

### Return type

[**HistoricalNBBO**](HistoricalNBBO.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stockSplits

> [Split] stockSplits(symbol, from, to)

Splits

Get splits data for stocks.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol.
let from = new Date("2013-10-20"); // Date | YYYY-MM-DD.
let to = new Date("2013-10-20"); // Date | YYYY-MM-DD.
apiInstance.stockSplits(symbol, from, to, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol. | 
 **from** | **Date**| YYYY-MM-DD. | 
 **to** | **Date**| YYYY-MM-DD. | 

### Return type

[**[Split]**](Split.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stockSymbols

> [StockSymbol] stockSymbols(exchange, opts)

Stock Symbol

List supported stocks. We use the following symbology to identify stocks on Finnhub &lt;code&gt;Exchange_Ticker.Exchange_Code&lt;/code&gt;. A list of supported exchange codes can be found &lt;a href&#x3D;\&quot;https://docs.google.com/spreadsheets/d/1I3pBxjfXB056-g_JYf_6o3Rns3BV2kMGG1nCatb91ls/edit?usp&#x3D;sharing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. A list of supported CFD Indices can be found &lt;a href&#x3D;\&quot;https://docs.google.com/spreadsheets/d/1BAbIXBgl405fj0oHeEyRFEu8mW4QD1PhvtaBATLoR14/edit?usp&#x3D;sharing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let exchange = "exchange_example"; // String | Exchange you want to get the list of symbols from. List of exchange codes can be found <a href=\"https://docs.google.com/spreadsheets/d/1I3pBxjfXB056-g_JYf_6o3Rns3BV2kMGG1nCatb91ls/edit?usp=sharing\" target=\"_blank\">here</a>.
let opts = {
  'mic': "mic_example", // String | Filter by MIC code.
  'securityType': "securityType_example", // String | Filter by security type used by OpenFigi standard.
  'currency': "currency_example" // String | Filter by currency.
};
apiInstance.stockSymbols(exchange, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **String**| Exchange you want to get the list of symbols from. List of exchange codes can be found &lt;a href&#x3D;\&quot;https://docs.google.com/spreadsheets/d/1I3pBxjfXB056-g_JYf_6o3Rns3BV2kMGG1nCatb91ls/edit?usp&#x3D;sharing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. | 
 **mic** | **String**| Filter by MIC code. | [optional] 
 **securityType** | **String**| Filter by security type used by OpenFigi standard. | [optional] 
 **currency** | **String**| Filter by currency. | [optional] 

### Return type

[**[StockSymbol]**](StockSymbol.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stockTick

> TickData stockTick(symbol, date, limit, skip)

Tick Data

&lt;p&gt;Get historical tick data for global exchanges. You can send the request directly to our tick server at &lt;a href&#x3D;\&quot;https://tick.finnhub.io/\&quot;&gt;https://tick.finnhub.io/&lt;/a&gt; with the same path and parameters or get redirected there if you call our main server.&lt;/p&gt;&lt;p&gt;For US market, you can visit our bulk download page in the Dashboard &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;/dashboard/download\&quot;,&gt;here&lt;/a&gt; to speed up the download process.&lt;/p&gt;&lt;p&gt;Note that for Nasdaq Nordic and Baltic, you need to use ISIN instead of symbol to query tick data. &lt;/p&gt;&lt;table class&#x3D;\&quot;table table-hover\&quot;&gt;   &lt;thead&gt;     &lt;tr&gt;       &lt;th&gt;Exchange&lt;/th&gt;       &lt;th&gt;Segment&lt;/th&gt;       &lt;th&gt;Delay&lt;/th&gt;     &lt;/tr&gt;   &lt;/thead&gt;   &lt;tbody&gt;     &lt;tr&gt;       &lt;td class&#x3D;\&quot;text-blue\&quot;&gt;US CTA/UTP&lt;/th&gt;       &lt;td&gt;Full SIP&lt;/td&gt;       &lt;td&gt;15 minute&lt;/td&gt;     &lt;/tr&gt;     &lt;tr&gt;       &lt;td class&#x3D;\&quot;text-blue\&quot;&gt;TSX&lt;/th&gt;       &lt;td&gt;&lt;ul&gt;&lt;li&gt;TSX&lt;/li&gt;&lt;li&gt;TSX Venture&lt;/li&gt;&lt;li&gt;Index&lt;/li&gt;&lt;/ul&gt;&lt;/td&gt;       &lt;td&gt;End-of-day&lt;/td&gt;     &lt;/tr&gt;     &lt;tr&gt;       &lt;td class&#x3D;\&quot;text-blue\&quot;&gt;LSE&lt;/th&gt;       &lt;td&gt;&lt;ul&gt;&lt;li&gt;London Stock Exchange (L)&lt;/li&gt;&lt;li&gt;LSE International (L)&lt;/li&gt;&lt;li&gt;LSE European (L)&lt;/li&gt;&lt;/ul&gt;&lt;/td&gt;       &lt;td&gt;15 minute&lt;/td&gt;     &lt;/tr&gt;     &lt;tr&gt;       &lt;td class&#x3D;\&quot;text-blue\&quot;&gt;Euronext&lt;/th&gt;       &lt;td&gt;&lt;ul&gt; &lt;li&gt;Euronext Paris (PA)&lt;/li&gt; &lt;li&gt;Euronext Amsterdam (AS)&lt;/li&gt; &lt;li&gt;Euronext Lisbon (LS)&lt;/li&gt; &lt;li&gt;Euronext Brussels (BR)&lt;/li&gt; &lt;li&gt;Euronext Oslo (OL)&lt;/li&gt; &lt;li&gt;Euronext London (LN)&lt;/li&gt; &lt;li&gt;Euronext Dublin (IR)&lt;/li&gt; &lt;li&gt;Index&lt;/li&gt; &lt;li&gt;Warrant&lt;/li&gt;&lt;/ul&gt;&lt;/td&gt;       &lt;td&gt;End-of-day&lt;/td&gt;     &lt;/tr&gt;     &lt;tr&gt;       &lt;td class&#x3D;\&quot;text-blue\&quot;&gt;Deutsche Börse&lt;/th&gt;       &lt;td&gt;&lt;ul&gt; &lt;li&gt;Frankfurt (F)&lt;/li&gt; &lt;li&gt;Xetra (DE)&lt;/li&gt; &lt;li&gt;Duesseldorf (DU)&lt;/li&gt; &lt;li&gt;Hamburg (HM)&lt;/li&gt; &lt;li&gt;Berlin (BE)&lt;/li&gt; &lt;li&gt;Hanover (HA)&lt;/li&gt; &lt;li&gt;Stoxx (SX)&lt;/li&gt; &lt;li&gt;TradeGate (TG)&lt;/li&gt; &lt;li&gt;Zertifikate (SC)&lt;/li&gt; &lt;li&gt;Index&lt;/li&gt; &lt;li&gt;Warrant&lt;/li&gt;&lt;/ul&gt;&lt;/td&gt;       &lt;td&gt;End-of-day&lt;/td&gt;     &lt;/tr&gt;     &lt;tr&gt;       &lt;td class&#x3D;\&quot;text-blue\&quot;&gt;Nasdaq Nordic &amp; Baltic&lt;/th&gt;       &lt;td&gt; &lt;ul&gt; &lt;li&gt;Copenhagen (CO)&lt;/li&gt; &lt;li&gt;Stockholm (ST)&lt;/li&gt; &lt;li&gt;Helsinki (HE)&lt;/li&gt; &lt;li&gt;Iceland (IC)&lt;/li&gt; &lt;li&gt;Riga (RG)&lt;/li&gt; &lt;li&gt;Tallinn (TL)&lt;/li&gt; &lt;li&gt;Vilnius(VS)&lt;/li&gt; &lt;li&gt;Fixed Income&lt;/li&gt; &lt;li&gt;Derivatives&lt;/li&gt; &lt;li&gt;Commodities&lt;/li&gt;&lt;/ul&gt;&lt;/td&gt;       &lt;td&gt;End-of-day&lt;/td&gt;     &lt;/tr&gt;   &lt;/tbody&gt; &lt;/table&gt;

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol.
let date = new Date("2013-10-20"); // Date | Date: 2020-04-02.
let limit = 789; // Number | Limit number of ticks returned. Maximum value: <code>25000</code>
let skip = 789; // Number | Number of ticks to skip. Use this parameter to loop through the entire data.
apiInstance.stockTick(symbol, date, limit, skip, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol. | 
 **date** | **Date**| Date: 2020-04-02. | 
 **limit** | **Number**| Limit number of ticks returned. Maximum value: &lt;code&gt;25000&lt;/code&gt; | 
 **skip** | **Number**| Number of ticks to skip. Use this parameter to loop through the entire data. | 

### Return type

[**TickData**](TickData.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## supplyChainRelationships

> SupplyChainRelationships supplyChainRelationships(symbol)

Supply Chain Relationships

&lt;p&gt;This endpoint provides an overall map of public companies&#39; key customers and suppliers. The data offers a deeper look into a company&#39;s supply chain and how products are created. The data will help investors manage risk, limit exposure or generate alpha-generating ideas and trading insights.&lt;/p&gt;&lt;p&gt;We currently cover data for S&amp;P500 and Nasdaq 100 companies.&lt;/p&gt;

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol.
apiInstance.supplyChainRelationships(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol. | 

### Return type

[**SupplyChainRelationships**](SupplyChainRelationships.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## supportResistance

> SupportResistance supportResistance(symbol, resolution)

Support/Resistance

Get support and resistance levels for a symbol.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Symbol
let resolution = "resolution_example"; // String | Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange.
apiInstance.supportResistance(symbol, resolution, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol | 
 **resolution** | **String**| Supported resolution includes &lt;code&gt;1, 5, 15, 30, 60, D, W, M &lt;/code&gt;.Some timeframes might not be available depending on the exchange. | 

### Return type

[**SupportResistance**](SupportResistance.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## symbolSearch

> SymbolLookup symbolSearch(q)

Symbol Lookup

Search for best-matching symbols based on your query. You can input anything from symbol, security&#39;s name to ISIN and Cusip.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let q = "q_example"; // String | Query text can be symbol, name, isin, or cusip.
apiInstance.symbolSearch(q, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Query text can be symbol, name, isin, or cusip. | 

### Return type

[**SymbolLookup**](SymbolLookup.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## technicalIndicator

> Object technicalIndicator(symbol, resolution, from, to, indicator, opts)

Technical Indicators

Return technical indicator with price data. List of supported indicators can be found &lt;a href&#x3D;\&quot;https://docs.google.com/spreadsheets/d/1ylUvKHVYN2E87WdwIza8ROaCpd48ggEl1k5i5SgA29k/edit?usp&#x3D;sharing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | symbol
let resolution = "resolution_example"; // String | Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange.
let from = 789; // Number | UNIX timestamp. Interval initial value.
let to = 789; // Number | UNIX timestamp. Interval end value.
let indicator = "indicator_example"; // String | Indicator name. Full list can be found <a href=\"https://docs.google.com/spreadsheets/d/1ylUvKHVYN2E87WdwIza8ROaCpd48ggEl1k5i5SgA29k/edit?usp=sharing\" target=\"_blank\">here</a>.
let opts = {
  'indicatorFields': null // Object | Check out <a href=\"https://docs.google.com/spreadsheets/d/1ylUvKHVYN2E87WdwIza8ROaCpd48ggEl1k5i5SgA29k/edit?usp=sharing\" target=\"_blank\">this page</a> to see which indicators and params are supported.
};
apiInstance.technicalIndicator(symbol, resolution, from, to, indicator, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| symbol | 
 **resolution** | **String**| Supported resolution includes &lt;code&gt;1, 5, 15, 30, 60, D, W, M &lt;/code&gt;.Some timeframes might not be available depending on the exchange. | 
 **from** | **Number**| UNIX timestamp. Interval initial value. | 
 **to** | **Number**| UNIX timestamp. Interval end value. | 
 **indicator** | **String**| Indicator name. Full list can be found &lt;a href&#x3D;\&quot;https://docs.google.com/spreadsheets/d/1ylUvKHVYN2E87WdwIza8ROaCpd48ggEl1k5i5SgA29k/edit?usp&#x3D;sharing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. | 
 **indicatorFields** | **Object**| Check out &lt;a href&#x3D;\&quot;https://docs.google.com/spreadsheets/d/1ylUvKHVYN2E87WdwIza8ROaCpd48ggEl1k5i5SgA29k/edit?usp&#x3D;sharing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;this page&lt;/a&gt; to see which indicators and params are supported. | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## transcripts

> EarningsCallTranscripts transcripts(id)

Earnings Call Transcripts

&lt;p&gt;Get earnings call transcripts, audio and participants&#39; list. This endpoint is only available for US, UK, and Candian companies. &lt;p&gt;15+ years of data is available with 220,000+ audio which add up to 7TB in size.&lt;/p&gt;

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let id = "id_example"; // String | Transcript's id obtained with <a href=\"#transcripts-list\">Transcripts List endpoint</a>.
apiInstance.transcripts(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Transcript&#39;s id obtained with &lt;a href&#x3D;\&quot;#transcripts-list\&quot;&gt;Transcripts List endpoint&lt;/a&gt;. | 

### Return type

[**EarningsCallTranscripts**](EarningsCallTranscripts.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## transcriptsList

> EarningsCallTranscriptsList transcriptsList(symbol)

Earnings Call Transcripts List

List earnings call transcripts&#39; metadata. This endpoint is available for US, UK and Canadian companies.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let symbol = "symbol_example"; // String | Company symbol: AAPL. Leave empty to list the latest transcripts
apiInstance.transcriptsList(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Company symbol: AAPL. Leave empty to list the latest transcripts | 

### Return type

[**EarningsCallTranscriptsList**](EarningsCallTranscriptsList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## upgradeDowngrade

> [UpgradeDowngrade] upgradeDowngrade(opts)

Stock Upgrade/Downgrade

Get latest stock upgrade and downgrade.

### Example

```javascript
import finnhub from 'finnhub';
let defaultClient = finnhub.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new finnhub.DefaultApi();
let opts = {
  'symbol': "symbol_example", // String | Symbol of the company: AAPL. If left blank, the API will return latest stock upgrades/downgrades.
  'from': new Date("2013-10-20"), // Date | From date: 2000-03-15.
  'to': new Date("2013-10-20") // Date | To date: 2020-03-16.
};
apiInstance.upgradeDowngrade(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Symbol of the company: AAPL. If left blank, the API will return latest stock upgrades/downgrades. | [optional] 
 **from** | **Date**| From date: 2000-03-15. | [optional] 
 **to** | **Date**| To date: 2020-03-16. | [optional] 

### Return type

[**[UpgradeDowngrade]**](UpgradeDowngrade.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

