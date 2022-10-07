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
 * The EarningResult model module.
 * @module model/EarningResult
 * @version 1.2.16
 */
var EarningResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EarningResult</code>.
   * @alias module:model/EarningResult
   */
  function EarningResult() {
    _classCallCheck(this, EarningResult);

    EarningResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EarningResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EarningResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EarningResult} obj Optional instance to populate.
     * @return {module:model/EarningResult} The populated <code>EarningResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EarningResult();

        if (data.hasOwnProperty('actual')) {
          obj['actual'] = _ApiClient["default"].convertToType(data['actual'], 'Number');
        }

        if (data.hasOwnProperty('estimate')) {
          obj['estimate'] = _ApiClient["default"].convertToType(data['estimate'], 'Number');
        }

        if (data.hasOwnProperty('surprise')) {
          obj['surprise'] = _ApiClient["default"].convertToType(data['surprise'], 'Number');
        }

        if (data.hasOwnProperty('surprisePercent')) {
          obj['surprisePercent'] = _ApiClient["default"].convertToType(data['surprisePercent'], 'Number');
        }

        if (data.hasOwnProperty('period')) {
          obj['period'] = _ApiClient["default"].convertToType(data['period'], 'Date');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EarningResult;
}();
/**
 * Actual earning result.
 * @member {Number} actual
 */


EarningResult.prototype['actual'] = undefined;
/**
 * Estimated earning.
 * @member {Number} estimate
 */

EarningResult.prototype['estimate'] = undefined;
/**
 * Surprise - The difference between actual and estimate.
 * @member {Number} surprise
 */

EarningResult.prototype['surprise'] = undefined;
/**
 * Surprise percent.
 * @member {Number} surprisePercent
 */

EarningResult.prototype['surprisePercent'] = undefined;
/**
 * Reported period.
 * @member {Date} period
 */

EarningResult.prototype['period'] = undefined;
/**
 * Company symbol.
 * @member {String} symbol
 */

EarningResult.prototype['symbol'] = undefined;
var _default = EarningResult;
exports["default"] = _default;