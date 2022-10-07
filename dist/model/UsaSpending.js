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
 * The UsaSpending model module.
 * @module model/UsaSpending
 * @version 1.2.16
 */
var UsaSpending = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UsaSpending</code>.
   * @alias module:model/UsaSpending
   */
  function UsaSpending() {
    _classCallCheck(this, UsaSpending);

    UsaSpending.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UsaSpending, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UsaSpending</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsaSpending} obj Optional instance to populate.
     * @return {module:model/UsaSpending} The populated <code>UsaSpending</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UsaSpending();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('recipientName')) {
          obj['recipientName'] = _ApiClient["default"].convertToType(data['recipientName'], 'String');
        }

        if (data.hasOwnProperty('recipientParentName')) {
          obj['recipientParentName'] = _ApiClient["default"].convertToType(data['recipientParentName'], 'String');
        }

        if (data.hasOwnProperty('awardDescription')) {
          obj['awardDescription'] = _ApiClient["default"].convertToType(data['awardDescription'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('actionDate')) {
          obj['actionDate'] = _ApiClient["default"].convertToType(data['actionDate'], 'String');
        }

        if (data.hasOwnProperty('totalValue')) {
          obj['totalValue'] = _ApiClient["default"].convertToType(data['totalValue'], 'Number');
        }

        if (data.hasOwnProperty('performanceStartDate')) {
          obj['performanceStartDate'] = _ApiClient["default"].convertToType(data['performanceStartDate'], 'String');
        }

        if (data.hasOwnProperty('performanceEndDate')) {
          obj['performanceEndDate'] = _ApiClient["default"].convertToType(data['performanceEndDate'], 'String');
        }

        if (data.hasOwnProperty('awardingAgencyName')) {
          obj['awardingAgencyName'] = _ApiClient["default"].convertToType(data['awardingAgencyName'], 'String');
        }

        if (data.hasOwnProperty('awardingSubAgencyName')) {
          obj['awardingSubAgencyName'] = _ApiClient["default"].convertToType(data['awardingSubAgencyName'], 'String');
        }

        if (data.hasOwnProperty('awardingOfficeName')) {
          obj['awardingOfficeName'] = _ApiClient["default"].convertToType(data['awardingOfficeName'], 'String');
        }

        if (data.hasOwnProperty('performanceCountry')) {
          obj['performanceCountry'] = _ApiClient["default"].convertToType(data['performanceCountry'], 'String');
        }

        if (data.hasOwnProperty('performanceCity')) {
          obj['performanceCity'] = _ApiClient["default"].convertToType(data['performanceCity'], 'String');
        }

        if (data.hasOwnProperty('performanceCounty')) {
          obj['performanceCounty'] = _ApiClient["default"].convertToType(data['performanceCounty'], 'String');
        }

        if (data.hasOwnProperty('performanceState')) {
          obj['performanceState'] = _ApiClient["default"].convertToType(data['performanceState'], 'String');
        }

        if (data.hasOwnProperty('performanceZipCode')) {
          obj['performanceZipCode'] = _ApiClient["default"].convertToType(data['performanceZipCode'], 'String');
        }

        if (data.hasOwnProperty('performanceCongressionalDistrict')) {
          obj['performanceCongressionalDistrict'] = _ApiClient["default"].convertToType(data['performanceCongressionalDistrict'], 'String');
        }

        if (data.hasOwnProperty('naicsCode')) {
          obj['naicsCode'] = _ApiClient["default"].convertToType(data['naicsCode'], 'String');
        }

        if (data.hasOwnProperty('permalink')) {
          obj['permalink'] = _ApiClient["default"].convertToType(data['permalink'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UsaSpending;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


UsaSpending.prototype['symbol'] = undefined;
/**
 * Company's name.
 * @member {String} recipientName
 */

UsaSpending.prototype['recipientName'] = undefined;
/**
 * Company's name.
 * @member {String} recipientParentName
 */

UsaSpending.prototype['recipientParentName'] = undefined;
/**
 * Description.
 * @member {String} awardDescription
 */

UsaSpending.prototype['awardDescription'] = undefined;
/**
 * Recipient's country.
 * @member {String} country
 */

UsaSpending.prototype['country'] = undefined;
/**
 * Period.
 * @member {String} actionDate
 */

UsaSpending.prototype['actionDate'] = undefined;
/**
 * Income reported by lobbying firms.
 * @member {Number} totalValue
 */

UsaSpending.prototype['totalValue'] = undefined;
/**
 * Performance start date.
 * @member {String} performanceStartDate
 */

UsaSpending.prototype['performanceStartDate'] = undefined;
/**
 * Performance end date.
 * @member {String} performanceEndDate
 */

UsaSpending.prototype['performanceEndDate'] = undefined;
/**
 * Award agency.
 * @member {String} awardingAgencyName
 */

UsaSpending.prototype['awardingAgencyName'] = undefined;
/**
 * Award sub-agency.
 * @member {String} awardingSubAgencyName
 */

UsaSpending.prototype['awardingSubAgencyName'] = undefined;
/**
 * Award office name.
 * @member {String} awardingOfficeName
 */

UsaSpending.prototype['awardingOfficeName'] = undefined;
/**
 * Performance country.
 * @member {String} performanceCountry
 */

UsaSpending.prototype['performanceCountry'] = undefined;
/**
 * Performance city.
 * @member {String} performanceCity
 */

UsaSpending.prototype['performanceCity'] = undefined;
/**
 * Performance county.
 * @member {String} performanceCounty
 */

UsaSpending.prototype['performanceCounty'] = undefined;
/**
 * Performance state.
 * @member {String} performanceState
 */

UsaSpending.prototype['performanceState'] = undefined;
/**
 * Performance zip code.
 * @member {String} performanceZipCode
 */

UsaSpending.prototype['performanceZipCode'] = undefined;
/**
 * Performance congressional district.
 * @member {String} performanceCongressionalDistrict
 */

UsaSpending.prototype['performanceCongressionalDistrict'] = undefined;
/**
 * NAICS code.
 * @member {String} naicsCode
 */

UsaSpending.prototype['naicsCode'] = undefined;
/**
 * Permalink.
 * @member {String} permalink
 */

UsaSpending.prototype['permalink'] = undefined;
var _default = UsaSpending;
exports["default"] = _default;