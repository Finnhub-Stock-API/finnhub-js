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
 * The Dividends2Info model module.
 * @module model/Dividends2Info
 * @version 1.2.10
 */
class Dividends2Info {
    /**
     * Constructs a new <code>Dividends2Info</code>.
     * @alias module:model/Dividends2Info
     */
    constructor() { 
        
        Dividends2Info.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Dividends2Info</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Dividends2Info} obj Optional instance to populate.
     * @return {module:model/Dividends2Info} The populated <code>Dividends2Info</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Dividends2Info();

            if (data.hasOwnProperty('exDate')) {
                obj['exDate'] = ApiClient.convertToType(data['exDate'], 'Date');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Ex-Dividend date.
 * @member {Date} exDate
 */
Dividends2Info.prototype['exDate'] = undefined;

/**
 * Amount in local currency.
 * @member {Number} amount
 */
Dividends2Info.prototype['amount'] = undefined;






export default Dividends2Info;

