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
 * The News model module.
 * @module model/News
 * @version 1.2.2
 */
var News = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>News</code>.
   * @alias module:model/News
   */
  function News() {
    _classCallCheck(this, News);

    News.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(News, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>News</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/News} obj Optional instance to populate.
     * @return {module:model/News} The populated <code>News</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new News();

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }

        if (data.hasOwnProperty('datetime')) {
          obj['datetime'] = _ApiClient["default"].convertToType(data['datetime'], 'Number');
        }

        if (data.hasOwnProperty('headline')) {
          obj['headline'] = _ApiClient["default"].convertToType(data['headline'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }

        if (data.hasOwnProperty('related')) {
          obj['related'] = _ApiClient["default"].convertToType(data['related'], 'String');
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient["default"].convertToType(data['source'], 'String');
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return News;
}();
/**
 * News category.
 * @member {String} category
 */


News.prototype['category'] = undefined;
/**
 * Published time in UNIX timestamp.
 * @member {Number} datetime
 */

News.prototype['datetime'] = undefined;
/**
 * News headline.
 * @member {String} headline
 */

News.prototype['headline'] = undefined;
/**
 * News ID. This value can be used for <code>minId</code> params to get the latest news only.
 * @member {Number} id
 */

News.prototype['id'] = undefined;
/**
 * Thumbnail image URL.
 * @member {String} image
 */

News.prototype['image'] = undefined;
/**
 * Related stocks and companies mentioned in the article.
 * @member {String} related
 */

News.prototype['related'] = undefined;
/**
 * News source.
 * @member {String} source
 */

News.prototype['source'] = undefined;
/**
 * News summary.
 * @member {String} summary
 */

News.prototype['summary'] = undefined;
/**
 * URL of the original article.
 * @member {String} url
 */

News.prototype['url'] = undefined;
var _default = News;
exports["default"] = _default;