"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EarningsEstimatesInfo = _interopRequireDefault(require("./EarningsEstimatesInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EarningsEstimates model module.
 * @module model/EarningsEstimates
 * @version 1.2.19
 */
var EarningsEstimates = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EarningsEstimates</code>.
   * @alias module:model/EarningsEstimates
   */
  function EarningsEstimates() {
    _classCallCheck(this, EarningsEstimates);

    EarningsEstimates.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EarningsEstimates, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EarningsEstimates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EarningsEstimates} obj Optional instance to populate.
     * @return {module:model/EarningsEstimates} The populated <code>EarningsEstimates</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EarningsEstimates();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_EarningsEstimatesInfo["default"]]);
        }

        if (data.hasOwnProperty('freq')) {
          obj['freq'] = _ApiClient["default"].convertToType(data['freq'], 'String');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EarningsEstimates;
}();
/**
 * List of estimates
 * @member {Array.<module:model/EarningsEstimatesInfo>} data
 */


EarningsEstimates.prototype['data'] = undefined;
/**
 * Frequency: annual or quarterly.
 * @member {String} freq
 */

EarningsEstimates.prototype['freq'] = undefined;
/**
 * Company symbol.
 * @member {String} symbol
 */

EarningsEstimates.prototype['symbol'] = undefined;
var _default = EarningsEstimates;
exports["default"] = _default;