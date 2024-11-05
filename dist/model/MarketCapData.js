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
 * The MarketCapData model module.
 * @module model/MarketCapData
 * @version 1.2.19
 */
var MarketCapData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MarketCapData</code>.
   * @alias module:model/MarketCapData
   */
  function MarketCapData() {
    _classCallCheck(this, MarketCapData);

    MarketCapData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MarketCapData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MarketCapData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketCapData} obj Optional instance to populate.
     * @return {module:model/MarketCapData} The populated <code>MarketCapData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MarketCapData();

        if (data.hasOwnProperty('atDate')) {
          obj['atDate'] = _ApiClient["default"].convertToType(data['atDate'], 'String');
        }

        if (data.hasOwnProperty('marketCapitalization')) {
          obj['marketCapitalization'] = _ApiClient["default"].convertToType(data['marketCapitalization'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return MarketCapData;
}();
/**
 * Date of the reading
 * @member {String} atDate
 */


MarketCapData.prototype['atDate'] = undefined;
/**
 * Value
 * @member {Number} marketCapitalization
 */

MarketCapData.prototype['marketCapitalization'] = undefined;
var _default = MarketCapData;
exports["default"] = _default;