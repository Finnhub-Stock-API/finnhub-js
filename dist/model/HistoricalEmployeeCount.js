"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmployeeCount = _interopRequireDefault(require("./EmployeeCount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HistoricalEmployeeCount model module.
 * @module model/HistoricalEmployeeCount
 * @version 1.2.19
 */
var HistoricalEmployeeCount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoricalEmployeeCount</code>.
   * @alias module:model/HistoricalEmployeeCount
   */
  function HistoricalEmployeeCount() {
    _classCallCheck(this, HistoricalEmployeeCount);

    HistoricalEmployeeCount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoricalEmployeeCount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoricalEmployeeCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalEmployeeCount} obj Optional instance to populate.
     * @return {module:model/HistoricalEmployeeCount} The populated <code>HistoricalEmployeeCount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoricalEmployeeCount();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_EmployeeCount["default"]]);
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HistoricalEmployeeCount;
}();
/**
 * Array of market data.
 * @member {Array.<module:model/EmployeeCount>} data
 */


HistoricalEmployeeCount.prototype['data'] = undefined;
/**
 * Symbol
 * @member {String} symbol
 */

HistoricalEmployeeCount.prototype['symbol'] = undefined;
var _default = HistoricalEmployeeCount;
exports["default"] = _default;