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
 * The MutualFundProfileData model module.
 * @module model/MutualFundProfileData
 * @version 1.2.16
 */
var MutualFundProfileData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MutualFundProfileData</code>.
   * @alias module:model/MutualFundProfileData
   */
  function MutualFundProfileData() {
    _classCallCheck(this, MutualFundProfileData);

    MutualFundProfileData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MutualFundProfileData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MutualFundProfileData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualFundProfileData} obj Optional instance to populate.
     * @return {module:model/MutualFundProfileData} The populated <code>MutualFundProfileData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MutualFundProfileData();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }

        if (data.hasOwnProperty('investmentSegment')) {
          obj['investmentSegment'] = _ApiClient["default"].convertToType(data['investmentSegment'], 'String');
        }

        if (data.hasOwnProperty('totalNav')) {
          obj['totalNav'] = _ApiClient["default"].convertToType(data['totalNav'], 'Number');
        }

        if (data.hasOwnProperty('expenseRatio')) {
          obj['expenseRatio'] = _ApiClient["default"].convertToType(data['expenseRatio'], 'Number');
        }

        if (data.hasOwnProperty('benchmark')) {
          obj['benchmark'] = _ApiClient["default"].convertToType(data['benchmark'], 'String');
        }

        if (data.hasOwnProperty('inceptionDate')) {
          obj['inceptionDate'] = _ApiClient["default"].convertToType(data['inceptionDate'], 'Date');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('fundFamily')) {
          obj['fundFamily'] = _ApiClient["default"].convertToType(data['fundFamily'], 'String');
        }

        if (data.hasOwnProperty('manager')) {
          obj['manager'] = _ApiClient["default"].convertToType(data['manager'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('beta')) {
          obj['beta'] = _ApiClient["default"].convertToType(data['beta'], 'Number');
        }

        if (data.hasOwnProperty('deferredLoad')) {
          obj['deferredLoad'] = _ApiClient["default"].convertToType(data['deferredLoad'], 'Number');
        }

        if (data.hasOwnProperty('fee12b1')) {
          obj['fee12b1'] = _ApiClient["default"].convertToType(data['fee12b1'], 'Number');
        }

        if (data.hasOwnProperty('frontLoad')) {
          obj['frontLoad'] = _ApiClient["default"].convertToType(data['frontLoad'], 'Number');
        }

        if (data.hasOwnProperty('iraMinInvestment')) {
          obj['iraMinInvestment'] = _ApiClient["default"].convertToType(data['iraMinInvestment'], 'Number');
        }

        if (data.hasOwnProperty('isin')) {
          obj['isin'] = _ApiClient["default"].convertToType(data['isin'], 'String');
        }

        if (data.hasOwnProperty('cusip')) {
          obj['cusip'] = _ApiClient["default"].convertToType(data['cusip'], 'String');
        }

        if (data.hasOwnProperty('maxRedemptionFee')) {
          obj['maxRedemptionFee'] = _ApiClient["default"].convertToType(data['maxRedemptionFee'], 'Number');
        }

        if (data.hasOwnProperty('standardMinInvestment')) {
          obj['standardMinInvestment'] = _ApiClient["default"].convertToType(data['standardMinInvestment'], 'Number');
        }

        if (data.hasOwnProperty('turnover')) {
          obj['turnover'] = _ApiClient["default"].convertToType(data['turnover'], 'Number');
        }

        if (data.hasOwnProperty('seriesId')) {
          obj['seriesId'] = _ApiClient["default"].convertToType(data['seriesId'], 'String');
        }

        if (data.hasOwnProperty('seriesName')) {
          obj['seriesName'] = _ApiClient["default"].convertToType(data['seriesName'], 'String');
        }

        if (data.hasOwnProperty('classId')) {
          obj['classId'] = _ApiClient["default"].convertToType(data['classId'], 'String');
        }

        if (data.hasOwnProperty('className')) {
          obj['className'] = _ApiClient["default"].convertToType(data['className'], 'String');
        }

        if (data.hasOwnProperty('sfdrClassification')) {
          obj['sfdrClassification'] = _ApiClient["default"].convertToType(data['sfdrClassification'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MutualFundProfileData;
}();
/**
 * Name
 * @member {String} name
 */


MutualFundProfileData.prototype['name'] = undefined;
/**
 * Fund's category.
 * @member {String} category
 */

MutualFundProfileData.prototype['category'] = undefined;
/**
 * Investment Segment.
 * @member {String} investmentSegment
 */

MutualFundProfileData.prototype['investmentSegment'] = undefined;
/**
 * NAV.
 * @member {Number} totalNav
 */

MutualFundProfileData.prototype['totalNav'] = undefined;
/**
 * Expense ratio.
 * @member {Number} expenseRatio
 */

MutualFundProfileData.prototype['expenseRatio'] = undefined;
/**
 * Index benchmark.
 * @member {String} benchmark
 */

MutualFundProfileData.prototype['benchmark'] = undefined;
/**
 * Inception date.
 * @member {Date} inceptionDate
 */

MutualFundProfileData.prototype['inceptionDate'] = undefined;
/**
 * Fund's description.
 * @member {String} description
 */

MutualFundProfileData.prototype['description'] = undefined;
/**
 * Fund Family.
 * @member {String} fundFamily
 */

MutualFundProfileData.prototype['fundFamily'] = undefined;
/**
 * Fund's managers.
 * @member {String} manager
 */

MutualFundProfileData.prototype['manager'] = undefined;
/**
 * Status.
 * @member {String} status
 */

MutualFundProfileData.prototype['status'] = undefined;
/**
 * Beta.
 * @member {Number} beta
 */

MutualFundProfileData.prototype['beta'] = undefined;
/**
 * Deferred load.
 * @member {Number} deferredLoad
 */

MutualFundProfileData.prototype['deferredLoad'] = undefined;
/**
 * 12B-1 fee.
 * @member {Number} fee12b1
 */

MutualFundProfileData.prototype['fee12b1'] = undefined;
/**
 * Front Load.
 * @member {Number} frontLoad
 */

MutualFundProfileData.prototype['frontLoad'] = undefined;
/**
 * IRA minimum investment.
 * @member {Number} iraMinInvestment
 */

MutualFundProfileData.prototype['iraMinInvestment'] = undefined;
/**
 * ISIN.
 * @member {String} isin
 */

MutualFundProfileData.prototype['isin'] = undefined;
/**
 * CUSIP.
 * @member {String} cusip
 */

MutualFundProfileData.prototype['cusip'] = undefined;
/**
 * Max redemption fee.
 * @member {Number} maxRedemptionFee
 */

MutualFundProfileData.prototype['maxRedemptionFee'] = undefined;
/**
 * Minimum investment for standard accounts.
 * @member {Number} standardMinInvestment
 */

MutualFundProfileData.prototype['standardMinInvestment'] = undefined;
/**
 * Turnover.
 * @member {Number} turnover
 */

MutualFundProfileData.prototype['turnover'] = undefined;
/**
 * Fund's series ID. This field can be used to group multiple share classes into 1 unique fund.
 * @member {String} seriesId
 */

MutualFundProfileData.prototype['seriesId'] = undefined;
/**
 * Fund's series name.
 * @member {String} seriesName
 */

MutualFundProfileData.prototype['seriesName'] = undefined;
/**
 * Class ID.
 * @member {String} classId
 */

MutualFundProfileData.prototype['classId'] = undefined;
/**
 * Class name.
 * @member {String} className
 */

MutualFundProfileData.prototype['className'] = undefined;
/**
 * SFDR classification for EU funds. Under the new classifications, a fund's strategy will labeled under either Article 6, 8 or 9. Article 6 covers funds which do not integrate any kind of sustainability into the investment process. Article 8, also known as ‘environmental and socially promoting’, applies “… where a financial product promotes, among other characteristics, environmental or social characteristics, or a combination of those characteristics, provided that the companies in which the investments are made follow good governance practices.”. Article 9, also known as ‘products targeting sustainable investments’, covers products targeting bespoke sustainable investments and applies “… where a financial product has sustainable investment as its objective and an index has been designated as a reference benchmark.”
 * @member {String} sfdrClassification
 */

MutualFundProfileData.prototype['sfdrClassification'] = undefined;
/**
 * Fund's currency
 * @member {String} currency
 */

MutualFundProfileData.prototype['currency'] = undefined;
var _default = MutualFundProfileData;
exports["default"] = _default;