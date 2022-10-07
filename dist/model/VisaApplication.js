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
 * The VisaApplication model module.
 * @module model/VisaApplication
 * @version 1.2.16
 */
var VisaApplication = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VisaApplication</code>.
   * @alias module:model/VisaApplication
   */
  function VisaApplication() {
    _classCallCheck(this, VisaApplication);

    VisaApplication.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VisaApplication, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VisaApplication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VisaApplication} obj Optional instance to populate.
     * @return {module:model/VisaApplication} The populated <code>VisaApplication</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VisaApplication();

        if (data.hasOwnProperty('year')) {
          obj['year'] = _ApiClient["default"].convertToType(data['year'], 'Number');
        }

        if (data.hasOwnProperty('quarter')) {
          obj['quarter'] = _ApiClient["default"].convertToType(data['quarter'], 'Number');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('caseNumber')) {
          obj['caseNumber'] = _ApiClient["default"].convertToType(data['caseNumber'], 'String');
        }

        if (data.hasOwnProperty('caseStatus')) {
          obj['caseStatus'] = _ApiClient["default"].convertToType(data['caseStatus'], 'String');
        }

        if (data.hasOwnProperty('receivedDate')) {
          obj['receivedDate'] = _ApiClient["default"].convertToType(data['receivedDate'], 'String');
        }

        if (data.hasOwnProperty('visaClass')) {
          obj['visaClass'] = _ApiClient["default"].convertToType(data['visaClass'], 'String');
        }

        if (data.hasOwnProperty('jobTitle')) {
          obj['jobTitle'] = _ApiClient["default"].convertToType(data['jobTitle'], 'String');
        }

        if (data.hasOwnProperty('socCode')) {
          obj['socCode'] = _ApiClient["default"].convertToType(data['socCode'], 'String');
        }

        if (data.hasOwnProperty('fullTimePosition')) {
          obj['fullTimePosition'] = _ApiClient["default"].convertToType(data['fullTimePosition'], 'String');
        }

        if (data.hasOwnProperty('beginDate')) {
          obj['beginDate'] = _ApiClient["default"].convertToType(data['beginDate'], 'String');
        }

        if (data.hasOwnProperty('endDate')) {
          obj['endDate'] = _ApiClient["default"].convertToType(data['endDate'], 'String');
        }

        if (data.hasOwnProperty('employerName')) {
          obj['employerName'] = _ApiClient["default"].convertToType(data['employerName'], 'String');
        }

        if (data.hasOwnProperty('worksiteAddress')) {
          obj['worksiteAddress'] = _ApiClient["default"].convertToType(data['worksiteAddress'], 'String');
        }

        if (data.hasOwnProperty('worksiteCity')) {
          obj['worksiteCity'] = _ApiClient["default"].convertToType(data['worksiteCity'], 'String');
        }

        if (data.hasOwnProperty('worksiteCounty')) {
          obj['worksiteCounty'] = _ApiClient["default"].convertToType(data['worksiteCounty'], 'String');
        }

        if (data.hasOwnProperty('worksiteState')) {
          obj['worksiteState'] = _ApiClient["default"].convertToType(data['worksiteState'], 'String');
        }

        if (data.hasOwnProperty('worksitePostalCode')) {
          obj['worksitePostalCode'] = _ApiClient["default"].convertToType(data['worksitePostalCode'], 'String');
        }

        if (data.hasOwnProperty('wageRangeFrom')) {
          obj['wageRangeFrom'] = _ApiClient["default"].convertToType(data['wageRangeFrom'], 'Number');
        }

        if (data.hasOwnProperty('wageRangeTo')) {
          obj['wageRangeTo'] = _ApiClient["default"].convertToType(data['wageRangeTo'], 'Number');
        }

        if (data.hasOwnProperty('wageUnitOfPay')) {
          obj['wageUnitOfPay'] = _ApiClient["default"].convertToType(data['wageUnitOfPay'], 'String');
        }

        if (data.hasOwnProperty('wageLevel')) {
          obj['wageLevel'] = _ApiClient["default"].convertToType(data['wageLevel'], 'String');
        }

        if (data.hasOwnProperty('h1bDependent')) {
          obj['h1bDependent'] = _ApiClient["default"].convertToType(data['h1bDependent'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VisaApplication;
}();
/**
 * Year.
 * @member {Number} year
 */


VisaApplication.prototype['year'] = undefined;
/**
 * Quarter.
 * @member {Number} quarter
 */

VisaApplication.prototype['quarter'] = undefined;
/**
 * Symbol.
 * @member {String} symbol
 */

VisaApplication.prototype['symbol'] = undefined;
/**
 * Case number.
 * @member {String} caseNumber
 */

VisaApplication.prototype['caseNumber'] = undefined;
/**
 * Case status.
 * @member {String} caseStatus
 */

VisaApplication.prototype['caseStatus'] = undefined;
/**
 * Received date.
 * @member {String} receivedDate
 */

VisaApplication.prototype['receivedDate'] = undefined;
/**
 * Visa class.
 * @member {String} visaClass
 */

VisaApplication.prototype['visaClass'] = undefined;
/**
 * Job Title.
 * @member {String} jobTitle
 */

VisaApplication.prototype['jobTitle'] = undefined;
/**
 * SOC Code. A list of SOC code can be found <a href=\"https://www.bls.gov/oes/current/oes_stru.htm\" target=\"_blank\">here</a>.
 * @member {String} socCode
 */

VisaApplication.prototype['socCode'] = undefined;
/**
 * Full-time position flag.
 * @member {String} fullTimePosition
 */

VisaApplication.prototype['fullTimePosition'] = undefined;
/**
 * Job's start date.
 * @member {String} beginDate
 */

VisaApplication.prototype['beginDate'] = undefined;
/**
 * Job's end date.
 * @member {String} endDate
 */

VisaApplication.prototype['endDate'] = undefined;
/**
 * Company's name.
 * @member {String} employerName
 */

VisaApplication.prototype['employerName'] = undefined;
/**
 * Worksite address.
 * @member {String} worksiteAddress
 */

VisaApplication.prototype['worksiteAddress'] = undefined;
/**
 * Worksite city.
 * @member {String} worksiteCity
 */

VisaApplication.prototype['worksiteCity'] = undefined;
/**
 * Worksite county.
 * @member {String} worksiteCounty
 */

VisaApplication.prototype['worksiteCounty'] = undefined;
/**
 * Worksite state.
 * @member {String} worksiteState
 */

VisaApplication.prototype['worksiteState'] = undefined;
/**
 * Worksite postal code.
 * @member {String} worksitePostalCode
 */

VisaApplication.prototype['worksitePostalCode'] = undefined;
/**
 * Wage range from.
 * @member {Number} wageRangeFrom
 */

VisaApplication.prototype['wageRangeFrom'] = undefined;
/**
 * Wage range to.
 * @member {Number} wageRangeTo
 */

VisaApplication.prototype['wageRangeTo'] = undefined;
/**
 * Wage unit of pay.
 * @member {String} wageUnitOfPay
 */

VisaApplication.prototype['wageUnitOfPay'] = undefined;
/**
 * Wage level.
 * @member {String} wageLevel
 */

VisaApplication.prototype['wageLevel'] = undefined;
/**
 * H1B dependent flag.
 * @member {String} h1bDependent
 */

VisaApplication.prototype['h1bDependent'] = undefined;
var _default = VisaApplication;
exports["default"] = _default;