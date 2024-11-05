"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CongressionalTransaction = _interopRequireDefault(require("./CongressionalTransaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CongressionalTrading model module.
 * @module model/CongressionalTrading
 * @version 1.2.19
 */
var CongressionalTrading = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CongressionalTrading</code>.
   * @alias module:model/CongressionalTrading
   */
  function CongressionalTrading() {
    _classCallCheck(this, CongressionalTrading);

    CongressionalTrading.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CongressionalTrading, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CongressionalTrading</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CongressionalTrading} obj Optional instance to populate.
     * @return {module:model/CongressionalTrading} The populated <code>CongressionalTrading</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CongressionalTrading();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_CongressionalTransaction["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CongressionalTrading;
}();
/**
 * Symbol of the company.
 * @member {String} symbol
 */


CongressionalTrading.prototype['symbol'] = undefined;
/**
 * Array of stock trades.
 * @member {Array.<module:model/CongressionalTransaction>} data
 */

CongressionalTrading.prototype['data'] = undefined;
var _default = CongressionalTrading;
exports["default"] = _default;