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
 * The Company model module.
 * @module model/Company
 * @version 1.2.19
 */
var Company = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Company</code>.
   * @alias module:model/Company
   */
  function Company() {
    _classCallCheck(this, Company);

    Company.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Company, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Company</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Company} obj Optional instance to populate.
     * @return {module:model/Company} The populated <code>Company</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Company();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('age')) {
          obj['age'] = _ApiClient["default"].convertToType(data['age'], 'Number');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('since')) {
          obj['since'] = _ApiClient["default"].convertToType(data['since'], 'String');
        }

        if (data.hasOwnProperty('sex')) {
          obj['sex'] = _ApiClient["default"].convertToType(data['sex'], 'String');
        }

        if (data.hasOwnProperty('compensation')) {
          obj['compensation'] = _ApiClient["default"].convertToType(data['compensation'], 'Number');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Company;
}();
/**
 * Executive name
 * @member {String} name
 */


Company.prototype['name'] = undefined;
/**
 * Age
 * @member {Number} age
 */

Company.prototype['age'] = undefined;
/**
 * Title
 * @member {String} title
 */

Company.prototype['title'] = undefined;
/**
 * Year first appointed as executive/director of the company
 * @member {String} since
 */

Company.prototype['since'] = undefined;
/**
 * Sex
 * @member {String} sex
 */

Company.prototype['sex'] = undefined;
/**
 * Total compensation
 * @member {Number} compensation
 */

Company.prototype['compensation'] = undefined;
/**
 * Compensation currency
 * @member {String} currency
 */

Company.prototype['currency'] = undefined;
var _default = Company;
exports["default"] = _default;