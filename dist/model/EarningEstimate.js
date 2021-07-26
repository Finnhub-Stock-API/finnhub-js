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
 * The EarningEstimate model module.
 * @module model/EarningEstimate
 * @version 1.2.5
 */
var EarningEstimate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EarningEstimate</code>.
   * @alias module:model/EarningEstimate
   */
  function EarningEstimate() {
    _classCallCheck(this, EarningEstimate);

    EarningEstimate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EarningEstimate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EarningEstimate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EarningEstimate} obj Optional instance to populate.
     * @return {module:model/EarningEstimate} The populated <code>EarningEstimate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EarningEstimate();

        if (data.hasOwnProperty('epsAvg')) {
          obj['epsAvg'] = _ApiClient["default"].convertToType(data['epsAvg'], 'Number');
        }

        if (data.hasOwnProperty('epsHigh')) {
          obj['epsHigh'] = _ApiClient["default"].convertToType(data['epsHigh'], 'Number');
        }

        if (data.hasOwnProperty('epsLow')) {
          obj['epsLow'] = _ApiClient["default"].convertToType(data['epsLow'], 'Number');
        }

        if (data.hasOwnProperty('numberAnalysts')) {
          obj['numberAnalysts'] = _ApiClient["default"].convertToType(data['numberAnalysts'], 'Number');
        }

        if (data.hasOwnProperty('period')) {
          obj['period'] = _ApiClient["default"].convertToType(data['period'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return EarningEstimate;
}();
/**
 * Average EPS estimates including Finnhub's proprietary estimates.
 * @member {Number} epsAvg
 */


EarningEstimate.prototype['epsAvg'] = undefined;
/**
 * Highest estimate.
 * @member {Number} epsHigh
 */

EarningEstimate.prototype['epsHigh'] = undefined;
/**
 * Lowest estimate.
 * @member {Number} epsLow
 */

EarningEstimate.prototype['epsLow'] = undefined;
/**
 * Number of Analysts.
 * @member {Number} numberAnalysts
 */

EarningEstimate.prototype['numberAnalysts'] = undefined;
/**
 * Period.
 * @member {Date} period
 */

EarningEstimate.prototype['period'] = undefined;
var _default = EarningEstimate;
exports["default"] = _default;