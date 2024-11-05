"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MarketHolidayData = _interopRequireDefault(require("./MarketHolidayData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MarketHoliday model module.
 * @module model/MarketHoliday
 * @version 1.2.19
 */
var MarketHoliday = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MarketHoliday</code>.
   * @alias module:model/MarketHoliday
   */
  function MarketHoliday() {
    _classCallCheck(this, MarketHoliday);

    MarketHoliday.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MarketHoliday, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MarketHoliday</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketHoliday} obj Optional instance to populate.
     * @return {module:model/MarketHoliday} The populated <code>MarketHoliday</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MarketHoliday();

        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }

        if (data.hasOwnProperty('exchange')) {
          obj['exchange'] = _ApiClient["default"].convertToType(data['exchange'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_MarketHolidayData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return MarketHoliday;
}();
/**
 * Timezone.
 * @member {String} timezone
 */


MarketHoliday.prototype['timezone'] = undefined;
/**
 * Exchange.
 * @member {String} exchange
 */

MarketHoliday.prototype['exchange'] = undefined;
/**
 * Array of holidays.
 * @member {Array.<module:model/MarketHolidayData>} data
 */

MarketHoliday.prototype['data'] = undefined;
var _default = MarketHoliday;
exports["default"] = _default;