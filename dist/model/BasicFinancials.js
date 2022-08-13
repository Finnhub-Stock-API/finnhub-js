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
 * The BasicFinancials model module.
 * @module model/BasicFinancials
 * @version 1.2.15
 */
var BasicFinancials = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BasicFinancials</code>.
   * @alias module:model/BasicFinancials
   */
  function BasicFinancials() {
    _classCallCheck(this, BasicFinancials);

    BasicFinancials.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BasicFinancials, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BasicFinancials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicFinancials} obj Optional instance to populate.
     * @return {module:model/BasicFinancials} The populated <code>BasicFinancials</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BasicFinancials();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('metricType')) {
          obj['metricType'] = _ApiClient["default"].convertToType(data['metricType'], 'String');
        }

        if (data.hasOwnProperty('series')) {
          obj['series'] = _ApiClient["default"].convertToType(data['series'], Object);
        }

        if (data.hasOwnProperty('metric')) {
          obj['metric'] = _ApiClient["default"].convertToType(data['metric'], Object);
        }
      }

      return obj;
    }
  }]);

  return BasicFinancials;
}();
/**
 * Symbol of the company.
 * @member {String} symbol
 */


BasicFinancials.prototype['symbol'] = undefined;
/**
 * Metric type.
 * @member {String} metricType
 */

BasicFinancials.prototype['metricType'] = undefined;
/**
 * @member {Object} series
 */

BasicFinancials.prototype['series'] = undefined;
/**
 * @member {Object} metric
 */

BasicFinancials.prototype['metric'] = undefined;
var _default = BasicFinancials;
exports["default"] = _default;