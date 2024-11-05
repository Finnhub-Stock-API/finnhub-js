"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The StockSymbol model module.
 * @module model/StockSymbol
 * @version 1.2.19
 */
var StockSymbol = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StockSymbol</code>.
   * @alias module:model/StockSymbol
   */
  function StockSymbol() {
    _classCallCheck(this, StockSymbol);

    StockSymbol.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StockSymbol, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StockSymbol</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockSymbol} obj Optional instance to populate.
     * @return {module:model/StockSymbol} The populated <code>StockSymbol</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StockSymbol();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('displaySymbol')) {
          obj['displaySymbol'] = _ApiClient["default"].convertToType(data['displaySymbol'], 'String');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('mic')) {
          obj['mic'] = _ApiClient["default"].convertToType(data['mic'], 'String');
        }

        if (data.hasOwnProperty('figi')) {
          obj['figi'] = _ApiClient["default"].convertToType(data['figi'], 'String');
        }

        if (data.hasOwnProperty('shareClassFIGI')) {
          obj['shareClassFIGI'] = _ApiClient["default"].convertToType(data['shareClassFIGI'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('symbol2')) {
          obj['symbol2'] = _ApiClient["default"].convertToType(data['symbol2'], 'String');
        }

        if (data.hasOwnProperty('isin')) {
          obj['isin'] = _ApiClient["default"].convertToType(data['isin'], 'String');
        }
      }

      return obj;
    }
  }]);

  return StockSymbol;
}();
/**
 * Symbol description
 * @member {String} description
 */


StockSymbol.prototype['description'] = undefined;
/**
 * Display symbol name.
 * @member {String} displaySymbol
 */

StockSymbol.prototype['displaySymbol'] = undefined;
/**
 * Unique symbol used to identify this symbol used in <code>/stock/candle</code> endpoint.
 * @member {String} symbol
 */

StockSymbol.prototype['symbol'] = undefined;
/**
 * Security type.
 * @member {String} type
 */

StockSymbol.prototype['type'] = undefined;
/**
 * Primary exchange's MIC.
 * @member {String} mic
 */

StockSymbol.prototype['mic'] = undefined;
/**
 * FIGI identifier.
 * @member {String} figi
 */

StockSymbol.prototype['figi'] = undefined;
/**
 * Global Share Class FIGI.
 * @member {String} shareClassFIGI
 */

StockSymbol.prototype['shareClassFIGI'] = undefined;
/**
 * Price's currency. This might be different from the reporting currency of fundamental data.
 * @member {String} currency
 */

StockSymbol.prototype['currency'] = undefined;
/**
 * Alternative ticker for exchanges with multiple tickers for 1 stock such as BSE.
 * @member {String} symbol2
 */

StockSymbol.prototype['symbol2'] = undefined;
/**
 * ISIN. This field is only available for EU stocks and selected Asian markets. Entitlement from Finnhub is required to access this field.
 * @member {String} isin
 */

StockSymbol.prototype['isin'] = undefined;
var _default = StockSymbol;
exports["default"] = _default;