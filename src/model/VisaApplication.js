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
 * The VisaApplication model module.
 * @module model/VisaApplication
 * @version 1.2.11
 */
class VisaApplication {
    /**
     * Constructs a new <code>VisaApplication</code>.
     * @alias module:model/VisaApplication
     */
    constructor() { 
        
        VisaApplication.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VisaApplication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VisaApplication} obj Optional instance to populate.
     * @return {module:model/VisaApplication} The populated <code>VisaApplication</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VisaApplication();

            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Number');
            }
            if (data.hasOwnProperty('quarter')) {
                obj['quarter'] = ApiClient.convertToType(data['quarter'], 'Number');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('caseNumber')) {
                obj['caseNumber'] = ApiClient.convertToType(data['caseNumber'], 'String');
            }
            if (data.hasOwnProperty('caseStatus')) {
                obj['caseStatus'] = ApiClient.convertToType(data['caseStatus'], 'String');
            }
            if (data.hasOwnProperty('receivedDate')) {
                obj['receivedDate'] = ApiClient.convertToType(data['receivedDate'], 'String');
            }
            if (data.hasOwnProperty('visaClass')) {
                obj['visaClass'] = ApiClient.convertToType(data['visaClass'], 'String');
            }
            if (data.hasOwnProperty('jobTitle')) {
                obj['jobTitle'] = ApiClient.convertToType(data['jobTitle'], 'String');
            }
            if (data.hasOwnProperty('socCode')) {
                obj['socCode'] = ApiClient.convertToType(data['socCode'], 'String');
            }
            if (data.hasOwnProperty('fullTimePosition')) {
                obj['fullTimePosition'] = ApiClient.convertToType(data['fullTimePosition'], 'String');
            }
            if (data.hasOwnProperty('beginDate')) {
                obj['beginDate'] = ApiClient.convertToType(data['beginDate'], 'String');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
            }
            if (data.hasOwnProperty('employerName')) {
                obj['employerName'] = ApiClient.convertToType(data['employerName'], 'String');
            }
            if (data.hasOwnProperty('worksiteAddress')) {
                obj['worksiteAddress'] = ApiClient.convertToType(data['worksiteAddress'], 'String');
            }
            if (data.hasOwnProperty('worksiteCity')) {
                obj['worksiteCity'] = ApiClient.convertToType(data['worksiteCity'], 'String');
            }
            if (data.hasOwnProperty('worksiteCounty')) {
                obj['worksiteCounty'] = ApiClient.convertToType(data['worksiteCounty'], 'String');
            }
            if (data.hasOwnProperty('worksiteState')) {
                obj['worksiteState'] = ApiClient.convertToType(data['worksiteState'], 'String');
            }
            if (data.hasOwnProperty('worksitePostalCode')) {
                obj['worksitePostalCode'] = ApiClient.convertToType(data['worksitePostalCode'], 'String');
            }
            if (data.hasOwnProperty('wageRangeFrom')) {
                obj['wageRangeFrom'] = ApiClient.convertToType(data['wageRangeFrom'], 'Number');
            }
            if (data.hasOwnProperty('wageRangeTo')) {
                obj['wageRangeTo'] = ApiClient.convertToType(data['wageRangeTo'], 'Number');
            }
            if (data.hasOwnProperty('waveUnitOfPay')) {
                obj['waveUnitOfPay'] = ApiClient.convertToType(data['waveUnitOfPay'], 'String');
            }
            if (data.hasOwnProperty('wageLevel')) {
                obj['wageLevel'] = ApiClient.convertToType(data['wageLevel'], 'String');
            }
            if (data.hasOwnProperty('h1bDependent')) {
                obj['h1bDependent'] = ApiClient.convertToType(data['h1bDependent'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Year.
 * @member {Number} year
 */
VisaApplication.prototype['year'] = undefined;

/**
 * Quarter.
 * @member {Number} quarter
 */
VisaApplication.prototype['quarter'] = undefined;

/**
 * Symbol.
 * @member {String} symbol
 */
VisaApplication.prototype['symbol'] = undefined;

/**
 * Case number.
 * @member {String} caseNumber
 */
VisaApplication.prototype['caseNumber'] = undefined;

/**
 * Case status.
 * @member {String} caseStatus
 */
VisaApplication.prototype['caseStatus'] = undefined;

/**
 * Received date.
 * @member {String} receivedDate
 */
VisaApplication.prototype['receivedDate'] = undefined;

/**
 * Visa class.
 * @member {String} visaClass
 */
VisaApplication.prototype['visaClass'] = undefined;

/**
 * Job Title.
 * @member {String} jobTitle
 */
VisaApplication.prototype['jobTitle'] = undefined;

/**
 * SOC Code. A list of SOC code can be found <a href=\"https://www.bls.gov/oes/current/oes_stru.htm\" target=\"_blank\">here</a>.
 * @member {String} socCode
 */
VisaApplication.prototype['socCode'] = undefined;

/**
 * Full-time position flag.
 * @member {String} fullTimePosition
 */
VisaApplication.prototype['fullTimePosition'] = undefined;

/**
 * Job's start date.
 * @member {String} beginDate
 */
VisaApplication.prototype['beginDate'] = undefined;

/**
 * Job's end date.
 * @member {String} endDate
 */
VisaApplication.prototype['endDate'] = undefined;

/**
 * Company's name.
 * @member {String} employerName
 */
VisaApplication.prototype['employerName'] = undefined;

/**
 * Worksite address.
 * @member {String} worksiteAddress
 */
VisaApplication.prototype['worksiteAddress'] = undefined;

/**
 * Worksite city.
 * @member {String} worksiteCity
 */
VisaApplication.prototype['worksiteCity'] = undefined;

/**
 * Worksite county.
 * @member {String} worksiteCounty
 */
VisaApplication.prototype['worksiteCounty'] = undefined;

/**
 * Worksite state.
 * @member {String} worksiteState
 */
VisaApplication.prototype['worksiteState'] = undefined;

/**
 * Worksite postal code.
 * @member {String} worksitePostalCode
 */
VisaApplication.prototype['worksitePostalCode'] = undefined;

/**
 * Wage range from.
 * @member {Number} wageRangeFrom
 */
VisaApplication.prototype['wageRangeFrom'] = undefined;

/**
 * Wage range to.
 * @member {Number} wageRangeTo
 */
VisaApplication.prototype['wageRangeTo'] = undefined;

/**
 * Wage unit of pay.
 * @member {String} waveUnitOfPay
 */
VisaApplication.prototype['waveUnitOfPay'] = undefined;

/**
 * Wage level.
 * @member {String} wageLevel
 */
VisaApplication.prototype['wageLevel'] = undefined;

/**
 * H1B dependent flag.
 * @member {String} h1bDependent
 */
VisaApplication.prototype['h1bDependent'] = undefined;






export default VisaApplication;

