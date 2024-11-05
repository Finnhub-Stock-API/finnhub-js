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
 * The Indicator model module.
 * @module model/Indicator
 * @version 1.2.19
 */
var Indicator = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Indicator</code>.
   * @alias module:model/Indicator
   */
  function Indicator() {
    _classCallCheck(this, Indicator);

    Indicator.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Indicator, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Indicator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Indicator} obj Optional instance to populate.
     * @return {module:model/Indicator} The populated <code>Indicator</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Indicator();

        if (data.hasOwnProperty('buy')) {
          obj['buy'] = _ApiClient["default"].convertToType(data['buy'], 'Number');
        }

        if (data.hasOwnProperty('neutral')) {
          obj['neutral'] = _ApiClient["default"].convertToType(data['neutral'], 'Number');
        }

        if (data.hasOwnProperty('sell')) {
          obj['sell'] = _ApiClient["default"].convertToType(data['sell'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Indicator;
}();
/**
 * Number of buy signals
 * @member {Number} buy
 */


Indicator.prototype['buy'] = undefined;
/**
 * Number of neutral signals
 * @member {Number} neutral
 */

Indicator.prototype['neutral'] = undefined;
/**
 * Number of sell signals
 * @member {Number} sell
 */

Indicator.prototype['sell'] = undefined;
var _default = Indicator;
exports["default"] = _default;