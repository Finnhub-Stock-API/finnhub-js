"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Transactions = _interopRequireDefault(require("./Transactions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InsiderTransactions model module.
 * @module model/InsiderTransactions
 * @version 1.2.16
 */
var InsiderTransactions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InsiderTransactions</code>.
   * @alias module:model/InsiderTransactions
   */
  function InsiderTransactions() {
    _classCallCheck(this, InsiderTransactions);

    InsiderTransactions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InsiderTransactions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InsiderTransactions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InsiderTransactions} obj Optional instance to populate.
     * @return {module:model/InsiderTransactions} The populated <code>InsiderTransactions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InsiderTransactions();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Transactions["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InsiderTransactions;
}();
/**
 * Symbol of the company.
 * @member {String} symbol
 */


InsiderTransactions.prototype['symbol'] = undefined;
/**
 * Array of insider transactions.
 * @member {Array.<module:model/Transactions>} data
 */

InsiderTransactions.prototype['data'] = undefined;
var _default = InsiderTransactions;
exports["default"] = _default;