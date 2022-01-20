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
import IndexHistoricalConstituent from './IndexHistoricalConstituent';

/**
 * The IndicesHistoricalConstituents model module.
 * @module model/IndicesHistoricalConstituents
 * @version 1.2.10
 */
class IndicesHistoricalConstituents {
    /**
     * Constructs a new <code>IndicesHistoricalConstituents</code>.
     * @alias module:model/IndicesHistoricalConstituents
     */
    constructor() { 
        
        IndicesHistoricalConstituents.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IndicesHistoricalConstituents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IndicesHistoricalConstituents} obj Optional instance to populate.
     * @return {module:model/IndicesHistoricalConstituents} The populated <code>IndicesHistoricalConstituents</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IndicesHistoricalConstituents();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('historicalConstituents')) {
                obj['historicalConstituents'] = ApiClient.convertToType(data['historicalConstituents'], [IndexHistoricalConstituent]);
            }
        }
        return obj;
    }


}

/**
 * Index's symbol.
 * @member {String} symbol
 */
IndicesHistoricalConstituents.prototype['symbol'] = undefined;

/**
 * Array of historical constituents.
 * @member {Array.<module:model/IndexHistoricalConstituent>} historicalConstituents
 */
IndicesHistoricalConstituents.prototype['historicalConstituents'] = undefined;






export default IndicesHistoricalConstituents;

