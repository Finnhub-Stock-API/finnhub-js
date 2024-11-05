"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CompanyEarningsQualityScoreData = _interopRequireDefault(require("./CompanyEarningsQualityScoreData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CompanyEarningsQualityScore model module.
 * @module model/CompanyEarningsQualityScore
 * @version 1.2.19
 */
var CompanyEarningsQualityScore = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CompanyEarningsQualityScore</code>.
   * @alias module:model/CompanyEarningsQualityScore
   */
  function CompanyEarningsQualityScore() {
    _classCallCheck(this, CompanyEarningsQualityScore);

    CompanyEarningsQualityScore.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CompanyEarningsQualityScore, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CompanyEarningsQualityScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyEarningsQualityScore} obj Optional instance to populate.
     * @return {module:model/CompanyEarningsQualityScore} The populated <code>CompanyEarningsQualityScore</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CompanyEarningsQualityScore();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('freq')) {
          obj['freq'] = _ApiClient["default"].convertToType(data['freq'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_CompanyEarningsQualityScoreData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CompanyEarningsQualityScore;
}();
/**
 * Symbol
 * @member {String} symbol
 */


CompanyEarningsQualityScore.prototype['symbol'] = undefined;
/**
 * Frequency
 * @member {String} freq
 */

CompanyEarningsQualityScore.prototype['freq'] = undefined;
/**
 * Array of earnings quality score.
 * @member {Array.<module:model/CompanyEarningsQualityScoreData>} data
 */

CompanyEarningsQualityScore.prototype['data'] = undefined;
var _default = CompanyEarningsQualityScore;
exports["default"] = _default;