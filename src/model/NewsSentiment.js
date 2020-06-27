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
import CompanyNewsStatistics from './CompanyNewsStatistics';
import Sentiment from './Sentiment';

/**
 * The NewsSentiment model module.
 * @module model/NewsSentiment
 * @version 1.1.7
 */
class NewsSentiment {
    /**
     * Constructs a new <code>NewsSentiment</code>.
     * @alias module:model/NewsSentiment
     */
    constructor() { 
        
        NewsSentiment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewsSentiment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewsSentiment} obj Optional instance to populate.
     * @return {module:model/NewsSentiment} The populated <code>NewsSentiment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewsSentiment();

            if (data.hasOwnProperty('buzz')) {
                obj['buzz'] = CompanyNewsStatistics.constructFromObject(data['buzz']);
            }
            if (data.hasOwnProperty('companyNewsScore')) {
                obj['companyNewsScore'] = ApiClient.convertToType(data['companyNewsScore'], 'Number');
            }
            if (data.hasOwnProperty('sectorAverageBullishPercent')) {
                obj['sectorAverageBullishPercent'] = ApiClient.convertToType(data['sectorAverageBullishPercent'], 'Number');
            }
            if (data.hasOwnProperty('sectorAverageNewsScore')) {
                obj['sectorAverageNewsScore'] = ApiClient.convertToType(data['sectorAverageNewsScore'], 'Number');
            }
            if (data.hasOwnProperty('sentiment')) {
                obj['sentiment'] = Sentiment.constructFromObject(data['sentiment']);
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CompanyNewsStatistics} buzz
 */
NewsSentiment.prototype['buzz'] = undefined;

/**
 * News score.
 * @member {Number} companyNewsScore
 */
NewsSentiment.prototype['companyNewsScore'] = undefined;

/**
 * Sector average bullish percent.
 * @member {Number} sectorAverageBullishPercent
 */
NewsSentiment.prototype['sectorAverageBullishPercent'] = undefined;

/**
 * Sectore average score.
 * @member {Number} sectorAverageNewsScore
 */
NewsSentiment.prototype['sectorAverageNewsScore'] = undefined;

/**
 * @member {module:model/Sentiment} sentiment
 */
NewsSentiment.prototype['sentiment'] = undefined;

/**
 * Requested symbol.
 * @member {String} symbol
 */
NewsSentiment.prototype['symbol'] = undefined;






export default NewsSentiment;

