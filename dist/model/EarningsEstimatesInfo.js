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
 * The EarningsEstimatesInfo model module.
 * @module model/EarningsEstimatesInfo
 * @version 1.2.19
 */
var EarningsEstimatesInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EarningsEstimatesInfo</code>.
   * @alias module:model/EarningsEstimatesInfo
   */
  function EarningsEstimatesInfo() {
    _classCallCheck(this, EarningsEstimatesInfo);

    EarningsEstimatesInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EarningsEstimatesInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EarningsEstimatesInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EarningsEstimatesInfo} obj Optional instance to populate.
     * @return {module:model/EarningsEstimatesInfo} The populated <code>EarningsEstimatesInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EarningsEstimatesInfo();

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

        if (data.hasOwnProperty('year')) {
          obj['year'] = _ApiClient["default"].convertToType(data['year'], 'Number');
        }

        if (data.hasOwnProperty('quarter')) {
          obj['quarter'] = _ApiClient["default"].convertToType(data['quarter'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EarningsEstimatesInfo;
}();
/**
 * Average EPS estimates including Finnhub's proprietary estimates.
 * @member {Number} epsAvg
 */


EarningsEstimatesInfo.prototype['epsAvg'] = undefined;
/**
 * Highest estimate.
 * @member {Number} epsHigh
 */

EarningsEstimatesInfo.prototype['epsHigh'] = undefined;
/**
 * Lowest estimate.
 * @member {Number} epsLow
 */

EarningsEstimatesInfo.prototype['epsLow'] = undefined;
/**
 * Number of Analysts.
 * @member {Number} numberAnalysts
 */

EarningsEstimatesInfo.prototype['numberAnalysts'] = undefined;
/**
 * Period.
 * @member {Date} period
 */

EarningsEstimatesInfo.prototype['period'] = undefined;
/**
 * Fiscal year.
 * @member {Number} year
 */

EarningsEstimatesInfo.prototype['year'] = undefined;
/**
 * Fiscal quarter.
 * @member {Number} quarter
 */

EarningsEstimatesInfo.prototype['quarter'] = undefined;
var _default = EarningsEstimatesInfo;
exports["default"] = _default;