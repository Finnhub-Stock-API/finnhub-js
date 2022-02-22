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
import Company from './Company';

/**
 * The CompanyExecutive model module.
 * @module model/CompanyExecutive
 * @version 1.2.11
 */
class CompanyExecutive {
    /**
     * Constructs a new <code>CompanyExecutive</code>.
     * @alias module:model/CompanyExecutive
     */
    constructor() { 
        
        CompanyExecutive.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyExecutive</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyExecutive} obj Optional instance to populate.
     * @return {module:model/CompanyExecutive} The populated <code>CompanyExecutive</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyExecutive();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('executive')) {
                obj['executive'] = ApiClient.convertToType(data['executive'], [Company]);
            }
        }
        return obj;
    }


}

/**
 * Company symbol.
 * @member {String} symbol
 */
CompanyExecutive.prototype['symbol'] = undefined;

/**
 * Array of company's executives and members of the Board.
 * @member {Array.<module:model/Company>} executive
 */
CompanyExecutive.prototype['executive'] = undefined;






export default CompanyExecutive;

