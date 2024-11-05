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
 * The MarketHolidayData model module.
 * @module model/MarketHolidayData
 * @version 1.2.19
 */
var MarketHolidayData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MarketHolidayData</code>.
   * @alias module:model/MarketHolidayData
   */
  function MarketHolidayData() {
    _classCallCheck(this, MarketHolidayData);

    MarketHolidayData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MarketHolidayData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MarketHolidayData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketHolidayData} obj Optional instance to populate.
     * @return {module:model/MarketHolidayData} The populated <code>MarketHolidayData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MarketHolidayData();

        if (data.hasOwnProperty('eventName')) {
          obj['eventName'] = _ApiClient["default"].convertToType(data['eventName'], 'String');
        }

        if (data.hasOwnProperty('atDate')) {
          obj['atDate'] = _ApiClient["default"].convertToType(data['atDate'], 'String');
        }

        if (data.hasOwnProperty('tradingHour')) {
          obj['tradingHour'] = _ApiClient["default"].convertToType(data['tradingHour'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MarketHolidayData;
}();
/**
 * Holiday's name.
 * @member {String} eventName
 */


MarketHolidayData.prototype['eventName'] = undefined;
/**
 * Date.
 * @member {String} atDate
 */

MarketHolidayData.prototype['atDate'] = undefined;
/**
 * Trading hours for this day if the market is partially closed only.
 * @member {String} tradingHour
 */

MarketHolidayData.prototype['tradingHour'] = undefined;
var _default = MarketHolidayData;
exports["default"] = _default;