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
 * The EbitdaEstimatesInfo model module.
 * @module model/EbitdaEstimatesInfo
 * @version 1.2.16
 */
var EbitdaEstimatesInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EbitdaEstimatesInfo</code>.
   * @alias module:model/EbitdaEstimatesInfo
   */
  function EbitdaEstimatesInfo() {
    _classCallCheck(this, EbitdaEstimatesInfo);

    EbitdaEstimatesInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EbitdaEstimatesInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EbitdaEstimatesInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EbitdaEstimatesInfo} obj Optional instance to populate.
     * @return {module:model/EbitdaEstimatesInfo} The populated <code>EbitdaEstimatesInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EbitdaEstimatesInfo();

        if (data.hasOwnProperty('ebitdaAvg')) {
          obj['ebitdaAvg'] = _ApiClient["default"].convertToType(data['ebitdaAvg'], 'Number');
        }

        if (data.hasOwnProperty('ebitdaHigh')) {
          obj['ebitdaHigh'] = _ApiClient["default"].convertToType(data['ebitdaHigh'], 'Number');
        }

        if (data.hasOwnProperty('ebitdaLow')) {
          obj['ebitdaLow'] = _ApiClient["default"].convertToType(data['ebitdaLow'], 'Number');
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

  return EbitdaEstimatesInfo;
}();
/**
 * Average EBITDA estimates including Finnhub's proprietary estimates.
 * @member {Number} ebitdaAvg
 */


EbitdaEstimatesInfo.prototype['ebitdaAvg'] = undefined;
/**
 * Highest estimate.
 * @member {Number} ebitdaHigh
 */

EbitdaEstimatesInfo.prototype['ebitdaHigh'] = undefined;
/**
 * Lowest estimate.
 * @member {Number} ebitdaLow
 */

EbitdaEstimatesInfo.prototype['ebitdaLow'] = undefined;
/**
 * Number of Analysts.
 * @member {Number} numberAnalysts
 */

EbitdaEstimatesInfo.prototype['numberAnalysts'] = undefined;
/**
 * Period.
 * @member {Date} period
 */

EbitdaEstimatesInfo.prototype['period'] = undefined;
var _default = EbitdaEstimatesInfo;
exports["default"] = _default;