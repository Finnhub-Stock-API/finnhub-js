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
 * The CompanyESG2 model module.
 * @module model/CompanyESG2
 * @version 1.2.19
 */
class CompanyESG2 {
    /**
     * Constructs a new <code>CompanyESG2</code>.
     * @alias module:model/CompanyESG2
     */
    constructor() { 
        
        CompanyESG2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyESG2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyESG2} obj Optional instance to populate.
     * @return {module:model/CompanyESG2} The populated <code>CompanyESG2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyESG2();

            if (data.hasOwnProperty('totalESGScore')) {
                obj['totalESGScore'] = ApiClient.convertToType(data['totalESGScore'], 'Number');
            }
            if (data.hasOwnProperty('environmentScore')) {
                obj['environmentScore'] = ApiClient.convertToType(data['environmentScore'], 'Number');
            }
            if (data.hasOwnProperty('governanceScore')) {
                obj['governanceScore'] = ApiClient.convertToType(data['governanceScore'], 'Number');
            }
            if (data.hasOwnProperty('socialScore')) {
                obj['socialScore'] = ApiClient.convertToType(data['socialScore'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Total ESG Score
 * @member {Number} totalESGScore
 */
CompanyESG2.prototype['totalESGScore'] = undefined;

/**
 * Environment Score
 * @member {Number} environmentScore
 */
CompanyESG2.prototype['environmentScore'] = undefined;

/**
 * Governance Score
 * @member {Number} governanceScore
 */
CompanyESG2.prototype['governanceScore'] = undefined;

/**
 * Social Score
 * @member {Number} socialScore
 */
CompanyESG2.prototype['socialScore'] = undefined;

/**
 * @member {Object} data
 */
CompanyESG2.prototype['data'] = undefined;

/**
 * Period
 * @member {String} period
 */
CompanyESG2.prototype['period'] = undefined;






export default CompanyESG2;
