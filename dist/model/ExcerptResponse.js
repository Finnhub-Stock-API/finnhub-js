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
 * The ExcerptResponse model module.
 * @module model/ExcerptResponse
 * @version 1.2.19
 */
var ExcerptResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExcerptResponse</code>.
   * @alias module:model/ExcerptResponse
   */
  function ExcerptResponse() {
    _classCallCheck(this, ExcerptResponse);

    ExcerptResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExcerptResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ExcerptResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExcerptResponse} obj Optional instance to populate.
     * @return {module:model/ExcerptResponse} The populated <code>ExcerptResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExcerptResponse();

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('snippetId')) {
          obj['snippetId'] = _ApiClient["default"].convertToType(data['snippetId'], 'String');
        }

        if (data.hasOwnProperty('startOffset')) {
          obj['startOffset'] = _ApiClient["default"].convertToType(data['startOffset'], 'String');
        }

        if (data.hasOwnProperty('endOffset')) {
          obj['endOffset'] = _ApiClient["default"].convertToType(data['endOffset'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ExcerptResponse;
}();
/**
 * Highlighted content
 * @member {String} content
 */


ExcerptResponse.prototype['content'] = undefined;
/**
 * Location of the content in the rendered document
 * @member {String} snippetId
 */

ExcerptResponse.prototype['snippetId'] = undefined;
/**
 * Start offset of highlighted content
 * @member {String} startOffset
 */

ExcerptResponse.prototype['startOffset'] = undefined;
/**
 * End offset of highlighted content
 * @member {String} endOffset
 */

ExcerptResponse.prototype['endOffset'] = undefined;
var _default = ExcerptResponse;
exports["default"] = _default;