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
 * The Split model module.
 * @module model/Split
 * @version 1.2.19
 */
var Split = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Split</code>.
   * @alias module:model/Split
   */
  function Split() {
    _classCallCheck(this, Split);

    Split.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Split, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Split</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Split} obj Optional instance to populate.
     * @return {module:model/Split} The populated <code>Split</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Split();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Date');
        }

        if (data.hasOwnProperty('fromFactor')) {
          obj['fromFactor'] = _ApiClient["default"].convertToType(data['fromFactor'], 'Number');
        }

        if (data.hasOwnProperty('toFactor')) {
          obj['toFactor'] = _ApiClient["default"].convertToType(data['toFactor'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Split;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


Split.prototype['symbol'] = undefined;
/**
 * Split date.
 * @member {Date} date
 */

Split.prototype['date'] = undefined;
/**
 * From factor.
 * @member {Number} fromFactor
 */

Split.prototype['fromFactor'] = undefined;
/**
 * To factor.
 * @member {Number} toFactor
 */

Split.prototype['toFactor'] = undefined;
var _default = Split;
exports["default"] = _default;