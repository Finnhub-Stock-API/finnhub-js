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
 * The RevenueEstimatesInfo model module.
 * @module model/RevenueEstimatesInfo
 * @version 1.2.19
 */
var RevenueEstimatesInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RevenueEstimatesInfo</code>.
   * @alias module:model/RevenueEstimatesInfo
   */
  function RevenueEstimatesInfo() {
    _classCallCheck(this, RevenueEstimatesInfo);

    RevenueEstimatesInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RevenueEstimatesInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RevenueEstimatesInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RevenueEstimatesInfo} obj Optional instance to populate.
     * @return {module:model/RevenueEstimatesInfo} The populated <code>RevenueEstimatesInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RevenueEstimatesInfo();

        if (data.hasOwnProperty('revenueAvg')) {
          obj['revenueAvg'] = _ApiClient["default"].convertToType(data['revenueAvg'], 'Number');
        }

        if (data.hasOwnProperty('revenueHigh')) {
          obj['revenueHigh'] = _ApiClient["default"].convertToType(data['revenueHigh'], 'Number');
        }

        if (data.hasOwnProperty('revenueLow')) {
          obj['revenueLow'] = _ApiClient["default"].convertToType(data['revenueLow'], 'Number');
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

  return RevenueEstimatesInfo;
}();
/**
 * Average revenue estimates including Finnhub's proprietary estimates.
 * @member {Number} revenueAvg
 */


RevenueEstimatesInfo.prototype['revenueAvg'] = undefined;
/**
 * Highest estimate.
 * @member {Number} revenueHigh
 */

RevenueEstimatesInfo.prototype['revenueHigh'] = undefined;
/**
 * Lowest estimate.
 * @member {Number} revenueLow
 */

RevenueEstimatesInfo.prototype['revenueLow'] = undefined;
/**
 * Number of Analysts.
 * @member {Number} numberAnalysts
 */

RevenueEstimatesInfo.prototype['numberAnalysts'] = undefined;
/**
 * Period.
 * @member {Date} period
 */

RevenueEstimatesInfo.prototype['period'] = undefined;
/**
 * Fiscal year.
 * @member {Number} year
 */

RevenueEstimatesInfo.prototype['year'] = undefined;
/**
 * Fiscal quarter.
 * @member {Number} quarter
 */

RevenueEstimatesInfo.prototype['quarter'] = undefined;
var _default = RevenueEstimatesInfo;
exports["default"] = _default;