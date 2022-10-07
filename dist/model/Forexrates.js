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
 * The Forexrates model module.
 * @module model/Forexrates
 * @version 1.2.16
 */
var Forexrates = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Forexrates</code>.
   * @alias module:model/Forexrates
   */
  function Forexrates() {
    _classCallCheck(this, Forexrates);

    Forexrates.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Forexrates, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Forexrates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Forexrates} obj Optional instance to populate.
     * @return {module:model/Forexrates} The populated <code>Forexrates</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Forexrates();

        if (data.hasOwnProperty('base')) {
          obj['base'] = _ApiClient["default"].convertToType(data['base'], 'String');
        }

        if (data.hasOwnProperty('quote')) {
          obj['quote'] = _ApiClient["default"].convertToType(data['quote'], Object);
        }
      }

      return obj;
    }
  }]);

  return Forexrates;
}();
/**
 * Base currency.
 * @member {String} base
 */


Forexrates.prototype['base'] = undefined;
/**
 * @member {Object} quote
 */

Forexrates.prototype['quote'] = undefined;
var _default = Forexrates;
exports["default"] = _default;