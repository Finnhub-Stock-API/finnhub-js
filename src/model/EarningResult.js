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
 * The EarningResult model module.
 * @module model/EarningResult
 * @version 1.2.10
 */
class EarningResult {
    /**
     * Constructs a new <code>EarningResult</code>.
     * @alias module:model/EarningResult
     */
    constructor() { 
        
        EarningResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EarningResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EarningResult} obj Optional instance to populate.
     * @return {module:model/EarningResult} The populated <code>EarningResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EarningResult();

            if (data.hasOwnProperty('actual')) {
                obj['actual'] = ApiClient.convertToType(data['actual'], 'Number');
            }
            if (data.hasOwnProperty('estimate')) {
                obj['estimate'] = ApiClient.convertToType(data['estimate'], 'Number');
            }
            if (data.hasOwnProperty('surprise')) {
                obj['surprise'] = ApiClient.convertToType(data['surprise'], 'Number');
            }
            if (data.hasOwnProperty('surprisePercent')) {
                obj['surprisePercent'] = ApiClient.convertToType(data['surprisePercent'], 'Number');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Date');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Actual earning result.
 * @member {Number} actual
 */
EarningResult.prototype['actual'] = undefined;

/**
 * Estimated earning.
 * @member {Number} estimate
 */
EarningResult.prototype['estimate'] = undefined;

/**
 * Surprise - The difference between actual and estimate.
 * @member {Number} surprise
 */
EarningResult.prototype['surprise'] = undefined;

/**
 * Surprise percent.
 * @member {Number} surprisePercent
 */
EarningResult.prototype['surprisePercent'] = undefined;

/**
 * Reported period.
 * @member {Date} period
 */
EarningResult.prototype['period'] = undefined;

/**
 * Company symbol.
 * @member {String} symbol
 */
EarningResult.prototype['symbol'] = undefined;






export default EarningResult;

