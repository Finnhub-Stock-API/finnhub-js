"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilingResponse = _interopRequireDefault(require("./FilingResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SearchResponse model module.
 * @module model/SearchResponse
 * @version 1.2.19
 */
var SearchResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchResponse</code>.
   * @alias module:model/SearchResponse
   */
  function SearchResponse() {
    _classCallCheck(this, SearchResponse);

    SearchResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchResponse} obj Optional instance to populate.
     * @return {module:model/SearchResponse} The populated <code>SearchResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchResponse();

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }

        if (data.hasOwnProperty('took')) {
          obj['took'] = _ApiClient["default"].convertToType(data['took'], 'Number');
        }

        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'Number');
        }

        if (data.hasOwnProperty('filings')) {
          obj['filings'] = _ApiClient["default"].convertToType(data['filings'], [_FilingResponse["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SearchResponse;
}();
/**
 * Total filing matched your search criteria.
 * @member {Number} count
 */


SearchResponse.prototype['count'] = undefined;
/**
 * Time took to execute your search query on our server, value in ms.
 * @member {Number} took
 */

SearchResponse.prototype['took'] = undefined;
/**
 * Current search page
 * @member {Number} page
 */

SearchResponse.prototype['page'] = undefined;
/**
 * Filing match your search criteria.
 * @member {Array.<module:model/FilingResponse>} filings
 */

SearchResponse.prototype['filings'] = undefined;
var _default = SearchResponse;
exports["default"] = _default;