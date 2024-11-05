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
 * The TranscriptContent model module.
 * @module model/TranscriptContent
 * @version 1.2.19
 */
var TranscriptContent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TranscriptContent</code>.
   * @alias module:model/TranscriptContent
   */
  function TranscriptContent() {
    _classCallCheck(this, TranscriptContent);

    TranscriptContent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TranscriptContent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TranscriptContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TranscriptContent} obj Optional instance to populate.
     * @return {module:model/TranscriptContent} The populated <code>TranscriptContent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TranscriptContent();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('speech')) {
          obj['speech'] = _ApiClient["default"].convertToType(data['speech'], ['String']);
        }

        if (data.hasOwnProperty('session')) {
          obj['session'] = _ApiClient["default"].convertToType(data['session'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TranscriptContent;
}();
/**
 * Speaker's name
 * @member {String} name
 */


TranscriptContent.prototype['name'] = undefined;
/**
 * Speaker's speech
 * @member {Array.<String>} speech
 */

TranscriptContent.prototype['speech'] = undefined;
/**
 * Earnings calls section (management discussion or Q&A)
 * @member {String} session
 */

TranscriptContent.prototype['session'] = undefined;
var _default = TranscriptContent;
exports["default"] = _default;