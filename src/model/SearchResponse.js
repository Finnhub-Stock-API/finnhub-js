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
import FilingResponse from './FilingResponse';

/**
 * The SearchResponse model module.
 * @module model/SearchResponse
 * @version 1.2.19
 */
class SearchResponse {
    /**
     * Constructs a new <code>SearchResponse</code>.
     * @alias module:model/SearchResponse
     */
    constructor() { 
        
        SearchResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchResponse} obj Optional instance to populate.
     * @return {module:model/SearchResponse} The populated <code>SearchResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchResponse();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('took')) {
                obj['took'] = ApiClient.convertToType(data['took'], 'Number');
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('filings')) {
                obj['filings'] = ApiClient.convertToType(data['filings'], [FilingResponse]);
            }
        }
        return obj;
    }


}

/**
 * Total filing matched your search criteria.
 * @member {Number} count
 */
SearchResponse.prototype['count'] = undefined;

/**
 * Time took to execute your search query on our server, value in ms.
 * @member {Number} took
 */
SearchResponse.prototype['took'] = undefined;

/**
 * Current search page
 * @member {Number} page
 */
SearchResponse.prototype['page'] = undefined;

/**
 * Filing match your search criteria.
 * @member {Array.<module:model/FilingResponse>} filings
 */
SearchResponse.prototype['filings'] = undefined;






export default SearchResponse;
