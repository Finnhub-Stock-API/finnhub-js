"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EconomicDataInfo = _interopRequireDefault(require("./EconomicDataInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EconomicData model module.
 * @module model/EconomicData
 * @version 1.2.16
 */
var EconomicData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EconomicData</code>.
   * @alias module:model/EconomicData
   */
  function EconomicData() {
    _classCallCheck(this, EconomicData);

    EconomicData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EconomicData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EconomicData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EconomicData} obj Optional instance to populate.
     * @return {module:model/EconomicData} The populated <code>EconomicData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EconomicData();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_EconomicDataInfo["default"]]);
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EconomicData;
}();
/**
 * Array of economic data for requested code.
 * @member {Array.<module:model/EconomicDataInfo>} data
 */


EconomicData.prototype['data'] = undefined;
/**
 * Finnhub economic code
 * @member {String} code
 */

EconomicData.prototype['code'] = undefined;
var _default = EconomicData;
exports["default"] = _default;