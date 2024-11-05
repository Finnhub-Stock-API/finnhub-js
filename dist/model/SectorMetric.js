"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SectorMetricData = _interopRequireDefault(require("./SectorMetricData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SectorMetric model module.
 * @module model/SectorMetric
 * @version 1.2.19
 */
var SectorMetric = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SectorMetric</code>.
   * @alias module:model/SectorMetric
   */
  function SectorMetric() {
    _classCallCheck(this, SectorMetric);

    SectorMetric.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SectorMetric, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SectorMetric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SectorMetric} obj Optional instance to populate.
     * @return {module:model/SectorMetric} The populated <code>SectorMetric</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SectorMetric();

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_SectorMetricData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SectorMetric;
}();
/**
 * Region.
 * @member {String} region
 */


SectorMetric.prototype['region'] = undefined;
/**
 * Metrics for each sector.
 * @member {Array.<module:model/SectorMetricData>} data
 */

SectorMetric.prototype['data'] = undefined;
var _default = SectorMetric;
exports["default"] = _default;