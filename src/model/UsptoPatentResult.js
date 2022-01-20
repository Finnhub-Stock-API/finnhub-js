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
import UsptoPatent from './UsptoPatent';

/**
 * The UsptoPatentResult model module.
 * @module model/UsptoPatentResult
 * @version 1.2.10
 */
class UsptoPatentResult {
    /**
     * Constructs a new <code>UsptoPatentResult</code>.
     * @alias module:model/UsptoPatentResult
     */
    constructor() { 
        
        UsptoPatentResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UsptoPatentResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsptoPatentResult} obj Optional instance to populate.
     * @return {module:model/UsptoPatentResult} The populated <code>UsptoPatentResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsptoPatentResult();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [UsptoPatent]);
            }
        }
        return obj;
    }


}

/**
 * Symbol.
 * @member {String} symbol
 */
UsptoPatentResult.prototype['symbol'] = undefined;

/**
 * Array of patents.
 * @member {Array.<module:model/UsptoPatent>} data
 */
UsptoPatentResult.prototype['data'] = undefined;






export default UsptoPatentResult;

