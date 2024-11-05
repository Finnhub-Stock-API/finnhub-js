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
 * The ETFSectorExposureData model module.
 * @module model/ETFSectorExposureData
 * @version 1.2.19
 */
var ETFSectorExposureData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ETFSectorExposureData</code>.
   * @alias module:model/ETFSectorExposureData
   */
  function ETFSectorExposureData() {
    _classCallCheck(this, ETFSectorExposureData);

    ETFSectorExposureData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ETFSectorExposureData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ETFSectorExposureData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ETFSectorExposureData} obj Optional instance to populate.
     * @return {module:model/ETFSectorExposureData} The populated <code>ETFSectorExposureData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ETFSectorExposureData();

        if (data.hasOwnProperty('industry')) {
          obj['industry'] = _ApiClient["default"].convertToType(data['industry'], 'String');
        }

        if (data.hasOwnProperty('exposure')) {
          obj['exposure'] = _ApiClient["default"].convertToType(data['exposure'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ETFSectorExposureData;
}();
/**
 * Industry
 * @member {String} industry
 */


ETFSectorExposureData.prototype['industry'] = undefined;
/**
 * Percent of exposure.
 * @member {Number} exposure
 */

ETFSectorExposureData.prototype['exposure'] = undefined;
var _default = ETFSectorExposureData;
exports["default"] = _default;