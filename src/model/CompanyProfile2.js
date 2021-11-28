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
 * The CompanyProfile2 model module.
 * @module model/CompanyProfile2
 * @version 1.2.8
 */
class CompanyProfile2 {
    /**
     * Constructs a new <code>CompanyProfile2</code>.
     * @alias module:model/CompanyProfile2
     */
    constructor() { 
        
        CompanyProfile2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyProfile2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyProfile2} obj Optional instance to populate.
     * @return {module:model/CompanyProfile2} The populated <code>CompanyProfile2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyProfile2();

            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('exchange')) {
                obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('ticker')) {
                obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
            }
            if (data.hasOwnProperty('ipo')) {
                obj['ipo'] = ApiClient.convertToType(data['ipo'], 'Date');
            }
            if (data.hasOwnProperty('marketCapitalization')) {
                obj['marketCapitalization'] = ApiClient.convertToType(data['marketCapitalization'], 'Number');
            }
            if (data.hasOwnProperty('shareOutstanding')) {
                obj['shareOutstanding'] = ApiClient.convertToType(data['shareOutstanding'], 'Number');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('weburl')) {
                obj['weburl'] = ApiClient.convertToType(data['weburl'], 'String');
            }
            if (data.hasOwnProperty('finnhubIndustry')) {
                obj['finnhubIndustry'] = ApiClient.convertToType(data['finnhubIndustry'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Country of company's headquarter.
 * @member {String} country
 */
CompanyProfile2.prototype['country'] = undefined;

/**
 * Currency used in company filings.
 * @member {String} currency
 */
CompanyProfile2.prototype['currency'] = undefined;

/**
 * Listed exchange.
 * @member {String} exchange
 */
CompanyProfile2.prototype['exchange'] = undefined;

/**
 * Company name.
 * @member {String} name
 */
CompanyProfile2.prototype['name'] = undefined;

/**
 * Company symbol/ticker as used on the listed exchange.
 * @member {String} ticker
 */
CompanyProfile2.prototype['ticker'] = undefined;

/**
 * IPO date.
 * @member {Date} ipo
 */
CompanyProfile2.prototype['ipo'] = undefined;

/**
 * Market Capitalization.
 * @member {Number} marketCapitalization
 */
CompanyProfile2.prototype['marketCapitalization'] = undefined;

/**
 * Number of oustanding shares.
 * @member {Number} shareOutstanding
 */
CompanyProfile2.prototype['shareOutstanding'] = undefined;

/**
 * Logo image.
 * @member {String} logo
 */
CompanyProfile2.prototype['logo'] = undefined;

/**
 * Company phone number.
 * @member {String} phone
 */
CompanyProfile2.prototype['phone'] = undefined;

/**
 * Company website.
 * @member {String} weburl
 */
CompanyProfile2.prototype['weburl'] = undefined;

/**
 * Finnhub industry classification.
 * @member {String} finnhubIndustry
 */
CompanyProfile2.prototype['finnhubIndustry'] = undefined;






export default CompanyProfile2;

