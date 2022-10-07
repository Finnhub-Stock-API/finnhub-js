"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MutualFundHoldingsData = _interopRequireDefault(require("./MutualFundHoldingsData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MutualFundHoldings model module.
 * @module model/MutualFundHoldings
 * @version 1.2.16
 */
var MutualFundHoldings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MutualFundHoldings</code>.
   * @alias module:model/MutualFundHoldings
   */
  function MutualFundHoldings() {
    _classCallCheck(this, MutualFundHoldings);

    MutualFundHoldings.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MutualFundHoldings, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MutualFundHoldings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualFundHoldings} obj Optional instance to populate.
     * @return {module:model/MutualFundHoldings} The populated <code>MutualFundHoldings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MutualFundHoldings();

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
          obj['holdings'] = _ApiClient["default"].convertToType(data['holdings'], [_MutualFundHoldingsData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return MutualFundHoldings;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


MutualFundHoldings.prototype['symbol'] = undefined;
/**
 * Holdings update date.
 * @member {Date} atDate
 */

MutualFundHoldings.prototype['atDate'] = undefined;
/**
 * Number of holdings.
 * @member {Number} numberOfHoldings
 */

MutualFundHoldings.prototype['numberOfHoldings'] = undefined;
/**
 * Array of holdings.
 * @member {Array.<module:model/MutualFundHoldingsData>} holdings
 */

MutualFundHoldings.prototype['holdings'] = undefined;
var _default = MutualFundHoldings;
exports["default"] = _default;