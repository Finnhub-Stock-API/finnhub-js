"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TechnicalAnalysis = _interopRequireDefault(require("./TechnicalAnalysis"));

var _Trend = _interopRequireDefault(require("./Trend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AggregateIndicators model module.
 * @module model/AggregateIndicators
 * @version 1.2.16
 */
var AggregateIndicators = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AggregateIndicators</code>.
   * @alias module:model/AggregateIndicators
   */
  function AggregateIndicators() {
    _classCallCheck(this, AggregateIndicators);

    AggregateIndicators.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AggregateIndicators, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AggregateIndicators</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AggregateIndicators} obj Optional instance to populate.
     * @return {module:model/AggregateIndicators} The populated <code>AggregateIndicators</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AggregateIndicators();

        if (data.hasOwnProperty('technicalAnalysis')) {
          obj['technicalAnalysis'] = _TechnicalAnalysis["default"].constructFromObject(data['technicalAnalysis']);
        }

        if (data.hasOwnProperty('trend')) {
          obj['trend'] = _Trend["default"].constructFromObject(data['trend']);
        }
      }

      return obj;
    }
  }]);

  return AggregateIndicators;
}();
/**
 * @member {module:model/TechnicalAnalysis} technicalAnalysis
 */


AggregateIndicators.prototype['technicalAnalysis'] = undefined;
/**
 * @member {module:model/Trend} trend
 */

AggregateIndicators.prototype['trend'] = undefined;
var _default = AggregateIndicators;
exports["default"] = _default;