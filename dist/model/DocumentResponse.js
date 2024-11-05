"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ExcerptResponse = _interopRequireDefault(require("./ExcerptResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DocumentResponse model module.
 * @module model/DocumentResponse
 * @version 1.2.19
 */
var DocumentResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DocumentResponse</code>.
   * @alias module:model/DocumentResponse
   */
  function DocumentResponse() {
    _classCallCheck(this, DocumentResponse);

    DocumentResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DocumentResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentResponse} obj Optional instance to populate.
     * @return {module:model/DocumentResponse} The populated <code>DocumentResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DocumentResponse();

        if (data.hasOwnProperty('documentId')) {
          obj['documentId'] = _ApiClient["default"].convertToType(data['documentId'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('hits')) {
          obj['hits'] = _ApiClient["default"].convertToType(data['hits'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('excerpts')) {
          obj['excerpts'] = _ApiClient["default"].convertToType(data['excerpts'], [_ExcerptResponse["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DocumentResponse;
}();
/**
 * AlphaResearch internal document id.
 * @member {String} documentId
 */


DocumentResponse.prototype['documentId'] = undefined;
/**
 * Title for this document.
 * @member {String} title
 */

DocumentResponse.prototype['title'] = undefined;
/**
 * Number of hit in this document
 * @member {String} hits
 */

DocumentResponse.prototype['hits'] = undefined;
/**
 * Link to render this document
 * @member {String} url
 */

DocumentResponse.prototype['url'] = undefined;
/**
 * Format of this document (can be html or pdf)
 * @member {String} format
 */

DocumentResponse.prototype['format'] = undefined;
/**
 * Highlighted excerpts for this document
 * @member {Array.<module:model/ExcerptResponse>} excerpts
 */

DocumentResponse.prototype['excerpts'] = undefined;
var _default = DocumentResponse;
exports["default"] = _default;