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
 * The EbitEstimatesInfo model module.
 * @module model/EbitEstimatesInfo
 * @version 1.2.19
 */
var EbitEstimatesInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EbitEstimatesInfo</code>.
   * @alias module:model/EbitEstimatesInfo
   */
  function EbitEstimatesInfo() {
    _classCallCheck(this, EbitEstimatesInfo);

    EbitEstimatesInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EbitEstimatesInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EbitEstimatesInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EbitEstimatesInfo} obj Optional instance to populate.
     * @return {module:model/EbitEstimatesInfo} The populated <code>EbitEstimatesInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EbitEstimatesInfo();

        if (data.hasOwnProperty('ebitAvg')) {
          obj['ebitAvg'] = _ApiClient["default"].convertToType(data['ebitAvg'], 'Number');
        }

        if (data.hasOwnProperty('ebitHigh')) {
          obj['ebitHigh'] = _ApiClient["default"].convertToType(data['ebitHigh'], 'Number');
        }

        if (data.hasOwnProperty('ebitLow')) {
          obj['ebitLow'] = _ApiClient["default"].convertToType(data['ebitLow'], 'Number');
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

  return EbitEstimatesInfo;
}();
/**
 * Average EBIT estimates including Finnhub's proprietary estimates.
 * @member {Number} ebitAvg
 */


EbitEstimatesInfo.prototype['ebitAvg'] = undefined;
/**
 * Highest estimate.
 * @member {Number} ebitHigh
 */

EbitEstimatesInfo.prototype['ebitHigh'] = undefined;
/**
 * Lowest estimate.
 * @member {Number} ebitLow
 */

EbitEstimatesInfo.prototype['ebitLow'] = undefined;
/**
 * Number of Analysts.
 * @member {Number} numberAnalysts
 */

EbitEstimatesInfo.prototype['numberAnalysts'] = undefined;
/**
 * Period.
 * @member {Date} period
 */

EbitEstimatesInfo.prototype['period'] = undefined;
/**
 * Fiscal year.
 * @member {Number} year
 */

EbitEstimatesInfo.prototype['year'] = undefined;
/**
 * Fiscal quarter.
 * @member {Number} quarter
 */

EbitEstimatesInfo.prototype['quarter'] = undefined;
var _default = EbitEstimatesInfo;
exports["default"] = _default;