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
 * The TwitterSentimentContent model module.
 * @module model/TwitterSentimentContent
 * @version 1.2.16
 */
var TwitterSentimentContent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TwitterSentimentContent</code>.
   * @alias module:model/TwitterSentimentContent
   */
  function TwitterSentimentContent() {
    _classCallCheck(this, TwitterSentimentContent);

    TwitterSentimentContent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TwitterSentimentContent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TwitterSentimentContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TwitterSentimentContent} obj Optional instance to populate.
     * @return {module:model/TwitterSentimentContent} The populated <code>TwitterSentimentContent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TwitterSentimentContent();

        if (data.hasOwnProperty('mention')) {
          obj['mention'] = _ApiClient["default"].convertToType(data['mention'], 'Number');
        }

        if (data.hasOwnProperty('positiveMention')) {
          obj['positiveMention'] = _ApiClient["default"].convertToType(data['positiveMention'], 'Number');
        }

        if (data.hasOwnProperty('negativeMention')) {
          obj['negativeMention'] = _ApiClient["default"].convertToType(data['negativeMention'], 'Number');
        }

        if (data.hasOwnProperty('positiveScore')) {
          obj['positiveScore'] = _ApiClient["default"].convertToType(data['positiveScore'], 'Number');
        }

        if (data.hasOwnProperty('negativeScore')) {
          obj['negativeScore'] = _ApiClient["default"].convertToType(data['negativeScore'], 'Number');
        }

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }

        if (data.hasOwnProperty('atTime')) {
          obj['atTime'] = _ApiClient["default"].convertToType(data['atTime'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TwitterSentimentContent;
}();
/**
 * Number of mentions
 * @member {Number} mention
 */


TwitterSentimentContent.prototype['mention'] = undefined;
/**
 * Number of positive mentions
 * @member {Number} positiveMention
 */

TwitterSentimentContent.prototype['positiveMention'] = undefined;
/**
 * Number of negative mentions
 * @member {Number} negativeMention
 */

TwitterSentimentContent.prototype['negativeMention'] = undefined;
/**
 * Positive score. Range 0-1
 * @member {Number} positiveScore
 */

TwitterSentimentContent.prototype['positiveScore'] = undefined;
/**
 * Negative score. Range 0-1
 * @member {Number} negativeScore
 */

TwitterSentimentContent.prototype['negativeScore'] = undefined;
/**
 * Final score. Range: -1 to 1 with 1 is very positive and -1 is very negative
 * @member {Number} score
 */

TwitterSentimentContent.prototype['score'] = undefined;
/**
 * Period.
 * @member {String} atTime
 */

TwitterSentimentContent.prototype['atTime'] = undefined;
var _default = TwitterSentimentContent;
exports["default"] = _default;