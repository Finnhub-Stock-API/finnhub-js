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
 * The FilingResponse model module.
 * @module model/FilingResponse
 * @version 1.2.19
 */
var FilingResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FilingResponse</code>.
   * @alias module:model/FilingResponse
   */
  function FilingResponse() {
    _classCallCheck(this, FilingResponse);

    FilingResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FilingResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FilingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilingResponse} obj Optional instance to populate.
     * @return {module:model/FilingResponse} The populated <code>FilingResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FilingResponse();

        if (data.hasOwnProperty('filingId')) {
          obj['filingId'] = _ApiClient["default"].convertToType(data['filingId'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('filerId')) {
          obj['filerId'] = _ApiClient["default"].convertToType(data['filerId'], 'String');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], Object);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('acceptanceDate')) {
          obj['acceptanceDate'] = _ApiClient["default"].convertToType(data['acceptanceDate'], 'String');
        }

        if (data.hasOwnProperty('filedDate')) {
          obj['filedDate'] = _ApiClient["default"].convertToType(data['filedDate'], 'String');
        }

        if (data.hasOwnProperty('reportDate')) {
          obj['reportDate'] = _ApiClient["default"].convertToType(data['reportDate'], 'String');
        }

        if (data.hasOwnProperty('form')) {
          obj['form'] = _ApiClient["default"].convertToType(data['form'], 'String');
        }

        if (data.hasOwnProperty('amend')) {
          obj['amend'] = _ApiClient["default"].convertToType(data['amend'], 'Boolean');
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient["default"].convertToType(data['source'], 'String');
        }

        if (data.hasOwnProperty('pageCount')) {
          obj['pageCount'] = _ApiClient["default"].convertToType(data['pageCount'], 'Number');
        }

        if (data.hasOwnProperty('documentCount')) {
          obj['documentCount'] = _ApiClient["default"].convertToType(data['documentCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return FilingResponse;
}();
/**
 * Filing Id in Alpharesearch platform
 * @member {String} filingId
 */


FilingResponse.prototype['filingId'] = undefined;
/**
 * Filing title
 * @member {String} title
 */

FilingResponse.prototype['title'] = undefined;
/**
 * Id of the entity submitted the filing
 * @member {String} filerId
 */

FilingResponse.prototype['filerId'] = undefined;
/**
 * List of symbol associate with this filing
 * @member {Object} symbol
 */

FilingResponse.prototype['symbol'] = undefined;
/**
 * Filer name
 * @member {String} name
 */

FilingResponse.prototype['name'] = undefined;
/**
 * Date the filing is submitted.
 * @member {String} acceptanceDate
 */

FilingResponse.prototype['acceptanceDate'] = undefined;
/**
 * Date the filing is made available to the public
 * @member {String} filedDate
 */

FilingResponse.prototype['filedDate'] = undefined;
/**
 * Date as which the filing is reported
 * @member {String} reportDate
 */

FilingResponse.prototype['reportDate'] = undefined;
/**
 * Filing Form
 * @member {String} form
 */

FilingResponse.prototype['form'] = undefined;
/**
 * Amendment
 * @member {Boolean} amend
 */

FilingResponse.prototype['amend'] = undefined;
/**
 * Filing Source
 * @member {String} source
 */

FilingResponse.prototype['source'] = undefined;
/**
 * Estimate number of page when printing
 * @member {Number} pageCount
 */

FilingResponse.prototype['pageCount'] = undefined;
/**
 * Number of document in this filing
 * @member {Number} documentCount
 */

FilingResponse.prototype['documentCount'] = undefined;
var _default = FilingResponse;
exports["default"] = _default;