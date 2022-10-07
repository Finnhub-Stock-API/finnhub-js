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
 * The CompanyESG model module.
 * @module model/CompanyESG
 * @version 1.2.16
 */
var CompanyESG = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CompanyESG</code>.
   * @alias module:model/CompanyESG
   */
  function CompanyESG() {
    _classCallCheck(this, CompanyESG);

    CompanyESG.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CompanyESG, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CompanyESG</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyESG} obj Optional instance to populate.
     * @return {module:model/CompanyESG} The populated <code>CompanyESG</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CompanyESG();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

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
      }

      return obj;
    }
  }]);

  return CompanyESG;
}();
/**
 * symbol
 * @member {String} symbol
 */


CompanyESG.prototype['symbol'] = undefined;
/**
 * Total ESG Score
 * @member {Number} totalESGScore
 */

CompanyESG.prototype['totalESGScore'] = undefined;
/**
 * Environment Score
 * @member {Number} environmentScore
 */

CompanyESG.prototype['environmentScore'] = undefined;
/**
 * Governance Score
 * @member {Number} governanceScore
 */

CompanyESG.prototype['governanceScore'] = undefined;
/**
 * Social Score
 * @member {Number} socialScore
 */

CompanyESG.prototype['socialScore'] = undefined;
/**
 * @member {Object} data
 */

CompanyESG.prototype['data'] = undefined;
var _default = CompanyESG;
exports["default"] = _default;