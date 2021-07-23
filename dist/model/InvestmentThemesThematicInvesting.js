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
 * The InvestmentThemesThematicInvesting model module.
 * @module model/InvestmentThemesThematicInvesting
 * @version 1.2.2
 */
var InvestmentThemesThematicInvesting = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvestmentThemesThematicInvesting</code>.
   * @alias module:model/InvestmentThemesThematicInvesting
   */
  function InvestmentThemesThematicInvesting() {
    _classCallCheck(this, InvestmentThemesThematicInvesting);

    InvestmentThemesThematicInvesting.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvestmentThemesThematicInvesting, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvestmentThemesThematicInvesting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvestmentThemesThematicInvesting} obj Optional instance to populate.
     * @return {module:model/InvestmentThemesThematicInvesting} The populated <code>InvestmentThemesThematicInvesting</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvestmentThemesThematicInvesting();

        if (data.hasOwnProperty('theme')) {
          obj['theme'] = _ApiClient["default"].convertToType(data['theme'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return InvestmentThemesThematicInvesting;
}();
/**
 * Investment theme
 * @member {String} theme
 */


InvestmentThemesThematicInvesting.prototype['theme'] = undefined;
/**
 * Investment theme portfolio.
 * @member {Array.<Object>} data
 */

InvestmentThemesThematicInvesting.prototype['data'] = undefined;
var _default = InvestmentThemesThematicInvesting;
exports["default"] = _default;