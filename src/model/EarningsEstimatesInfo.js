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
 * The EarningsEstimatesInfo model module.
 * @module model/EarningsEstimatesInfo
 * @version 1.2.11
 */
class EarningsEstimatesInfo {
    /**
     * Constructs a new <code>EarningsEstimatesInfo</code>.
     * @alias module:model/EarningsEstimatesInfo
     */
    constructor() { 
        
        EarningsEstimatesInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EarningsEstimatesInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EarningsEstimatesInfo} obj Optional instance to populate.
     * @return {module:model/EarningsEstimatesInfo} The populated <code>EarningsEstimatesInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EarningsEstimatesInfo();

            if (data.hasOwnProperty('epsAvg')) {
                obj['epsAvg'] = ApiClient.convertToType(data['epsAvg'], 'Number');
            }
            if (data.hasOwnProperty('epsHigh')) {
                obj['epsHigh'] = ApiClient.convertToType(data['epsHigh'], 'Number');
            }
            if (data.hasOwnProperty('epsLow')) {
                obj['epsLow'] = ApiClient.convertToType(data['epsLow'], 'Number');
            }
            if (data.hasOwnProperty('numberAnalysts')) {
                obj['numberAnalysts'] = ApiClient.convertToType(data['numberAnalysts'], 'Number');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Average EPS estimates including Finnhub's proprietary estimates.
 * @member {Number} epsAvg
 */
EarningsEstimatesInfo.prototype['epsAvg'] = undefined;

/**
 * Highest estimate.
 * @member {Number} epsHigh
 */
EarningsEstimatesInfo.prototype['epsHigh'] = undefined;

/**
 * Lowest estimate.
 * @member {Number} epsLow
 */
EarningsEstimatesInfo.prototype['epsLow'] = undefined;

/**
 * Number of Analysts.
 * @member {Number} numberAnalysts
 */
EarningsEstimatesInfo.prototype['numberAnalysts'] = undefined;

/**
 * Period.
 * @member {Date} period
 */
EarningsEstimatesInfo.prototype['period'] = undefined;






export default EarningsEstimatesInfo;

