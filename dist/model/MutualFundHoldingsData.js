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
 * The MutualFundHoldingsData model module.
 * @module model/MutualFundHoldingsData
 * @version 1.2.19
 */
var MutualFundHoldingsData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MutualFundHoldingsData</code>.
   * @alias module:model/MutualFundHoldingsData
   */
  function MutualFundHoldingsData() {
    _classCallCheck(this, MutualFundHoldingsData);

    MutualFundHoldingsData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MutualFundHoldingsData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MutualFundHoldingsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualFundHoldingsData} obj Optional instance to populate.
     * @return {module:model/MutualFundHoldingsData} The populated <code>MutualFundHoldingsData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MutualFundHoldingsData();

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

  return MutualFundHoldingsData;
}();
/**
 * Symbol description
 * @member {String} symbol
 */


MutualFundHoldingsData.prototype['symbol'] = undefined;
/**
 * Security name
 * @member {String} name
 */

MutualFundHoldingsData.prototype['name'] = undefined;
/**
 * ISIN.
 * @member {String} isin
 */

MutualFundHoldingsData.prototype['isin'] = undefined;
/**
 * CUSIP.
 * @member {String} cusip
 */

MutualFundHoldingsData.prototype['cusip'] = undefined;
/**
 * Number of shares.
 * @member {Number} share
 */

MutualFundHoldingsData.prototype['share'] = undefined;
/**
 * Portfolio's percent
 * @member {Number} percent
 */

MutualFundHoldingsData.prototype['percent'] = undefined;
/**
 * Market value
 * @member {Number} value
 */

MutualFundHoldingsData.prototype['value'] = undefined;
/**
 * Asset type. Can be 1 of the following values: <code>Equity</code>, <code>ETP</code>, <code>Fund</code>, <code>Bond</code>, <code>Other</code> or empty.
 * @member {String} assetType
 */

MutualFundHoldingsData.prototype['assetType'] = undefined;
var _default = MutualFundHoldingsData;
exports["default"] = _default;