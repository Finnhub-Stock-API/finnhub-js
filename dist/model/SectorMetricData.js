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
 * The SectorMetricData model module.
 * @module model/SectorMetricData
 * @version 1.2.16
 */
var SectorMetricData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SectorMetricData</code>.
   * @alias module:model/SectorMetricData
   */
  function SectorMetricData() {
    _classCallCheck(this, SectorMetricData);

    SectorMetricData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SectorMetricData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SectorMetricData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SectorMetricData} obj Optional instance to populate.
     * @return {module:model/SectorMetricData} The populated <code>SectorMetricData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SectorMetricData();

        if (data.hasOwnProperty('sector')) {
          obj['sector'] = _ApiClient["default"].convertToType(data['sector'], 'String');
        }

        if (data.hasOwnProperty('metrics')) {
          obj['metrics'] = _ApiClient["default"].convertToType(data['metrics'], Object);
        }
      }

      return obj;
    }
  }]);

  return SectorMetricData;
}();
/**
 * Sector
 * @member {String} sector
 */


SectorMetricData.prototype['sector'] = undefined;
/**
 * Metrics data in key-value format. <code>a</code> and <code>m</code> fields are for average and median respectively.
 * @member {Object} metrics
 */

SectorMetricData.prototype['metrics'] = undefined;
var _default = SectorMetricData;
exports["default"] = _default;