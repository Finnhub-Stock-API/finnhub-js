"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ETFHoldingsData = _interopRequireDefault(require("./ETFHoldingsData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ETFsHoldings model module.
 * @module model/ETFsHoldings
 * @version 1.2.16
 */
var ETFsHoldings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ETFsHoldings</code>.
   * @alias module:model/ETFsHoldings
   */
  function ETFsHoldings() {
    _classCallCheck(this, ETFsHoldings);

    ETFsHoldings.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ETFsHoldings, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ETFsHoldings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ETFsHoldings} obj Optional instance to populate.
     * @return {module:model/ETFsHoldings} The populated <code>ETFsHoldings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ETFsHoldings();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('atDate')) {
          obj['atDate'] = _ApiClient["default"].convertToType(data['atDate'], 'Date');
        }

        if (data.hasOwnProperty('numberOfHoldings')) {
          obj['numberOfHoldings'] = _ApiClient["default"].convertToType(data['numberOfHoldings'], 'Number');
        }

        if (data.hasOwnProperty('holdings')) {
          obj['holdings'] = _ApiClient["default"].convertToType(data['holdings'], [_ETFHoldingsData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ETFsHoldings;
}();
/**
 * ETF symbol.
 * @member {String} symbol
 */


ETFsHoldings.prototype['symbol'] = undefined;
/**
 * Holdings update date.
 * @member {Date} atDate
 */

ETFsHoldings.prototype['atDate'] = undefined;
/**
 * Number of holdings.
 * @member {Number} numberOfHoldings
 */

ETFsHoldings.prototype['numberOfHoldings'] = undefined;
/**
 * Array of holdings.
 * @member {Array.<module:model/ETFHoldingsData>} holdings
 */

ETFsHoldings.prototype['holdings'] = undefined;
var _default = ETFsHoldings;
exports["default"] = _default;