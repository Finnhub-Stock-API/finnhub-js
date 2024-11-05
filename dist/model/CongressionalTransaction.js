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
 * The CongressionalTransaction model module.
 * @module model/CongressionalTransaction
 * @version 1.2.19
 */
var CongressionalTransaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CongressionalTransaction</code>.
   * @alias module:model/CongressionalTransaction
   */
  function CongressionalTransaction() {
    _classCallCheck(this, CongressionalTransaction);

    CongressionalTransaction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CongressionalTransaction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CongressionalTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CongressionalTransaction} obj Optional instance to populate.
     * @return {module:model/CongressionalTransaction} The populated <code>CongressionalTransaction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CongressionalTransaction();

        if (data.hasOwnProperty('amountFrom')) {
          obj['amountFrom'] = _ApiClient["default"].convertToType(data['amountFrom'], 'Number');
        }

        if (data.hasOwnProperty('amountTo')) {
          obj['amountTo'] = _ApiClient["default"].convertToType(data['amountTo'], 'Number');
        }

        if (data.hasOwnProperty('assetName')) {
          obj['assetName'] = _ApiClient["default"].convertToType(data['assetName'], 'String');
        }

        if (data.hasOwnProperty('filingDate')) {
          obj['filingDate'] = _ApiClient["default"].convertToType(data['filingDate'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('ownerType')) {
          obj['ownerType'] = _ApiClient["default"].convertToType(data['ownerType'], 'String');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'String');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('transactionDate')) {
          obj['transactionDate'] = _ApiClient["default"].convertToType(data['transactionDate'], 'String');
        }

        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CongressionalTransaction;
}();
/**
 * Transaction amount from.
 * @member {Number} amountFrom
 */


CongressionalTransaction.prototype['amountFrom'] = undefined;
/**
 * Transaction amount to.
 * @member {Number} amountTo
 */

CongressionalTransaction.prototype['amountTo'] = undefined;
/**
 * Asset name.
 * @member {String} assetName
 */

CongressionalTransaction.prototype['assetName'] = undefined;
/**
 * Filing date.
 * @member {String} filingDate
 */

CongressionalTransaction.prototype['filingDate'] = undefined;
/**
 * Name of the representative.
 * @member {String} name
 */

CongressionalTransaction.prototype['name'] = undefined;
/**
 * Owner Type.
 * @member {String} ownerType
 */

CongressionalTransaction.prototype['ownerType'] = undefined;
/**
 * Position.
 * @member {String} position
 */

CongressionalTransaction.prototype['position'] = undefined;
/**
 * Symbol.
 * @member {String} symbol
 */

CongressionalTransaction.prototype['symbol'] = undefined;
/**
 * Transaction date.
 * @member {String} transactionDate
 */

CongressionalTransaction.prototype['transactionDate'] = undefined;
/**
 * Transaction type <code>Sale</code> or <code>Purchase</code>.
 * @member {String} transactionType
 */

CongressionalTransaction.prototype['transactionType'] = undefined;
var _default = CongressionalTransaction;
exports["default"] = _default;