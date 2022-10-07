/**
 * Finnhub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BondProfile model module.
 * @module model/BondProfile
 * @version 1.2.16
 */
class BondProfile {
    /**
     * Constructs a new <code>BondProfile</code>.
     * @alias module:model/BondProfile
     */
    constructor() { 
        
        BondProfile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BondProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BondProfile} obj Optional instance to populate.
     * @return {module:model/BondProfile} The populated <code>BondProfile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BondProfile();

            if (data.hasOwnProperty('isin')) {
                obj['isin'] = ApiClient.convertToType(data['isin'], 'String');
            }
            if (data.hasOwnProperty('cusip')) {
                obj['cusip'] = ApiClient.convertToType(data['cusip'], 'String');
            }
            if (data.hasOwnProperty('figi')) {
                obj['figi'] = ApiClient.convertToType(data['figi'], 'String');
            }
            if (data.hasOwnProperty('coupon')) {
                obj['coupon'] = ApiClient.convertToType(data['coupon'], 'Number');
            }
            if (data.hasOwnProperty('maturityDate')) {
                obj['maturityDate'] = ApiClient.convertToType(data['maturityDate'], 'String');
            }
            if (data.hasOwnProperty('offeringPrice')) {
                obj['offeringPrice'] = ApiClient.convertToType(data['offeringPrice'], 'Number');
            }
            if (data.hasOwnProperty('issueDate')) {
                obj['issueDate'] = ApiClient.convertToType(data['issueDate'], 'String');
            }
            if (data.hasOwnProperty('bondType')) {
                obj['bondType'] = ApiClient.convertToType(data['bondType'], 'String');
            }
            if (data.hasOwnProperty('debtType')) {
                obj['debtType'] = ApiClient.convertToType(data['debtType'], 'String');
            }
            if (data.hasOwnProperty('industryGroup')) {
                obj['industryGroup'] = ApiClient.convertToType(data['industryGroup'], 'String');
            }
            if (data.hasOwnProperty('industrySubGroup')) {
                obj['industrySubGroup'] = ApiClient.convertToType(data['industrySubGroup'], 'String');
            }
            if (data.hasOwnProperty('asset')) {
                obj['asset'] = ApiClient.convertToType(data['asset'], 'String');
            }
            if (data.hasOwnProperty('assetType')) {
                obj['assetType'] = ApiClient.convertToType(data['assetType'], 'String');
            }
            if (data.hasOwnProperty('datedDate')) {
                obj['datedDate'] = ApiClient.convertToType(data['datedDate'], 'String');
            }
            if (data.hasOwnProperty('firstCouponDate')) {
                obj['firstCouponDate'] = ApiClient.convertToType(data['firstCouponDate'], 'String');
            }
            if (data.hasOwnProperty('originalOffering')) {
                obj['originalOffering'] = ApiClient.convertToType(data['originalOffering'], 'Number');
            }
            if (data.hasOwnProperty('amountOutstanding')) {
                obj['amountOutstanding'] = ApiClient.convertToType(data['amountOutstanding'], 'Number');
            }
            if (data.hasOwnProperty('paymentFrequency')) {
                obj['paymentFrequency'] = ApiClient.convertToType(data['paymentFrequency'], 'String');
            }
            if (data.hasOwnProperty('securityLevel')) {
                obj['securityLevel'] = ApiClient.convertToType(data['securityLevel'], 'String');
            }
            if (data.hasOwnProperty('callable')) {
                obj['callable'] = ApiClient.convertToType(data['callable'], 'Boolean');
            }
            if (data.hasOwnProperty('couponType')) {
                obj['couponType'] = ApiClient.convertToType(data['couponType'], 'String');
            }
        }
        return obj;
    }


}

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






export default BondProfile;
