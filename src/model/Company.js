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
 * The Company model module.
 * @module model/Company
 * @version 1.2.10
 */
class Company {
    /**
     * Constructs a new <code>Company</code>.
     * @alias module:model/Company
     */
    constructor() { 
        
        Company.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Company</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Company} obj Optional instance to populate.
     * @return {module:model/Company} The populated <code>Company</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Company();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('age')) {
                obj['age'] = ApiClient.convertToType(data['age'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('since')) {
                obj['since'] = ApiClient.convertToType(data['since'], 'String');
            }
            if (data.hasOwnProperty('sex')) {
                obj['sex'] = ApiClient.convertToType(data['sex'], 'String');
            }
            if (data.hasOwnProperty('compensation')) {
                obj['compensation'] = ApiClient.convertToType(data['compensation'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Executive name
 * @member {String} name
 */
Company.prototype['name'] = undefined;

/**
 * Age
 * @member {Number} age
 */
Company.prototype['age'] = undefined;

/**
 * Title
 * @member {String} title
 */
Company.prototype['title'] = undefined;

/**
 * Year appointed
 * @member {String} since
 */
Company.prototype['since'] = undefined;

/**
 * Sex
 * @member {String} sex
 */
Company.prototype['sex'] = undefined;

/**
 * Total compensation
 * @member {Number} compensation
 */
Company.prototype['compensation'] = undefined;

/**
 * Compensation currency
 * @member {String} currency
 */
Company.prototype['currency'] = undefined;






export default Company;

