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
 * The ETFsIndustryExposure model module.
 * @module model/ETFsIndustryExposure
 * @version 1.2.1
 */
var ETFsIndustryExposure = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ETFsIndustryExposure</code>.
   * @alias module:model/ETFsIndustryExposure
   */
  function ETFsIndustryExposure() {
    _classCallCheck(this, ETFsIndustryExposure);

    ETFsIndustryExposure.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ETFsIndustryExposure, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ETFsIndustryExposure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ETFsIndustryExposure} obj Optional instance to populate.
     * @return {module:model/ETFsIndustryExposure} The populated <code>ETFsIndustryExposure</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ETFsIndustryExposure();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('sectorExposure')) {
          obj['sectorExposure'] = _ApiClient["default"].convertToType(data['sectorExposure'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return ETFsIndustryExposure;
}();
/**
 * ETF symbol.
 * @member {String} symbol
 */


ETFsIndustryExposure.prototype['symbol'] = undefined;
/**
 * Array of industries and exposure levels.
 * @member {Array.<Object>} sectorExposure
 */

ETFsIndustryExposure.prototype['sectorExposure'] = undefined;
var _default = ETFsIndustryExposure;
exports["default"] = _default;