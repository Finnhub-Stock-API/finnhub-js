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
 * The CompanyESG2 model module.
 * @module model/CompanyESG2
 * @version 1.2.19
 */
var CompanyESG2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CompanyESG2</code>.
   * @alias module:model/CompanyESG2
   */
  function CompanyESG2() {
    _classCallCheck(this, CompanyESG2);

    CompanyESG2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CompanyESG2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CompanyESG2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyESG2} obj Optional instance to populate.
     * @return {module:model/CompanyESG2} The populated <code>CompanyESG2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CompanyESG2();

        if (data.hasOwnProperty('totalESGScore')) {
          obj['totalESGScore'] = _ApiClient["default"].convertToType(data['totalESGScore'], 'Number');
        }

        if (data.hasOwnProperty('environmentScore')) {
          obj['environmentScore'] = _ApiClient["default"].convertToType(data['environmentScore'], 'Number');
        }

        if (data.hasOwnProperty('governanceScore')) {
          obj['governanceScore'] = _ApiClient["default"].convertToType(data['governanceScore'], 'Number');
        }

        if (data.hasOwnProperty('socialScore')) {
          obj['socialScore'] = _ApiClient["default"].convertToType(data['socialScore'], 'Number');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], Object);
        }

        if (data.hasOwnProperty('period')) {
          obj['period'] = _ApiClient["default"].convertToType(data['period'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CompanyESG2;
}();
/**
 * Total ESG Score
 * @member {Number} totalESGScore
 */


CompanyESG2.prototype['totalESGScore'] = undefined;
/**
 * Environment Score
 * @member {Number} environmentScore
 */

CompanyESG2.prototype['environmentScore'] = undefined;
/**
 * Governance Score
 * @member {Number} governanceScore
 */

CompanyESG2.prototype['governanceScore'] = undefined;
/**
 * Social Score
 * @member {Number} socialScore
 */

CompanyESG2.prototype['socialScore'] = undefined;
/**
 * @member {Object} data
 */

CompanyESG2.prototype['data'] = undefined;
/**
 * Period
 * @member {String} period
 */

CompanyESG2.prototype['period'] = undefined;
var _default = CompanyESG2;
exports["default"] = _default;