"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstitutionalPortfolioGroup = _interopRequireDefault(require("./InstitutionalPortfolioGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstitutionalPortfolio model module.
 * @module model/InstitutionalPortfolio
 * @version 1.2.19
 */
var InstitutionalPortfolio = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstitutionalPortfolio</code>.
   * @alias module:model/InstitutionalPortfolio
   */
  function InstitutionalPortfolio() {
    _classCallCheck(this, InstitutionalPortfolio);

    InstitutionalPortfolio.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstitutionalPortfolio, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstitutionalPortfolio</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstitutionalPortfolio} obj Optional instance to populate.
     * @return {module:model/InstitutionalPortfolio} The populated <code>InstitutionalPortfolio</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstitutionalPortfolio();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('cik')) {
          obj['cik'] = _ApiClient["default"].convertToType(data['cik'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_InstitutionalPortfolioGroup["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InstitutionalPortfolio;
}();
/**
 * Investor's name.
 * @member {String} name
 */


InstitutionalPortfolio.prototype['name'] = undefined;
/**
 * CIK.
 * @member {String} cik
 */

InstitutionalPortfolio.prototype['cik'] = undefined;
/**
 * Array of positions.
 * @member {Array.<module:model/InstitutionalPortfolioGroup>} data
 */

InstitutionalPortfolio.prototype['data'] = undefined;
var _default = InstitutionalPortfolio;
exports["default"] = _default;