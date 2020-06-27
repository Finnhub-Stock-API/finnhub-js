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
 * The Dividends model module.
 * @module model/Dividends
 * @version 1.1.7
 */
class Dividends {
    /**
     * Constructs a new <code>Dividends</code>.
     * @alias module:model/Dividends
     */
    constructor() { 
        
        Dividends.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Dividends</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Dividends} obj Optional instance to populate.
     * @return {module:model/Dividends} The populated <code>Dividends</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Dividends();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('adjustedAmount')) {
                obj['adjustedAmount'] = ApiClient.convertToType(data['adjustedAmount'], 'Number');
            }
            if (data.hasOwnProperty('payDate')) {
                obj['payDate'] = ApiClient.convertToType(data['payDate'], 'Date');
            }
            if (data.hasOwnProperty('recordDate')) {
                obj['recordDate'] = ApiClient.convertToType(data['recordDate'], 'Date');
            }
            if (data.hasOwnProperty('declarationDate')) {
                obj['declarationDate'] = ApiClient.convertToType(data['declarationDate'], 'Date');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Symbol.
 * @member {String} symbol
 */
Dividends.prototype['symbol'] = undefined;

/**
 * Ex-Dividend date.
 * @member {Date} date
 */
Dividends.prototype['date'] = undefined;

/**
 * Amount in local currency.
 * @member {Number} amount
 */
Dividends.prototype['amount'] = undefined;

/**
 * Adjusted dividend.
 * @member {Number} adjustedAmount
 */
Dividends.prototype['adjustedAmount'] = undefined;

/**
 * Pay date.
 * @member {Date} payDate
 */
Dividends.prototype['payDate'] = undefined;

/**
 * Record date.
 * @member {Date} recordDate
 */
Dividends.prototype['recordDate'] = undefined;

/**
 * Declaration date.
 * @member {Date} declarationDate
 */
Dividends.prototype['declarationDate'] = undefined;

/**
 * Currency.
 * @member {String} currency
 */
Dividends.prototype['currency'] = undefined;






export default Dividends;

