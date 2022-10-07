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
 * The Development model module.
 * @module model/Development
 * @version 1.2.16
 */
var Development = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Development</code>.
   * @alias module:model/Development
   */
  function Development() {
    _classCallCheck(this, Development);

    Development.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Development, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Development</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Development} obj Optional instance to populate.
     * @return {module:model/Development} The populated <code>Development</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Development();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('datetime')) {
          obj['datetime'] = _ApiClient["default"].convertToType(data['datetime'], 'String');
        }

        if (data.hasOwnProperty('headline')) {
          obj['headline'] = _ApiClient["default"].convertToType(data['headline'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Development;
}();
/**
 * Company symbol.
 * @member {String} symbol
 */


Development.prototype['symbol'] = undefined;
/**
 * Published time in <code>YYYY-MM-DD HH:MM:SS</code> format.
 * @member {String} datetime
 */

Development.prototype['datetime'] = undefined;
/**
 * Development headline.
 * @member {String} headline
 */

Development.prototype['headline'] = undefined;
/**
 * Development description.
 * @member {String} description
 */

Development.prototype['description'] = undefined;
/**
 * URL.
 * @member {String} url
 */

Development.prototype['url'] = undefined;
var _default = Development;
exports["default"] = _default;