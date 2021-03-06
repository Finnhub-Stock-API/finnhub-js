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
 * The ETFHoldingsData model module.
 * @module model/ETFHoldingsData
 * @version 1.2.1
 */
class ETFHoldingsData {
    /**
     * Constructs a new <code>ETFHoldingsData</code>.
     * @alias module:model/ETFHoldingsData
     */
    constructor() { 
        
        ETFHoldingsData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ETFHoldingsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ETFHoldingsData} obj Optional instance to populate.
     * @return {module:model/ETFHoldingsData} The populated <code>ETFHoldingsData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ETFHoldingsData();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('share')) {
                obj['share'] = ApiClient.convertToType(data['share'], 'Number');
            }
            if (data.hasOwnProperty('percent')) {
                obj['percent'] = ApiClient.convertToType(data['percent'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Symbol description
 * @member {String} symbol
 */
ETFHoldingsData.prototype['symbol'] = undefined;

/**
 * Number of shares owned by the ETF.
 * @member {Number} share
 */
ETFHoldingsData.prototype['share'] = undefined;

/**
 * Portfolio's percent
 * @member {Number} percent
 */
ETFHoldingsData.prototype['percent'] = undefined;






export default ETFHoldingsData;

