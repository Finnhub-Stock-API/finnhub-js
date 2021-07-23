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
 * The Ownership model module.
 * @module model/Ownership
 * @version 1.2.2
 */
class Ownership {
    /**
     * Constructs a new <code>Ownership</code>.
     * @alias module:model/Ownership
     */
    constructor() { 
        
        Ownership.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Ownership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Ownership} obj Optional instance to populate.
     * @return {module:model/Ownership} The populated <code>Ownership</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Ownership();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('ownership')) {
                obj['ownership'] = ApiClient.convertToType(data['ownership'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * Symbol of the company.
 * @member {String} symbol
 */
Ownership.prototype['symbol'] = undefined;

/**
 * Array of investors with detailed information about their holdings.
 * @member {Array.<Object>} ownership
 */
Ownership.prototype['ownership'] = undefined;






export default Ownership;

