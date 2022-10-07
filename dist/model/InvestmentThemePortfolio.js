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
 * The InvestmentThemePortfolio model module.
 * @module model/InvestmentThemePortfolio
 * @version 1.2.16
 */
var InvestmentThemePortfolio = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvestmentThemePortfolio</code>.
   * @alias module:model/InvestmentThemePortfolio
   */
  function InvestmentThemePortfolio() {
    _classCallCheck(this, InvestmentThemePortfolio);

    InvestmentThemePortfolio.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvestmentThemePortfolio, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvestmentThemePortfolio</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvestmentThemePortfolio} obj Optional instance to populate.
     * @return {module:model/InvestmentThemePortfolio} The populated <code>InvestmentThemePortfolio</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvestmentThemePortfolio();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InvestmentThemePortfolio;
}();
/**
 * Symbol
 * @member {String} symbol
 */


InvestmentThemePortfolio.prototype['symbol'] = undefined;
var _default = InvestmentThemePortfolio;
exports["default"] = _default;