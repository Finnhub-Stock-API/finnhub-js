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
 * The CryptoCandles model module.
 * @module model/CryptoCandles
 * @version 1.2.19
 */
var CryptoCandles = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CryptoCandles</code>.
   * @alias module:model/CryptoCandles
   */
  function CryptoCandles() {
    _classCallCheck(this, CryptoCandles);

    CryptoCandles.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CryptoCandles, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CryptoCandles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CryptoCandles} obj Optional instance to populate.
     * @return {module:model/CryptoCandles} The populated <code>CryptoCandles</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CryptoCandles();

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

  return CryptoCandles;
}();
/**
 * List of open prices for returned candles.
 * @member {Array.<Number>} o
 */


CryptoCandles.prototype['o'] = undefined;
/**
 * List of high prices for returned candles.
 * @member {Array.<Number>} h
 */

CryptoCandles.prototype['h'] = undefined;
/**
 * List of low prices for returned candles.
 * @member {Array.<Number>} l
 */

CryptoCandles.prototype['l'] = undefined;
/**
 * List of close prices for returned candles.
 * @member {Array.<Number>} c
 */

CryptoCandles.prototype['c'] = undefined;
/**
 * List of volume data for returned candles.
 * @member {Array.<Number>} v
 */

CryptoCandles.prototype['v'] = undefined;
/**
 * List of timestamp for returned candles.
 * @member {Array.<Number>} t
 */

CryptoCandles.prototype['t'] = undefined;
/**
 * Status of the response. This field can either be ok or no_data.
 * @member {String} s
 */

CryptoCandles.prototype['s'] = undefined;
var _default = CryptoCandles;
exports["default"] = _default;