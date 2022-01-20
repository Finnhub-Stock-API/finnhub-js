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
 * The StockSymbol model module.
 * @module model/StockSymbol
 * @version 1.2.10
 */
class StockSymbol {
    /**
     * Constructs a new <code>StockSymbol</code>.
     * @alias module:model/StockSymbol
     */
    constructor() { 
        
        StockSymbol.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockSymbol</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockSymbol} obj Optional instance to populate.
     * @return {module:model/StockSymbol} The populated <code>StockSymbol</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockSymbol();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('displaySymbol')) {
                obj['displaySymbol'] = ApiClient.convertToType(data['displaySymbol'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('mic')) {
                obj['mic'] = ApiClient.convertToType(data['mic'], 'String');
            }
            if (data.hasOwnProperty('figi')) {
                obj['figi'] = ApiClient.convertToType(data['figi'], 'String');
            }
            if (data.hasOwnProperty('shareClassFIGI')) {
                obj['shareClassFIGI'] = ApiClient.convertToType(data['shareClassFIGI'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('symbol2')) {
                obj['symbol2'] = ApiClient.convertToType(data['symbol2'], 'String');
            }
            if (data.hasOwnProperty('isin')) {
                obj['isin'] = ApiClient.convertToType(data['isin'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Symbol description
 * @member {String} description
 */
StockSymbol.prototype['description'] = undefined;

/**
 * Display symbol name.
 * @member {String} displaySymbol
 */
StockSymbol.prototype['displaySymbol'] = undefined;

/**
 * Unique symbol used to identify this symbol used in <code>/stock/candle</code> endpoint.
 * @member {String} symbol
 */
StockSymbol.prototype['symbol'] = undefined;

/**
 * Security type.
 * @member {String} type
 */
StockSymbol.prototype['type'] = undefined;

/**
 * Primary exchange's MIC.
 * @member {String} mic
 */
StockSymbol.prototype['mic'] = undefined;

/**
 * FIGI identifier.
 * @member {String} figi
 */
StockSymbol.prototype['figi'] = undefined;

/**
 * Global Share Class FIGI.
 * @member {String} shareClassFIGI
 */
StockSymbol.prototype['shareClassFIGI'] = undefined;

/**
 * Price's currency. This might be different from the reporting currency of fundamental data.
 * @member {String} currency
 */
StockSymbol.prototype['currency'] = undefined;

/**
 * Alternative ticker for exchanges with multiple tickers for 1 stock such as BSE.
 * @member {String} symbol2
 */
StockSymbol.prototype['symbol2'] = undefined;

/**
 * ISIN. This field is only available for EU stocks and selected Asian markets. Entitlement from Finnhub is required to access this field.
 * @member {String} isin
 */
StockSymbol.prototype['isin'] = undefined;






export default StockSymbol;

