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
 * The InvestorsOwnership model module.
 * @module model/InvestorsOwnership
 * @version 1.2.1
 */
var InvestorsOwnership = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvestorsOwnership</code>.
   * @alias module:model/InvestorsOwnership
   */
  function InvestorsOwnership() {
    _classCallCheck(this, InvestorsOwnership);

    InvestorsOwnership.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvestorsOwnership, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvestorsOwnership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvestorsOwnership} obj Optional instance to populate.
     * @return {module:model/InvestorsOwnership} The populated <code>InvestorsOwnership</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvestorsOwnership();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('ownership')) {
          obj['ownership'] = _ApiClient["default"].convertToType(data['ownership'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return InvestorsOwnership;
}();
/**
 * Symbol of the company.
 * @member {String} symbol
 */


InvestorsOwnership.prototype['symbol'] = undefined;
/**
 * Array of investors with detailed information about their holdings.
 * @member {Array.<Object>} ownership
 */

InvestorsOwnership.prototype['ownership'] = undefined;
var _default = InvestorsOwnership;
exports["default"] = _default;