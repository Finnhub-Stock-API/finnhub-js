"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Indicator = _interopRequireDefault(require("./Indicator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TechnicalAnalysis model module.
 * @module model/TechnicalAnalysis
 * @version 1.2.19
 */
var TechnicalAnalysis = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TechnicalAnalysis</code>.
   * @alias module:model/TechnicalAnalysis
   */
  function TechnicalAnalysis() {
    _classCallCheck(this, TechnicalAnalysis);

    TechnicalAnalysis.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TechnicalAnalysis, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TechnicalAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TechnicalAnalysis} obj Optional instance to populate.
     * @return {module:model/TechnicalAnalysis} The populated <code>TechnicalAnalysis</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TechnicalAnalysis();

        if (data.hasOwnProperty('count')) {
          obj['count'] = _Indicator["default"].constructFromObject(data['count']);
        }

        if (data.hasOwnProperty('signal')) {
          obj['signal'] = _ApiClient["default"].convertToType(data['signal'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TechnicalAnalysis;
}();
/**
 * @member {module:model/Indicator} count
 */


TechnicalAnalysis.prototype['count'] = undefined;
/**
 * Aggregate Signal
 * @member {String} signal
 */

TechnicalAnalysis.prototype['signal'] = undefined;
var _default = TechnicalAnalysis;
exports["default"] = _default;