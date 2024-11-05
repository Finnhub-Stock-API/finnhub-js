"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MarketCapData = _interopRequireDefault(require("./MarketCapData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HistoricalMarketCapData model module.
 * @module model/HistoricalMarketCapData
 * @version 1.2.19
 */
var HistoricalMarketCapData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoricalMarketCapData</code>.
   * @alias module:model/HistoricalMarketCapData
   */
  function HistoricalMarketCapData() {
    _classCallCheck(this, HistoricalMarketCapData);

    HistoricalMarketCapData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoricalMarketCapData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoricalMarketCapData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalMarketCapData} obj Optional instance to populate.
     * @return {module:model/HistoricalMarketCapData} The populated <code>HistoricalMarketCapData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoricalMarketCapData();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_MarketCapData["default"]]);
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HistoricalMarketCapData;
}();
/**
 * Array of market data.
 * @member {Array.<module:model/MarketCapData>} data
 */


HistoricalMarketCapData.prototype['data'] = undefined;
/**
 * Symbol
 * @member {String} symbol
 */

HistoricalMarketCapData.prototype['symbol'] = undefined;
/**
 * Currency
 * @member {String} currency
 */

HistoricalMarketCapData.prototype['currency'] = undefined;
var _default = HistoricalMarketCapData;
exports["default"] = _default;