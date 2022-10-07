"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UsaSpending = _interopRequireDefault(require("./UsaSpending"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UsaSpendingResult model module.
 * @module model/UsaSpendingResult
 * @version 1.2.16
 */
var UsaSpendingResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UsaSpendingResult</code>.
   * @alias module:model/UsaSpendingResult
   */
  function UsaSpendingResult() {
    _classCallCheck(this, UsaSpendingResult);

    UsaSpendingResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UsaSpendingResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UsaSpendingResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsaSpendingResult} obj Optional instance to populate.
     * @return {module:model/UsaSpendingResult} The populated <code>UsaSpendingResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UsaSpendingResult();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_UsaSpending["default"]]);
        }
      }

      return obj;
    }
  }]);

  return UsaSpendingResult;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


UsaSpendingResult.prototype['symbol'] = undefined;
/**
 * Array of government's spending data points.
 * @member {Array.<module:model/UsaSpending>} data
 */

UsaSpendingResult.prototype['data'] = undefined;
var _default = UsaSpendingResult;
exports["default"] = _default;