"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BreakdownItem = _interopRequireDefault(require("./BreakdownItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RevenueBreakdown model module.
 * @module model/RevenueBreakdown
 * @version 1.2.19
 */
var RevenueBreakdown = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RevenueBreakdown</code>.
   * @alias module:model/RevenueBreakdown
   */
  function RevenueBreakdown() {
    _classCallCheck(this, RevenueBreakdown);

    RevenueBreakdown.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RevenueBreakdown, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RevenueBreakdown</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RevenueBreakdown} obj Optional instance to populate.
     * @return {module:model/RevenueBreakdown} The populated <code>RevenueBreakdown</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RevenueBreakdown();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('cik')) {
          obj['cik'] = _ApiClient["default"].convertToType(data['cik'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_BreakdownItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RevenueBreakdown;
}();
/**
 * Symbol
 * @member {String} symbol
 */


RevenueBreakdown.prototype['symbol'] = undefined;
/**
 * CIK
 * @member {String} cik
 */

RevenueBreakdown.prototype['cik'] = undefined;
/**
 * Array of revenue breakdown over multiple periods.
 * @member {Array.<module:model/BreakdownItem>} data
 */

RevenueBreakdown.prototype['data'] = undefined;
var _default = RevenueBreakdown;
exports["default"] = _default;