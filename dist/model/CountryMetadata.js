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
 * The CountryMetadata model module.
 * @module model/CountryMetadata
 * @version 1.2.19
 */
var CountryMetadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CountryMetadata</code>.
   * @alias module:model/CountryMetadata
   */
  function CountryMetadata() {
    _classCallCheck(this, CountryMetadata);

    CountryMetadata.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CountryMetadata, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CountryMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CountryMetadata} obj Optional instance to populate.
     * @return {module:model/CountryMetadata} The populated <code>CountryMetadata</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CountryMetadata();

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('code2')) {
          obj['code2'] = _ApiClient["default"].convertToType(data['code2'], 'String');
        }

        if (data.hasOwnProperty('code3')) {
          obj['code3'] = _ApiClient["default"].convertToType(data['code3'], 'String');
        }

        if (data.hasOwnProperty('codeNo')) {
          obj['codeNo'] = _ApiClient["default"].convertToType(data['codeNo'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('currencyCode')) {
          obj['currencyCode'] = _ApiClient["default"].convertToType(data['currencyCode'], 'String');
        }

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }

        if (data.hasOwnProperty('subRegion')) {
          obj['subRegion'] = _ApiClient["default"].convertToType(data['subRegion'], 'String');
        }

        if (data.hasOwnProperty('rating')) {
          obj['rating'] = _ApiClient["default"].convertToType(data['rating'], 'String');
        }

        if (data.hasOwnProperty('defaultSpread')) {
          obj['defaultSpread'] = _ApiClient["default"].convertToType(data['defaultSpread'], 'Number');
        }

        if (data.hasOwnProperty('countryRiskPremium')) {
          obj['countryRiskPremium'] = _ApiClient["default"].convertToType(data['countryRiskPremium'], 'Number');
        }

        if (data.hasOwnProperty('equityRiskPremium')) {
          obj['equityRiskPremium'] = _ApiClient["default"].convertToType(data['equityRiskPremium'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CountryMetadata;
}();
/**
 * Country name
 * @member {String} country
 */


CountryMetadata.prototype['country'] = undefined;
/**
 * Alpha 2 code
 * @member {String} code2
 */

CountryMetadata.prototype['code2'] = undefined;
/**
 * Alpha 3 code
 * @member {String} code3
 */

CountryMetadata.prototype['code3'] = undefined;
/**
 * UN code
 * @member {String} codeNo
 */

CountryMetadata.prototype['codeNo'] = undefined;
/**
 * Currency name
 * @member {String} currency
 */

CountryMetadata.prototype['currency'] = undefined;
/**
 * Currency code
 * @member {String} currencyCode
 */

CountryMetadata.prototype['currencyCode'] = undefined;
/**
 * Region
 * @member {String} region
 */

CountryMetadata.prototype['region'] = undefined;
/**
 * Sub-Region
 * @member {String} subRegion
 */

CountryMetadata.prototype['subRegion'] = undefined;
/**
 * Moody's credit risk rating.
 * @member {String} rating
 */

CountryMetadata.prototype['rating'] = undefined;
/**
 * Default spread
 * @member {Number} defaultSpread
 */

CountryMetadata.prototype['defaultSpread'] = undefined;
/**
 * Country risk premium
 * @member {Number} countryRiskPremium
 */

CountryMetadata.prototype['countryRiskPremium'] = undefined;
/**
 * Equity risk premium
 * @member {Number} equityRiskPremium
 */

CountryMetadata.prototype['equityRiskPremium'] = undefined;
var _default = CountryMetadata;
exports["default"] = _default;