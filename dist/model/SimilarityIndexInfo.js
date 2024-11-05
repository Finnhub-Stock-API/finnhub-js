"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SimilarityIndexInfo model module.
 * @module model/SimilarityIndexInfo
 * @version 1.2.19
 */
var SimilarityIndexInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SimilarityIndexInfo</code>.
   * @alias module:model/SimilarityIndexInfo
   */
  function SimilarityIndexInfo() {
    _classCallCheck(this, SimilarityIndexInfo);

    SimilarityIndexInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SimilarityIndexInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SimilarityIndexInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimilarityIndexInfo} obj Optional instance to populate.
     * @return {module:model/SimilarityIndexInfo} The populated <code>SimilarityIndexInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SimilarityIndexInfo();

        if (data.hasOwnProperty('cik')) {
          obj['cik'] = _ApiClient["default"].convertToType(data['cik'], 'String');
        }

        if (data.hasOwnProperty('item1')) {
          obj['item1'] = _ApiClient["default"].convertToType(data['item1'], 'Number');
        }

        if (data.hasOwnProperty('item1a')) {
          obj['item1a'] = _ApiClient["default"].convertToType(data['item1a'], 'Number');
        }

        if (data.hasOwnProperty('item2')) {
          obj['item2'] = _ApiClient["default"].convertToType(data['item2'], 'Number');
        }

        if (data.hasOwnProperty('item7')) {
          obj['item7'] = _ApiClient["default"].convertToType(data['item7'], 'Number');
        }

        if (data.hasOwnProperty('item7a')) {
          obj['item7a'] = _ApiClient["default"].convertToType(data['item7a'], 'Number');
        }

        if (data.hasOwnProperty('accessNumber')) {
          obj['accessNumber'] = _ApiClient["default"].convertToType(data['accessNumber'], 'String');
        }

        if (data.hasOwnProperty('form')) {
          obj['form'] = _ApiClient["default"].convertToType(data['form'], 'String');
        }

        if (data.hasOwnProperty('filedDate')) {
          obj['filedDate'] = _ApiClient["default"].convertToType(data['filedDate'], 'String');
        }

        if (data.hasOwnProperty('acceptedDate')) {
          obj['acceptedDate'] = _ApiClient["default"].convertToType(data['acceptedDate'], 'String');
        }

        if (data.hasOwnProperty('reportUrl')) {
          obj['reportUrl'] = _ApiClient["default"].convertToType(data['reportUrl'], 'String');
        }

        if (data.hasOwnProperty('filingUrl')) {
          obj['filingUrl'] = _ApiClient["default"].convertToType(data['filingUrl'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SimilarityIndexInfo;
}();
/**
 * CIK.
 * @member {String} cik
 */


SimilarityIndexInfo.prototype['cik'] = undefined;
/**
 * Cosine similarity of Item 1 (Business). This number is only available for Annual reports.
 * @member {Number} item1
 */

SimilarityIndexInfo.prototype['item1'] = undefined;
/**
 * Cosine similarity of Item 1A (Risk Factors). This number is available for both Annual and Quarterly reports.
 * @member {Number} item1a
 */

SimilarityIndexInfo.prototype['item1a'] = undefined;
/**
 * Cosine similarity of Item 2 (Management’s Discussion and Analysis of Financial Condition and Results of Operations). This number is only available for Quarterly reports.
 * @member {Number} item2
 */

SimilarityIndexInfo.prototype['item2'] = undefined;
/**
 * Cosine similarity of Item 7 (Management’s Discussion and Analysis of Financial Condition and Results of Operations). This number is only available for Annual reports.
 * @member {Number} item7
 */

SimilarityIndexInfo.prototype['item7'] = undefined;
/**
 * Cosine similarity of Item 7A (Quantitative and Qualitative Disclosures About Market Risk). This number is only available for Annual reports.
 * @member {Number} item7a
 */

SimilarityIndexInfo.prototype['item7a'] = undefined;
/**
 * Access number.
 * @member {String} accessNumber
 */

SimilarityIndexInfo.prototype['accessNumber'] = undefined;
/**
 * Form type.
 * @member {String} form
 */

SimilarityIndexInfo.prototype['form'] = undefined;
/**
 * Filed date <code>%Y-%m-%d %H:%M:%S</code>.
 * @member {String} filedDate
 */

SimilarityIndexInfo.prototype['filedDate'] = undefined;
/**
 * Accepted date <code>%Y-%m-%d %H:%M:%S</code>.
 * @member {String} acceptedDate
 */

SimilarityIndexInfo.prototype['acceptedDate'] = undefined;
/**
 * Report's URL.
 * @member {String} reportUrl
 */

SimilarityIndexInfo.prototype['reportUrl'] = undefined;
/**
 * Filing's URL.
 * @member {String} filingUrl
 */

SimilarityIndexInfo.prototype['filingUrl'] = undefined;
var _default = SimilarityIndexInfo;
exports["default"] = _default;