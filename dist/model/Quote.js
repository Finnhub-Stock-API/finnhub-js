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
 * The Quote model module.
 * @module model/Quote
 * @version 1.2.16
 */
var Quote = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Quote</code>.
   * @alias module:model/Quote
   */
  function Quote() {
    _classCallCheck(this, Quote);

    Quote.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Quote, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Quote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Quote} obj Optional instance to populate.
     * @return {module:model/Quote} The populated <code>Quote</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Quote();

        if (data.hasOwnProperty('o')) {
          obj['o'] = _ApiClient["default"].convertToType(data['o'], 'Number');
        }

        if (data.hasOwnProperty('h')) {
          obj['h'] = _ApiClient["default"].convertToType(data['h'], 'Number');
        }

        if (data.hasOwnProperty('l')) {
          obj['l'] = _ApiClient["default"].convertToType(data['l'], 'Number');
        }

        if (data.hasOwnProperty('c')) {
          obj['c'] = _ApiClient["default"].convertToType(data['c'], 'Number');
        }

        if (data.hasOwnProperty('pc')) {
          obj['pc'] = _ApiClient["default"].convertToType(data['pc'], 'Number');
        }

        if (data.hasOwnProperty('d')) {
          obj['d'] = _ApiClient["default"].convertToType(data['d'], 'Number');
        }

        if (data.hasOwnProperty('dp')) {
          obj['dp'] = _ApiClient["default"].convertToType(data['dp'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Quote;
}();
/**
 * Open price of the day
 * @member {Number} o
 */


Quote.prototype['o'] = undefined;
/**
 * High price of the day
 * @member {Number} h
 */

Quote.prototype['h'] = undefined;
/**
 * Low price of the day
 * @member {Number} l
 */

Quote.prototype['l'] = undefined;
/**
 * Current price
 * @member {Number} c
 */

Quote.prototype['c'] = undefined;
/**
 * Previous close price
 * @member {Number} pc
 */

Quote.prototype['pc'] = undefined;
/**
 * Change
 * @member {Number} d
 */

Quote.prototype['d'] = undefined;
/**
 * Percent change
 * @member {Number} dp
 */

Quote.prototype['dp'] = undefined;
var _default = Quote;
exports["default"] = _default;