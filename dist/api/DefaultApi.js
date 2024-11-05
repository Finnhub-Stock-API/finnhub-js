"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AggregateIndicators = _interopRequireDefault(require("../model/AggregateIndicators"));

var _AirlinePriceIndexData = _interopRequireDefault(require("../model/AirlinePriceIndexData"));

var _BasicFinancials = _interopRequireDefault(require("../model/BasicFinancials"));

var _BondCandles = _interopRequireDefault(require("../model/BondCandles"));

var _BondProfile = _interopRequireDefault(require("../model/BondProfile"));

var _BondTickData = _interopRequireDefault(require("../model/BondTickData"));

var _BondYieldCurve = _interopRequireDefault(require("../model/BondYieldCurve"));

var _CompanyESG = _interopRequireDefault(require("../model/CompanyESG"));

var _CompanyEarningsQualityScore = _interopRequireDefault(require("../model/CompanyEarningsQualityScore"));

var _CompanyExecutive = _interopRequireDefault(require("../model/CompanyExecutive"));

var _CompanyNews = _interopRequireDefault(require("../model/CompanyNews"));

var _CompanyProfile = _interopRequireDefault(require("../model/CompanyProfile"));

var _CompanyProfile2 = _interopRequireDefault(require("../model/CompanyProfile2"));

var _CongressionalTrading = _interopRequireDefault(require("../model/CongressionalTrading"));

var _CountryMetadata = _interopRequireDefault(require("../model/CountryMetadata"));

var _CovidInfo = _interopRequireDefault(require("../model/CovidInfo"));

var _CryptoCandles = _interopRequireDefault(require("../model/CryptoCandles"));

var _CryptoProfile = _interopRequireDefault(require("../model/CryptoProfile"));

var _CryptoSymbol = _interopRequireDefault(require("../model/CryptoSymbol"));

var _Dividends = _interopRequireDefault(require("../model/Dividends"));

var _Dividends2 = _interopRequireDefault(require("../model/Dividends2"));

var _ETFsCountryExposure = _interopRequireDefault(require("../model/ETFsCountryExposure"));

var _ETFsHoldings = _interopRequireDefault(require("../model/ETFsHoldings"));

var _ETFsProfile = _interopRequireDefault(require("../model/ETFsProfile"));

var _ETFsSectorExposure = _interopRequireDefault(require("../model/ETFsSectorExposure"));

var _EarningResult = _interopRequireDefault(require("../model/EarningResult"));

var _EarningsCalendar = _interopRequireDefault(require("../model/EarningsCalendar"));

var _EarningsCallTranscripts = _interopRequireDefault(require("../model/EarningsCallTranscripts"));

var _EarningsCallTranscriptsList = _interopRequireDefault(require("../model/EarningsCallTranscriptsList"));

var _EarningsEstimates = _interopRequireDefault(require("../model/EarningsEstimates"));

var _EbitEstimates = _interopRequireDefault(require("../model/EbitEstimates"));

var _EbitdaEstimates = _interopRequireDefault(require("../model/EbitdaEstimates"));

var _EconomicCalendar = _interopRequireDefault(require("../model/EconomicCalendar"));

var _EconomicCode = _interopRequireDefault(require("../model/EconomicCode"));

var _EconomicData = _interopRequireDefault(require("../model/EconomicData"));

var _FDAComitteeMeeting = _interopRequireDefault(require("../model/FDAComitteeMeeting"));

var _Filing = _interopRequireDefault(require("../model/Filing"));

var _FinancialStatements = _interopRequireDefault(require("../model/FinancialStatements"));

var _FinancialsAsReported = _interopRequireDefault(require("../model/FinancialsAsReported"));

var _ForexCandles = _interopRequireDefault(require("../model/ForexCandles"));

var _ForexSymbol = _interopRequireDefault(require("../model/ForexSymbol"));

var _Forexrates = _interopRequireDefault(require("../model/Forexrates"));

var _FundOwnership = _interopRequireDefault(require("../model/FundOwnership"));

var _HistoricalCompanyESG = _interopRequireDefault(require("../model/HistoricalCompanyESG"));

var _HistoricalEmployeeCount = _interopRequireDefault(require("../model/HistoricalEmployeeCount"));

var _HistoricalMarketCapData = _interopRequireDefault(require("../model/HistoricalMarketCapData"));

var _HistoricalNBBO = _interopRequireDefault(require("../model/HistoricalNBBO"));

var _IPOCalendar = _interopRequireDefault(require("../model/IPOCalendar"));

var _IndicesConstituents = _interopRequireDefault(require("../model/IndicesConstituents"));

var _IndicesHistoricalConstituents = _interopRequireDefault(require("../model/IndicesHistoricalConstituents"));

var _InsiderSentiments = _interopRequireDefault(require("../model/InsiderSentiments"));

var _InsiderTransactions = _interopRequireDefault(require("../model/InsiderTransactions"));

var _InstitutionalOwnership = _interopRequireDefault(require("../model/InstitutionalOwnership"));

var _InstitutionalPortfolio = _interopRequireDefault(require("../model/InstitutionalPortfolio"));

var _InstitutionalProfile = _interopRequireDefault(require("../model/InstitutionalProfile"));

var _InternationalFiling = _interopRequireDefault(require("../model/InternationalFiling"));

var _InvestmentThemes = _interopRequireDefault(require("../model/InvestmentThemes"));

var _IsinChange = _interopRequireDefault(require("../model/IsinChange"));

var _LastBidAsk = _interopRequireDefault(require("../model/LastBidAsk"));

var _LobbyingResult = _interopRequireDefault(require("../model/LobbyingResult"));

var _MarketHoliday = _interopRequireDefault(require("../model/MarketHoliday"));

var _MarketNews = _interopRequireDefault(require("../model/MarketNews"));

var _MarketStatus = _interopRequireDefault(require("../model/MarketStatus"));

var _MutualFundCountryExposure = _interopRequireDefault(require("../model/MutualFundCountryExposure"));

var _MutualFundEet = _interopRequireDefault(require("../model/MutualFundEet"));

var _MutualFundEetPai = _interopRequireDefault(require("../model/MutualFundEetPai"));

var _MutualFundHoldings = _interopRequireDefault(require("../model/MutualFundHoldings"));

var _MutualFundProfile = _interopRequireDefault(require("../model/MutualFundProfile"));

var _MutualFundSectorExposure = _interopRequireDefault(require("../model/MutualFundSectorExposure"));

var _NewsSentiment = _interopRequireDefault(require("../model/NewsSentiment"));

var _Ownership = _interopRequireDefault(require("../model/Ownership"));

var _PatternRecognition = _interopRequireDefault(require("../model/PatternRecognition"));

var _PressRelease = _interopRequireDefault(require("../model/PressRelease"));

var _PriceMetrics = _interopRequireDefault(require("../model/PriceMetrics"));

var _PriceTarget = _interopRequireDefault(require("../model/PriceTarget"));

var _Quote = _interopRequireDefault(require("../model/Quote"));

var _RecommendationTrend = _interopRequireDefault(require("../model/RecommendationTrend"));

var _RevenueBreakdown = _interopRequireDefault(require("../model/RevenueBreakdown"));

var _RevenueEstimates = _interopRequireDefault(require("../model/RevenueEstimates"));

var _SECSentimentAnalysis = _interopRequireDefault(require("../model/SECSentimentAnalysis"));

var _SectorMetric = _interopRequireDefault(require("../model/SectorMetric"));

var _SimilarityIndex = _interopRequireDefault(require("../model/SimilarityIndex"));

var _SocialSentiment = _interopRequireDefault(require("../model/SocialSentiment"));

var _Split = _interopRequireDefault(require("../model/Split"));

var _StockCandles = _interopRequireDefault(require("../model/StockCandles"));

var _StockSymbol = _interopRequireDefault(require("../model/StockSymbol"));

var _SupplyChainRelationships = _interopRequireDefault(require("../model/SupplyChainRelationships"));

var _SupportResistance = _interopRequireDefault(require("../model/SupportResistance"));

var _SymbolChange = _interopRequireDefault(require("../model/SymbolChange"));

var _SymbolLookup = _interopRequireDefault(require("../model/SymbolLookup"));

var _TickData = _interopRequireDefault(require("../model/TickData"));

var _UpgradeDowngrade = _interopRequireDefault(require("../model/UpgradeDowngrade"));

var _UsaSpendingResult = _interopRequireDefault(require("../model/UsaSpendingResult"));

var _UsptoPatentResult = _interopRequireDefault(require("../model/UsptoPatentResult"));

var _VisaApplicationResult = _interopRequireDefault(require("../model/VisaApplicationResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Default service.
* @module api/DefaultApi
* @version 1.2.19
*/
var DefaultApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DefaultApi. 
  * @alias module:api/DefaultApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DefaultApi(apiClient) {
    _classCallCheck(this, DefaultApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the aggregateIndicator operation.
   * @callback module:api/DefaultApi~aggregateIndicatorCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AggregateIndicators} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Aggregate Indicators
   * Get aggregate signal of multiple technical indicators such as MACD, RSI, Moving Average v.v. A full list of indicators can be found <a href=\"https://docs.google.com/spreadsheets/d/1MWuy0WuT2yVlxr1KbPdggVygMZtJfunDnhe-C0GEXYM/edit?usp=sharing\" target=\"_blank\">here</a>.
   * @param {String} symbol symbol
   * @param {String} resolution Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange.
   * @param {module:api/DefaultApi~aggregateIndicatorCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/AggregateIndicators}
   */


  _createClass(DefaultApi, [{
    key: "aggregateIndicator",
    value: function aggregateIndicator(symbol, resolution, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling aggregateIndicator");
      } // verify the required parameter 'resolution' is set


      if (resolution === undefined || resolution === null) {
        throw new Error("Missing the required parameter 'resolution' when calling aggregateIndicator");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'resolution': resolution
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AggregateIndicators["default"];
      return this.apiClient.callApi('/scan/technical-indicator', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the airlinePriceIndex operation.
     * @callback module:api/DefaultApi~airlinePriceIndexCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AirlinePriceIndexData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Airline Price Index
     * <p>The Flight Ticket Price Index API provides comprehensive data on airline ticket prices, including the average daily ticket price and its percentage change (price index). This data, collected weekly and projected two weeks ahead, aggregates daily prices and indexes from the 50 busiest and largest airports across the USA. The dataset includes detailed information on airlines, dates, and average ticket prices, offering valuable insights for market analysis and pricing strategies.</p><p>The price index is calculated as percentage change of average daily ticket price from the previous weekly reading. Raw ticket prices data is available for Enterprise users. <a href=\"mailto:support@finnhub.io\">Contact us</a> to inquire about the raw price data.</p>
     * @param {String} airline Filter data by airline. Accepted values: <code>united</code>,<code>delta</code>,<code>american_airlines</code>,<code>southwest</code>,<code>southern_airways_express</code>,<code>alaska_airlines</code>,<code>frontier_airlines</code>,<code>jetblue_airways</code>,<code>spirit_airlines</code>,<code>sun_country_airlines</code>,<code>breeze_airways</code>,<code>hawaiian_airlines</code>
     * @param {Date} from From date <code>YYYY-MM-DD</code>.
     * @param {Date} to To date <code>YYYY-MM-DD</code>.
     * @param {module:api/DefaultApi~airlinePriceIndexCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AirlinePriceIndexData}
     */

  }, {
    key: "airlinePriceIndex",
    value: function airlinePriceIndex(airline, from, to, callback) {
      var postBody = null; // verify the required parameter 'airline' is set

      if (airline === undefined || airline === null) {
        throw new Error("Missing the required parameter 'airline' when calling airlinePriceIndex");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling airlinePriceIndex");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling airlinePriceIndex");
      }

      var pathParams = {};
      var queryParams = {
        'airline': airline,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AirlinePriceIndexData["default"];
      return this.apiClient.callApi('/airline/price-index', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the bondPrice operation.
     * @callback module:api/DefaultApi~bondPriceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BondCandles} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bond price data
     * <p>Get bond's price data. The following datasets are supported:</p><table class=\"table table-hover\">   <thead>     <tr>       <th>Exchange</th>       <th>Segment</th>       <th>Delay</th>     </tr>   </thead>   <tbody>   <tr>       <td class=\"text-blue\">US Government Bonds</th>       <td>Government Bonds</td>       <td>End-of-day</td>     </tr>     <tr>       <td class=\"text-blue\">FINRA Trace</th>       <td>BTDS: US Corporate Bonds</td>       <td>Delayed 4h</td>     </tr>     <tr>       <td class=\"text-blue\">FINRA Trace</th>       <td>144A Bonds</td>       <td>Delayed 4h</td>     </tr>   </tbody> </table>
     * @param {String} isin ISIN.
     * @param {Number} from UNIX timestamp. Interval initial value.
     * @param {Number} to UNIX timestamp. Interval end value.
     * @param {module:api/DefaultApi~bondPriceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BondCandles}
     */

  }, {
    key: "bondPrice",
    value: function bondPrice(isin, from, to, callback) {
      var postBody = null; // verify the required parameter 'isin' is set

      if (isin === undefined || isin === null) {
        throw new Error("Missing the required parameter 'isin' when calling bondPrice");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling bondPrice");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling bondPrice");
      }

      var pathParams = {};
      var queryParams = {
        'isin': isin,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BondCandles["default"];
      return this.apiClient.callApi('/bond/price', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the bondProfile operation.
     * @callback module:api/DefaultApi~bondProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BondProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bond Profile
     * Get general information of a bond. You can query by FIGI, ISIN or CUSIP. A list of supported bonds can be found <a href=\"/api/v1/bond/list?token=\" target=\"_blank\">here</a>.
     * @param {Object} opts Optional parameters
     * @param {String} opts.isin ISIN
     * @param {String} opts.cusip CUSIP
     * @param {String} opts.figi FIGI
     * @param {module:api/DefaultApi~bondProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BondProfile}
     */

  }, {
    key: "bondProfile",
    value: function bondProfile(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'isin': opts['isin'],
        'cusip': opts['cusip'],
        'figi': opts['figi']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BondProfile["default"];
      return this.apiClient.callApi('/bond/profile', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the bondTick operation.
     * @callback module:api/DefaultApi~bondTickCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BondTickData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bond Tick Data
     * <p>Get trade-level data for bonds. The following datasets are supported:</p><table class=\"table table-hover\">   <thead>     <tr>       <th>Exchange</th>       <th>Segment</th>       <th>Delay</th>     </tr>   </thead>   <tbody>     <tr>       <td class=\"text-blue\">FINRA Trace</th>       <td>BTDS: US Corporate Bonds</td>       <td>Delayed 4h</td>     </tr>     <tr>       <td class=\"text-blue\">FINRA Trace</th>       <td>144A Bonds</td>       <td>Delayed 4h</td>     </tr>   </tbody> </table>
     * @param {String} isin ISIN.
     * @param {Date} date Date: 2020-04-02.
     * @param {Number} limit Limit number of ticks returned. Maximum value: <code>25000</code>
     * @param {Number} skip Number of ticks to skip. Use this parameter to loop through the entire data.
     * @param {String} exchange Currently support the following values: <code>trace</code>.
     * @param {module:api/DefaultApi~bondTickCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BondTickData}
     */

  }, {
    key: "bondTick",
    value: function bondTick(isin, date, limit, skip, exchange, callback) {
      var postBody = null; // verify the required parameter 'isin' is set

      if (isin === undefined || isin === null) {
        throw new Error("Missing the required parameter 'isin' when calling bondTick");
      } // verify the required parameter 'date' is set


      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling bondTick");
      } // verify the required parameter 'limit' is set


      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling bondTick");
      } // verify the required parameter 'skip' is set


      if (skip === undefined || skip === null) {
        throw new Error("Missing the required parameter 'skip' when calling bondTick");
      } // verify the required parameter 'exchange' is set


      if (exchange === undefined || exchange === null) {
        throw new Error("Missing the required parameter 'exchange' when calling bondTick");
      }

      var pathParams = {};
      var queryParams = {
        'isin': isin,
        'date': date,
        'limit': limit,
        'skip': skip,
        'exchange': exchange
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BondTickData["default"];
      return this.apiClient.callApi('/bond/tick', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the bondYieldCurve operation.
     * @callback module:api/DefaultApi~bondYieldCurveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BondYieldCurve} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bond Yield Curve
     * Get yield curve data for Treasury bonds.
     * @param {String} code Bond's code. You can find the list of supported code <a href=\"https://docs.google.com/spreadsheets/d/1iA-lM0Kht7lsQZ7Uu_s6r2i1BbQNUNO9eGkO5-zglHg/edit?usp=sharing\" target=\"_blank\" rel=\"noopener\">here</a>.
     * @param {module:api/DefaultApi~bondYieldCurveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BondYieldCurve}
     */

  }, {
    key: "bondYieldCurve",
    value: function bondYieldCurve(code, callback) {
      var postBody = null; // verify the required parameter 'code' is set

      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling bondYieldCurve");
      }

      var pathParams = {};
      var queryParams = {
        'code': code
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BondYieldCurve["default"];
      return this.apiClient.callApi('/bond/yield-curve', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the companyBasicFinancials operation.
     * @callback module:api/DefaultApi~companyBasicFinancialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BasicFinancials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Basic Financials
     * Get company basic financials such as margin, P/E ratio, 52-week high/low etc.
     * @param {String} symbol Symbol of the company: AAPL.
     * @param {String} metric Metric type. Can be 1 of the following values <code>all</code>
     * @param {module:api/DefaultApi~companyBasicFinancialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BasicFinancials}
     */

  }, {
    key: "companyBasicFinancials",
    value: function companyBasicFinancials(symbol, metric, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling companyBasicFinancials");
      } // verify the required parameter 'metric' is set


      if (metric === undefined || metric === null) {
        throw new Error("Missing the required parameter 'metric' when calling companyBasicFinancials");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'metric': metric
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BasicFinancials["default"];
      return this.apiClient.callApi('/stock/metric', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the companyEarnings operation.
     * @callback module:api/DefaultApi~companyEarningsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EarningResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Earnings Surprises
     * Get company historical quarterly earnings surprise going back to 2000.
     * @param {String} symbol Symbol of the company: AAPL.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit number of period returned. Leave blank to get the full history.
     * @param {module:api/DefaultApi~companyEarningsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EarningResult>}
     */

  }, {
    key: "companyEarnings",
    value: function companyEarnings(symbol, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling companyEarnings");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_EarningResult["default"]];
      return this.apiClient.callApi('/stock/earnings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the companyEarningsQualityScore operation.
     * @callback module:api/DefaultApi~companyEarningsQualityScoreCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CompanyEarningsQualityScore} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Company Earnings Quality Score
     * <p>This endpoint provides Earnings Quality Score for global companies.</p><p> Earnings quality refers to the extent to which current earnings predict future earnings. \"High-quality\" earnings are expected to persist, while \"low-quality\" earnings do not. A higher score means a higher earnings quality</p><p>Finnhub uses a proprietary model which takes into consideration 4 criteria:</p> <ul style=\"list-style-type: unset; margin-left: 30px;\"><li>Profitability</li><li>Growth</li><li>Cash Generation & Capital Allocation</li><li>Leverage</li></ul><br/><p>We then compare the metrics of each company in each category against its peers in the same industry to gauge how quality its earnings is.</p>
     * @param {String} symbol Symbol.
     * @param {String} freq Frequency. Currently support <code>annual</code> and <code>quarterly</code>
     * @param {module:api/DefaultApi~companyEarningsQualityScoreCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CompanyEarningsQualityScore}
     */

  }, {
    key: "companyEarningsQualityScore",
    value: function companyEarningsQualityScore(symbol, freq, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling companyEarningsQualityScore");
      } // verify the required parameter 'freq' is set


      if (freq === undefined || freq === null) {
        throw new Error("Missing the required parameter 'freq' when calling companyEarningsQualityScore");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'freq': freq
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CompanyEarningsQualityScore["default"];
      return this.apiClient.callApi('/stock/earnings-quality-score', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the companyEbitEstimates operation.
     * @callback module:api/DefaultApi~companyEbitEstimatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EbitEstimates} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * EBIT Estimates
     * Get company's ebit estimates.
     * @param {String} symbol Symbol of the company: AAPL.
     * @param {Object} opts Optional parameters
     * @param {String} opts.freq Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code>
     * @param {module:api/DefaultApi~companyEbitEstimatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EbitEstimates}
     */

  }, {
    key: "companyEbitEstimates",
    value: function companyEbitEstimates(symbol, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling companyEbitEstimates");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'freq': opts['freq']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EbitEstimates["default"];
      return this.apiClient.callApi('/stock/ebit-estimate', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the companyEbitdaEstimates operation.
     * @callback module:api/DefaultApi~companyEbitdaEstimatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EbitdaEstimates} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * EBITDA Estimates
     * Get company's ebitda estimates.
     * @param {String} symbol Symbol of the company: AAPL.
     * @param {Object} opts Optional parameters
     * @param {String} opts.freq Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code>
     * @param {module:api/DefaultApi~companyEbitdaEstimatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EbitdaEstimates}
     */

  }, {
    key: "companyEbitdaEstimates",
    value: function companyEbitdaEstimates(symbol, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling companyEbitdaEstimates");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'freq': opts['freq']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EbitdaEstimates["default"];
      return this.apiClient.callApi('/stock/ebitda-estimate', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the companyEpsEstimates operation.
     * @callback module:api/DefaultApi~companyEpsEstimatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EarningsEstimates} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Earnings Estimates
     * Get company's EPS estimates.
     * @param {String} symbol Symbol of the company: AAPL.
     * @param {Object} opts Optional parameters
     * @param {String} opts.freq Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code>
     * @param {module:api/DefaultApi~companyEpsEstimatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EarningsEstimates}
     */

  }, {
    key: "companyEpsEstimates",
    value: function companyEpsEstimates(symbol, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling companyEpsEstimates");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'freq': opts['freq']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EarningsEstimates["default"];
      return this.apiClient.callApi('/stock/eps-estimate', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the companyEsgScore operation.
     * @callback module:api/DefaultApi~companyEsgScoreCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CompanyESG} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Company ESG Scores
     * <p>This endpoint provides the latest ESG scores and important indicators for 7000+ global companies. The data is collected through company's public ESG disclosure and public sources.</p><p>Our ESG scoring models takes into account more than 150 different inputs to calculate the level of ESG risks and how well a company is managing them. A higher score means lower ESG risk or better ESG management. ESG scores are in the the range of 0-100. Some key indicators might contain letter-grade score from C- to A+ with C- is the lowest score and A+ is the highest score.</p>
     * @param {String} symbol Symbol.
     * @param {module:api/DefaultApi~companyEsgScoreCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CompanyESG}
     */

  }, {
    key: "companyEsgScore",
    value: function companyEsgScore(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling companyEsgScore");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CompanyESG["default"];
      return this.apiClient.callApi('/stock/esg', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the companyExecutive operation.
     * @callback module:api/DefaultApi~companyExecutiveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CompanyExecutive} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Company Executive
     * Get a list of company's executives and members of the Board.
     * @param {String} symbol Symbol of the company: AAPL.
     * @param {module:api/DefaultApi~companyExecutiveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CompanyExecutive}
     */

  }, {
    key: "companyExecutive",
    value: function companyExecutive(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling companyExecutive");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CompanyExecutive["default"];
      return this.apiClient.callApi('/stock/executive', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the companyHistoricalEsgScore operation.
     * @callback module:api/DefaultApi~companyHistoricalEsgScoreCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoricalCompanyESG} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Historical ESG Scores
     * <p>This endpoint provides historical ESG scores and important indicators for 7000+ global companies. The data is collected through company's public ESG disclosure and public sources.</p><p>Our ESG scoring models takes into account more than 150 different inputs to calculate the level of ESG risks and how well a company is managing them. A higher score means lower ESG risk or better ESG management. ESG scores are in the the range of 0-100. Some key indicators might contain letter-grade score from C- to A+ with C- is the lowest score and A+ is the highest score.</p>
     * @param {String} symbol Symbol.
     * @param {module:api/DefaultApi~companyHistoricalEsgScoreCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HistoricalCompanyESG}
     */

  }, {
    key: "companyHistoricalEsgScore",
    value: function companyHistoricalEsgScore(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling companyHistoricalEsgScore");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _HistoricalCompanyESG["default"];
      return this.apiClient.callApi('/stock/historical-esg', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the companyNews operation.
     * @callback module:api/DefaultApi~companyNewsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CompanyNews>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Company News
     * List latest company news by symbol. This endpoint is only available for North American companies.
     * @param {String} symbol Company symbol.
     * @param {Date} from From date <code>YYYY-MM-DD</code>.
     * @param {Date} to To date <code>YYYY-MM-DD</code>.
     * @param {module:api/DefaultApi~companyNewsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CompanyNews>}
     */

  }, {
    key: "companyNews",
    value: function companyNews(symbol, from, to, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling companyNews");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling companyNews");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling companyNews");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CompanyNews["default"]];
      return this.apiClient.callApi('/company-news', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the companyPeers operation.
     * @callback module:api/DefaultApi~companyPeersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Peers
     * Get company peers. Return a list of peers operating in the same country and sector/industry.
     * @param {String} symbol Symbol of the company: AAPL.
     * @param {Object} opts Optional parameters
     * @param {String} opts.grouping Specify the grouping criteria for choosing peers.Supporter values: <code>sector</code>, <code>industry</code>, <code>subIndustry</code>. Default to <code>subIndustry</code>.
     * @param {module:api/DefaultApi~companyPeersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */

  }, {
    key: "companyPeers",
    value: function companyPeers(symbol, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling companyPeers");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'grouping': opts['grouping']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];
      return this.apiClient.callApi('/stock/peers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the companyProfile operation.
     * @callback module:api/DefaultApi~companyProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CompanyProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Company Profile
     * Get general information of a company. You can query by symbol, ISIN or CUSIP
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Symbol of the company: AAPL e.g.
     * @param {String} opts.isin ISIN
     * @param {String} opts.cusip CUSIP
     * @param {module:api/DefaultApi~companyProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CompanyProfile}
     */

  }, {
    key: "companyProfile",
    value: function companyProfile(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'isin': opts['isin'],
        'cusip': opts['cusip']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CompanyProfile["default"];
      return this.apiClient.callApi('/stock/profile', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the companyProfile2 operation.
     * @callback module:api/DefaultApi~companyProfile2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CompanyProfile2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Company Profile 2
     * Get general information of a company. You can query by symbol, ISIN or CUSIP. This is the free version of <a href=\"#company-profile\">Company Profile</a>.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Symbol of the company: AAPL e.g.
     * @param {String} opts.isin ISIN
     * @param {String} opts.cusip CUSIP
     * @param {module:api/DefaultApi~companyProfile2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CompanyProfile2}
     */

  }, {
    key: "companyProfile2",
    value: function companyProfile2(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'isin': opts['isin'],
        'cusip': opts['cusip']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CompanyProfile2["default"];
      return this.apiClient.callApi('/stock/profile2', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the companyRevenueEstimates operation.
     * @callback module:api/DefaultApi~companyRevenueEstimatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RevenueEstimates} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revenue Estimates
     * Get company's revenue estimates.
     * @param {String} symbol Symbol of the company: AAPL.
     * @param {Object} opts Optional parameters
     * @param {String} opts.freq Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code>
     * @param {module:api/DefaultApi~companyRevenueEstimatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RevenueEstimates}
     */

  }, {
    key: "companyRevenueEstimates",
    value: function companyRevenueEstimates(symbol, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling companyRevenueEstimates");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'freq': opts['freq']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RevenueEstimates["default"];
      return this.apiClient.callApi('/stock/revenue-estimate', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the congressionalTrading operation.
     * @callback module:api/DefaultApi~congressionalTradingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CongressionalTrading} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Congressional Trading
     * Get stock trades data disclosed by members of congress.
     * @param {String} symbol Symbol of the company: AAPL.
     * @param {Date} from From date <code>YYYY-MM-DD</code>.
     * @param {Date} to To date <code>YYYY-MM-DD</code>.
     * @param {module:api/DefaultApi~congressionalTradingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CongressionalTrading}
     */

  }, {
    key: "congressionalTrading",
    value: function congressionalTrading(symbol, from, to, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling congressionalTrading");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling congressionalTrading");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling congressionalTrading");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CongressionalTrading["default"];
      return this.apiClient.callApi('/stock/congressional-trading', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the country operation.
     * @callback module:api/DefaultApi~countryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CountryMetadata>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Country Metadata
     * List all countries and metadata.
     * @param {module:api/DefaultApi~countryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CountryMetadata>}
     */

  }, {
    key: "country",
    value: function country(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CountryMetadata["default"]];
      return this.apiClient.callApi('/country', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the covid19 operation.
     * @callback module:api/DefaultApi~covid19Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CovidInfo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * COVID-19
     * Get real-time updates on the number of COVID-19 (Corona virus) cases in the US with a state-by-state breakdown. Data is sourced from CDC and reputable sources. You can also access this API <a href=\"https://rapidapi.com/Finnhub/api/finnhub-real-time-covid-19\" target=\"_blank\" rel=\"nofollow\">here</a>
     * @param {module:api/DefaultApi~covid19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CovidInfo>}
     */

  }, {
    key: "covid19",
    value: function covid19(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CovidInfo["default"]];
      return this.apiClient.callApi('/covid19/us', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the cryptoCandles operation.
     * @callback module:api/DefaultApi~cryptoCandlesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CryptoCandles} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Crypto Candles
     * Get candlestick data for crypto symbols.
     * @param {String} symbol Use symbol returned in <code>/crypto/symbol</code> endpoint for this field.
     * @param {String} resolution Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange.
     * @param {Number} from UNIX timestamp. Interval initial value.
     * @param {Number} to UNIX timestamp. Interval end value.
     * @param {module:api/DefaultApi~cryptoCandlesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CryptoCandles}
     */

  }, {
    key: "cryptoCandles",
    value: function cryptoCandles(symbol, resolution, from, to, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling cryptoCandles");
      } // verify the required parameter 'resolution' is set


      if (resolution === undefined || resolution === null) {
        throw new Error("Missing the required parameter 'resolution' when calling cryptoCandles");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling cryptoCandles");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling cryptoCandles");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'resolution': resolution,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CryptoCandles["default"];
      return this.apiClient.callApi('/crypto/candle', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the cryptoExchanges operation.
     * @callback module:api/DefaultApi~cryptoExchangesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Crypto Exchanges
     * List supported crypto exchanges
     * @param {module:api/DefaultApi~cryptoExchangesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */

  }, {
    key: "cryptoExchanges",
    value: function cryptoExchanges(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];
      return this.apiClient.callApi('/crypto/exchange', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the cryptoProfile operation.
     * @callback module:api/DefaultApi~cryptoProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CryptoProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Crypto Profile
     * Get crypto's profile.
     * @param {String} symbol Crypto symbol such as BTC or ETH.
     * @param {module:api/DefaultApi~cryptoProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CryptoProfile}
     */

  }, {
    key: "cryptoProfile",
    value: function cryptoProfile(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling cryptoProfile");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CryptoProfile["default"];
      return this.apiClient.callApi('/crypto/profile', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the cryptoSymbols operation.
     * @callback module:api/DefaultApi~cryptoSymbolsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CryptoSymbol>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Crypto Symbol
     * List supported crypto symbols by exchange
     * @param {String} exchange Exchange you want to get the list of symbols from.
     * @param {module:api/DefaultApi~cryptoSymbolsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CryptoSymbol>}
     */

  }, {
    key: "cryptoSymbols",
    value: function cryptoSymbols(exchange, callback) {
      var postBody = null; // verify the required parameter 'exchange' is set

      if (exchange === undefined || exchange === null) {
        throw new Error("Missing the required parameter 'exchange' when calling cryptoSymbols");
      }

      var pathParams = {};
      var queryParams = {
        'exchange': exchange
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CryptoSymbol["default"]];
      return this.apiClient.callApi('/crypto/symbol', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the earningsCalendar operation.
     * @callback module:api/DefaultApi~earningsCalendarCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EarningsCalendar} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Earnings Calendar
     * Get historical and coming earnings release. EPS and Revenue in this endpoint are non-GAAP, which means they are adjusted to exclude some one-time or unusual items. This is the same data investors usually react to and talked about on the media. Estimates are sourced from both sell-side and buy-side analysts.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.from From date: 2020-03-15.
     * @param {Date} opts.to To date: 2020-03-16.
     * @param {String} opts.symbol Filter by symbol: AAPL.
     * @param {Boolean} opts.international Set to <code>true</code> to include international markets. Default value is <code>false</code>
     * @param {module:api/DefaultApi~earningsCalendarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EarningsCalendar}
     */

  }, {
    key: "earningsCalendar",
    value: function earningsCalendar(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'symbol': opts['symbol'],
        'international': opts['international']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EarningsCalendar["default"];
      return this.apiClient.callApi('/calendar/earnings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the economicCalendar operation.
     * @callback module:api/DefaultApi~economicCalendarCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EconomicCalendar} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Economic Calendar
     * <p>Get recent and upcoming economic releases.</p><p>Historical events and surprises are available for Enterprise clients.</p>
     * @param {Object} opts Optional parameters
     * @param {Date} opts.from From date <code>YYYY-MM-DD</code>.
     * @param {Date} opts.to To date <code>YYYY-MM-DD</code>.
     * @param {module:api/DefaultApi~economicCalendarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EconomicCalendar}
     */

  }, {
    key: "economicCalendar",
    value: function economicCalendar(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'from': opts['from'],
        'to': opts['to']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EconomicCalendar["default"];
      return this.apiClient.callApi('/calendar/economic', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the economicCode operation.
     * @callback module:api/DefaultApi~economicCodeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EconomicCode>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Economic Code
     * List codes of supported economic data.
     * @param {module:api/DefaultApi~economicCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EconomicCode>}
     */

  }, {
    key: "economicCode",
    value: function economicCode(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_EconomicCode["default"]];
      return this.apiClient.callApi('/economic/code', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the economicData operation.
     * @callback module:api/DefaultApi~economicDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EconomicData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Economic Data
     * Get economic data.
     * @param {String} code Economic code.
     * @param {module:api/DefaultApi~economicDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EconomicData}
     */

  }, {
    key: "economicData",
    value: function economicData(code, callback) {
      var postBody = null; // verify the required parameter 'code' is set

      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling economicData");
      }

      var pathParams = {};
      var queryParams = {
        'code': code
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EconomicData["default"];
      return this.apiClient.callApi('/economic', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the etfsCountryExposure operation.
     * @callback module:api/DefaultApi~etfsCountryExposureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ETFsCountryExposure} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ETFs Country Exposure
     * Get ETF country exposure data.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol ETF symbol.
     * @param {String} opts.isin ETF isin.
     * @param {module:api/DefaultApi~etfsCountryExposureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ETFsCountryExposure}
     */

  }, {
    key: "etfsCountryExposure",
    value: function etfsCountryExposure(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'isin': opts['isin']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ETFsCountryExposure["default"];
      return this.apiClient.callApi('/etf/country', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the etfsHoldings operation.
     * @callback module:api/DefaultApi~etfsHoldingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ETFsHoldings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ETFs Holdings
     * Get full ETF holdings/constituents. This endpoint has global coverage. Widget only shows top 10 holdings. A list of supported ETFs can be found <a href=\"/api/v1/etf/list?token=\" target=\"_blank\">here</a>.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol ETF symbol.
     * @param {String} opts.isin ETF isin.
     * @param {Number} opts.skip Skip the first n results. You can use this parameter to query historical constituents data. The latest result is returned if skip=0 or not set.
     * @param {String} opts.date Query holdings by date. You can use either this param or <code>skip</code> param, not both.
     * @param {module:api/DefaultApi~etfsHoldingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ETFsHoldings}
     */

  }, {
    key: "etfsHoldings",
    value: function etfsHoldings(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'isin': opts['isin'],
        'skip': opts['skip'],
        'date': opts['date']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ETFsHoldings["default"];
      return this.apiClient.callApi('/etf/holdings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the etfsProfile operation.
     * @callback module:api/DefaultApi~etfsProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ETFsProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ETFs Profile
     * Get ETF profile information. This endpoint has global coverage. A list of supported ETFs can be found <a href=\"/api/v1/etf/list?token=\" target=\"_blank\">here</a>.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol ETF symbol.
     * @param {String} opts.isin ETF isin.
     * @param {module:api/DefaultApi~etfsProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ETFsProfile}
     */

  }, {
    key: "etfsProfile",
    value: function etfsProfile(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'isin': opts['isin']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ETFsProfile["default"];
      return this.apiClient.callApi('/etf/profile', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the etfsSectorExposure operation.
     * @callback module:api/DefaultApi~etfsSectorExposureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ETFsSectorExposure} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ETFs Sector Exposure
     * Get ETF sector exposure data.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol ETF symbol.
     * @param {String} opts.isin ETF isin.
     * @param {module:api/DefaultApi~etfsSectorExposureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ETFsSectorExposure}
     */

  }, {
    key: "etfsSectorExposure",
    value: function etfsSectorExposure(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'isin': opts['isin']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ETFsSectorExposure["default"];
      return this.apiClient.callApi('/etf/sector', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fdaCommitteeMeetingCalendar operation.
     * @callback module:api/DefaultApi~fdaCommitteeMeetingCalendarCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FDAComitteeMeeting>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * FDA Committee Meeting Calendar
     * FDA's advisory committees are established to provide functions which support the agency's mission of protecting and promoting the public health, while meeting the requirements set forth in the Federal Advisory Committee Act. Committees are either mandated by statute or established at the discretion of the Department of Health and Human Services. Each committee is subject to renewal at two-year intervals unless the committee charter states otherwise.
     * @param {module:api/DefaultApi~fdaCommitteeMeetingCalendarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FDAComitteeMeeting>}
     */

  }, {
    key: "fdaCommitteeMeetingCalendar",
    value: function fdaCommitteeMeetingCalendar(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_FDAComitteeMeeting["default"]];
      return this.apiClient.callApi('/fda-advisory-committee-calendar', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the filings operation.
     * @callback module:api/DefaultApi~filingsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Filing>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * SEC Filings
     * List company's filing. Limit to 250 documents at a time. This data is available for bulk download on <a href=\"https://www.kaggle.com/finnhub/sec-filings\" target=\"_blank\">Kaggle SEC Filings database</a>.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Symbol. Leave <code>symbol</code>,<code>cik</code> and <code>accessNumber</code> empty to list latest filings.
     * @param {String} opts.cik CIK.
     * @param {String} opts.accessNumber Access number of a specific report you want to retrieve data from.
     * @param {String} opts.form Filter by form. You can use this value <code>NT 10-K</code> to find non-timely filings for a company.
     * @param {Date} opts.from From date: 2023-03-15.
     * @param {Date} opts.to To date: 2023-03-16.
     * @param {module:api/DefaultApi~filingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Filing>}
     */

  }, {
    key: "filings",
    value: function filings(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'cik': opts['cik'],
        'accessNumber': opts['accessNumber'],
        'form': opts['form'],
        'from': opts['from'],
        'to': opts['to']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Filing["default"]];
      return this.apiClient.callApi('/stock/filings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the filingsSentiment operation.
     * @callback module:api/DefaultApi~filingsSentimentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SECSentimentAnalysis} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * SEC Sentiment Analysis
     * Get sentiment analysis of 10-K and 10-Q filings from SEC. An abnormal increase in the number of positive/negative words in filings can signal a significant change in the company's stock price in the upcoming 4 quarters. We make use of <a href= \"https://sraf.nd.edu/textual-analysis/resources/\" target=\"_blank\">Loughran and McDonald Sentiment Word Lists</a> to calculate the sentiment for each filing.
     * @param {String} accessNumber Access number of a specific report you want to retrieve data from.
     * @param {module:api/DefaultApi~filingsSentimentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SECSentimentAnalysis}
     */

  }, {
    key: "filingsSentiment",
    value: function filingsSentiment(accessNumber, callback) {
      var postBody = null; // verify the required parameter 'accessNumber' is set

      if (accessNumber === undefined || accessNumber === null) {
        throw new Error("Missing the required parameter 'accessNumber' when calling filingsSentiment");
      }

      var pathParams = {};
      var queryParams = {
        'accessNumber': accessNumber
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SECSentimentAnalysis["default"];
      return this.apiClient.callApi('/stock/filings-sentiment', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the financials operation.
     * @callback module:api/DefaultApi~financialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FinancialStatements} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Financial Statements
     * <p>Get standardized balance sheet, income statement and cash flow for global companies going back 30+ years. Data is sourced from original filings most of which made available through <a href=\"#filings\">SEC Filings</a> and <a href=\"#international-filings\">International Filings</a> endpoints.</p><p><i>Wondering why our standardized data is different from Bloomberg, Reuters, Factset, S&P or Yahoo Finance ? Check out our <a href=\"/faq\">FAQ page</a> to learn more</i></p>
     * @param {String} symbol Symbol of the company: AAPL.
     * @param {String} statement Statement can take 1 of these values <code>bs, ic, cf</code> for Balance Sheet, Income Statement, Cash Flow respectively.
     * @param {String} freq Frequency can take 1 of these values <code>annual, quarterly, ttm, ytd</code>.  TTM (Trailing Twelve Months) option is available for Income Statement and Cash Flow. YTD (Year To Date) option is only available for Cash Flow.
     * @param {module:api/DefaultApi~financialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FinancialStatements}
     */

  }, {
    key: "financials",
    value: function financials(symbol, statement, freq, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling financials");
      } // verify the required parameter 'statement' is set


      if (statement === undefined || statement === null) {
        throw new Error("Missing the required parameter 'statement' when calling financials");
      } // verify the required parameter 'freq' is set


      if (freq === undefined || freq === null) {
        throw new Error("Missing the required parameter 'freq' when calling financials");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'statement': statement,
        'freq': freq
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FinancialStatements["default"];
      return this.apiClient.callApi('/stock/financials', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the financialsReported operation.
     * @callback module:api/DefaultApi~financialsReportedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FinancialsAsReported} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Financials As Reported
     * Get financials as reported. This data is available for bulk download on <a href=\"https://www.kaggle.com/finnhub/reported-financials\" target=\"_blank\">Kaggle SEC Financials database</a>.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Symbol.
     * @param {String} opts.cik CIK.
     * @param {String} opts.accessNumber Access number of a specific report you want to retrieve financials from.
     * @param {String} opts.freq Frequency. Can be either <code>annual</code> or <code>quarterly</code>. Default to <code>annual</code>.
     * @param {Date} opts.from From date <code>YYYY-MM-DD</code>. Filter for endDate.
     * @param {Date} opts.to To date <code>YYYY-MM-DD</code>. Filter for endDate.
     * @param {module:api/DefaultApi~financialsReportedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FinancialsAsReported}
     */

  }, {
    key: "financialsReported",
    value: function financialsReported(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'cik': opts['cik'],
        'accessNumber': opts['accessNumber'],
        'freq': opts['freq'],
        'from': opts['from'],
        'to': opts['to']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FinancialsAsReported["default"];
      return this.apiClient.callApi('/stock/financials-reported', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the forexCandles operation.
     * @callback module:api/DefaultApi~forexCandlesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ForexCandles} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Forex Candles
     * Get candlestick data for forex symbols.
     * @param {String} symbol Use symbol returned in <code>/forex/symbol</code> endpoint for this field.
     * @param {String} resolution Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange.
     * @param {Number} from UNIX timestamp. Interval initial value.
     * @param {Number} to UNIX timestamp. Interval end value.
     * @param {module:api/DefaultApi~forexCandlesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ForexCandles}
     */

  }, {
    key: "forexCandles",
    value: function forexCandles(symbol, resolution, from, to, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling forexCandles");
      } // verify the required parameter 'resolution' is set


      if (resolution === undefined || resolution === null) {
        throw new Error("Missing the required parameter 'resolution' when calling forexCandles");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling forexCandles");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling forexCandles");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'resolution': resolution,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ForexCandles["default"];
      return this.apiClient.callApi('/forex/candle', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the forexExchanges operation.
     * @callback module:api/DefaultApi~forexExchangesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Forex Exchanges
     * List supported forex exchanges
     * @param {module:api/DefaultApi~forexExchangesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */

  }, {
    key: "forexExchanges",
    value: function forexExchanges(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];
      return this.apiClient.callApi('/forex/exchange', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the forexRates operation.
     * @callback module:api/DefaultApi~forexRatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Forexrates} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Forex rates
     * Get rates for all forex pairs. Ideal for currency conversion
     * @param {Object} opts Optional parameters
     * @param {String} opts.base Base currency. Default to EUR.
     * @param {String} opts.date Date. Leave blank to get the latest data.
     * @param {module:api/DefaultApi~forexRatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Forexrates}
     */

  }, {
    key: "forexRates",
    value: function forexRates(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'base': opts['base'],
        'date': opts['date']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Forexrates["default"];
      return this.apiClient.callApi('/forex/rates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the forexSymbols operation.
     * @callback module:api/DefaultApi~forexSymbolsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ForexSymbol>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Forex Symbol
     * List supported forex symbols.
     * @param {String} exchange Exchange you want to get the list of symbols from.
     * @param {module:api/DefaultApi~forexSymbolsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ForexSymbol>}
     */

  }, {
    key: "forexSymbols",
    value: function forexSymbols(exchange, callback) {
      var postBody = null; // verify the required parameter 'exchange' is set

      if (exchange === undefined || exchange === null) {
        throw new Error("Missing the required parameter 'exchange' when calling forexSymbols");
      }

      var pathParams = {};
      var queryParams = {
        'exchange': exchange
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ForexSymbol["default"]];
      return this.apiClient.callApi('/forex/symbol', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fundOwnership operation.
     * @callback module:api/DefaultApi~fundOwnershipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FundOwnership} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fund Ownership
     * Get a full list fund and institutional investors of a company in descending order of the number of shares held. Data is sourced from <code>13F form</code>, <code>Schedule 13D</code> and <code>13G</code> for US market, <code>UK Share Register</code> for UK market, <code>SEDI</code> for Canadian market and equivalent filings for other international markets.
     * @param {String} symbol Symbol of the company: AAPL.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit number of results. Leave empty to get the full list.
     * @param {module:api/DefaultApi~fundOwnershipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FundOwnership}
     */

  }, {
    key: "fundOwnership",
    value: function fundOwnership(symbol, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling fundOwnership");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FundOwnership["default"];
      return this.apiClient.callApi('/stock/fund-ownership', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the historicalEmployeeCount operation.
     * @callback module:api/DefaultApi~historicalEmployeeCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoricalEmployeeCount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Historical Employee Count
     * Get historical employee count for global companies.
     * @param {String} symbol Company symbol.
     * @param {Date} from From date <code>YYYY-MM-DD</code>.
     * @param {Date} to To date <code>YYYY-MM-DD</code>.
     * @param {module:api/DefaultApi~historicalEmployeeCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HistoricalEmployeeCount}
     */

  }, {
    key: "historicalEmployeeCount",
    value: function historicalEmployeeCount(symbol, from, to, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling historicalEmployeeCount");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling historicalEmployeeCount");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling historicalEmployeeCount");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _HistoricalEmployeeCount["default"];
      return this.apiClient.callApi('/stock/historical-employee-count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the historicalMarketCap operation.
     * @callback module:api/DefaultApi~historicalMarketCapCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoricalMarketCapData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Historical Market Cap
     * Get historical market cap data for global companies.
     * @param {String} symbol Company symbol.
     * @param {Date} from From date <code>YYYY-MM-DD</code>.
     * @param {Date} to To date <code>YYYY-MM-DD</code>.
     * @param {module:api/DefaultApi~historicalMarketCapCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HistoricalMarketCapData}
     */

  }, {
    key: "historicalMarketCap",
    value: function historicalMarketCap(symbol, from, to, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling historicalMarketCap");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling historicalMarketCap");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling historicalMarketCap");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _HistoricalMarketCapData["default"];
      return this.apiClient.callApi('/stock/historical-market-cap', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the indicesConstituents operation.
     * @callback module:api/DefaultApi~indicesConstituentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IndicesConstituents} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Indices Constituents
     * Get a list of index's constituents. A list of supported indices for this endpoint can be found <a href=\"/api/v1/index/list?token=\" target=\"_blank\">here</a>.
     * @param {String} symbol symbol
     * @param {module:api/DefaultApi~indicesConstituentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IndicesConstituents}
     */

  }, {
    key: "indicesConstituents",
    value: function indicesConstituents(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling indicesConstituents");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IndicesConstituents["default"];
      return this.apiClient.callApi('/index/constituents', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the indicesHistoricalConstituents operation.
     * @callback module:api/DefaultApi~indicesHistoricalConstituentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IndicesHistoricalConstituents} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Indices Historical Constituents
     * Get full history of index's constituents including symbols and dates of joining and leaving the Index. Currently support <code>^GSPC</code>, <code>^NDX</code>, <code>^DJI</code>
     * @param {String} symbol symbol
     * @param {module:api/DefaultApi~indicesHistoricalConstituentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IndicesHistoricalConstituents}
     */

  }, {
    key: "indicesHistoricalConstituents",
    value: function indicesHistoricalConstituents(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling indicesHistoricalConstituents");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IndicesHistoricalConstituents["default"];
      return this.apiClient.callApi('/index/historical-constituents', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the insiderSentiment operation.
     * @callback module:api/DefaultApi~insiderSentimentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InsiderSentiments} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insider Sentiment
     * Get insider sentiment data for US companies calculated using method discussed <a href=\"https://medium.com/@stock-api/finnhub-insiders-sentiment-analysis-cc43f9f64b3a\" target=\"_blank\">here</a>. The MSPR ranges from -100 for the most negative to 100 for the most positive which can signal price changes in the coming 30-90 days.
     * @param {String} symbol Symbol of the company: AAPL.
     * @param {Date} from From date: 2020-03-15.
     * @param {Date} to To date: 2020-03-16.
     * @param {module:api/DefaultApi~insiderSentimentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InsiderSentiments}
     */

  }, {
    key: "insiderSentiment",
    value: function insiderSentiment(symbol, from, to, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling insiderSentiment");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling insiderSentiment");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling insiderSentiment");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InsiderSentiments["default"];
      return this.apiClient.callApi('/stock/insider-sentiment', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the insiderTransactions operation.
     * @callback module:api/DefaultApi~insiderTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InsiderTransactions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insider Transactions
     * Company insider transactions data sourced from <code>Form 3,4,5</code>, SEDI and relevant companies' filings. This endpoint covers US, UK, Canada, Australia, India, and all major EU markets. Limit to 100 transactions per API call.
     * @param {String} symbol Symbol of the company: AAPL. Leave this param blank to get the latest transactions.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.from From date: 2020-03-15.
     * @param {Date} opts.to To date: 2020-03-16.
     * @param {module:api/DefaultApi~insiderTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InsiderTransactions}
     */

  }, {
    key: "insiderTransactions",
    value: function insiderTransactions(symbol, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling insiderTransactions");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'from': opts['from'],
        'to': opts['to']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InsiderTransactions["default"];
      return this.apiClient.callApi('/stock/insider-transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the institutionalOwnership operation.
     * @callback module:api/DefaultApi~institutionalOwnershipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InstitutionalOwnership} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Institutional Ownership
     * Get a list institutional investors' positions for a particular stock overtime. Data from 13-F filings. Limit to 1 year of data at a time.
     * @param {String} symbol Filter by symbol.
     * @param {String} cusip Filter by CUSIP.
     * @param {String} from From date <code>YYYY-MM-DD</code>.
     * @param {String} to To date <code>YYYY-MM-DD</code>.
     * @param {module:api/DefaultApi~institutionalOwnershipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InstitutionalOwnership}
     */

  }, {
    key: "institutionalOwnership",
    value: function institutionalOwnership(symbol, cusip, from, to, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling institutionalOwnership");
      } // verify the required parameter 'cusip' is set


      if (cusip === undefined || cusip === null) {
        throw new Error("Missing the required parameter 'cusip' when calling institutionalOwnership");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling institutionalOwnership");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling institutionalOwnership");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'cusip': cusip,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InstitutionalOwnership["default"];
      return this.apiClient.callApi('/institutional/ownership', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the institutionalPortfolio operation.
     * @callback module:api/DefaultApi~institutionalPortfolioCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InstitutionalPortfolio} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Institutional Portfolio
     * Get the holdings/portfolio data of institutional investors from 13-F filings. Limit to 1 year of data at a time. You can get a list of supported CIK <a href=\"/api/v1/institutional/list?token=\" target=\"_blank\">here</a>.
     * @param {String} cik Fund's CIK.
     * @param {String} from From date <code>YYYY-MM-DD</code>.
     * @param {String} to To date <code>YYYY-MM-DD</code>.
     * @param {module:api/DefaultApi~institutionalPortfolioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InstitutionalPortfolio}
     */

  }, {
    key: "institutionalPortfolio",
    value: function institutionalPortfolio(cik, from, to, callback) {
      var postBody = null; // verify the required parameter 'cik' is set

      if (cik === undefined || cik === null) {
        throw new Error("Missing the required parameter 'cik' when calling institutionalPortfolio");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling institutionalPortfolio");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling institutionalPortfolio");
      }

      var pathParams = {};
      var queryParams = {
        'cik': cik,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InstitutionalPortfolio["default"];
      return this.apiClient.callApi('/institutional/portfolio', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the institutionalProfile operation.
     * @callback module:api/DefaultApi~institutionalProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InstitutionalProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Institutional Profile
     * Get a list of well-known institutional investors. Currently support 60+ profiles.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cik Filter by CIK. Leave blank to get the full list.
     * @param {module:api/DefaultApi~institutionalProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InstitutionalProfile}
     */

  }, {
    key: "institutionalProfile",
    value: function institutionalProfile(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'cik': opts['cik']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InstitutionalProfile["default"];
      return this.apiClient.callApi('/institutional/profile', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the internationalFilings operation.
     * @callback module:api/DefaultApi~internationalFilingsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InternationalFiling>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * International Filings
     * List filings for international companies. Limit to 500 documents at a time. These are the documents we use to source our fundamental data. Only support SEDAR and UK Companies House for normal usage. Enterprise clients who need access to the full filings for global markets should contact us for the access.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Symbol. Leave empty to list latest filings.
     * @param {String} opts.country Filter by country using country's 2-letter code.
     * @param {Date} opts.from From date: 2023-01-15.
     * @param {Date} opts.to To date: 2023-12-16.
     * @param {module:api/DefaultApi~internationalFilingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InternationalFiling>}
     */

  }, {
    key: "internationalFilings",
    value: function internationalFilings(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'country': opts['country'],
        'from': opts['from'],
        'to': opts['to']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InternationalFiling["default"]];
      return this.apiClient.callApi('/stock/international-filings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the investmentThemes operation.
     * @callback module:api/DefaultApi~investmentThemesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvestmentThemes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Investment Themes (Thematic Investing)
     * <p>Thematic investing involves creating a portfolio (or portion of a portfolio) by gathering together a collection of companies involved in certain areas that you predict will generate above-market returns over the long term. Themes can be based on a concept such as ageing populations or a sub-sector such as robotics, and drones. Thematic investing focuses on predicted long-term trends rather than specific companies or sectors, enabling investors to access structural, one-off shifts that can change an entire industry.</p><p>This endpoint will help you get portfolios of different investment themes that are changing our life and are the way of the future.</p><p>A full list of themes supported can be found <a target=\"_blank\" href=\"https://docs.google.com/spreadsheets/d/1ULj9xDh4iPoQj279M084adZ2_S852ttRthKKJ7madYc/edit?usp=sharing\">here</a>. The theme coverage and portfolios are updated bi-weekly by our analysts. Our approach excludes penny, super-small cap and illiquid stocks.</p>
     * @param {String} theme Investment theme. A full list of themes supported can be found <a target=\"_blank\" href=\"https://docs.google.com/spreadsheets/d/1ULj9xDh4iPoQj279M084adZ2_S852ttRthKKJ7madYc/edit?usp=sharing\">here</a>.
     * @param {module:api/DefaultApi~investmentThemesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvestmentThemes}
     */

  }, {
    key: "investmentThemes",
    value: function investmentThemes(theme, callback) {
      var postBody = null; // verify the required parameter 'theme' is set

      if (theme === undefined || theme === null) {
        throw new Error("Missing the required parameter 'theme' when calling investmentThemes");
      }

      var pathParams = {};
      var queryParams = {
        'theme': theme
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InvestmentThemes["default"];
      return this.apiClient.callApi('/stock/investment-theme', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ipoCalendar operation.
     * @callback module:api/DefaultApi~ipoCalendarCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IPOCalendar} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * IPO Calendar
     * Get recent and upcoming IPO.
     * @param {Date} from From date: 2020-03-15.
     * @param {Date} to To date: 2020-03-16.
     * @param {module:api/DefaultApi~ipoCalendarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IPOCalendar}
     */

  }, {
    key: "ipoCalendar",
    value: function ipoCalendar(from, to, callback) {
      var postBody = null; // verify the required parameter 'from' is set

      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling ipoCalendar");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling ipoCalendar");
      }

      var pathParams = {};
      var queryParams = {
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IPOCalendar["default"];
      return this.apiClient.callApi('/calendar/ipo', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the isinChange operation.
     * @callback module:api/DefaultApi~isinChangeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IsinChange} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ISIN Change
     * Get a list of ISIN changes for EU-listed securities. Limit to 2000 events at a time.
     * @param {String} from From date <code>YYYY-MM-DD</code>.
     * @param {String} to To date <code>YYYY-MM-DD</code>.
     * @param {module:api/DefaultApi~isinChangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IsinChange}
     */

  }, {
    key: "isinChange",
    value: function isinChange(from, to, callback) {
      var postBody = null; // verify the required parameter 'from' is set

      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling isinChange");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling isinChange");
      }

      var pathParams = {};
      var queryParams = {
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IsinChange["default"];
      return this.apiClient.callApi('/ca/isin-change', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the marketHoliday operation.
     * @callback module:api/DefaultApi~marketHolidayCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MarketHoliday} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Market Holiday
     * Get a list of holidays for global exchanges.
     * @param {String} exchange Exchange code.
     * @param {module:api/DefaultApi~marketHolidayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MarketHoliday}
     */

  }, {
    key: "marketHoliday",
    value: function marketHoliday(exchange, callback) {
      var postBody = null; // verify the required parameter 'exchange' is set

      if (exchange === undefined || exchange === null) {
        throw new Error("Missing the required parameter 'exchange' when calling marketHoliday");
      }

      var pathParams = {};
      var queryParams = {
        'exchange': exchange
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MarketHoliday["default"];
      return this.apiClient.callApi('/stock/market-holiday', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the marketNews operation.
     * @callback module:api/DefaultApi~marketNewsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MarketNews>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Market News
     * Get latest market news.
     * @param {String} category This parameter can be 1 of the following values <code>general, forex, crypto, merger</code>.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.minId Use this field to get only news after this ID. Default to 0
     * @param {module:api/DefaultApi~marketNewsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MarketNews>}
     */

  }, {
    key: "marketNews",
    value: function marketNews(category, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'category' is set

      if (category === undefined || category === null) {
        throw new Error("Missing the required parameter 'category' when calling marketNews");
      }

      var pathParams = {};
      var queryParams = {
        'category': category,
        'minId': opts['minId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_MarketNews["default"]];
      return this.apiClient.callApi('/news', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the marketStatus operation.
     * @callback module:api/DefaultApi~marketStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MarketStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Market Status
     * Get current market status for global exchanges (whether exchanges are open or close).
     * @param {String} exchange Exchange code.
     * @param {module:api/DefaultApi~marketStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MarketStatus}
     */

  }, {
    key: "marketStatus",
    value: function marketStatus(exchange, callback) {
      var postBody = null; // verify the required parameter 'exchange' is set

      if (exchange === undefined || exchange === null) {
        throw new Error("Missing the required parameter 'exchange' when calling marketStatus");
      }

      var pathParams = {};
      var queryParams = {
        'exchange': exchange
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MarketStatus["default"];
      return this.apiClient.callApi('/stock/market-status', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the mutualFundCountryExposure operation.
     * @callback module:api/DefaultApi~mutualFundCountryExposureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MutualFundCountryExposure} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mutual Funds Country Exposure
     * Get Mutual Funds country exposure data.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Symbol.
     * @param {String} opts.isin Fund's isin.
     * @param {module:api/DefaultApi~mutualFundCountryExposureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MutualFundCountryExposure}
     */

  }, {
    key: "mutualFundCountryExposure",
    value: function mutualFundCountryExposure(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'isin': opts['isin']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MutualFundCountryExposure["default"];
      return this.apiClient.callApi('/mutual-fund/country', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the mutualFundEet operation.
     * @callback module:api/DefaultApi~mutualFundEetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MutualFundEet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mutual Funds EET
     * Get EET data for EU funds. For PAIs data, please see the EET PAI endpoint.
     * @param {String} isin ISIN.
     * @param {module:api/DefaultApi~mutualFundEetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MutualFundEet}
     */

  }, {
    key: "mutualFundEet",
    value: function mutualFundEet(isin, callback) {
      var postBody = null; // verify the required parameter 'isin' is set

      if (isin === undefined || isin === null) {
        throw new Error("Missing the required parameter 'isin' when calling mutualFundEet");
      }

      var pathParams = {};
      var queryParams = {
        'isin': isin
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MutualFundEet["default"];
      return this.apiClient.callApi('/mutual-fund/eet', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the mutualFundEetPai operation.
     * @callback module:api/DefaultApi~mutualFundEetPaiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MutualFundEetPai} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mutual Funds EET PAI
     * Get EET PAI data for EU funds.
     * @param {String} isin ISIN.
     * @param {module:api/DefaultApi~mutualFundEetPaiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MutualFundEetPai}
     */

  }, {
    key: "mutualFundEetPai",
    value: function mutualFundEetPai(isin, callback) {
      var postBody = null; // verify the required parameter 'isin' is set

      if (isin === undefined || isin === null) {
        throw new Error("Missing the required parameter 'isin' when calling mutualFundEetPai");
      }

      var pathParams = {};
      var queryParams = {
        'isin': isin
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MutualFundEetPai["default"];
      return this.apiClient.callApi('/mutual-fund/eet-pai', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the mutualFundHoldings operation.
     * @callback module:api/DefaultApi~mutualFundHoldingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MutualFundHoldings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mutual Funds Holdings
     * Get full Mutual Funds holdings/constituents. This endpoint covers both US and global mutual funds. For international funds, you must query the data using ISIN. A list of supported funds can be found <a href=\"/api/v1/mutual-fund/list?token=\" target=\"_blank\">here</a>.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Fund's symbol.
     * @param {String} opts.isin Fund's isin.
     * @param {Number} opts.skip Skip the first n results. You can use this parameter to query historical constituents data. The latest result is returned if skip=0 or not set.
     * @param {module:api/DefaultApi~mutualFundHoldingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MutualFundHoldings}
     */

  }, {
    key: "mutualFundHoldings",
    value: function mutualFundHoldings(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'isin': opts['isin'],
        'skip': opts['skip']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MutualFundHoldings["default"];
      return this.apiClient.callApi('/mutual-fund/holdings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the mutualFundProfile operation.
     * @callback module:api/DefaultApi~mutualFundProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MutualFundProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mutual Funds Profile
     * Get mutual funds profile information. This endpoint covers both US and global mutual funds. For international funds, you must query the data using ISIN. A list of supported funds can be found <a href=\"/api/v1/mutual-fund/list?token=\" target=\"_blank\">here</a>.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Fund's symbol.
     * @param {String} opts.isin Fund's isin.
     * @param {module:api/DefaultApi~mutualFundProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MutualFundProfile}
     */

  }, {
    key: "mutualFundProfile",
    value: function mutualFundProfile(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'isin': opts['isin']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MutualFundProfile["default"];
      return this.apiClient.callApi('/mutual-fund/profile', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the mutualFundSectorExposure operation.
     * @callback module:api/DefaultApi~mutualFundSectorExposureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MutualFundSectorExposure} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mutual Funds Sector Exposure
     * Get Mutual Funds sector exposure data.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Mutual Fund symbol.
     * @param {String} opts.isin Fund's isin.
     * @param {module:api/DefaultApi~mutualFundSectorExposureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MutualFundSectorExposure}
     */

  }, {
    key: "mutualFundSectorExposure",
    value: function mutualFundSectorExposure(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'isin': opts['isin']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MutualFundSectorExposure["default"];
      return this.apiClient.callApi('/mutual-fund/sector', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the newsSentiment operation.
     * @callback module:api/DefaultApi~newsSentimentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NewsSentiment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * News Sentiment
     * Get company's news sentiment and statistics. This endpoint is only available for US companies.
     * @param {String} symbol Company symbol.
     * @param {module:api/DefaultApi~newsSentimentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NewsSentiment}
     */

  }, {
    key: "newsSentiment",
    value: function newsSentiment(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling newsSentiment");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NewsSentiment["default"];
      return this.apiClient.callApi('/news-sentiment', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ownership operation.
     * @callback module:api/DefaultApi~ownershipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Ownership} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ownership
     * Get a full list of shareholders of a company in descending order of the number of shares held. Data is sourced from <code>13F form</code>, <code>Schedule 13D</code> and <code>13G</code> for US market, <code>UK Share Register</code> for UK market, <code>SEDI</code> for Canadian market and equivalent filings for other international markets.
     * @param {String} symbol Symbol of the company: AAPL.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit number of results. Leave empty to get the full list.
     * @param {module:api/DefaultApi~ownershipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Ownership}
     */

  }, {
    key: "ownership",
    value: function ownership(symbol, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling ownership");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Ownership["default"];
      return this.apiClient.callApi('/stock/ownership', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the patternRecognition operation.
     * @callback module:api/DefaultApi~patternRecognitionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PatternRecognition} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pattern Recognition
     * Run pattern recognition algorithm on a symbol. Support double top/bottom, triple top/bottom, head and shoulders, triangle, wedge, channel, flag, and candlestick patterns.
     * @param {String} symbol Symbol
     * @param {String} resolution Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange.
     * @param {module:api/DefaultApi~patternRecognitionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PatternRecognition}
     */

  }, {
    key: "patternRecognition",
    value: function patternRecognition(symbol, resolution, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling patternRecognition");
      } // verify the required parameter 'resolution' is set


      if (resolution === undefined || resolution === null) {
        throw new Error("Missing the required parameter 'resolution' when calling patternRecognition");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'resolution': resolution
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PatternRecognition["default"];
      return this.apiClient.callApi('/scan/pattern', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pressReleases operation.
     * @callback module:api/DefaultApi~pressReleasesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PressRelease} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Major Press Releases
     * <p>Get latest major press releases of a company. This data can be used to highlight the most significant events comprised of mostly press releases sourced from the exchanges, BusinessWire, AccessWire, GlobeNewswire, Newsfile, and PRNewswire.</p><p>Full-text press releases data is available for Enterprise clients. <a href=\"mailto:support@finnhub.io\">Contact Us</a> to learn more.</p>
     * @param {String} symbol Company symbol.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.from From time: 2020-01-01.
     * @param {Date} opts.to To time: 2020-01-05.
     * @param {module:api/DefaultApi~pressReleasesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PressRelease}
     */

  }, {
    key: "pressReleases",
    value: function pressReleases(symbol, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling pressReleases");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'from': opts['from'],
        'to': opts['to']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PressRelease["default"];
      return this.apiClient.callApi('/press-releases', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the priceMetrics operation.
     * @callback module:api/DefaultApi~priceMetricsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceMetrics} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Price Metrics
     * Get company price performance statistics such as 52-week high/low, YTD return and much more.
     * @param {String} symbol Symbol of the company: AAPL.
     * @param {Object} opts Optional parameters
     * @param {String} opts.date Get data on a specific date in the past. The data is available weekly so your date will be automatically adjusted to the last day of that week.
     * @param {module:api/DefaultApi~priceMetricsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceMetrics}
     */

  }, {
    key: "priceMetrics",
    value: function priceMetrics(symbol, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling priceMetrics");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'date': opts['date']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PriceMetrics["default"];
      return this.apiClient.callApi('/stock/price-metric', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the priceTarget operation.
     * @callback module:api/DefaultApi~priceTargetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceTarget} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Price Target
     * Get latest price target consensus.
     * @param {String} symbol Symbol of the company: AAPL.
     * @param {module:api/DefaultApi~priceTargetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceTarget}
     */

  }, {
    key: "priceTarget",
    value: function priceTarget(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling priceTarget");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PriceTarget["default"];
      return this.apiClient.callApi('/stock/price-target', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the quote operation.
     * @callback module:api/DefaultApi~quoteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Quote} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Quote
     * <p>Get real-time quote data for US stocks. Constant polling is not recommended. Use websocket if you need real-time updates.</p><p>Real-time stock prices for international markets are supported for Enterprise clients via our partner's feed. <a href=\"mailto:support@finnhub.io\">Contact Us</a> to learn more.</p>
     * @param {String} symbol Symbol
     * @param {module:api/DefaultApi~quoteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Quote}
     */

  }, {
    key: "quote",
    value: function quote(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling quote");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Quote["default"];
      return this.apiClient.callApi('/quote', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the recommendationTrends operation.
     * @callback module:api/DefaultApi~recommendationTrendsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RecommendationTrend>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recommendation Trends
     * Get latest analyst recommendation trends for a company.
     * @param {String} symbol Symbol of the company: AAPL.
     * @param {module:api/DefaultApi~recommendationTrendsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RecommendationTrend>}
     */

  }, {
    key: "recommendationTrends",
    value: function recommendationTrends(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling recommendationTrends");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_RecommendationTrend["default"]];
      return this.apiClient.callApi('/stock/recommendation', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the revenueBreakdown operation.
     * @callback module:api/DefaultApi~revenueBreakdownCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RevenueBreakdown} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revenue Breakdown
     * Get revenue breakdown by product. This dataset is only available for US companies which disclose their revenue breakdown in the annual or quarterly reports.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Symbol.
     * @param {String} opts.cik CIK.
     * @param {module:api/DefaultApi~revenueBreakdownCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RevenueBreakdown}
     */

  }, {
    key: "revenueBreakdown",
    value: function revenueBreakdown(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'cik': opts['cik']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RevenueBreakdown["default"];
      return this.apiClient.callApi('/stock/revenue-breakdown', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the sectorMetric operation.
     * @callback module:api/DefaultApi~sectorMetricCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SectorMetric} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sector Metrics
     * Get ratios for different sectors and regions/indices.
     * @param {String} region Region. A list of supported values for this field can be found <a href=\"https://docs.google.com/spreadsheets/d/1afedyv7yWJ-z7pMjaAZK-f6ENY3mI3EBCk95QffpoHw/edit?usp=sharing\" target=\"_blank\">here</a>.
     * @param {module:api/DefaultApi~sectorMetricCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SectorMetric}
     */

  }, {
    key: "sectorMetric",
    value: function sectorMetric(region, callback) {
      var postBody = null; // verify the required parameter 'region' is set

      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling sectorMetric");
      }

      var pathParams = {};
      var queryParams = {
        'region': region
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SectorMetric["default"];
      return this.apiClient.callApi('/sector/metrics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the similarityIndex operation.
     * @callback module:api/DefaultApi~similarityIndexCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimilarityIndex} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Similarity Index
     * <p>Calculate the textual difference between a company's 10-K / 10-Q reports and the same type of report in the previous year using Cosine Similarity. For example, this endpoint compares 2019's 10-K with 2018's 10-K. Companies breaking from its routines in disclosure of financial condition and risk analysis section can signal a significant change in the company's stock price in the upcoming 4 quarters.</p>
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Symbol. Required if cik is empty
     * @param {String} opts.cik CIK. Required if symbol is empty
     * @param {String} opts.freq <code>annual</code> or <code>quarterly</code>. Default to <code>annual</code>
     * @param {module:api/DefaultApi~similarityIndexCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimilarityIndex}
     */

  }, {
    key: "similarityIndex",
    value: function similarityIndex(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'cik': opts['cik'],
        'freq': opts['freq']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SimilarityIndex["default"];
      return this.apiClient.callApi('/stock/similarity-index', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the socialSentiment operation.
     * @callback module:api/DefaultApi~socialSentimentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SocialSentiment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Social Sentiment
     * <p>Get social sentiment for stocks on Reddit and Twitter.</p>
     * @param {String} symbol Company symbol.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.from From date <code>YYYY-MM-DD</code>.
     * @param {Date} opts.to To date <code>YYYY-MM-DD</code>.
     * @param {module:api/DefaultApi~socialSentimentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SocialSentiment}
     */

  }, {
    key: "socialSentiment",
    value: function socialSentiment(symbol, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling socialSentiment");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'from': opts['from'],
        'to': opts['to']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SocialSentiment["default"];
      return this.apiClient.callApi('/stock/social-sentiment', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the stockBasicDividends operation.
     * @callback module:api/DefaultApi~stockBasicDividendsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Dividends2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Dividends 2 (Basic)
     * Get global dividends data.
     * @param {String} symbol Symbol.
     * @param {module:api/DefaultApi~stockBasicDividendsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Dividends2}
     */

  }, {
    key: "stockBasicDividends",
    value: function stockBasicDividends(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling stockBasicDividends");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Dividends2["default"];
      return this.apiClient.callApi('/stock/dividend2', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the stockBidask operation.
     * @callback module:api/DefaultApi~stockBidaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LastBidAsk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Last Bid-Ask
     * Get last bid/ask data for US stocks.
     * @param {String} symbol Symbol.
     * @param {module:api/DefaultApi~stockBidaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LastBidAsk}
     */

  }, {
    key: "stockBidask",
    value: function stockBidask(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling stockBidask");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LastBidAsk["default"];
      return this.apiClient.callApi('/stock/bidask', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the stockCandles operation.
     * @callback module:api/DefaultApi~stockCandlesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StockCandles} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stock Candles
     * <p>Get candlestick data (OHLCV) for stocks.</p><p>Daily data will be adjusted for Splits. Intraday data will remain unadjusted. Only 1 month of intraday will be returned at a time. If you need more historical intraday data, please use the from and to params iteratively to request more data.</p>
     * @param {String} symbol Symbol.
     * @param {String} resolution Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange.
     * @param {Number} from UNIX timestamp. Interval initial value.
     * @param {Number} to UNIX timestamp. Interval end value.
     * @param {module:api/DefaultApi~stockCandlesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StockCandles}
     */

  }, {
    key: "stockCandles",
    value: function stockCandles(symbol, resolution, from, to, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling stockCandles");
      } // verify the required parameter 'resolution' is set


      if (resolution === undefined || resolution === null) {
        throw new Error("Missing the required parameter 'resolution' when calling stockCandles");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling stockCandles");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling stockCandles");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'resolution': resolution,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StockCandles["default"];
      return this.apiClient.callApi('/stock/candle', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the stockDividends operation.
     * @callback module:api/DefaultApi~stockDividendsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Dividends>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Dividends
     * Get dividends data for common stocks going back 30 years.
     * @param {String} symbol Symbol.
     * @param {Date} from YYYY-MM-DD.
     * @param {Date} to YYYY-MM-DD.
     * @param {module:api/DefaultApi~stockDividendsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Dividends>}
     */

  }, {
    key: "stockDividends",
    value: function stockDividends(symbol, from, to, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling stockDividends");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling stockDividends");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling stockDividends");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Dividends["default"]];
      return this.apiClient.callApi('/stock/dividend', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the stockLobbying operation.
     * @callback module:api/DefaultApi~stockLobbyingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LobbyingResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Senate Lobbying
     * Get a list of reported lobbying activities in the Senate and the House.
     * @param {String} symbol Symbol.
     * @param {Date} from From date <code>YYYY-MM-DD</code>.
     * @param {Date} to To date <code>YYYY-MM-DD</code>.
     * @param {module:api/DefaultApi~stockLobbyingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LobbyingResult}
     */

  }, {
    key: "stockLobbying",
    value: function stockLobbying(symbol, from, to, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling stockLobbying");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling stockLobbying");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling stockLobbying");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LobbyingResult["default"];
      return this.apiClient.callApi('/stock/lobbying', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the stockNbbo operation.
     * @callback module:api/DefaultApi~stockNbboCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoricalNBBO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Historical NBBO
     * <p>Get historical best bid and offer for US stocks, LSE, TSX, Euronext and Deutsche Borse.</p><p>For US market, this endpoint only serves historical NBBO from the beginning of 2020. To download more historical data, please visit our bulk download page in the Dashboard <a target=\"_blank\" href=\"/dashboard/download\",>here</a>.</p>
     * @param {String} symbol Symbol.
     * @param {Date} date Date: 2020-04-02.
     * @param {Number} limit Limit number of ticks returned. Maximum value: <code>25000</code>
     * @param {Number} skip Number of ticks to skip. Use this parameter to loop through the entire data.
     * @param {module:api/DefaultApi~stockNbboCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HistoricalNBBO}
     */

  }, {
    key: "stockNbbo",
    value: function stockNbbo(symbol, date, limit, skip, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling stockNbbo");
      } // verify the required parameter 'date' is set


      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling stockNbbo");
      } // verify the required parameter 'limit' is set


      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling stockNbbo");
      } // verify the required parameter 'skip' is set


      if (skip === undefined || skip === null) {
        throw new Error("Missing the required parameter 'skip' when calling stockNbbo");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'date': date,
        'limit': limit,
        'skip': skip
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _HistoricalNBBO["default"];
      return this.apiClient.callApi('/stock/bbo', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the stockSplits operation.
     * @callback module:api/DefaultApi~stockSplitsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Split>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Splits
     * Get splits data for stocks.
     * @param {String} symbol Symbol.
     * @param {Date} from YYYY-MM-DD.
     * @param {Date} to YYYY-MM-DD.
     * @param {module:api/DefaultApi~stockSplitsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Split>}
     */

  }, {
    key: "stockSplits",
    value: function stockSplits(symbol, from, to, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling stockSplits");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling stockSplits");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling stockSplits");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Split["default"]];
      return this.apiClient.callApi('/stock/split', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the stockSymbols operation.
     * @callback module:api/DefaultApi~stockSymbolsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/StockSymbol>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stock Symbol
     * List supported stocks. We use the following symbology to identify stocks on Finnhub <code>Exchange_Ticker.Exchange_Code</code>. A list of supported exchange codes can be found <a href=\"https://docs.google.com/spreadsheets/d/1I3pBxjfXB056-g_JYf_6o3Rns3BV2kMGG1nCatb91ls/edit?usp=sharing\" target=\"_blank\">here</a>.
     * @param {String} exchange Exchange you want to get the list of symbols from. List of exchange codes can be found <a href=\"https://docs.google.com/spreadsheets/d/1I3pBxjfXB056-g_JYf_6o3Rns3BV2kMGG1nCatb91ls/edit?usp=sharing\" target=\"_blank\">here</a>.
     * @param {Object} opts Optional parameters
     * @param {String} opts.mic Filter by MIC code.
     * @param {String} opts.securityType Filter by security type used by OpenFigi standard.
     * @param {String} opts.currency Filter by currency.
     * @param {module:api/DefaultApi~stockSymbolsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/StockSymbol>}
     */

  }, {
    key: "stockSymbols",
    value: function stockSymbols(exchange, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'exchange' is set

      if (exchange === undefined || exchange === null) {
        throw new Error("Missing the required parameter 'exchange' when calling stockSymbols");
      }

      var pathParams = {};
      var queryParams = {
        'exchange': exchange,
        'mic': opts['mic'],
        'securityType': opts['securityType'],
        'currency': opts['currency']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_StockSymbol["default"]];
      return this.apiClient.callApi('/stock/symbol', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the stockTick operation.
     * @callback module:api/DefaultApi~stockTickCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TickData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Tick Data
     * <p>Get historical tick data for global exchanges.</p><p>For more historical tick data, you can visit our bulk download page in the Dashboard <a target=\"_blank\" href=\"/dashboard/download\",>here</a> to speed up the download process.</p><table class=\"table table-hover\">   <thead>     <tr>       <th>Exchange</th>       <th>Segment</th>       <th>Delay</th>     </tr>   </thead>   <tbody>     <tr>       <td class=\"text-blue\">US CTA/UTP</th>       <td>Full SIP</td>       <td>End-of-day</td>     </tr>     <tr>       <td class=\"text-blue\">TSX</th>       <td><ul><li>TSX</li><li>TSX Venture</li><li>Index</li></ul></td>       <td>End-of-day</td>     </tr>     <tr>       <td class=\"text-blue\">LSE</th>       <td><ul><li>London Stock Exchange (L)</li><li>LSE International (L)</li><li>LSE European (L)</li></ul></td>       <td>15 minute</td>     </tr>     <tr>       <td class=\"text-blue\">Euronext</th>       <td><ul> <li>Euronext Paris (PA)</li> <li>Euronext Amsterdam (AS)</li> <li>Euronext Lisbon (LS)</li> <li>Euronext Brussels (BR)</li> <li>Euronext Oslo (OL)</li> <li>Euronext London (LN)</li> <li>Euronext Dublin (IR)</li> <li>Index</li> <li>Warrant</li></ul></td>       <td>End-of-day</td>     </tr>     <tr>       <td class=\"text-blue\">Deutsche Börse</th>       <td><ul> <li>Frankfurt (F)</li> <li>Xetra (DE)</li> <li>Duesseldorf (DU)</li> <li>Hamburg (HM)</li> <li>Berlin (BE)</li> <li>Hanover (HA)</li> <li>Stoxx (SX)</li> <li>TradeGate (TG)</li> <li>Zertifikate (SC)</li> <li>Index</li> <li>Warrant</li></ul></td>       <td>End-of-day</td>     </tr>   </tbody> </table>
     * @param {String} symbol Symbol.
     * @param {Date} date Date: 2020-04-02.
     * @param {Number} limit Limit number of ticks returned. Maximum value: <code>25000</code>
     * @param {Number} skip Number of ticks to skip. Use this parameter to loop through the entire data.
     * @param {module:api/DefaultApi~stockTickCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TickData}
     */

  }, {
    key: "stockTick",
    value: function stockTick(symbol, date, limit, skip, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling stockTick");
      } // verify the required parameter 'date' is set


      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling stockTick");
      } // verify the required parameter 'limit' is set


      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling stockTick");
      } // verify the required parameter 'skip' is set


      if (skip === undefined || skip === null) {
        throw new Error("Missing the required parameter 'skip' when calling stockTick");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'date': date,
        'limit': limit,
        'skip': skip
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TickData["default"];
      return this.apiClient.callApi('/stock/tick', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the stockUsaSpending operation.
     * @callback module:api/DefaultApi~stockUsaSpendingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UsaSpendingResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * USA Spending
     * Get a list of government's spending activities from USASpending dataset for public companies. This dataset can help you identify companies that win big government contracts which is extremely important for industries such as Defense, Aerospace, and Education.
     * @param {String} symbol Symbol.
     * @param {Date} from From date <code>YYYY-MM-DD</code>. Filter for <code>actionDate</code>
     * @param {Date} to To date <code>YYYY-MM-DD</code>. Filter for <code>actionDate</code>
     * @param {module:api/DefaultApi~stockUsaSpendingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UsaSpendingResult}
     */

  }, {
    key: "stockUsaSpending",
    value: function stockUsaSpending(symbol, from, to, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling stockUsaSpending");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling stockUsaSpending");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling stockUsaSpending");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UsaSpendingResult["default"];
      return this.apiClient.callApi('/stock/usa-spending', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the stockUsptoPatent operation.
     * @callback module:api/DefaultApi~stockUsptoPatentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UsptoPatentResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * USPTO Patents
     * List USPTO patents for companies. Limit to 250 records per API call.
     * @param {String} symbol Symbol.
     * @param {Date} from From date <code>YYYY-MM-DD</code>.
     * @param {Date} to To date <code>YYYY-MM-DD</code>.
     * @param {module:api/DefaultApi~stockUsptoPatentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UsptoPatentResult}
     */

  }, {
    key: "stockUsptoPatent",
    value: function stockUsptoPatent(symbol, from, to, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling stockUsptoPatent");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling stockUsptoPatent");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling stockUsptoPatent");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UsptoPatentResult["default"];
      return this.apiClient.callApi('/stock/uspto-patent', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the stockVisaApplication operation.
     * @callback module:api/DefaultApi~stockVisaApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VisaApplicationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * H1-B Visa Application
     * Get a list of H1-B and Permanent visa applications for companies from the DOL. The data is updated quarterly.
     * @param {String} symbol Symbol.
     * @param {Date} from From date <code>YYYY-MM-DD</code>. Filter on the <code>beginDate</code> column.
     * @param {Date} to To date <code>YYYY-MM-DD</code>. Filter on the <code>beginDate</code> column.
     * @param {module:api/DefaultApi~stockVisaApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VisaApplicationResult}
     */

  }, {
    key: "stockVisaApplication",
    value: function stockVisaApplication(symbol, from, to, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling stockVisaApplication");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling stockVisaApplication");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling stockVisaApplication");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _VisaApplicationResult["default"];
      return this.apiClient.callApi('/stock/visa-application', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the supplyChainRelationships operation.
     * @callback module:api/DefaultApi~supplyChainRelationshipsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SupplyChainRelationships} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Supply Chain Relationships
     * <p>This endpoint provides an overall map of public companies' key customers and suppliers. The data offers a deeper look into a company's supply chain and how products are created. The data will help investors manage risk, limit exposure or generate alpha-generating ideas and trading insights.</p>
     * @param {String} symbol Symbol.
     * @param {module:api/DefaultApi~supplyChainRelationshipsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SupplyChainRelationships}
     */

  }, {
    key: "supplyChainRelationships",
    value: function supplyChainRelationships(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling supplyChainRelationships");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SupplyChainRelationships["default"];
      return this.apiClient.callApi('/stock/supply-chain', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the supportResistance operation.
     * @callback module:api/DefaultApi~supportResistanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SupportResistance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Support/Resistance
     * Get support and resistance levels for a symbol.
     * @param {String} symbol Symbol
     * @param {String} resolution Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange.
     * @param {module:api/DefaultApi~supportResistanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SupportResistance}
     */

  }, {
    key: "supportResistance",
    value: function supportResistance(symbol, resolution, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling supportResistance");
      } // verify the required parameter 'resolution' is set


      if (resolution === undefined || resolution === null) {
        throw new Error("Missing the required parameter 'resolution' when calling supportResistance");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'resolution': resolution
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SupportResistance["default"];
      return this.apiClient.callApi('/scan/support-resistance', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the symbolChange operation.
     * @callback module:api/DefaultApi~symbolChangeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SymbolChange} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Symbol Change
     * Get a list of symbol changes for US-listed, EU-listed, NSE and ASX securities. Limit to 2000 events at a time.
     * @param {String} from From date <code>YYYY-MM-DD</code>.
     * @param {String} to To date <code>YYYY-MM-DD</code>.
     * @param {module:api/DefaultApi~symbolChangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SymbolChange}
     */

  }, {
    key: "symbolChange",
    value: function symbolChange(from, to, callback) {
      var postBody = null; // verify the required parameter 'from' is set

      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling symbolChange");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling symbolChange");
      }

      var pathParams = {};
      var queryParams = {
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SymbolChange["default"];
      return this.apiClient.callApi('/ca/symbol-change', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the symbolSearch operation.
     * @callback module:api/DefaultApi~symbolSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SymbolLookup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Symbol Lookup
     * Search for best-matching symbols based on your query. You can input anything from symbol, security's name to ISIN and Cusip.
     * @param {String} q Query text can be symbol, name, isin, or cusip.
     * @param {Object} opts Optional parameters
     * @param {String} opts.exchange Exchange limit.
     * @param {module:api/DefaultApi~symbolSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SymbolLookup}
     */

  }, {
    key: "symbolSearch",
    value: function symbolSearch(q, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'q' is set

      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling symbolSearch");
      }

      var pathParams = {};
      var queryParams = {
        'q': q,
        'exchange': opts['exchange']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SymbolLookup["default"];
      return this.apiClient.callApi('/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the technicalIndicator operation.
     * @callback module:api/DefaultApi~technicalIndicatorCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Technical Indicators
     * Return technical indicator with price data. List of supported indicators can be found <a href=\"https://docs.google.com/spreadsheets/d/1ylUvKHVYN2E87WdwIza8ROaCpd48ggEl1k5i5SgA29k/edit?usp=sharing\" target=\"_blank\">here</a>.
     * @param {String} symbol symbol
     * @param {String} resolution Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange.
     * @param {Number} from UNIX timestamp. Interval initial value.
     * @param {Number} to UNIX timestamp. Interval end value.
     * @param {String} indicator Indicator name. Full list can be found <a href=\"https://docs.google.com/spreadsheets/d/1ylUvKHVYN2E87WdwIza8ROaCpd48ggEl1k5i5SgA29k/edit?usp=sharing\" target=\"_blank\">here</a>.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.indicatorFields Check out <a href=\"https://docs.google.com/spreadsheets/d/1ylUvKHVYN2E87WdwIza8ROaCpd48ggEl1k5i5SgA29k/edit?usp=sharing\" target=\"_blank\">this page</a> to see which indicators and params are supported.
     * @param {module:api/DefaultApi~technicalIndicatorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "technicalIndicator",
    value: function technicalIndicator(symbol, resolution, from, to, indicator, opts, callback) {
      opts = opts || {};
      var postBody = opts['indicatorFields']; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling technicalIndicator");
      } // verify the required parameter 'resolution' is set


      if (resolution === undefined || resolution === null) {
        throw new Error("Missing the required parameter 'resolution' when calling technicalIndicator");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling technicalIndicator");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling technicalIndicator");
      } // verify the required parameter 'indicator' is set


      if (indicator === undefined || indicator === null) {
        throw new Error("Missing the required parameter 'indicator' when calling technicalIndicator");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol,
        'resolution': resolution,
        'from': from,
        'to': to,
        'indicator': indicator
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/indicator', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the transcripts operation.
     * @callback module:api/DefaultApi~transcriptsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EarningsCallTranscripts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Earnings Call Transcripts
     * <p>Get earnings call transcripts, audio and participants' list. Data is available for US, UK, European, Australian and Canadian companies.<p>15+ years of data is available with 220,000+ audio which add up to 7TB in size.</p>
     * @param {String} id Transcript's id obtained with <a href=\"#transcripts-list\">Transcripts List endpoint</a>.
     * @param {module:api/DefaultApi~transcriptsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EarningsCallTranscripts}
     */

  }, {
    key: "transcripts",
    value: function transcripts(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling transcripts");
      }

      var pathParams = {};
      var queryParams = {
        'id': id
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EarningsCallTranscripts["default"];
      return this.apiClient.callApi('/stock/transcripts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the transcriptsList operation.
     * @callback module:api/DefaultApi~transcriptsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EarningsCallTranscriptsList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Earnings Call Transcripts List
     * List earnings call transcripts' metadata. This endpoint is available for US, UK, European, Australian and Canadian companies.
     * @param {String} symbol Company symbol: AAPL. Leave empty to list the latest transcripts
     * @param {module:api/DefaultApi~transcriptsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EarningsCallTranscriptsList}
     */

  }, {
    key: "transcriptsList",
    value: function transcriptsList(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling transcriptsList");
      }

      var pathParams = {};
      var queryParams = {
        'symbol': symbol
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EarningsCallTranscriptsList["default"];
      return this.apiClient.callApi('/stock/transcripts/list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the upgradeDowngrade operation.
     * @callback module:api/DefaultApi~upgradeDowngradeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UpgradeDowngrade>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stock Upgrade/Downgrade
     * Get latest stock upgrade and downgrade.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Symbol of the company: AAPL. If left blank, the API will return latest stock upgrades/downgrades.
     * @param {Date} opts.from From date: 2000-03-15.
     * @param {Date} opts.to To date: 2020-03-16.
     * @param {module:api/DefaultApi~upgradeDowngradeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UpgradeDowngrade>}
     */

  }, {
    key: "upgradeDowngrade",
    value: function upgradeDowngrade(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'from': opts['from'],
        'to': opts['to']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_UpgradeDowngrade["default"]];
      return this.apiClient.callApi('/stock/upgrade-downgrade', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DefaultApi;
}();

exports["default"] = DefaultApi;