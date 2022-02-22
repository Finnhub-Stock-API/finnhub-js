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
 * The EarningRelease model module.
 * @module model/EarningRelease
 * @version 1.2.11
 */
class EarningRelease {
    /**
     * Constructs a new <code>EarningRelease</code>.
     * @alias module:model/EarningRelease
     */
    constructor() { 
        
        EarningRelease.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EarningRelease</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EarningRelease} obj Optional instance to populate.
     * @return {module:model/EarningRelease} The populated <code>EarningRelease</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EarningRelease();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('hour')) {
                obj['hour'] = ApiClient.convertToType(data['hour'], 'String');
            }
            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Number');
            }
            if (data.hasOwnProperty('quarter')) {
                obj['quarter'] = ApiClient.convertToType(data['quarter'], 'Number');
            }
            if (data.hasOwnProperty('epsEstimate')) {
                obj['epsEstimate'] = ApiClient.convertToType(data['epsEstimate'], 'Number');
            }
            if (data.hasOwnProperty('epsActual')) {
                obj['epsActual'] = ApiClient.convertToType(data['epsActual'], 'Number');
            }
            if (data.hasOwnProperty('revenueEstimate')) {
                obj['revenueEstimate'] = ApiClient.convertToType(data['revenueEstimate'], 'Number');
            }
            if (data.hasOwnProperty('revenueActual')) {
                obj['revenueActual'] = ApiClient.convertToType(data['revenueActual'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Symbol.
 * @member {String} symbol
 */
EarningRelease.prototype['symbol'] = undefined;

/**
 * Date.
 * @member {Date} date
 */
EarningRelease.prototype['date'] = undefined;

/**
 * Indicates whether the earnings is announced before market open(<code>bmo</code>), after market close(<code>amc</code>), or during market hour(<code>dmh</code>).
 * @member {String} hour
 */
EarningRelease.prototype['hour'] = undefined;

/**
 * Earnings year.
 * @member {Number} year
 */
EarningRelease.prototype['year'] = undefined;

/**
 * Earnings quarter.
 * @member {Number} quarter
 */
EarningRelease.prototype['quarter'] = undefined;

/**
 * EPS estimate.
 * @member {Number} epsEstimate
 */
EarningRelease.prototype['epsEstimate'] = undefined;

/**
 * EPS actual.
 * @member {Number} epsActual
 */
EarningRelease.prototype['epsActual'] = undefined;

/**
 * Revenue estimate including Finnhub's proprietary estimates.
 * @member {Number} revenueEstimate
 */
EarningRelease.prototype['revenueEstimate'] = undefined;

/**
 * Revenue actual.
 * @member {Number} revenueActual
 */
EarningRelease.prototype['revenueActual'] = undefined;






export default EarningRelease;

