# finnhub.DefaultApi

All URIs are relative to *https://finnhub.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aggregateIndicator**](DefaultApi.md#aggregateIndicator) | **GET** /scan/technical-indicator | Aggregate Indicators
[**companyBasicFinancials**](DefaultApi.md#companyBasicFinancials) | **GET** /stock/metric | Basic Financials
[**companyEarnings**](DefaultApi.md#companyEarnings) | **GET** /stock/earnings | Earnings Surprises
[**companyEpsEstimates**](DefaultApi.md#companyEpsEstimates) | **GET** /stock/eps-estimate | Earnings Estimates
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
[**economicCode**](DefaultApi.md#economicCode) | **GET** /economic/code | Economic Code
[**economicData**](DefaultApi.md#economicData) | **GET** /economic | Economic Data
[**filings**](DefaultApi.md#filings) | **GET** /stock/filings | Filings
[**financials**](DefaultApi.md#financials) | **GET** /stock/financials | Financial Statements
[**financialsReported**](DefaultApi.md#financialsReported) | **GET** /stock/financials-reported | Financials As Reported
[**forexCandles**](DefaultApi.md#forexCandles) | **GET** /forex/candle | Forex Candles
[**forexExchanges**](DefaultApi.md#forexExchanges) | **GET** /forex/exchange | Forex Exchanges
[**forexRates**](DefaultApi.md#forexRates) | **GET** /forex/rates | Forex rates
[**forexSymbols**](DefaultApi.md#forexSymbols) | **GET** /forex/symbol | Forex Symbol
[**fundOwnership**](DefaultApi.md#fundOwnership) | **GET** /stock/fund-ownership | Fund Ownership
[**generalNews**](DefaultApi.md#generalNews) | **GET** /news | General News
[**investorsOwnership**](DefaultApi.md#investorsOwnership) | **GET** /stock/investor-ownership | Investors Ownership
[**ipoCalendar**](DefaultApi.md#ipoCalendar) | **GET** /calendar/ipo | IPO Calendar
[**majorDevelopments**](DefaultApi.md#majorDevelopments) | **GET** /major-development | Major Developments
[**newsSentiment**](DefaultApi.md#newsSentiment) | **GET** /news-sentiment | News Sentiment
[**patternRecognition**](DefaultApi.md#patternRecognition) | **GET** /scan/pattern | Pattern Recognition
[**priceTarget**](DefaultApi.md#priceTarget) | **GET** /stock/price-target | Price Target
[**quote**](DefaultApi.md#quote) | **GET** /quote | Quote
[**recommendationTrends**](DefaultApi.md#recommendationTrends) | **GET** /stock/recommendation | Recommendation Trends
[**stockBidask**](DefaultApi.md#stockBidask) | **GET** /stock/bidask | Last Bid-Ask
[**stockCandles**](DefaultApi.md#stockCandles) | **GET** /stock/candle | Stock Candles
[**stockDividends**](DefaultApi.md#stockDividends) | **GET** /stock/dividend | Dividends
[**stockSplits**](DefaultApi.md#stockSplits) | **GET** /stock/split | Splits
[**stockSymbols**](DefaultApi.md#stockSymbols) | **GET** /stock/symbol | Stock Symbol
[**stockTick**](DefaultApi.md#stockTick) | **GET** /stock/tick | Tick Data
[**supportResistance**](DefaultApi.md#supportResistance) | **GET** /scan/support-resistance | Support/Resistance
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
let metric = "metric_example"; // String | Metric type. Can be 1 of the following values <code>all, price, valuation, margin</code>
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
 **metric** | **String**| Metric type. Can be 1 of the following values &lt;code&gt;all, price, valuation, margin&lt;/code&gt; | 

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

> [News] companyNews(symbol, from, to)

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

[**[News]**](News.md)

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

Get historical and coming earnings release dating back to 2003. You can setup &lt;a href&#x3D;\&quot;#webhook\&quot;&gt;webhook&lt;/a&gt; to receive real-time earnings update.

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
  'international': new finnhub.AnyType() // AnyType | Set to <code>true</code> to include international markets. Default value is <code>false</code>
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
 **international** | [**AnyType**](.md)| Set to &lt;code&gt;true&lt;/code&gt; to include international markets. Default value is &lt;code&gt;false&lt;/code&gt; | [optional] 

### Return type

[**EarningsCalendar**](EarningsCalendar.md)

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


## filings

> [Filing] filings(opts)

Filings

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


## financials

> FinancialStatements financials(symbol, statement, freq)

Financial Statements

Get standardized balance sheet, income statement and cash flow for global companies going back 30+ years.

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

Get a full list fund and institutional investors of a company in descending order of the number of shares held.

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


## generalNews

> [News] generalNews(category, opts)

General News

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
  'minId': "minId_example" // String | Use this field to get only news after this ID. Default to 0
};
apiInstance.generalNews(category, opts, (error, data, response) => {
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
 **minId** | **String**| Use this field to get only news after this ID. Default to 0 | [optional] 

### Return type

[**[News]**](News.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## investorsOwnership

> InvestorsOwnership investorsOwnership(symbol, opts)

Investors Ownership

Get a full list of shareholders/investors of a company in descending order of the number of shares held.

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
apiInstance.investorsOwnership(symbol, opts, (error, data, response) => {
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

[**InvestorsOwnership**](InvestorsOwnership.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ipoCalendar

> IPOCalendar ipoCalendar(from, to)

IPO Calendar

Get recent and coming IPO.

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


## majorDevelopments

> MajorDevelopments majorDevelopments(symbol, opts)

Major Developments

List latest major developments of a company going back 20 years with 12M+ data points. This data can be used to highlight the most significant events.

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
apiInstance.majorDevelopments(symbol, opts, (error, data, response) => {
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

[**MajorDevelopments**](MajorDevelopments.md)

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

&lt;p&gt;Get real-time quote data for US stocks. Constant polling is not recommended. Use websocket if you need real-time update.&lt;/p&gt;&lt;p&gt;Real-time stock prices for international markets are supported for Enterprise clients via our partner&#39;s feed. &lt;a href&#x3D;\&quot;mailto:support@finnhub.io\&quot;&gt;Contact Us&lt;/a&gt; to learn more.&lt;/p&gt;

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

> StockCandles stockCandles(symbol, resolution, from, to, opts)

Stock Candles

&lt;p&gt;Get candlestick data for stocks going back 25 years for US stocks.&lt;/p&gt;&lt;p&gt;Real-time stock prices for international markets are supported for Enterprise clients via our partner&#39;s feed. &lt;a href&#x3D;\&quot;mailto:support@finnhub.io\&quot;&gt;Contact Us&lt;/a&gt; to learn more.&lt;/p&gt;

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
let opts = {
  'adjusted': "adjusted_example" // String | By default, <code>adjusted=false</code>. Use <code>true</code> to get adjusted data.
};
apiInstance.stockCandles(symbol, resolution, from, to, opts, (error, data, response) => {
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
 **adjusted** | **String**| By default, &lt;code&gt;adjusted&#x3D;false&lt;/code&gt;. Use &lt;code&gt;true&lt;/code&gt; to get adjusted data. | [optional] 

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

> [Stock] stockSymbols(exchange)

Stock Symbol

List supported stocks.

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
let exchange = "exchange_example"; // String | Exchange you want to get the list of symbols from. List of exchanges with fundamental data can be found <a href=\"https://docs.google.com/spreadsheets/d/1I3pBxjfXB056-g_JYf_6o3Rns3BV2kMGG1nCatb91ls/edit?usp=sharing\" target=\"_blank\">here</a>.
apiInstance.stockSymbols(exchange, (error, data, response) => {
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
 **exchange** | **String**| Exchange you want to get the list of symbols from. List of exchanges with fundamental data can be found &lt;a href&#x3D;\&quot;https://docs.google.com/spreadsheets/d/1I3pBxjfXB056-g_JYf_6o3Rns3BV2kMGG1nCatb91ls/edit?usp&#x3D;sharing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. | 

### Return type

[**[Stock]**](Stock.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stockTick

> TickData stockTick(symbol, _date, limit, skip)

Tick Data

&lt;p&gt;Get historical tick data for US stocks from all 13 exchanges. You can send the request directly to our tick server at &lt;a href&#x3D;\&quot;https://tick.finnhub.io/\&quot;&gt;https://tick.finnhub.io/&lt;/a&gt; with the same path and parameters or get redirected there if you call our main server. Data is updated at the end of each trading day.&lt;/p&gt;&lt;p&gt;Tick data from 1985 is available for Enterprise clients. &lt;a href&#x3D;\&quot;mailto:support@finnhub.io\&quot;&gt;Contact us&lt;/a&gt; to learn more.&lt;/p&gt;

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
let _date = new Date("2013-10-20"); // Date | Date: 2020-04-02.
let limit = 789; // Number | Limit number of ticks returned. Maximum value: <code>25000</code>
let skip = 789; // Number | Number of ticks to skip. Use this parameter to loop through the entire data.
apiInstance.stockTick(symbol, _date, limit, skip, (error, data, response) => {
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
 **_date** | **Date**| Date: 2020-04-02. | 
 **limit** | **Number**| Limit number of ticks returned. Maximum value: &lt;code&gt;25000&lt;/code&gt; | 
 **skip** | **Number**| Number of ticks to skip. Use this parameter to loop through the entire data. | 

### Return type

[**TickData**](TickData.md)

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

&lt;p&gt;Get earnings call transcripts, audio and participants&#39; list. This endpoint is only available for US companies. &lt;p&gt;17+ years of data is available with 170,000+ audio which add up to 6TB in size.&lt;/p&gt;

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

List earnings call transcripts&#39; metadata. This endpoint is only available for US companies.

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

