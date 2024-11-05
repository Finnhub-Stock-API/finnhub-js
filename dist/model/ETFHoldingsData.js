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
 * The ETFHoldingsData model module.
 * @module model/ETFHoldingsData
 * @version 1.2.19
 */
var ETFHoldingsData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ETFHoldingsData</code>.
   * @alias module:model/ETFHoldingsData
   */
  function ETFHoldingsData() {
    _classCallCheck(this, ETFHoldingsData);

    ETFHoldingsData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ETFHoldingsData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ETFHoldingsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ETFHoldingsData} obj Optional instance to populate.
     * @return {module:model/ETFHoldingsData} The populated <code>ETFHoldingsData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ETFHoldingsData();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('isin')) {
          obj['isin'] = _ApiClient["default"].convertToType(data['isin'], 'String');
        }

        if (data.hasOwnProperty('cusip')) {
          obj['cusip'] = _ApiClient["default"].convertToType(data['cusip'], 'String');
        }

        if (data.hasOwnProperty('share')) {
          obj['share'] = _ApiClient["default"].convertToType(data['share'], 'Number');
        }

        if (data.hasOwnProperty('percent')) {
          obj['percent'] = _ApiClient["default"].convertToType(data['percent'], 'Number');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }

        if (data.hasOwnProperty('assetType')) {
          obj['assetType'] = _ApiClient["default"].convertToType(data['assetType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ETFHoldingsData;
}();
/**
 * Symbol description
 * @member {String} symbol
 */


ETFHoldingsData.prototype['symbol'] = undefined;
/**
 * Security name
 * @member {String} name
 */

ETFHoldingsData.prototype['name'] = undefined;
/**
 * ISIN.
 * @member {String} isin
 */

ETFHoldingsData.prototype['isin'] = undefined;
/**
 * CUSIP.
 * @member {String} cusip
 */

ETFHoldingsData.prototype['cusip'] = undefined;
/**
 * Number of shares owned by the ETF.
 * @member {Number} share
 */

ETFHoldingsData.prototype['share'] = undefined;
/**
 * Portfolio's percent
 * @member {Number} percent
 */

ETFHoldingsData.prototype['percent'] = undefined;
/**
 * Market value
 * @member {Number} value
 */

ETFHoldingsData.prototype['value'] = undefined;
/**
 * Asset type. Can be 1 of the following values: <code>Equity</code>, <code>ETP</code>, <code>Fund</code>, <code>Bond</code>, <code>Other</code> or empty.
 * @member {String} assetType
 */

ETFHoldingsData.prototype['assetType'] = undefined;
var _default = ETFHoldingsData;
exports["default"] = _default;