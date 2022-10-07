"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Development = _interopRequireDefault(require("./Development"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PressRelease model module.
 * @module model/PressRelease
 * @version 1.2.16
 */
var PressRelease = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PressRelease</code>.
   * @alias module:model/PressRelease
   */
  function PressRelease() {
    _classCallCheck(this, PressRelease);

    PressRelease.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PressRelease, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PressRelease</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PressRelease} obj Optional instance to populate.
     * @return {module:model/PressRelease} The populated <code>PressRelease</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PressRelease();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('majorDevelopment')) {
          obj['majorDevelopment'] = _ApiClient["default"].convertToType(data['majorDevelopment'], [_Development["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PressRelease;
}();
/**
 * Company symbol.
 * @member {String} symbol
 */


PressRelease.prototype['symbol'] = undefined;
/**
 * Array of major developments.
 * @member {Array.<module:model/Development>} majorDevelopment
 */

PressRelease.prototype['majorDevelopment'] = undefined;
var _default = PressRelease;
exports["default"] = _default;