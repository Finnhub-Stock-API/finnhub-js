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
 * The CompanyEarningsQualityScoreData model module.
 * @module model/CompanyEarningsQualityScoreData
 * @version 1.2.16
 */
var CompanyEarningsQualityScoreData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CompanyEarningsQualityScoreData</code>.
   * @alias module:model/CompanyEarningsQualityScoreData
   */
  function CompanyEarningsQualityScoreData() {
    _classCallCheck(this, CompanyEarningsQualityScoreData);

    CompanyEarningsQualityScoreData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CompanyEarningsQualityScoreData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CompanyEarningsQualityScoreData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyEarningsQualityScoreData} obj Optional instance to populate.
     * @return {module:model/CompanyEarningsQualityScoreData} The populated <code>CompanyEarningsQualityScoreData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CompanyEarningsQualityScoreData();

        if (data.hasOwnProperty('period')) {
          obj['period'] = _ApiClient["default"].convertToType(data['period'], 'String');
        }

        if (data.hasOwnProperty('growth')) {
          obj['growth'] = _ApiClient["default"].convertToType(data['growth'], 'Number');
        }

        if (data.hasOwnProperty('profitability')) {
          obj['profitability'] = _ApiClient["default"].convertToType(data['profitability'], 'Number');
        }

        if (data.hasOwnProperty('cashGenerationCapitalAllocation')) {
          obj['cashGenerationCapitalAllocation'] = _ApiClient["default"].convertToType(data['cashGenerationCapitalAllocation'], 'Number');
        }

        if (data.hasOwnProperty('leverage')) {
          obj['leverage'] = _ApiClient["default"].convertToType(data['leverage'], 'Number');
        }

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }

        if (data.hasOwnProperty('letterScore')) {
          obj['letterScore'] = _ApiClient["default"].convertToType(data['letterScore'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CompanyEarningsQualityScoreData;
}();
/**
 * Period
 * @member {String} period
 */


CompanyEarningsQualityScoreData.prototype['period'] = undefined;
/**
 * Growth Score
 * @member {Number} growth
 */

CompanyEarningsQualityScoreData.prototype['growth'] = undefined;
/**
 * Profitability Score
 * @member {Number} profitability
 */

CompanyEarningsQualityScoreData.prototype['profitability'] = undefined;
/**
 * Cash Generation and Capital Allocation
 * @member {Number} cashGenerationCapitalAllocation
 */

CompanyEarningsQualityScoreData.prototype['cashGenerationCapitalAllocation'] = undefined;
/**
 * Leverage Score
 * @member {Number} leverage
 */

CompanyEarningsQualityScoreData.prototype['leverage'] = undefined;
/**
 * Total Score
 * @member {Number} score
 */

CompanyEarningsQualityScoreData.prototype['score'] = undefined;
/**
 * Letter Score
 * @member {String} letterScore
 */

CompanyEarningsQualityScoreData.prototype['letterScore'] = undefined;
var _default = CompanyEarningsQualityScoreData;
exports["default"] = _default;