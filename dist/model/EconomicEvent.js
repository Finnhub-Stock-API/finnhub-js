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
 * The EconomicEvent model module.
 * @module model/EconomicEvent
 * @version 1.2.19
 */
var EconomicEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EconomicEvent</code>.
   * @alias module:model/EconomicEvent
   */
  function EconomicEvent() {
    _classCallCheck(this, EconomicEvent);

    EconomicEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EconomicEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EconomicEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EconomicEvent} obj Optional instance to populate.
     * @return {module:model/EconomicEvent} The populated <code>EconomicEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EconomicEvent();

        if (data.hasOwnProperty('actual')) {
          obj['actual'] = _ApiClient["default"].convertToType(data['actual'], 'Number');
        }

        if (data.hasOwnProperty('prev')) {
          obj['prev'] = _ApiClient["default"].convertToType(data['prev'], 'Number');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }

        if (data.hasOwnProperty('estimate')) {
          obj['estimate'] = _ApiClient["default"].convertToType(data['estimate'], 'Number');
        }

        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient["default"].convertToType(data['event'], 'String');
        }

        if (data.hasOwnProperty('impact')) {
          obj['impact'] = _ApiClient["default"].convertToType(data['impact'], 'String');
        }

        if (data.hasOwnProperty('time')) {
          obj['time'] = _ApiClient["default"].convertToType(data['time'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EconomicEvent;
}();
/**
 * Actual release
 * @member {Number} actual
 */


EconomicEvent.prototype['actual'] = undefined;
/**
 * Previous release
 * @member {Number} prev
 */

EconomicEvent.prototype['prev'] = undefined;
/**
 * Country
 * @member {String} country
 */

EconomicEvent.prototype['country'] = undefined;
/**
 * Unit
 * @member {String} unit
 */

EconomicEvent.prototype['unit'] = undefined;
/**
 * Estimate
 * @member {Number} estimate
 */

EconomicEvent.prototype['estimate'] = undefined;
/**
 * Event
 * @member {String} event
 */

EconomicEvent.prototype['event'] = undefined;
/**
 * Impact level
 * @member {String} impact
 */

EconomicEvent.prototype['impact'] = undefined;
/**
 * Release time
 * @member {String} time
 */

EconomicEvent.prototype['time'] = undefined;
var _default = EconomicEvent;
exports["default"] = _default;