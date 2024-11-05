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
 * The InFilingSearchBody model module.
 * @module model/InFilingSearchBody
 * @version 1.2.19
 */
var InFilingSearchBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InFilingSearchBody</code>.
   * @alias module:model/InFilingSearchBody
   * @param query {String} Search query
   * @param filingId {String} Filing Id to search
   */
  function InFilingSearchBody(query, filingId) {
    _classCallCheck(this, InFilingSearchBody);

    InFilingSearchBody.initialize(this, query, filingId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InFilingSearchBody, null, [{
    key: "initialize",
    value: function initialize(obj, query, filingId) {
      obj['query'] = query;
      obj['filingId'] = filingId;
    }
    /**
     * Constructs a <code>InFilingSearchBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InFilingSearchBody} obj Optional instance to populate.
     * @return {module:model/InFilingSearchBody} The populated <code>InFilingSearchBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InFilingSearchBody();

        if (data.hasOwnProperty('query')) {
          obj['query'] = _ApiClient["default"].convertToType(data['query'], 'String');
        }

        if (data.hasOwnProperty('filingId')) {
          obj['filingId'] = _ApiClient["default"].convertToType(data['filingId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InFilingSearchBody;
}();
/**
 * Search query
 * @member {String} query
 */


InFilingSearchBody.prototype['query'] = undefined;
/**
 * Filing Id to search
 * @member {String} filingId
 */

InFilingSearchBody.prototype['filingId'] = undefined;
var _default = InFilingSearchBody;
exports["default"] = _default;