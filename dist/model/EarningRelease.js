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
 * The EarningRelease model module.
 * @module model/EarningRelease
 * @version 1.2.16
 */
var EarningRelease = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EarningRelease</code>.
   * @alias module:model/EarningRelease
   */
  function EarningRelease() {
    _classCallCheck(this, EarningRelease);

    EarningRelease.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EarningRelease, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EarningRelease</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EarningRelease} obj Optional instance to populate.
     * @return {module:model/EarningRelease} The populated <code>EarningRelease</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EarningRelease();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Date');
        }

        if (data.hasOwnProperty('hour')) {
          obj['hour'] = _ApiClient["default"].convertToType(data['hour'], 'String');
        }

        if (data.hasOwnProperty('year')) {
          obj['year'] = _ApiClient["default"].convertToType(data['year'], 'Number');
        }

        if (data.hasOwnProperty('quarter')) {
          obj['quarter'] = _ApiClient["default"].convertToType(data['quarter'], 'Number');
        }

        if (data.hasOwnProperty('epsEstimate')) {
          obj['epsEstimate'] = _ApiClient["default"].convertToType(data['epsEstimate'], 'Number');
        }

        if (data.hasOwnProperty('epsActual')) {
          obj['epsActual'] = _ApiClient["default"].convertToType(data['epsActual'], 'Number');
        }

        if (data.hasOwnProperty('revenueEstimate')) {
          obj['revenueEstimate'] = _ApiClient["default"].convertToType(data['revenueEstimate'], 'Number');
        }

        if (data.hasOwnProperty('revenueActual')) {
          obj['revenueActual'] = _ApiClient["default"].convertToType(data['revenueActual'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EarningRelease;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


EarningRelease.prototype['symbol'] = undefined;
/**
 * Date.
 * @member {Date} date
 */

EarningRelease.prototype['date'] = undefined;
/**
 * Indicates whether the earnings is announced before market open(<code>bmo</code>), after market close(<code>amc</code>), or during market hour(<code>dmh</code>).
 * @member {String} hour
 */

EarningRelease.prototype['hour'] = undefined;
/**
 * Earnings year.
 * @member {Number} year
 */

EarningRelease.prototype['year'] = undefined;
/**
 * Earnings quarter.
 * @member {Number} quarter
 */

EarningRelease.prototype['quarter'] = undefined;
/**
 * EPS estimate.
 * @member {Number} epsEstimate
 */

EarningRelease.prototype['epsEstimate'] = undefined;
/**
 * EPS actual.
 * @member {Number} epsActual
 */

EarningRelease.prototype['epsActual'] = undefined;
/**
 * Revenue estimate including Finnhub's proprietary estimates.
 * @member {Number} revenueEstimate
 */

EarningRelease.prototype['revenueEstimate'] = undefined;
/**
 * Revenue actual.
 * @member {Number} revenueActual
 */

EarningRelease.prototype['revenueActual'] = undefined;
var _default = EarningRelease;
exports["default"] = _default;