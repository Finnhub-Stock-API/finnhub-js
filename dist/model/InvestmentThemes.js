"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InvestmentThemePortfolio = _interopRequireDefault(require("./InvestmentThemePortfolio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InvestmentThemes model module.
 * @module model/InvestmentThemes
 * @version 1.2.16
 */
var InvestmentThemes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvestmentThemes</code>.
   * @alias module:model/InvestmentThemes
   */
  function InvestmentThemes() {
    _classCallCheck(this, InvestmentThemes);

    InvestmentThemes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvestmentThemes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvestmentThemes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvestmentThemes} obj Optional instance to populate.
     * @return {module:model/InvestmentThemes} The populated <code>InvestmentThemes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvestmentThemes();

        if (data.hasOwnProperty('theme')) {
          obj['theme'] = _ApiClient["default"].convertToType(data['theme'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_InvestmentThemePortfolio["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InvestmentThemes;
}();
/**
 * Investment theme
 * @member {String} theme
 */


InvestmentThemes.prototype['theme'] = undefined;
/**
 * Investment theme portfolio.
 * @member {Array.<module:model/InvestmentThemePortfolio>} data
 */

InvestmentThemes.prototype['data'] = undefined;
var _default = InvestmentThemes;
exports["default"] = _default;