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
 * The Transactions model module.
 * @module model/Transactions
 * @version 1.2.19
 */
var Transactions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Transactions</code>.
   * @alias module:model/Transactions
   */
  function Transactions() {
    _classCallCheck(this, Transactions);

    Transactions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Transactions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Transactions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transactions} obj Optional instance to populate.
     * @return {module:model/Transactions} The populated <code>Transactions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Transactions();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('share')) {
          obj['share'] = _ApiClient["default"].convertToType(data['share'], 'Number');
        }

        if (data.hasOwnProperty('change')) {
          obj['change'] = _ApiClient["default"].convertToType(data['change'], 'Number');
        }

        if (data.hasOwnProperty('filingDate')) {
          obj['filingDate'] = _ApiClient["default"].convertToType(data['filingDate'], 'Date');
        }

        if (data.hasOwnProperty('transactionDate')) {
          obj['transactionDate'] = _ApiClient["default"].convertToType(data['transactionDate'], 'Date');
        }

        if (data.hasOwnProperty('transactionPrice')) {
          obj['transactionPrice'] = _ApiClient["default"].convertToType(data['transactionPrice'], 'Number');
        }

        if (data.hasOwnProperty('transactionCode')) {
          obj['transactionCode'] = _ApiClient["default"].convertToType(data['transactionCode'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Transactions;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


Transactions.prototype['symbol'] = undefined;
/**
 * Insider's name.
 * @member {String} name
 */

Transactions.prototype['name'] = undefined;
/**
 * Number of shares held after the transaction.
 * @member {Number} share
 */

Transactions.prototype['share'] = undefined;
/**
 * Number of share changed from the last period. A positive value suggests a <code>BUY</code> transaction. A negative value suggests a <code>SELL</code> transaction.
 * @member {Number} change
 */

Transactions.prototype['change'] = undefined;
/**
 * Filing date.
 * @member {Date} filingDate
 */

Transactions.prototype['filingDate'] = undefined;
/**
 * Transaction date.
 * @member {Date} transactionDate
 */

Transactions.prototype['transactionDate'] = undefined;
/**
 * Average transaction price.
 * @member {Number} transactionPrice
 */

Transactions.prototype['transactionPrice'] = undefined;
/**
 * Transaction code. A list of codes and their meanings can be found <a href=\"https://www.sec.gov/about/forms/form4data.pdf\" target=\"_blank\" rel=\"noopener\">here</a>.
 * @member {String} transactionCode
 */

Transactions.prototype['transactionCode'] = undefined;
var _default = Transactions;
exports["default"] = _default;