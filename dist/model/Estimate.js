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
 * The Estimate model module.
 * @module model/Estimate
 * @version 1.2.5
 */
var Estimate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Estimate</code>.
   * @alias module:model/Estimate
   */
  function Estimate() {
    _classCallCheck(this, Estimate);

    Estimate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Estimate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Estimate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Estimate} obj Optional instance to populate.
     * @return {module:model/Estimate} The populated <code>Estimate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Estimate();

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
      }

      return obj;
    }
  }]);

  return Estimate;
}();
/**
 * Average revenue estimates including Finnhub's proprietary estimates.
 * @member {Number} revenueAvg
 */


Estimate.prototype['revenueAvg'] = undefined;
/**
 * Highest estimate.
 * @member {Number} revenueHigh
 */

Estimate.prototype['revenueHigh'] = undefined;
/**
 * Lowest estimate.
 * @member {Number} revenueLow
 */

Estimate.prototype['revenueLow'] = undefined;
/**
 * Number of Analysts.
 * @member {Number} numberAnalysts
 */

Estimate.prototype['numberAnalysts'] = undefined;
/**
 * Period.
 * @member {Date} period
 */

Estimate.prototype['period'] = undefined;
var _default = Estimate;
exports["default"] = _default;