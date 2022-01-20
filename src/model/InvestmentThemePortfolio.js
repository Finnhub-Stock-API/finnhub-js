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
 * The InvestmentThemePortfolio model module.
 * @module model/InvestmentThemePortfolio
 * @version 1.2.10
 */
class InvestmentThemePortfolio {
    /**
     * Constructs a new <code>InvestmentThemePortfolio</code>.
     * @alias module:model/InvestmentThemePortfolio
     */
    constructor() { 
        
        InvestmentThemePortfolio.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvestmentThemePortfolio</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvestmentThemePortfolio} obj Optional instance to populate.
     * @return {module:model/InvestmentThemePortfolio} The populated <code>InvestmentThemePortfolio</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvestmentThemePortfolio();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Symbol
 * @member {String} symbol
 */
InvestmentThemePortfolio.prototype['symbol'] = undefined;






export default InvestmentThemePortfolio;

