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
import ExcerptResponse from './ExcerptResponse';

/**
 * The DocumentResponse model module.
 * @module model/DocumentResponse
 * @version 1.2.19
 */
class DocumentResponse {
    /**
     * Constructs a new <code>DocumentResponse</code>.
     * @alias module:model/DocumentResponse
     */
    constructor() { 
        
        DocumentResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentResponse} obj Optional instance to populate.
     * @return {module:model/DocumentResponse} The populated <code>DocumentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentResponse();

            if (data.hasOwnProperty('documentId')) {
                obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('hits')) {
                obj['hits'] = ApiClient.convertToType(data['hits'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('excerpts')) {
                obj['excerpts'] = ApiClient.convertToType(data['excerpts'], [ExcerptResponse]);
            }
        }
        return obj;
    }


}

/**
 * AlphaResearch internal document id.
 * @member {String} documentId
 */
DocumentResponse.prototype['documentId'] = undefined;

/**
 * Title for this document.
 * @member {String} title
 */
DocumentResponse.prototype['title'] = undefined;

/**
 * Number of hit in this document
 * @member {String} hits
 */
DocumentResponse.prototype['hits'] = undefined;

/**
 * Link to render this document
 * @member {String} url
 */
DocumentResponse.prototype['url'] = undefined;

/**
 * Format of this document (can be html or pdf)
 * @member {String} format
 */
DocumentResponse.prototype['format'] = undefined;

/**
 * Highlighted excerpts for this document
 * @member {Array.<module:model/ExcerptResponse>} excerpts
 */
DocumentResponse.prototype['excerpts'] = undefined;






export default DocumentResponse;
