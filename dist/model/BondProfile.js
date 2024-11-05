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
 * The BondProfile model module.
 * @module model/BondProfile
 * @version 1.2.19
 */
var BondProfile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BondProfile</code>.
   * @alias module:model/BondProfile
   */
  function BondProfile() {
    _classCallCheck(this, BondProfile);

    BondProfile.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BondProfile, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BondProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BondProfile} obj Optional instance to populate.
     * @return {module:model/BondProfile} The populated <code>BondProfile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BondProfile();

        if (data.hasOwnProperty('isin')) {
          obj['isin'] = _ApiClient["default"].convertToType(data['isin'], 'String');
        }

        if (data.hasOwnProperty('cusip')) {
          obj['cusip'] = _ApiClient["default"].convertToType(data['cusip'], 'String');
        }

        if (data.hasOwnProperty('figi')) {
          obj['figi'] = _ApiClient["default"].convertToType(data['figi'], 'String');
        }

        if (data.hasOwnProperty('coupon')) {
          obj['coupon'] = _ApiClient["default"].convertToType(data['coupon'], 'Number');
        }

        if (data.hasOwnProperty('maturityDate')) {
          obj['maturityDate'] = _ApiClient["default"].convertToType(data['maturityDate'], 'String');
        }

        if (data.hasOwnProperty('offeringPrice')) {
          obj['offeringPrice'] = _ApiClient["default"].convertToType(data['offeringPrice'], 'Number');
        }

        if (data.hasOwnProperty('issueDate')) {
          obj['issueDate'] = _ApiClient["default"].convertToType(data['issueDate'], 'String');
        }

        if (data.hasOwnProperty('bondType')) {
          obj['bondType'] = _ApiClient["default"].convertToType(data['bondType'], 'String');
        }

        if (data.hasOwnProperty('debtType')) {
          obj['debtType'] = _ApiClient["default"].convertToType(data['debtType'], 'String');
        }

        if (data.hasOwnProperty('industryGroup')) {
          obj['industryGroup'] = _ApiClient["default"].convertToType(data['industryGroup'], 'String');
        }

        if (data.hasOwnProperty('industrySubGroup')) {
          obj['industrySubGroup'] = _ApiClient["default"].convertToType(data['industrySubGroup'], 'String');
        }

        if (data.hasOwnProperty('asset')) {
          obj['asset'] = _ApiClient["default"].convertToType(data['asset'], 'String');
        }

        if (data.hasOwnProperty('assetType')) {
          obj['assetType'] = _ApiClient["default"].convertToType(data['assetType'], 'String');
        }

        if (data.hasOwnProperty('datedDate')) {
          obj['datedDate'] = _ApiClient["default"].convertToType(data['datedDate'], 'String');
        }

        if (data.hasOwnProperty('firstCouponDate')) {
          obj['firstCouponDate'] = _ApiClient["default"].convertToType(data['firstCouponDate'], 'String');
        }

        if (data.hasOwnProperty('originalOffering')) {
          obj['originalOffering'] = _ApiClient["default"].convertToType(data['originalOffering'], 'Number');
        }

        if (data.hasOwnProperty('amountOutstanding')) {
          obj['amountOutstanding'] = _ApiClient["default"].convertToType(data['amountOutstanding'], 'Number');
        }

        if (data.hasOwnProperty('paymentFrequency')) {
          obj['paymentFrequency'] = _ApiClient["default"].convertToType(data['paymentFrequency'], 'String');
        }

        if (data.hasOwnProperty('securityLevel')) {
          obj['securityLevel'] = _ApiClient["default"].convertToType(data['securityLevel'], 'String');
        }

        if (data.hasOwnProperty('callable')) {
          obj['callable'] = _ApiClient["default"].convertToType(data['callable'], 'Boolean');
        }

        if (data.hasOwnProperty('couponType')) {
          obj['couponType'] = _ApiClient["default"].convertToType(data['couponType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BondProfile;
}();
/**
 * ISIN.
 * @member {String} isin
 */


BondProfile.prototype['isin'] = undefined;
/**
 * Cusip.
 * @member {String} cusip
 */

BondProfile.prototype['cusip'] = undefined;
/**
 * FIGI.
 * @member {String} figi
 */

BondProfile.prototype['figi'] = undefined;
/**
 * Coupon.
 * @member {Number} coupon
 */

BondProfile.prototype['coupon'] = undefined;
/**
 * Period.
 * @member {String} maturityDate
 */

BondProfile.prototype['maturityDate'] = undefined;
/**
 * Offering price.
 * @member {Number} offeringPrice
 */

BondProfile.prototype['offeringPrice'] = undefined;
/**
 * Issue date.
 * @member {String} issueDate
 */

BondProfile.prototype['issueDate'] = undefined;
/**
 * Bond type.
 * @member {String} bondType
 */

BondProfile.prototype['bondType'] = undefined;
/**
 * Bond type.
 * @member {String} debtType
 */

BondProfile.prototype['debtType'] = undefined;
/**
 * Industry.
 * @member {String} industryGroup
 */

BondProfile.prototype['industryGroup'] = undefined;
/**
 * Sub-Industry.
 * @member {String} industrySubGroup
 */

BondProfile.prototype['industrySubGroup'] = undefined;
/**
 * Asset.
 * @member {String} asset
 */

BondProfile.prototype['asset'] = undefined;
/**
 * Asset.
 * @member {String} assetType
 */

BondProfile.prototype['assetType'] = undefined;
/**
 * Dated date.
 * @member {String} datedDate
 */

BondProfile.prototype['datedDate'] = undefined;
/**
 * First coupon date.
 * @member {String} firstCouponDate
 */

BondProfile.prototype['firstCouponDate'] = undefined;
/**
 * Offering amount.
 * @member {Number} originalOffering
 */

BondProfile.prototype['originalOffering'] = undefined;
/**
 * Outstanding amount.
 * @member {Number} amountOutstanding
 */

BondProfile.prototype['amountOutstanding'] = undefined;
/**
 * Payment frequency.
 * @member {String} paymentFrequency
 */

BondProfile.prototype['paymentFrequency'] = undefined;
/**
 * Security level.
 * @member {String} securityLevel
 */

BondProfile.prototype['securityLevel'] = undefined;
/**
 * Callable.
 * @member {Boolean} callable
 */

BondProfile.prototype['callable'] = undefined;
/**
 * Coupon type.
 * @member {String} couponType
 */

BondProfile.prototype['couponType'] = undefined;
var _default = BondProfile;
exports["default"] = _default;