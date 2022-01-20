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
import Report from './Report';

/**
 * The FinancialsAsReported model module.
 * @module model/FinancialsAsReported
 * @version 1.2.10
 */
class FinancialsAsReported {
    /**
     * Constructs a new <code>FinancialsAsReported</code>.
     * @alias module:model/FinancialsAsReported
     */
    constructor() { 
        
        FinancialsAsReported.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FinancialsAsReported</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FinancialsAsReported} obj Optional instance to populate.
     * @return {module:model/FinancialsAsReported} The populated <code>FinancialsAsReported</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FinancialsAsReported();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('cik')) {
                obj['cik'] = ApiClient.convertToType(data['cik'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Report]);
            }
        }
        return obj;
    }


}

/**
 * Symbol
 * @member {String} symbol
 */
FinancialsAsReported.prototype['symbol'] = undefined;

/**
 * CIK
 * @member {String} cik
 */
FinancialsAsReported.prototype['cik'] = undefined;

/**
 * Array of filings.
 * @member {Array.<module:model/Report>} data
 */
FinancialsAsReported.prototype['data'] = undefined;






export default FinancialsAsReported;

