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
 * The CompanyProfile model module.
 * @module model/CompanyProfile
 * @version 1.2.16
 */
var CompanyProfile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CompanyProfile</code>.
   * @alias module:model/CompanyProfile
   */
  function CompanyProfile() {
    _classCallCheck(this, CompanyProfile);

    CompanyProfile.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CompanyProfile, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CompanyProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyProfile} obj Optional instance to populate.
     * @return {module:model/CompanyProfile} The populated <code>CompanyProfile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CompanyProfile();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('cusip')) {
          obj['cusip'] = _ApiClient["default"].convertToType(data['cusip'], 'String');
        }

        if (data.hasOwnProperty('sedol')) {
          obj['sedol'] = _ApiClient["default"].convertToType(data['sedol'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('exchange')) {
          obj['exchange'] = _ApiClient["default"].convertToType(data['exchange'], 'String');
        }

        if (data.hasOwnProperty('ggroup')) {
          obj['ggroup'] = _ApiClient["default"].convertToType(data['ggroup'], 'String');
        }

        if (data.hasOwnProperty('gind')) {
          obj['gind'] = _ApiClient["default"].convertToType(data['gind'], 'String');
        }

        if (data.hasOwnProperty('gsector')) {
          obj['gsector'] = _ApiClient["default"].convertToType(data['gsector'], 'String');
        }

        if (data.hasOwnProperty('gsubind')) {
          obj['gsubind'] = _ApiClient["default"].convertToType(data['gsubind'], 'String');
        }

        if (data.hasOwnProperty('isin')) {
          obj['isin'] = _ApiClient["default"].convertToType(data['isin'], 'String');
        }

        if (data.hasOwnProperty('naicsNationalIndustry')) {
          obj['naicsNationalIndustry'] = _ApiClient["default"].convertToType(data['naicsNationalIndustry'], 'String');
        }

        if (data.hasOwnProperty('naics')) {
          obj['naics'] = _ApiClient["default"].convertToType(data['naics'], 'String');
        }

        if (data.hasOwnProperty('naicsSector')) {
          obj['naicsSector'] = _ApiClient["default"].convertToType(data['naicsSector'], 'String');
        }

        if (data.hasOwnProperty('naicsSubsector')) {
          obj['naicsSubsector'] = _ApiClient["default"].convertToType(data['naicsSubsector'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('ticker')) {
          obj['ticker'] = _ApiClient["default"].convertToType(data['ticker'], 'String');
        }

        if (data.hasOwnProperty('weburl')) {
          obj['weburl'] = _ApiClient["default"].convertToType(data['weburl'], 'String');
        }

        if (data.hasOwnProperty('ipo')) {
          obj['ipo'] = _ApiClient["default"].convertToType(data['ipo'], 'Date');
        }

        if (data.hasOwnProperty('marketCapitalization')) {
          obj['marketCapitalization'] = _ApiClient["default"].convertToType(data['marketCapitalization'], 'Number');
        }

        if (data.hasOwnProperty('shareOutstanding')) {
          obj['shareOutstanding'] = _ApiClient["default"].convertToType(data['shareOutstanding'], 'Number');
        }

        if (data.hasOwnProperty('employeeTotal')) {
          obj['employeeTotal'] = _ApiClient["default"].convertToType(data['employeeTotal'], 'Number');
        }

        if (data.hasOwnProperty('logo')) {
          obj['logo'] = _ApiClient["default"].convertToType(data['logo'], 'String');
        }

        if (data.hasOwnProperty('finnhubIndustry')) {
          obj['finnhubIndustry'] = _ApiClient["default"].convertToType(data['finnhubIndustry'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CompanyProfile;
}();
/**
 * Address of company's headquarter.
 * @member {String} address
 */


CompanyProfile.prototype['address'] = undefined;
/**
 * City of company's headquarter.
 * @member {String} city
 */

CompanyProfile.prototype['city'] = undefined;
/**
 * Country of company's headquarter.
 * @member {String} country
 */

CompanyProfile.prototype['country'] = undefined;
/**
 * Currency used in company filings.
 * @member {String} currency
 */

CompanyProfile.prototype['currency'] = undefined;
/**
 * CUSIP number.
 * @member {String} cusip
 */

CompanyProfile.prototype['cusip'] = undefined;
/**
 * Sedol number.
 * @member {String} sedol
 */

CompanyProfile.prototype['sedol'] = undefined;
/**
 * Company business summary.
 * @member {String} description
 */

CompanyProfile.prototype['description'] = undefined;
/**
 * Listed exchange.
 * @member {String} exchange
 */

CompanyProfile.prototype['exchange'] = undefined;
/**
 * Industry group.
 * @member {String} ggroup
 */

CompanyProfile.prototype['ggroup'] = undefined;
/**
 * Industry.
 * @member {String} gind
 */

CompanyProfile.prototype['gind'] = undefined;
/**
 * Sector.
 * @member {String} gsector
 */

CompanyProfile.prototype['gsector'] = undefined;
/**
 * Sub-industry.
 * @member {String} gsubind
 */

CompanyProfile.prototype['gsubind'] = undefined;
/**
 * ISIN number.
 * @member {String} isin
 */

CompanyProfile.prototype['isin'] = undefined;
/**
 * NAICS national industry.
 * @member {String} naicsNationalIndustry
 */

CompanyProfile.prototype['naicsNationalIndustry'] = undefined;
/**
 * NAICS industry.
 * @member {String} naics
 */

CompanyProfile.prototype['naics'] = undefined;
/**
 * NAICS sector.
 * @member {String} naicsSector
 */

CompanyProfile.prototype['naicsSector'] = undefined;
/**
 * NAICS subsector.
 * @member {String} naicsSubsector
 */

CompanyProfile.prototype['naicsSubsector'] = undefined;
/**
 * Company name.
 * @member {String} name
 */

CompanyProfile.prototype['name'] = undefined;
/**
 * Company phone number.
 * @member {String} phone
 */

CompanyProfile.prototype['phone'] = undefined;
/**
 * State of company's headquarter.
 * @member {String} state
 */

CompanyProfile.prototype['state'] = undefined;
/**
 * Company symbol/ticker as used on the listed exchange.
 * @member {String} ticker
 */

CompanyProfile.prototype['ticker'] = undefined;
/**
 * Company website.
 * @member {String} weburl
 */

CompanyProfile.prototype['weburl'] = undefined;
/**
 * IPO date.
 * @member {Date} ipo
 */

CompanyProfile.prototype['ipo'] = undefined;
/**
 * Market Capitalization.
 * @member {Number} marketCapitalization
 */

CompanyProfile.prototype['marketCapitalization'] = undefined;
/**
 * Number of oustanding shares.
 * @member {Number} shareOutstanding
 */

CompanyProfile.prototype['shareOutstanding'] = undefined;
/**
 * Number of employee.
 * @member {Number} employeeTotal
 */

CompanyProfile.prototype['employeeTotal'] = undefined;
/**
 * Logo image.
 * @member {String} logo
 */

CompanyProfile.prototype['logo'] = undefined;
/**
 * Finnhub industry classification.
 * @member {String} finnhubIndustry
 */

CompanyProfile.prototype['finnhubIndustry'] = undefined;
var _default = CompanyProfile;
exports["default"] = _default;