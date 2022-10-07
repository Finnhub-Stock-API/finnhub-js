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
import IsinChangeInfo from './IsinChangeInfo';

/**
 * The IsinChange model module.
 * @module model/IsinChange
 * @version 1.2.16
 */
class IsinChange {
    /**
     * Constructs a new <code>IsinChange</code>.
     * @alias module:model/IsinChange
     */
    constructor() { 
        
        IsinChange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IsinChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IsinChange} obj Optional instance to populate.
     * @return {module:model/IsinChange} The populated <code>IsinChange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IsinChange();

            if (data.hasOwnProperty('fromDate')) {
                obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'String');
            }
            if (data.hasOwnProperty('toDate')) {
                obj['toDate'] = ApiClient.convertToType(data['toDate'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [IsinChangeInfo]);
            }
        }
        return obj;
    }


}

/**
 * From date.
 * @member {String} fromDate
 */
IsinChange.prototype['fromDate'] = undefined;

/**
 * To date.
 * @member {String} toDate
 */
IsinChange.prototype['toDate'] = undefined;

/**
 * Array of ISIN change events.
 * @member {Array.<module:model/IsinChangeInfo>} data
 */
IsinChange.prototype['data'] = undefined;






export default IsinChange;
