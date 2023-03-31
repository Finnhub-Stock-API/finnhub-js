"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstitutionalPortfolioInfo = _interopRequireDefault(require("./InstitutionalPortfolioInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstitutionalPortfolioGroup model module.
 * @module model/InstitutionalPortfolioGroup
 * @version 1.2.17
 */
var InstitutionalPortfolioGroup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstitutionalPortfolioGroup</code>.
   * @alias module:model/InstitutionalPortfolioGroup
   */
  function InstitutionalPortfolioGroup() {
    _classCallCheck(this, InstitutionalPortfolioGroup);

    InstitutionalPortfolioGroup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstitutionalPortfolioGroup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstitutionalPortfolioGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstitutionalPortfolioGroup} obj Optional instance to populate.
     * @return {module:model/InstitutionalPortfolioGroup} The populated <code>InstitutionalPortfolioGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstitutionalPortfolioGroup();

        if (data.hasOwnProperty('reportDate')) {
          obj['reportDate'] = _ApiClient["default"].convertToType(data['reportDate'], 'String');
        }

        if (data.hasOwnProperty('filingDate')) {
          obj['filingDate'] = _ApiClient["default"].convertToType(data['filingDate'], 'String');
        }

        if (data.hasOwnProperty('portfolio')) {
          obj['portfolio'] = _ApiClient["default"].convertToType(data['portfolio'], [_InstitutionalPortfolioInfo["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InstitutionalPortfolioGroup;
}();
/**
 * Report date.
 * @member {String} reportDate
 */


InstitutionalPortfolioGroup.prototype['reportDate'] = undefined;
/**
 * Filing date.
 * @member {String} filingDate
 */

InstitutionalPortfolioGroup.prototype['filingDate'] = undefined;
/**
 * Array of positions.
 * @member {Array.<module:model/InstitutionalPortfolioInfo>} portfolio
 */

InstitutionalPortfolioGroup.prototype['portfolio'] = undefined;
var _default = InstitutionalPortfolioGroup;
exports["default"] = _default;