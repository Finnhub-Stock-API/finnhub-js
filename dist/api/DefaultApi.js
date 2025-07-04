"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var fetchFn;

try {
  fetchFn = fetch;
} catch (e) {
  fetchFn = require('node-fetch');
}

function simpleRequest(url, params, callback) {
  var query = Object.entries(params).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        _ = _ref2[0],
        v = _ref2[1];

    return v !== undefined && v !== null;
  }).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        k = _ref4[0],
        v = _ref4[1];

    return "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(v));
  }).join('&');
  var fullUrl = query ? "".concat(url, "?").concat(query) : url;
  fetchFn(fullUrl).then( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
      var text, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return res.text();

            case 2:
              text = _context.sent;

              try {
                data = JSON.parse(text);
              } catch (e) {
                data = text;
              }

              if (!res.ok) {
                callback(data || text || res.statusText, null, res);
              } else {
                callback(null, data, res);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref5.apply(this, arguments);
    };
  }())["catch"](function (err) {
    return callback(err, null, null);
  });
}

var BASE_URL = 'https://finnhub.io/api/v1';
/**
* Default service.
* @module api/DefaultApi
* @version 1.2.19
*/

var DefaultApi = /*#__PURE__*/function () {
  function DefaultApi(apiKey) {
    _classCallCheck(this, DefaultApi);

    this.apiKey = apiKey;
  }

  _createClass(DefaultApi, [{
    key: "_callApi",
    value: function _callApi(path, params, callback) {
      simpleRequest(BASE_URL + path, _objectSpread(_objectSpread({}, params), {}, {
        token: this.apiKey
      }), callback);
    }
  }, {
    key: "aggregateIndicator",
    value: function aggregateIndicator(symbol, resolution, callback) {
      this._callApi('/scan/technical-indicator', {
        symbol: symbol,
        resolution: resolution
      }, callback);
    }
  }, {
    key: "airlinePriceIndex",
    value: function airlinePriceIndex(airline, from, to, callback) {
      this._callApi('/airline/price-index', {
        airline: airline,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "bondPrice",
    value: function bondPrice(isin, from, to, callback) {
      this._callApi('/bond/price', {
        isin: isin,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "bondProfile",
    value: function bondProfile(opts, callback) {
      this._callApi('/bond/profile', opts, callback);
    }
  }, {
    key: "bondTick",
    value: function bondTick(isin, date, limit, skip, exchange, callback) {
      this._callApi('/bond/tick', {
        isin: isin,
        date: date,
        limit: limit,
        skip: skip,
        exchange: exchange
      }, callback);
    }
  }, {
    key: "bondYieldCurve",
    value: function bondYieldCurve(code, callback) {
      this._callApi('/bond/yield-curve', {
        code: code
      }, callback);
    }
  }, {
    key: "companyBasicFinancials",
    value: function companyBasicFinancials(symbol, metric, callback) {
      this._callApi('/stock/metric', {
        symbol: symbol,
        metric: metric
      }, callback);
    }
  }, {
    key: "companyEarnings",
    value: function companyEarnings(symbol, opts, callback) {
      this._callApi('/stock/earnings', {
        symbol: symbol,
        limit: opts['limit']
      }, callback);
    }
  }, {
    key: "companyEarningsQualityScore",
    value: function companyEarningsQualityScore(symbol, freq, callback) {
      this._callApi('/stock/earnings-quality-score', {
        symbol: symbol,
        freq: freq
      }, callback);
    }
  }, {
    key: "companyEbitEstimates",
    value: function companyEbitEstimates(symbol, opts, callback) {
      this._callApi('/stock/ebit-estimate', {
        symbol: symbol,
        freq: opts['freq']
      }, callback);
    }
  }, {
    key: "companyEbitdaEstimates",
    value: function companyEbitdaEstimates(symbol, opts, callback) {
      this._callApi('/stock/ebitda-estimate', {
        symbol: symbol,
        freq: opts['freq']
      }, callback);
    }
  }, {
    key: "companyEpsEstimates",
    value: function companyEpsEstimates(symbol, opts, callback) {
      this._callApi('/stock/eps-estimate', {
        symbol: symbol,
        freq: opts['freq']
      }, callback);
    }
  }, {
    key: "companyEsgScore",
    value: function companyEsgScore(symbol, callback) {
      this._callApi('/stock/esg', {
        symbol: symbol
      }, callback);
    }
  }, {
    key: "companyExecutive",
    value: function companyExecutive(symbol, callback) {
      this._callApi('/stock/executive', {
        symbol: symbol
      }, callback);
    }
  }, {
    key: "companyHistoricalEsgScore",
    value: function companyHistoricalEsgScore(symbol, callback) {
      this._callApi('/stock/historical-esg', {
        symbol: symbol
      }, callback);
    }
  }, {
    key: "companyNews",
    value: function companyNews(symbol, from, to, callback) {
      this._callApi('/company-news', {
        symbol: symbol,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "companyPeers",
    value: function companyPeers(symbol, opts, callback) {
      this._callApi('/stock/peers', {
        symbol: symbol,
        grouping: opts['grouping']
      }, callback);
    }
  }, {
    key: "companyProfile",
    value: function companyProfile(opts, callback) {
      this._callApi('/stock/profile', opts, callback);
    }
  }, {
    key: "companyProfile2",
    value: function companyProfile2(opts, callback) {
      this._callApi('/stock/profile2', opts, callback);
    }
  }, {
    key: "companyRevenueEstimates",
    value: function companyRevenueEstimates(symbol, opts, callback) {
      this._callApi('/stock/revenue-estimate', {
        symbol: symbol,
        freq: opts['freq']
      }, callback);
    }
  }, {
    key: "congressionalTrading",
    value: function congressionalTrading(symbol, from, to, callback) {
      this._callApi('/stock/congressional-trading', {
        symbol: symbol,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "country",
    value: function country(callback) {
      this._callApi('/country', {}, callback);
    }
  }, {
    key: "covid19",
    value: function covid19(callback) {
      this._callApi('/covid19/us', {}, callback);
    }
  }, {
    key: "cryptoCandles",
    value: function cryptoCandles(symbol, resolution, from, to, callback) {
      this._callApi('/crypto/candle', {
        symbol: symbol,
        resolution: resolution,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "cryptoExchanges",
    value: function cryptoExchanges(callback) {
      this._callApi('/crypto/exchange', {}, callback);
    }
  }, {
    key: "cryptoProfile",
    value: function cryptoProfile(symbol, callback) {
      this._callApi('/crypto/profile', {
        symbol: symbol
      }, callback);
    }
  }, {
    key: "cryptoSymbols",
    value: function cryptoSymbols(exchange, callback) {
      this._callApi('/crypto/symbol', {
        exchange: exchange
      }, callback);
    }
  }, {
    key: "earningsCalendar",
    value: function earningsCalendar(opts, callback) {
      this._callApi('/calendar/earnings', {
        from: opts['from'],
        to: opts['to'],
        symbol: opts['symbol'],
        international: opts['international']
      }, callback);
    }
  }, {
    key: "economicCalendar",
    value: function economicCalendar(opts, callback) {
      this._callApi('/calendar/economic', {
        from: opts['from'],
        to: opts['to']
      }, callback);
    }
  }, {
    key: "economicCode",
    value: function economicCode(callback) {
      this._callApi('/economic/code', {}, callback);
    }
  }, {
    key: "economicData",
    value: function economicData(code, callback) {
      this._callApi('/economic', {
        code: code
      }, callback);
    }
  }, {
    key: "etfsCountryExposure",
    value: function etfsCountryExposure(opts, callback) {
      this._callApi('/etf/country', {
        symbol: opts['symbol'],
        isin: opts['isin']
      }, callback);
    }
  }, {
    key: "etfsHoldings",
    value: function etfsHoldings(opts, callback) {
      this._callApi('/etf/holdings', {
        symbol: opts['symbol'],
        isin: opts['isin'],
        skip: opts['skip'],
        date: opts['date']
      }, callback);
    }
  }, {
    key: "etfsProfile",
    value: function etfsProfile(opts, callback) {
      this._callApi('/etf/profile', {
        symbol: opts['symbol'],
        isin: opts['isin']
      }, callback);
    }
  }, {
    key: "etfsSectorExposure",
    value: function etfsSectorExposure(opts, callback) {
      this._callApi('/etf/sector', {
        symbol: opts['symbol'],
        isin: opts['isin']
      }, callback);
    }
  }, {
    key: "fdaCommitteeMeetingCalendar",
    value: function fdaCommitteeMeetingCalendar(callback) {
      this._callApi('/fda-advisory-committee-calendar', {}, callback);
    }
  }, {
    key: "filings",
    value: function filings(opts, callback) {
      this._callApi('/stock/filings', {
        symbol: opts['symbol'],
        cik: opts['cik'],
        accessNumber: opts['accessNumber'],
        form: opts['form'],
        from: opts['from'],
        to: opts['to']
      }, callback);
    }
  }, {
    key: "filingsSentiment",
    value: function filingsSentiment(accessNumber, callback) {
      this._callApi('/stock/filings-sentiment', {
        accessNumber: accessNumber
      }, callback);
    }
  }, {
    key: "financials",
    value: function financials(symbol, statement, freq, callback) {
      this._callApi('/stock/financials', {
        symbol: symbol,
        statement: statement,
        freq: freq
      }, callback);
    }
  }, {
    key: "financialsReported",
    value: function financialsReported(opts, callback) {
      this._callApi('/stock/financials-reported', {
        symbol: opts['symbol'],
        cik: opts['cik'],
        accessNumber: opts['accessNumber'],
        freq: opts['freq'],
        from: opts['from'],
        to: opts['to']
      }, callback);
    }
  }, {
    key: "forexCandles",
    value: function forexCandles(symbol, resolution, from, to, callback) {
      this._callApi('/forex/candle', {
        symbol: symbol,
        resolution: resolution,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "forexExchanges",
    value: function forexExchanges(callback) {
      this._callApi('/forex/exchange', {}, callback);
    }
  }, {
    key: "forexRates",
    value: function forexRates(opts, callback) {
      this._callApi('/forex/rates', {
        base: opts['base'],
        date: opts['date']
      }, callback);
    }
  }, {
    key: "forexSymbols",
    value: function forexSymbols(exchange, callback) {
      this._callApi('/forex/symbol', {
        exchange: exchange
      }, callback);
    }
  }, {
    key: "fundOwnership",
    value: function fundOwnership(symbol, opts, callback) {
      this._callApi('/stock/fund-ownership', {
        symbol: symbol,
        limit: opts['limit']
      }, callback);
    }
  }, {
    key: "historicalEmployeeCount",
    value: function historicalEmployeeCount(symbol, from, to, callback) {
      this._callApi('/stock/historical-employee-count', {
        symbol: symbol,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "historicalMarketCap",
    value: function historicalMarketCap(symbol, from, to, callback) {
      this._callApi('/stock/historical-market-cap', {
        symbol: symbol,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "indicesConstituents",
    value: function indicesConstituents(symbol, callback) {
      this._callApi('/index/constituents', {
        symbol: symbol
      }, callback);
    }
  }, {
    key: "indicesHistoricalConstituents",
    value: function indicesHistoricalConstituents(symbol, callback) {
      this._callApi('/index/historical-constituents', {
        symbol: symbol
      }, callback);
    }
  }, {
    key: "insiderSentiment",
    value: function insiderSentiment(symbol, from, to, callback) {
      this._callApi('/stock/insider-sentiment', {
        symbol: symbol,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "insiderTransactions",
    value: function insiderTransactions(symbol, opts, callback) {
      this._callApi('/stock/insider-transactions', {
        symbol: symbol,
        from: opts['from'],
        to: opts['to']
      }, callback);
    }
  }, {
    key: "institutionalOwnership",
    value: function institutionalOwnership(symbol, cusip, from, to, callback) {
      this._callApi('/institutional/ownership', {
        symbol: symbol,
        cusip: cusip,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "institutionalPortfolio",
    value: function institutionalPortfolio(cik, from, to, callback) {
      this._callApi('/institutional/portfolio', {
        cik: cik,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "institutionalProfile",
    value: function institutionalProfile(opts, callback) {
      this._callApi('/institutional/profile', opts, callback);
    }
  }, {
    key: "internationalFilings",
    value: function internationalFilings(opts, callback) {
      this._callApi('/stock/international-filings', {
        symbol: opts['symbol'],
        country: opts['country'],
        from: opts['from'],
        to: opts['to']
      }, callback);
    }
  }, {
    key: "investmentThemes",
    value: function investmentThemes(theme, callback) {
      this._callApi('/stock/investment-theme', {
        theme: theme
      }, callback);
    }
  }, {
    key: "ipoCalendar",
    value: function ipoCalendar(from, to, callback) {
      this._callApi('/calendar/ipo', {
        from: from,
        to: to
      }, callback);
    }
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
      this._callApi('/ca/isin-change', {
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "marketHoliday",
    value: function marketHoliday(exchange, callback) {
      this._callApi('/stock/market-holiday', {
        exchange: exchange
      }, callback);
    }
  }, {
    key: "marketNews",
    value: function marketNews(category, opts, callback) {
      this._callApi('/news', {
        category: category,
        minId: opts['minId']
      }, callback);
    }
  }, {
    key: "marketStatus",
    value: function marketStatus(exchange, callback) {
      this._callApi('/stock/market-status', {
        exchange: exchange
      }, callback);
    }
  }, {
    key: "mutualFundCountryExposure",
    value: function mutualFundCountryExposure(opts, callback) {
      this._callApi('/mutual-fund/country', {
        symbol: opts['symbol'],
        isin: opts['isin']
      }, callback);
    }
  }, {
    key: "mutualFundEet",
    value: function mutualFundEet(isin, callback) {
      this._callApi('/mutual-fund/eet', {
        isin: isin
      }, callback);
    }
  }, {
    key: "mutualFundEetPai",
    value: function mutualFundEetPai(isin, callback) {
      this._callApi('/mutual-fund/eet-pai', {
        isin: isin
      }, callback);
    }
  }, {
    key: "mutualFundHoldings",
    value: function mutualFundHoldings(opts, callback) {
      this._callApi('/mutual-fund/holdings', {
        symbol: opts['symbol'],
        isin: opts['isin'],
        skip: opts['skip']
      }, callback);
    }
  }, {
    key: "mutualFundProfile",
    value: function mutualFundProfile(opts, callback) {
      this._callApi('/mutual-fund/profile', opts, callback);
    }
  }, {
    key: "mutualFundSectorExposure",
    value: function mutualFundSectorExposure(opts, callback) {
      this._callApi('/mutual-fund/sector', opts, callback);
    }
  }, {
    key: "newsSentiment",
    value: function newsSentiment(symbol, callback) {
      this._callApi('/news-sentiment', {
        symbol: symbol
      }, callback);
    }
  }, {
    key: "ownership",
    value: function ownership(symbol, opts, callback) {
      this._callApi('/stock/ownership', _objectSpread({
        symbol: symbol
      }, opts), callback);
    }
  }, {
    key: "patternRecognition",
    value: function patternRecognition(symbol, resolution, callback) {
      this._callApi('/scan/pattern', {
        symbol: symbol,
        resolution: resolution
      }, callback);
    }
  }, {
    key: "pressReleases",
    value: function pressReleases(symbol, opts, callback) {
      this._callApi('/press-releases', {
        symbol: symbol,
        from: opts['from'],
        to: opts['to']
      }, callback);
    }
  }, {
    key: "priceMetrics",
    value: function priceMetrics(symbol, opts, callback) {
      this._callApi('/stock/price-metric', {
        symbol: symbol,
        date: opts['date']
      }, callback);
    }
  }, {
    key: "priceTarget",
    value: function priceTarget(symbol, callback) {
      this._callApi('/stock/price-target', {
        symbol: symbol
      }, callback);
    }
  }, {
    key: "quote",
    value: function quote(symbol, callback) {
      this._callApi('/quote', {
        symbol: symbol
      }, callback);
    }
  }, {
    key: "recommendationTrends",
    value: function recommendationTrends(symbol, callback) {
      this._callApi('/stock/recommendation', {
        symbol: symbol
      }, callback);
    }
  }, {
    key: "revenueBreakdown",
    value: function revenueBreakdown(opts, callback) {
      this._callApi('/stock/revenue-breakdown', {
        symbol: opts['symbol'],
        cik: opts['cik']
      }, callback);
    }
  }, {
    key: "sectorMetric",
    value: function sectorMetric(region, callback) {
      this._callApi('/sector/metrics', {
        region: region
      }, callback);
    }
  }, {
    key: "similarityIndex",
    value: function similarityIndex(opts, callback) {
      this._callApi('/stock/similarity-index', _objectSpread({}, opts), callback);
    }
  }, {
    key: "socialSentiment",
    value: function socialSentiment(symbol, opts, callback) {
      this._callApi('/stock/social-sentiment', {
        symbol: symbol,
        from: opts['from'],
        to: opts['to']
      }, callback);
    }
  }, {
    key: "stockCandles",
    value: function stockCandles(symbol, resolution, from, to, callback) {
      this._callApi('/stock/candle', {
        symbol: symbol,
        resolution: resolution,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "stockDividends",
    value: function stockDividends(symbol, from, to, callback) {
      this._callApi('/stock/dividend', {
        symbol: symbol,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "stockLobbying",
    value: function stockLobbying(symbol, from, to, callback) {
      this._callApi('/stock/lobbying', {
        symbol: symbol,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "stockNbbo",
    value: function stockNbbo(symbol, date, limit, skip, callback) {
      this._callApi('/stock/bbo', {
        symbol: symbol,
        date: date,
        limit: limit,
        skip: skip
      }, callback);
    }
  }, {
    key: "stockSplits",
    value: function stockSplits(symbol, from, to, callback) {
      this._callApi('/stock/split', {
        symbol: symbol,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "stockSymbols",
    value: function stockSymbols(exchange, opts, callback) {
      this._callApi('/stock/symbol', {
        exchange: exchange,
        mic: opts['mic'],
        securityType: opts['securityType'],
        currency: opts['currency']
      }, callback);
    }
  }, {
    key: "stockTick",
    value: function stockTick(symbol, date, limit, skip, callback) {
      this._callApi('/stock/tick', {
        symbol: symbol,
        date: date,
        limit: limit,
        skip: skip
      }, callback);
    }
  }, {
    key: "stockUsaSpending",
    value: function stockUsaSpending(symbol, from, to, callback) {
      this._callApi('/stock/usa-spending', {
        symbol: symbol,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "stockUsptoPatent",
    value: function stockUsptoPatent(symbol, from, to, callback) {
      this._callApi('/stock/uspto-patent', {
        symbol: symbol,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "stockVisaApplication",
    value: function stockVisaApplication(symbol, from, to, callback) {
      this._callApi('/stock/visa-application', {
        symbol: symbol,
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "supportResistance",
    value: function supportResistance(symbol, resolution, callback) {
      this._callApi('/scan/support-resistance', {
        symbol: symbol,
        resolution: resolution
      }, callback);
    }
  }, {
    key: "symbolChange",
    value: function symbolChange(from, to, callback) {
      this._callApi('/ca/symbol-change', {
        from: from,
        to: to
      }, callback);
    }
  }, {
    key: "symbolSearch",
    value: function symbolSearch(q, opts, callback) {
      this._callApi('/search', {
        q: q,
        exchange: opts['exchange']
      }, callback);
    }
  }, {
    key: "technicalIndicator",
    value: function technicalIndicator(symbol, resolution, from, to, indicator, opts, callback) {
      this._callApi('/indicator', _objectSpread({
        symbol: symbol,
        resolution: resolution,
        from: from,
        to: to,
        indicator: indicator
      }, opts), callback);
    }
  }, {
    key: "transcripts",
    value: function transcripts(id, callback) {
      this._callApi('/stock/transcripts', {
        id: id
      }, callback);
    }
  }, {
    key: "transcriptsList",
    value: function transcriptsList(symbol, callback) {
      this._callApi('/stock/transcripts/list', {
        symbol: symbol
      }, callback);
    }
  }, {
    key: "upgradeDowngrade",
    value: function upgradeDowngrade(opts, callback) {
      this._callApi('/stock/upgrade-downgrade', _objectSpread({}, opts), callback);
    }
  }]);

  return DefaultApi;
}();

exports["default"] = DefaultApi;