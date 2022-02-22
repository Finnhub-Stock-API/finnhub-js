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
 * The FilingSentiment model module.
 * @module model/FilingSentiment
 * @version 1.2.11
 */
class FilingSentiment {
    /**
     * Constructs a new <code>FilingSentiment</code>.
     * @alias module:model/FilingSentiment
     */
    constructor() { 
        
        FilingSentiment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FilingSentiment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilingSentiment} obj Optional instance to populate.
     * @return {module:model/FilingSentiment} The populated <code>FilingSentiment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilingSentiment();

            if (data.hasOwnProperty('negative')) {
                obj['negative'] = ApiClient.convertToType(data['negative'], 'Number');
            }
            if (data.hasOwnProperty('positive')) {
                obj['positive'] = ApiClient.convertToType(data['positive'], 'Number');
            }
            if (data.hasOwnProperty('polarity')) {
                obj['polarity'] = ApiClient.convertToType(data['polarity'], 'Number');
            }
            if (data.hasOwnProperty('litigious')) {
                obj['litigious'] = ApiClient.convertToType(data['litigious'], 'Number');
            }
            if (data.hasOwnProperty('uncertainty')) {
                obj['uncertainty'] = ApiClient.convertToType(data['uncertainty'], 'Number');
            }
            if (data.hasOwnProperty('constraining')) {
                obj['constraining'] = ApiClient.convertToType(data['constraining'], 'Number');
            }
            if (data.hasOwnProperty('modal-weak')) {
                obj['modal-weak'] = ApiClient.convertToType(data['modal-weak'], 'Number');
            }
            if (data.hasOwnProperty('modal-strong')) {
                obj['modal-strong'] = ApiClient.convertToType(data['modal-strong'], 'Number');
            }
            if (data.hasOwnProperty('modal-moderate')) {
                obj['modal-moderate'] = ApiClient.convertToType(data['modal-moderate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * % of negative words in the filing.
 * @member {Number} negative
 */
FilingSentiment.prototype['negative'] = undefined;

/**
 * % of positive words in the filing.
 * @member {Number} positive
 */
FilingSentiment.prototype['positive'] = undefined;

/**
 * % of polarity words in the filing.
 * @member {Number} polarity
 */
FilingSentiment.prototype['polarity'] = undefined;

/**
 * % of litigious words in the filing.
 * @member {Number} litigious
 */
FilingSentiment.prototype['litigious'] = undefined;

/**
 * % of uncertainty words in the filing.
 * @member {Number} uncertainty
 */
FilingSentiment.prototype['uncertainty'] = undefined;

/**
 * % of constraining words in the filing.
 * @member {Number} constraining
 */
FilingSentiment.prototype['constraining'] = undefined;

/**
 * % of modal-weak words in the filing.
 * @member {Number} modal-weak
 */
FilingSentiment.prototype['modal-weak'] = undefined;

/**
 * % of modal-strong words in the filing.
 * @member {Number} modal-strong
 */
FilingSentiment.prototype['modal-strong'] = undefined;

/**
 * % of modal-moderate words in the filing.
 * @member {Number} modal-moderate
 */
FilingSentiment.prototype['modal-moderate'] = undefined;






export default FilingSentiment;

