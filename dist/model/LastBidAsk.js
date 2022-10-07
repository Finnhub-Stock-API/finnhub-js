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
 * The LastBidAsk model module.
 * @module model/LastBidAsk
 * @version 1.2.16
 */
var LastBidAsk = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LastBidAsk</code>.
   * @alias module:model/LastBidAsk
   */
  function LastBidAsk() {
    _classCallCheck(this, LastBidAsk);

    LastBidAsk.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LastBidAsk, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LastBidAsk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LastBidAsk} obj Optional instance to populate.
     * @return {module:model/LastBidAsk} The populated <code>LastBidAsk</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LastBidAsk();

        if (data.hasOwnProperty('b')) {
          obj['b'] = _ApiClient["default"].convertToType(data['b'], 'Number');
        }

        if (data.hasOwnProperty('a')) {
          obj['a'] = _ApiClient["default"].convertToType(data['a'], 'Number');
        }

        if (data.hasOwnProperty('bv')) {
          obj['bv'] = _ApiClient["default"].convertToType(data['bv'], 'Number');
        }

        if (data.hasOwnProperty('av')) {
          obj['av'] = _ApiClient["default"].convertToType(data['av'], 'Number');
        }

        if (data.hasOwnProperty('t')) {
          obj['t'] = _ApiClient["default"].convertToType(data['t'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LastBidAsk;
}();
/**
 * Bid price.
 * @member {Number} b
 */


LastBidAsk.prototype['b'] = undefined;
/**
 * Ask price.
 * @member {Number} a
 */

LastBidAsk.prototype['a'] = undefined;
/**
 * Bid volume.
 * @member {Number} bv
 */

LastBidAsk.prototype['bv'] = undefined;
/**
 * Ask volume.
 * @member {Number} av
 */

LastBidAsk.prototype['av'] = undefined;
/**
 * Reference UNIX timestamp in ms.
 * @member {Number} t
 */

LastBidAsk.prototype['t'] = undefined;
var _default = LastBidAsk;
exports["default"] = _default;