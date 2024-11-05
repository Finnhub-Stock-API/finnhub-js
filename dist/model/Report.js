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
 * The Report model module.
 * @module model/Report
 * @version 1.2.19
 */
var Report = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Report</code>.
   * @alias module:model/Report
   */
  function Report() {
    _classCallCheck(this, Report);

    Report.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Report, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Report</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Report} obj Optional instance to populate.
     * @return {module:model/Report} The populated <code>Report</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Report();

        if (data.hasOwnProperty('accessNumber')) {
          obj['accessNumber'] = _ApiClient["default"].convertToType(data['accessNumber'], 'String');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('cik')) {
          obj['cik'] = _ApiClient["default"].convertToType(data['cik'], 'String');
        }

        if (data.hasOwnProperty('year')) {
          obj['year'] = _ApiClient["default"].convertToType(data['year'], 'Number');
        }

        if (data.hasOwnProperty('quarter')) {
          obj['quarter'] = _ApiClient["default"].convertToType(data['quarter'], 'Number');
        }

        if (data.hasOwnProperty('form')) {
          obj['form'] = _ApiClient["default"].convertToType(data['form'], 'String');
        }

        if (data.hasOwnProperty('startDate')) {
          obj['startDate'] = _ApiClient["default"].convertToType(data['startDate'], 'String');
        }

        if (data.hasOwnProperty('endDate')) {
          obj['endDate'] = _ApiClient["default"].convertToType(data['endDate'], 'String');
        }

        if (data.hasOwnProperty('filedDate')) {
          obj['filedDate'] = _ApiClient["default"].convertToType(data['filedDate'], 'String');
        }

        if (data.hasOwnProperty('acceptedDate')) {
          obj['acceptedDate'] = _ApiClient["default"].convertToType(data['acceptedDate'], 'String');
        }

        if (data.hasOwnProperty('report')) {
          obj['report'] = _ApiClient["default"].convertToType(data['report'], Object);
        }
      }

      return obj;
    }
  }]);

  return Report;
}();
/**
 * Access number.
 * @member {String} accessNumber
 */


Report.prototype['accessNumber'] = undefined;
/**
 * Symbol.
 * @member {String} symbol
 */

Report.prototype['symbol'] = undefined;
/**
 * CIK.
 * @member {String} cik
 */

Report.prototype['cik'] = undefined;
/**
 * Year.
 * @member {Number} year
 */

Report.prototype['year'] = undefined;
/**
 * Quarter.
 * @member {Number} quarter
 */

Report.prototype['quarter'] = undefined;
/**
 * Form type.
 * @member {String} form
 */

Report.prototype['form'] = undefined;
/**
 * Period start date <code>%Y-%m-%d %H:%M:%S</code>.
 * @member {String} startDate
 */

Report.prototype['startDate'] = undefined;
/**
 * Period end date <code>%Y-%m-%d %H:%M:%S</code>.
 * @member {String} endDate
 */

Report.prototype['endDate'] = undefined;
/**
 * Filed date <code>%Y-%m-%d %H:%M:%S</code>.
 * @member {String} filedDate
 */

Report.prototype['filedDate'] = undefined;
/**
 * Accepted date <code>%Y-%m-%d %H:%M:%S</code>.
 * @member {String} acceptedDate
 */

Report.prototype['acceptedDate'] = undefined;
/**
 * @member {Object} report
 */

Report.prototype['report'] = undefined;
var _default = Report;
exports["default"] = _default;