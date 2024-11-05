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
 * The SearchBody model module.
 * @module model/SearchBody
 * @version 1.2.19
 */
var SearchBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchBody</code>.
   * @alias module:model/SearchBody
   * @param query {String} Search query
   */
  function SearchBody(query) {
    _classCallCheck(this, SearchBody);

    SearchBody.initialize(this, query);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchBody, null, [{
    key: "initialize",
    value: function initialize(obj, query) {
      obj['query'] = query;
    }
    /**
     * Constructs a <code>SearchBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchBody} obj Optional instance to populate.
     * @return {module:model/SearchBody} The populated <code>SearchBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchBody();

        if (data.hasOwnProperty('query')) {
          obj['query'] = _ApiClient["default"].convertToType(data['query'], 'String');
        }

        if (data.hasOwnProperty('isins')) {
          obj['isins'] = _ApiClient["default"].convertToType(data['isins'], 'String');
        }

        if (data.hasOwnProperty('cusips')) {
          obj['cusips'] = _ApiClient["default"].convertToType(data['cusips'], 'String');
        }

        if (data.hasOwnProperty('ciks')) {
          obj['ciks'] = _ApiClient["default"].convertToType(data['ciks'], 'String');
        }

        if (data.hasOwnProperty('sedarIds')) {
          obj['sedarIds'] = _ApiClient["default"].convertToType(data['sedarIds'], 'String');
        }

        if (data.hasOwnProperty('chIds')) {
          obj['chIds'] = _ApiClient["default"].convertToType(data['chIds'], 'String');
        }

        if (data.hasOwnProperty('symbols')) {
          obj['symbols'] = _ApiClient["default"].convertToType(data['symbols'], 'String');
        }

        if (data.hasOwnProperty('sedols')) {
          obj['sedols'] = _ApiClient["default"].convertToType(data['sedols'], 'String');
        }

        if (data.hasOwnProperty('sources')) {
          obj['sources'] = _ApiClient["default"].convertToType(data['sources'], 'String');
        }

        if (data.hasOwnProperty('forms')) {
          obj['forms'] = _ApiClient["default"].convertToType(data['forms'], 'String');
        }

        if (data.hasOwnProperty('gics')) {
          obj['gics'] = _ApiClient["default"].convertToType(data['gics'], 'String');
        }

        if (data.hasOwnProperty('naics')) {
          obj['naics'] = _ApiClient["default"].convertToType(data['naics'], 'String');
        }

        if (data.hasOwnProperty('exhibits')) {
          obj['exhibits'] = _ApiClient["default"].convertToType(data['exhibits'], 'String');
        }

        if (data.hasOwnProperty('exchanges')) {
          obj['exchanges'] = _ApiClient["default"].convertToType(data['exchanges'], 'String');
        }

        if (data.hasOwnProperty('countries')) {
          obj['countries'] = _ApiClient["default"].convertToType(data['countries'], 'String');
        }

        if (data.hasOwnProperty('acts')) {
          obj['acts'] = _ApiClient["default"].convertToType(data['acts'], 'String');
        }

        if (data.hasOwnProperty('caps')) {
          obj['caps'] = _ApiClient["default"].convertToType(data['caps'], 'String');
        }

        if (data.hasOwnProperty('fromDate')) {
          obj['fromDate'] = _ApiClient["default"].convertToType(data['fromDate'], 'String');
        }

        if (data.hasOwnProperty('toDate')) {
          obj['toDate'] = _ApiClient["default"].convertToType(data['toDate'], 'String');
        }

        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'String');
        }

        if (data.hasOwnProperty('sort')) {
          obj['sort'] = _ApiClient["default"].convertToType(data['sort'], 'String');
        }

        if (data.hasOwnProperty('highlighted')) {
          obj['highlighted'] = _ApiClient["default"].convertToType(data['highlighted'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SearchBody;
}();
/**
 * Search query
 * @member {String} query
 */


SearchBody.prototype['query'] = undefined;
/**
 * List of isin to search, comma separated (Max: 50).
 * @member {String} isins
 */

SearchBody.prototype['isins'] = undefined;
/**
 * List of cusip to search, comma separated (Max: 50).
 * @member {String} cusips
 */

SearchBody.prototype['cusips'] = undefined;
/**
 * List of SEC Center Index Key to search, comma separated (Max: 50).
 * @member {String} ciks
 */

SearchBody.prototype['ciks'] = undefined;
/**
 * List of SEDAR issuer number to search, comma separated (Max: 50).
 * @member {String} sedarIds
 */

SearchBody.prototype['sedarIds'] = undefined;
/**
 * List of Companies House number to search, comma separated (Max: 50).
 * @member {String} chIds
 */

SearchBody.prototype['chIds'] = undefined;
/**
 * List of symbols to search, comma separated (Max: 50).
 * @member {String} symbols
 */

SearchBody.prototype['symbols'] = undefined;
/**
 * List of sedols to search, comma separated (Max: 50).
 * @member {String} sedols
 */

SearchBody.prototype['sedols'] = undefined;
/**
 * List of sources to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} sources
 */

SearchBody.prototype['sources'] = undefined;
/**
 * List of forms to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} forms
 */

SearchBody.prototype['forms'] = undefined;
/**
 * List of gics to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} gics
 */

SearchBody.prototype['gics'] = undefined;
/**
 * List of sources to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} naics
 */

SearchBody.prototype['naics'] = undefined;
/**
 * List of exhibits to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} exhibits
 */

SearchBody.prototype['exhibits'] = undefined;
/**
 * List of exchanges to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} exchanges
 */

SearchBody.prototype['exchanges'] = undefined;
/**
 * List of sources to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} countries
 */

SearchBody.prototype['countries'] = undefined;
/**
 * List of SEC's exchanges act to search, comma separated. Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} acts
 */

SearchBody.prototype['acts'] = undefined;
/**
 * List of market capitalization to search, comma separated. Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} caps
 */

SearchBody.prototype['caps'] = undefined;
/**
 * Search from date in format: YYYY-MM-DD, default from the last 2 years
 * @member {String} fromDate
 */

SearchBody.prototype['fromDate'] = undefined;
/**
 * Search to date in format: YYYY-MM-DD, default to today
 * @member {String} toDate
 */

SearchBody.prototype['toDate'] = undefined;
/**
 * Use for pagination, default to page 1
 * @member {String} page
 */

SearchBody.prototype['page'] = undefined;
/**
 * Sort result by, default: sortMostRecent. Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} sort
 */

SearchBody.prototype['sort'] = undefined;
/**
 * Enable highlight in returned filings. If enabled, only return 10 results each time
 * @member {Boolean} highlighted
 */

SearchBody.prototype['highlighted'] = undefined;
var _default = SearchBody;
exports["default"] = _default;