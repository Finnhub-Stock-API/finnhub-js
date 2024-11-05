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
 * The InternationalFiling model module.
 * @module model/InternationalFiling
 * @version 1.2.19
 */
var InternationalFiling = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InternationalFiling</code>.
   * @alias module:model/InternationalFiling
   */
  function InternationalFiling() {
    _classCallCheck(this, InternationalFiling);

    InternationalFiling.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InternationalFiling, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InternationalFiling</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InternationalFiling} obj Optional instance to populate.
     * @return {module:model/InternationalFiling} The populated <code>InternationalFiling</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InternationalFiling();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('companyName')) {
          obj['companyName'] = _ApiClient["default"].convertToType(data['companyName'], 'String');
        }

        if (data.hasOwnProperty('filedDate')) {
          obj['filedDate'] = _ApiClient["default"].convertToType(data['filedDate'], 'String');
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InternationalFiling;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


InternationalFiling.prototype['symbol'] = undefined;
/**
 * Company name.
 * @member {String} companyName
 */

InternationalFiling.prototype['companyName'] = undefined;
/**
 * Filed date <code>%Y-%m-%d %H:%M:%S</code>.
 * @member {String} filedDate
 */

InternationalFiling.prototype['filedDate'] = undefined;
/**
 * Category.
 * @member {String} category
 */

InternationalFiling.prototype['category'] = undefined;
/**
 * Document's title.
 * @member {String} title
 */

InternationalFiling.prototype['title'] = undefined;
/**
 * Document's description.
 * @member {String} description
 */

InternationalFiling.prototype['description'] = undefined;
/**
 * Url.
 * @member {String} url
 */

InternationalFiling.prototype['url'] = undefined;
/**
 * Language.
 * @member {String} language
 */

InternationalFiling.prototype['language'] = undefined;
/**
 * Country.
 * @member {String} country
 */

InternationalFiling.prototype['country'] = undefined;
var _default = InternationalFiling;
exports["default"] = _default;