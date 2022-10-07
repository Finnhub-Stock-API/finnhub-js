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
 * The CompanyNewsStatistics model module.
 * @module model/CompanyNewsStatistics
 * @version 1.2.16
 */
var CompanyNewsStatistics = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CompanyNewsStatistics</code>.
   * @alias module:model/CompanyNewsStatistics
   */
  function CompanyNewsStatistics() {
    _classCallCheck(this, CompanyNewsStatistics);

    CompanyNewsStatistics.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CompanyNewsStatistics, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CompanyNewsStatistics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyNewsStatistics} obj Optional instance to populate.
     * @return {module:model/CompanyNewsStatistics} The populated <code>CompanyNewsStatistics</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CompanyNewsStatistics();

        if (data.hasOwnProperty('articlesInLastWeek')) {
          obj['articlesInLastWeek'] = _ApiClient["default"].convertToType(data['articlesInLastWeek'], 'Number');
        }

        if (data.hasOwnProperty('buzz')) {
          obj['buzz'] = _ApiClient["default"].convertToType(data['buzz'], 'Number');
        }

        if (data.hasOwnProperty('weeklyAverage')) {
          obj['weeklyAverage'] = _ApiClient["default"].convertToType(data['weeklyAverage'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CompanyNewsStatistics;
}();
/**
 * 
 * @member {Number} articlesInLastWeek
 */


CompanyNewsStatistics.prototype['articlesInLastWeek'] = undefined;
/**
 * 
 * @member {Number} buzz
 */

CompanyNewsStatistics.prototype['buzz'] = undefined;
/**
 * 
 * @member {Number} weeklyAverage
 */

CompanyNewsStatistics.prototype['weeklyAverage'] = undefined;
var _default = CompanyNewsStatistics;
exports["default"] = _default;