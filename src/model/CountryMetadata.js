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
 * The CountryMetadata model module.
 * @module model/CountryMetadata
 * @version 1.1.7
 */
class CountryMetadata {
    /**
     * Constructs a new <code>CountryMetadata</code>.
     * @alias module:model/CountryMetadata
     */
    constructor() { 
        
        CountryMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CountryMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CountryMetadata} obj Optional instance to populate.
     * @return {module:model/CountryMetadata} The populated <code>CountryMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CountryMetadata();

            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('code2')) {
                obj['code2'] = ApiClient.convertToType(data['code2'], 'String');
            }
            if (data.hasOwnProperty('code3')) {
                obj['code3'] = ApiClient.convertToType(data['code3'], 'String');
            }
            if (data.hasOwnProperty('codeNo')) {
                obj['codeNo'] = ApiClient.convertToType(data['codeNo'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Country name
 * @member {String} country
 */
CountryMetadata.prototype['country'] = undefined;

/**
 * Alpha 2 code
 * @member {String} code2
 */
CountryMetadata.prototype['code2'] = undefined;

/**
 * Alpha 3 code
 * @member {String} code3
 */
CountryMetadata.prototype['code3'] = undefined;

/**
 * UN code
 * @member {String} codeNo
 */
CountryMetadata.prototype['codeNo'] = undefined;

/**
 * Currency name
 * @member {String} currency
 */
CountryMetadata.prototype['currency'] = undefined;

/**
 * Currency code
 * @member {String} currencyCode
 */
CountryMetadata.prototype['currencyCode'] = undefined;






export default CountryMetadata;

