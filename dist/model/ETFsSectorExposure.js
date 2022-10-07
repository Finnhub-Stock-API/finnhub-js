"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ETFSectorExposureData = _interopRequireDefault(require("./ETFSectorExposureData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ETFsSectorExposure model module.
 * @module model/ETFsSectorExposure
 * @version 1.2.16
 */
var ETFsSectorExposure = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ETFsSectorExposure</code>.
   * @alias module:model/ETFsSectorExposure
   */
  function ETFsSectorExposure() {
    _classCallCheck(this, ETFsSectorExposure);

    ETFsSectorExposure.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ETFsSectorExposure, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ETFsSectorExposure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ETFsSectorExposure} obj Optional instance to populate.
     * @return {module:model/ETFsSectorExposure} The populated <code>ETFsSectorExposure</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ETFsSectorExposure();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('sectorExposure')) {
          obj['sectorExposure'] = _ApiClient["default"].convertToType(data['sectorExposure'], [_ETFSectorExposureData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ETFsSectorExposure;
}();
/**
 * ETF symbol.
 * @member {String} symbol
 */


ETFsSectorExposure.prototype['symbol'] = undefined;
/**
 * Array of industries and exposure levels.
 * @member {Array.<module:model/ETFSectorExposureData>} sectorExposure
 */

ETFsSectorExposure.prototype['sectorExposure'] = undefined;
var _default = ETFsSectorExposure;
exports["default"] = _default;