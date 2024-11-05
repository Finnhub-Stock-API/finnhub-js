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
 * The Dividends model module.
 * @module model/Dividends
 * @version 1.2.19
 */
var Dividends = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Dividends</code>.
   * @alias module:model/Dividends
   */
  function Dividends() {
    _classCallCheck(this, Dividends);

    Dividends.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Dividends, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Dividends</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Dividends} obj Optional instance to populate.
     * @return {module:model/Dividends} The populated <code>Dividends</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Dividends();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Date');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('adjustedAmount')) {
          obj['adjustedAmount'] = _ApiClient["default"].convertToType(data['adjustedAmount'], 'Number');
        }

        if (data.hasOwnProperty('payDate')) {
          obj['payDate'] = _ApiClient["default"].convertToType(data['payDate'], 'Date');
        }

        if (data.hasOwnProperty('recordDate')) {
          obj['recordDate'] = _ApiClient["default"].convertToType(data['recordDate'], 'Date');
        }

        if (data.hasOwnProperty('declarationDate')) {
          obj['declarationDate'] = _ApiClient["default"].convertToType(data['declarationDate'], 'Date');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('freq')) {
          obj['freq'] = _ApiClient["default"].convertToType(data['freq'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Dividends;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


Dividends.prototype['symbol'] = undefined;
/**
 * Ex-Dividend date.
 * @member {Date} date
 */

Dividends.prototype['date'] = undefined;
/**
 * Amount in local currency.
 * @member {Number} amount
 */

Dividends.prototype['amount'] = undefined;
/**
 * Adjusted dividend.
 * @member {Number} adjustedAmount
 */

Dividends.prototype['adjustedAmount'] = undefined;
/**
 * Pay date.
 * @member {Date} payDate
 */

Dividends.prototype['payDate'] = undefined;
/**
 * Record date.
 * @member {Date} recordDate
 */

Dividends.prototype['recordDate'] = undefined;
/**
 * Declaration date.
 * @member {Date} declarationDate
 */

Dividends.prototype['declarationDate'] = undefined;
/**
 * Currency.
 * @member {String} currency
 */

Dividends.prototype['currency'] = undefined;
/**
 * <p>Dividend frequency. Can be 1 of the following values:</p><ul> <li><code>0: Annually</code></li> <li><code>1: Monthly</code></li> <li><code>2: Quarterly</code></li> <li><code>3: Semi-annually</code></li> <li><code>4: Other/Unknown</code></li> <li><code>5: Bimonthly</code></li> <li><code>6: Trimesterly</code></li> <li><code>7: Weekly</code></li> </ul>
 * @member {String} freq
 */

Dividends.prototype['freq'] = undefined;
var _default = Dividends;
exports["default"] = _default;