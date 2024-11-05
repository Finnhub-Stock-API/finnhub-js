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
 * The ForexCandles model module.
 * @module model/ForexCandles
 * @version 1.2.19
 */
var ForexCandles = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ForexCandles</code>.
   * @alias module:model/ForexCandles
   */
  function ForexCandles() {
    _classCallCheck(this, ForexCandles);

    ForexCandles.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ForexCandles, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ForexCandles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ForexCandles} obj Optional instance to populate.
     * @return {module:model/ForexCandles} The populated <code>ForexCandles</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ForexCandles();

        if (data.hasOwnProperty('o')) {
          obj['o'] = _ApiClient["default"].convertToType(data['o'], ['Number']);
        }

        if (data.hasOwnProperty('h')) {
          obj['h'] = _ApiClient["default"].convertToType(data['h'], ['Number']);
        }

        if (data.hasOwnProperty('l')) {
          obj['l'] = _ApiClient["default"].convertToType(data['l'], ['Number']);
        }

        if (data.hasOwnProperty('c')) {
          obj['c'] = _ApiClient["default"].convertToType(data['c'], ['Number']);
        }

        if (data.hasOwnProperty('v')) {
          obj['v'] = _ApiClient["default"].convertToType(data['v'], ['Number']);
        }

        if (data.hasOwnProperty('t')) {
          obj['t'] = _ApiClient["default"].convertToType(data['t'], ['Number']);
        }

        if (data.hasOwnProperty('s')) {
          obj['s'] = _ApiClient["default"].convertToType(data['s'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ForexCandles;
}();
/**
 * List of open prices for returned candles.
 * @member {Array.<Number>} o
 */


ForexCandles.prototype['o'] = undefined;
/**
 * List of high prices for returned candles.
 * @member {Array.<Number>} h
 */

ForexCandles.prototype['h'] = undefined;
/**
 * List of low prices for returned candles.
 * @member {Array.<Number>} l
 */

ForexCandles.prototype['l'] = undefined;
/**
 * List of close prices for returned candles.
 * @member {Array.<Number>} c
 */

ForexCandles.prototype['c'] = undefined;
/**
 * List of volume data for returned candles.
 * @member {Array.<Number>} v
 */

ForexCandles.prototype['v'] = undefined;
/**
 * List of timestamp for returned candles.
 * @member {Array.<Number>} t
 */

ForexCandles.prototype['t'] = undefined;
/**
 * Status of the response. This field can either be ok or no_data.
 * @member {String} s
 */

ForexCandles.prototype['s'] = undefined;
var _default = ForexCandles;
exports["default"] = _default;