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
 * The ETFProfileData model module.
 * @module model/ETFProfileData
 * @version 1.2.19
 */
var ETFProfileData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ETFProfileData</code>.
   * @alias module:model/ETFProfileData
   */
  function ETFProfileData() {
    _classCallCheck(this, ETFProfileData);

    ETFProfileData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ETFProfileData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ETFProfileData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ETFProfileData} obj Optional instance to populate.
     * @return {module:model/ETFProfileData} The populated <code>ETFProfileData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ETFProfileData();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('assetClass')) {
          obj['assetClass'] = _ApiClient["default"].convertToType(data['assetClass'], 'String');
        }

        if (data.hasOwnProperty('investmentSegment')) {
          obj['investmentSegment'] = _ApiClient["default"].convertToType(data['investmentSegment'], 'String');
        }

        if (data.hasOwnProperty('aum')) {
          obj['aum'] = _ApiClient["default"].convertToType(data['aum'], 'Number');
        }

        if (data.hasOwnProperty('nav')) {
          obj['nav'] = _ApiClient["default"].convertToType(data['nav'], 'Number');
        }

        if (data.hasOwnProperty('navCurrency')) {
          obj['navCurrency'] = _ApiClient["default"].convertToType(data['navCurrency'], 'String');
        }

        if (data.hasOwnProperty('expenseRatio')) {
          obj['expenseRatio'] = _ApiClient["default"].convertToType(data['expenseRatio'], 'Number');
        }

        if (data.hasOwnProperty('trackingIndex')) {
          obj['trackingIndex'] = _ApiClient["default"].convertToType(data['trackingIndex'], 'String');
        }

        if (data.hasOwnProperty('etfCompany')) {
          obj['etfCompany'] = _ApiClient["default"].convertToType(data['etfCompany'], 'String');
        }

        if (data.hasOwnProperty('domicile')) {
          obj['domicile'] = _ApiClient["default"].convertToType(data['domicile'], 'String');
        }

        if (data.hasOwnProperty('inceptionDate')) {
          obj['inceptionDate'] = _ApiClient["default"].convertToType(data['inceptionDate'], 'Date');
        }

        if (data.hasOwnProperty('website')) {
          obj['website'] = _ApiClient["default"].convertToType(data['website'], 'String');
        }

        if (data.hasOwnProperty('logo')) {
          obj['logo'] = _ApiClient["default"].convertToType(data['logo'], 'String');
        }

        if (data.hasOwnProperty('isin')) {
          obj['isin'] = _ApiClient["default"].convertToType(data['isin'], 'String');
        }

        if (data.hasOwnProperty('cusip')) {
          obj['cusip'] = _ApiClient["default"].convertToType(data['cusip'], 'String');
        }

        if (data.hasOwnProperty('priceToEarnings')) {
          obj['priceToEarnings'] = _ApiClient["default"].convertToType(data['priceToEarnings'], 'Number');
        }

        if (data.hasOwnProperty('priceToBook')) {
          obj['priceToBook'] = _ApiClient["default"].convertToType(data['priceToBook'], 'Number');
        }

        if (data.hasOwnProperty('avgVolume')) {
          obj['avgVolume'] = _ApiClient["default"].convertToType(data['avgVolume'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('isInverse')) {
          obj['isInverse'] = _ApiClient["default"].convertToType(data['isInverse'], 'Boolean');
        }

        if (data.hasOwnProperty('isLeveraged')) {
          obj['isLeveraged'] = _ApiClient["default"].convertToType(data['isLeveraged'], 'Boolean');
        }

        if (data.hasOwnProperty('leverageFactor')) {
          obj['leverageFactor'] = _ApiClient["default"].convertToType(data['leverageFactor'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ETFProfileData;
}();
/**
 * Name
 * @member {String} name
 */


ETFProfileData.prototype['name'] = undefined;
/**
 * Asset Class.
 * @member {String} assetClass
 */

ETFProfileData.prototype['assetClass'] = undefined;
/**
 * Investment Segment.
 * @member {String} investmentSegment
 */

ETFProfileData.prototype['investmentSegment'] = undefined;
/**
 * AUM.
 * @member {Number} aum
 */

ETFProfileData.prototype['aum'] = undefined;
/**
 * NAV.
 * @member {Number} nav
 */

ETFProfileData.prototype['nav'] = undefined;
/**
 * NAV currency.
 * @member {String} navCurrency
 */

ETFProfileData.prototype['navCurrency'] = undefined;
/**
 * Expense ratio. For non-US funds, this is the <a href=\"https://www.esma.europa.eu/sites/default/files/library/2015/11/09_1028_final_kid_ongoing_charges_methodology_for_publication_u_2_.pdf\" target=\"_blank\">KID ongoing charges<a/>.
 * @member {Number} expenseRatio
 */

ETFProfileData.prototype['expenseRatio'] = undefined;
/**
 * Tracking Index.
 * @member {String} trackingIndex
 */

ETFProfileData.prototype['trackingIndex'] = undefined;
/**
 * ETF issuer.
 * @member {String} etfCompany
 */

ETFProfileData.prototype['etfCompany'] = undefined;
/**
 * ETF domicile.
 * @member {String} domicile
 */

ETFProfileData.prototype['domicile'] = undefined;
/**
 * Inception date.
 * @member {Date} inceptionDate
 */

ETFProfileData.prototype['inceptionDate'] = undefined;
/**
 * ETF's website.
 * @member {String} website
 */

ETFProfileData.prototype['website'] = undefined;
/**
 * Logo.
 * @member {String} logo
 */

ETFProfileData.prototype['logo'] = undefined;
/**
 * ISIN.
 * @member {String} isin
 */

ETFProfileData.prototype['isin'] = undefined;
/**
 * CUSIP.
 * @member {String} cusip
 */

ETFProfileData.prototype['cusip'] = undefined;
/**
 * P/E.
 * @member {Number} priceToEarnings
 */

ETFProfileData.prototype['priceToEarnings'] = undefined;
/**
 * P/B.
 * @member {Number} priceToBook
 */

ETFProfileData.prototype['priceToBook'] = undefined;
/**
 * 30-day average volume.
 * @member {Number} avgVolume
 */

ETFProfileData.prototype['avgVolume'] = undefined;
/**
 * ETF's description.
 * @member {String} description
 */

ETFProfileData.prototype['description'] = undefined;
/**
 * Whether the ETF is inverse
 * @member {Boolean} isInverse
 */

ETFProfileData.prototype['isInverse'] = undefined;
/**
 * Whether the ETF is leveraged
 * @member {Boolean} isLeveraged
 */

ETFProfileData.prototype['isLeveraged'] = undefined;
/**
 * Leverage factor.
 * @member {Number} leverageFactor
 */

ETFProfileData.prototype['leverageFactor'] = undefined;
var _default = ETFProfileData;
exports["default"] = _default;