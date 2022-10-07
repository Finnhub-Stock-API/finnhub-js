"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EconomicEvent = _interopRequireDefault(require("./EconomicEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EconomicCalendar model module.
 * @module model/EconomicCalendar
 * @version 1.2.16
 */
var EconomicCalendar = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EconomicCalendar</code>.
   * @alias module:model/EconomicCalendar
   */
  function EconomicCalendar() {
    _classCallCheck(this, EconomicCalendar);

    EconomicCalendar.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EconomicCalendar, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EconomicCalendar</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EconomicCalendar} obj Optional instance to populate.
     * @return {module:model/EconomicCalendar} The populated <code>EconomicCalendar</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EconomicCalendar();

        if (data.hasOwnProperty('economicCalendar')) {
          obj['economicCalendar'] = _ApiClient["default"].convertToType(data['economicCalendar'], [_EconomicEvent["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EconomicCalendar;
}();
/**
 * Array of economic events.
 * @member {Array.<module:model/EconomicEvent>} economicCalendar
 */


EconomicCalendar.prototype['economicCalendar'] = undefined;
var _default = EconomicCalendar;
exports["default"] = _default;