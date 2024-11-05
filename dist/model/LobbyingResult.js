"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LobbyingData = _interopRequireDefault(require("./LobbyingData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LobbyingResult model module.
 * @module model/LobbyingResult
 * @version 1.2.19
 */
var LobbyingResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LobbyingResult</code>.
   * @alias module:model/LobbyingResult
   */
  function LobbyingResult() {
    _classCallCheck(this, LobbyingResult);

    LobbyingResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LobbyingResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LobbyingResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LobbyingResult} obj Optional instance to populate.
     * @return {module:model/LobbyingResult} The populated <code>LobbyingResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LobbyingResult();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_LobbyingData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LobbyingResult;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


LobbyingResult.prototype['symbol'] = undefined;
/**
 * Array of lobbying activities.
 * @member {Array.<module:model/LobbyingData>} data
 */

LobbyingResult.prototype['data'] = undefined;
var _default = LobbyingResult;
exports["default"] = _default;