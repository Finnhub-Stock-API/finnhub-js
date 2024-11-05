"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MutualFundSectorExposureData = _interopRequireDefault(require("./MutualFundSectorExposureData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MutualFundSectorExposure model module.
 * @module model/MutualFundSectorExposure
 * @version 1.2.19
 */
var MutualFundSectorExposure = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MutualFundSectorExposure</code>.
   * @alias module:model/MutualFundSectorExposure
   */
  function MutualFundSectorExposure() {
    _classCallCheck(this, MutualFundSectorExposure);

    MutualFundSectorExposure.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MutualFundSectorExposure, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MutualFundSectorExposure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualFundSectorExposure} obj Optional instance to populate.
     * @return {module:model/MutualFundSectorExposure} The populated <code>MutualFundSectorExposure</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MutualFundSectorExposure();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('sectorExposure')) {
          obj['sectorExposure'] = _ApiClient["default"].convertToType(data['sectorExposure'], [_MutualFundSectorExposureData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return MutualFundSectorExposure;
}();
/**
 * Mutual symbol.
 * @member {String} symbol
 */


MutualFundSectorExposure.prototype['symbol'] = undefined;
/**
 * Array of sector and exposure levels.
 * @member {Array.<module:model/MutualFundSectorExposureData>} sectorExposure
 */

MutualFundSectorExposure.prototype['sectorExposure'] = undefined;
var _default = MutualFundSectorExposure;
exports["default"] = _default;