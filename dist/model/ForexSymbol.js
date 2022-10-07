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
 * The ForexSymbol model module.
 * @module model/ForexSymbol
 * @version 1.2.16
 */
var ForexSymbol = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ForexSymbol</code>.
   * @alias module:model/ForexSymbol
   */
  function ForexSymbol() {
    _classCallCheck(this, ForexSymbol);

    ForexSymbol.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ForexSymbol, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ForexSymbol</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ForexSymbol} obj Optional instance to populate.
     * @return {module:model/ForexSymbol} The populated <code>ForexSymbol</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ForexSymbol();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('displaySymbol')) {
          obj['displaySymbol'] = _ApiClient["default"].convertToType(data['displaySymbol'], 'String');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ForexSymbol;
}();
/**
 * Symbol description
 * @member {String} description
 */


ForexSymbol.prototype['description'] = undefined;
/**
 * Display symbol name.
 * @member {String} displaySymbol
 */

ForexSymbol.prototype['displaySymbol'] = undefined;
/**
 * Unique symbol used to identify this symbol used in <code>/forex/candle</code> endpoint.
 * @member {String} symbol
 */

ForexSymbol.prototype['symbol'] = undefined;
var _default = ForexSymbol;
exports["default"] = _default;