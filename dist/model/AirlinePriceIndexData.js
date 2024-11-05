"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AirlinePriceIndex = _interopRequireDefault(require("./AirlinePriceIndex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AirlinePriceIndexData model module.
 * @module model/AirlinePriceIndexData
 * @version 1.2.19
 */
var AirlinePriceIndexData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AirlinePriceIndexData</code>.
   * @alias module:model/AirlinePriceIndexData
   */
  function AirlinePriceIndexData() {
    _classCallCheck(this, AirlinePriceIndexData);

    AirlinePriceIndexData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AirlinePriceIndexData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AirlinePriceIndexData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AirlinePriceIndexData} obj Optional instance to populate.
     * @return {module:model/AirlinePriceIndexData} The populated <code>AirlinePriceIndexData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AirlinePriceIndexData();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_AirlinePriceIndex["default"]]);
        }

        if (data.hasOwnProperty('airline')) {
          obj['airline'] = _ApiClient["default"].convertToType(data['airline'], 'String');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AirlinePriceIndexData;
}();
/**
 * Array of price index.
 * @member {Array.<module:model/AirlinePriceIndex>} data
 */


AirlinePriceIndexData.prototype['data'] = undefined;
/**
 * Airline name
 * @member {String} airline
 */

AirlinePriceIndexData.prototype['airline'] = undefined;
/**
 * From date
 * @member {String} from
 */

AirlinePriceIndexData.prototype['from'] = undefined;
/**
 * To date
 * @member {String} to
 */

AirlinePriceIndexData.prototype['to'] = undefined;
var _default = AirlinePriceIndexData;
exports["default"] = _default;