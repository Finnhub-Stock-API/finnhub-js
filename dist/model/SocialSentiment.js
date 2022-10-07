"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RedditSentimentContent = _interopRequireDefault(require("./RedditSentimentContent"));

var _TwitterSentimentContent = _interopRequireDefault(require("./TwitterSentimentContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SocialSentiment model module.
 * @module model/SocialSentiment
 * @version 1.2.16
 */
var SocialSentiment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SocialSentiment</code>.
   * @alias module:model/SocialSentiment
   */
  function SocialSentiment() {
    _classCallCheck(this, SocialSentiment);

    SocialSentiment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SocialSentiment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SocialSentiment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SocialSentiment} obj Optional instance to populate.
     * @return {module:model/SocialSentiment} The populated <code>SocialSentiment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SocialSentiment();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('reddit')) {
          obj['reddit'] = _ApiClient["default"].convertToType(data['reddit'], [_RedditSentimentContent["default"]]);
        }

        if (data.hasOwnProperty('twitter')) {
          obj['twitter'] = _ApiClient["default"].convertToType(data['twitter'], [_TwitterSentimentContent["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SocialSentiment;
}();
/**
 * Company symbol.
 * @member {String} symbol
 */


SocialSentiment.prototype['symbol'] = undefined;
/**
 * Reddit sentiment.
 * @member {Array.<module:model/RedditSentimentContent>} reddit
 */

SocialSentiment.prototype['reddit'] = undefined;
/**
 * Twitter sentiment.
 * @member {Array.<module:model/TwitterSentimentContent>} twitter
 */

SocialSentiment.prototype['twitter'] = undefined;
var _default = SocialSentiment;
exports["default"] = _default;