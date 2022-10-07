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
 * The CompanyProfile2 model module.
 * @module model/CompanyProfile2
 * @version 1.2.16
 */
var CompanyProfile2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CompanyProfile2</code>.
   * @alias module:model/CompanyProfile2
   */
  function CompanyProfile2() {
    _classCallCheck(this, CompanyProfile2);

    CompanyProfile2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CompanyProfile2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CompanyProfile2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyProfile2} obj Optional instance to populate.
     * @return {module:model/CompanyProfile2} The populated <code>CompanyProfile2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CompanyProfile2();

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('exchange')) {
          obj['exchange'] = _ApiClient["default"].convertToType(data['exchange'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('ticker')) {
          obj['ticker'] = _ApiClient["default"].convertToType(data['ticker'], 'String');
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

        if (data.hasOwnProperty('logo')) {
          obj['logo'] = _ApiClient["default"].convertToType(data['logo'], 'String');
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }

        if (data.hasOwnProperty('weburl')) {
          obj['weburl'] = _ApiClient["default"].convertToType(data['weburl'], 'String');
        }

        if (data.hasOwnProperty('finnhubIndustry')) {
          obj['finnhubIndustry'] = _ApiClient["default"].convertToType(data['finnhubIndustry'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CompanyProfile2;
}();
/**
 * Country of company's headquarter.
 * @member {String} country
 */


CompanyProfile2.prototype['country'] = undefined;
/**
 * Currency used in company filings.
 * @member {String} currency
 */

CompanyProfile2.prototype['currency'] = undefined;
/**
 * Listed exchange.
 * @member {String} exchange
 */

CompanyProfile2.prototype['exchange'] = undefined;
/**
 * Company name.
 * @member {String} name
 */

CompanyProfile2.prototype['name'] = undefined;
/**
 * Company symbol/ticker as used on the listed exchange.
 * @member {String} ticker
 */

CompanyProfile2.prototype['ticker'] = undefined;
/**
 * IPO date.
 * @member {Date} ipo
 */

CompanyProfile2.prototype['ipo'] = undefined;
/**
 * Market Capitalization.
 * @member {Number} marketCapitalization
 */

CompanyProfile2.prototype['marketCapitalization'] = undefined;
/**
 * Number of oustanding shares.
 * @member {Number} shareOutstanding
 */

CompanyProfile2.prototype['shareOutstanding'] = undefined;
/**
 * Logo image.
 * @member {String} logo
 */

CompanyProfile2.prototype['logo'] = undefined;
/**
 * Company phone number.
 * @member {String} phone
 */

CompanyProfile2.prototype['phone'] = undefined;
/**
 * Company website.
 * @member {String} weburl
 */

CompanyProfile2.prototype['weburl'] = undefined;
/**
 * Finnhub industry classification.
 * @member {String} finnhubIndustry
 */

CompanyProfile2.prototype['finnhubIndustry'] = undefined;
var _default = CompanyProfile2;
exports["default"] = _default;