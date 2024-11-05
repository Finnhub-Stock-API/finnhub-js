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
 * The AirlinePriceIndex model module.
 * @module model/AirlinePriceIndex
 * @version 1.2.19
 */
var AirlinePriceIndex = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AirlinePriceIndex</code>.
   * @alias module:model/AirlinePriceIndex
   */
  function AirlinePriceIndex() {
    _classCallCheck(this, AirlinePriceIndex);

    AirlinePriceIndex.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AirlinePriceIndex, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AirlinePriceIndex</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AirlinePriceIndex} obj Optional instance to populate.
     * @return {module:model/AirlinePriceIndex} The populated <code>AirlinePriceIndex</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AirlinePriceIndex();

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('priceIndex')) {
          obj['priceIndex'] = _ApiClient["default"].convertToType(data['priceIndex'], 'Number');
        }

        if (data.hasOwnProperty('dailyAvgPrice')) {
          obj['dailyAvgPrice'] = _ApiClient["default"].convertToType(data['dailyAvgPrice'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AirlinePriceIndex;
}();
/**
 * Date
 * @member {String} date
 */


AirlinePriceIndex.prototype['date'] = undefined;
/**
 * Price Index
 * @member {Number} priceIndex
 */

AirlinePriceIndex.prototype['priceIndex'] = undefined;
/**
 * Daily average ticket price.
 * @member {Number} dailyAvgPrice
 */

AirlinePriceIndex.prototype['dailyAvgPrice'] = undefined;
var _default = AirlinePriceIndex;
exports["default"] = _default;