"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ETFCountryExposureData = _interopRequireDefault(require("./ETFCountryExposureData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ETFsCountryExposure model module.
 * @module model/ETFsCountryExposure
 * @version 1.2.16
 */
var ETFsCountryExposure = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ETFsCountryExposure</code>.
   * @alias module:model/ETFsCountryExposure
   */
  function ETFsCountryExposure() {
    _classCallCheck(this, ETFsCountryExposure);

    ETFsCountryExposure.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ETFsCountryExposure, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ETFsCountryExposure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ETFsCountryExposure} obj Optional instance to populate.
     * @return {module:model/ETFsCountryExposure} The populated <code>ETFsCountryExposure</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ETFsCountryExposure();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('countryExposure')) {
          obj['countryExposure'] = _ApiClient["default"].convertToType(data['countryExposure'], [_ETFCountryExposureData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ETFsCountryExposure;
}();
/**
 * ETF symbol.
 * @member {String} symbol
 */


ETFsCountryExposure.prototype['symbol'] = undefined;
/**
 * Array of countries and and exposure levels.
 * @member {Array.<module:model/ETFCountryExposureData>} countryExposure
 */

ETFsCountryExposure.prototype['countryExposure'] = undefined;
var _default = ETFsCountryExposure;
exports["default"] = _default;