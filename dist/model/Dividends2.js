"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Dividends2Info = _interopRequireDefault(require("./Dividends2Info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Dividends2 model module.
 * @module model/Dividends2
 * @version 1.2.16
 */
var Dividends2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Dividends2</code>.
   * @alias module:model/Dividends2
   */
  function Dividends2() {
    _classCallCheck(this, Dividends2);

    Dividends2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Dividends2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Dividends2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Dividends2} obj Optional instance to populate.
     * @return {module:model/Dividends2} The populated <code>Dividends2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Dividends2();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Dividends2Info["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Dividends2;
}();
/**
 * Symbol
 * @member {String} symbol
 */


Dividends2.prototype['symbol'] = undefined;
/**
 * 
 * @member {Array.<module:model/Dividends2Info>} data
 */

Dividends2.prototype['data'] = undefined;
var _default = Dividends2;
exports["default"] = _default;