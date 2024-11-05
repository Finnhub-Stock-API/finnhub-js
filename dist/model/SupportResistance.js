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
 * The SupportResistance model module.
 * @module model/SupportResistance
 * @version 1.2.19
 */
var SupportResistance = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SupportResistance</code>.
   * @alias module:model/SupportResistance
   */
  function SupportResistance() {
    _classCallCheck(this, SupportResistance);

    SupportResistance.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SupportResistance, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SupportResistance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SupportResistance} obj Optional instance to populate.
     * @return {module:model/SupportResistance} The populated <code>SupportResistance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SupportResistance();

        if (data.hasOwnProperty('levels')) {
          obj['levels'] = _ApiClient["default"].convertToType(data['levels'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return SupportResistance;
}();
/**
 * Array of support and resistance levels.
 * @member {Array.<Number>} levels
 */


SupportResistance.prototype['levels'] = undefined;
var _default = SupportResistance;
exports["default"] = _default;