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
 * The PriceTarget model module.
 * @module model/PriceTarget
 * @version 1.2.16
 */
var PriceTarget = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PriceTarget</code>.
   * @alias module:model/PriceTarget
   */
  function PriceTarget() {
    _classCallCheck(this, PriceTarget);

    PriceTarget.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PriceTarget, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PriceTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceTarget} obj Optional instance to populate.
     * @return {module:model/PriceTarget} The populated <code>PriceTarget</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PriceTarget();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('targetHigh')) {
          obj['targetHigh'] = _ApiClient["default"].convertToType(data['targetHigh'], 'Number');
        }

        if (data.hasOwnProperty('targetLow')) {
          obj['targetLow'] = _ApiClient["default"].convertToType(data['targetLow'], 'Number');
        }

        if (data.hasOwnProperty('targetMean')) {
          obj['targetMean'] = _ApiClient["default"].convertToType(data['targetMean'], 'Number');
        }

        if (data.hasOwnProperty('targetMedian')) {
          obj['targetMedian'] = _ApiClient["default"].convertToType(data['targetMedian'], 'Number');
        }

        if (data.hasOwnProperty('lastUpdated')) {
          obj['lastUpdated'] = _ApiClient["default"].convertToType(data['lastUpdated'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PriceTarget;
}();
/**
 * Company symbol.
 * @member {String} symbol
 */


PriceTarget.prototype['symbol'] = undefined;
/**
 * Highes analysts' target.
 * @member {Number} targetHigh
 */

PriceTarget.prototype['targetHigh'] = undefined;
/**
 * Lowest analysts' target.
 * @member {Number} targetLow
 */

PriceTarget.prototype['targetLow'] = undefined;
/**
 * Mean of all analysts' targets.
 * @member {Number} targetMean
 */

PriceTarget.prototype['targetMean'] = undefined;
/**
 * Median of all analysts' targets.
 * @member {Number} targetMedian
 */

PriceTarget.prototype['targetMedian'] = undefined;
/**
 * Updated time of the data
 * @member {String} lastUpdated
 */

PriceTarget.prototype['lastUpdated'] = undefined;
var _default = PriceTarget;
exports["default"] = _default;