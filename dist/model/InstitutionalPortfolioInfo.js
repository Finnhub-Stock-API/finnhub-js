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
 * The InstitutionalPortfolioInfo model module.
 * @module model/InstitutionalPortfolioInfo
 * @version 1.2.19
 */
var InstitutionalPortfolioInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstitutionalPortfolioInfo</code>.
   * @alias module:model/InstitutionalPortfolioInfo
   */
  function InstitutionalPortfolioInfo() {
    _classCallCheck(this, InstitutionalPortfolioInfo);

    InstitutionalPortfolioInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstitutionalPortfolioInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstitutionalPortfolioInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstitutionalPortfolioInfo} obj Optional instance to populate.
     * @return {module:model/InstitutionalPortfolioInfo} The populated <code>InstitutionalPortfolioInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstitutionalPortfolioInfo();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('cusip')) {
          obj['cusip'] = _ApiClient["default"].convertToType(data['cusip'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('putCall')) {
          obj['putCall'] = _ApiClient["default"].convertToType(data['putCall'], 'String');
        }

        if (data.hasOwnProperty('change')) {
          obj['change'] = _ApiClient["default"].convertToType(data['change'], 'Number');
        }

        if (data.hasOwnProperty('noVoting')) {
          obj['noVoting'] = _ApiClient["default"].convertToType(data['noVoting'], 'Number');
        }

        if (data.hasOwnProperty('percentage')) {
          obj['percentage'] = _ApiClient["default"].convertToType(data['percentage'], 'Number');
        }

        if (data.hasOwnProperty('share')) {
          obj['share'] = _ApiClient["default"].convertToType(data['share'], 'Number');
        }

        if (data.hasOwnProperty('sharedVoting')) {
          obj['sharedVoting'] = _ApiClient["default"].convertToType(data['sharedVoting'], 'Number');
        }

        if (data.hasOwnProperty('soleVoting')) {
          obj['soleVoting'] = _ApiClient["default"].convertToType(data['soleVoting'], 'Number');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InstitutionalPortfolioInfo;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


InstitutionalPortfolioInfo.prototype['symbol'] = undefined;
/**
 * CUSIP.
 * @member {String} cusip
 */

InstitutionalPortfolioInfo.prototype['cusip'] = undefined;
/**
 * Position's name.
 * @member {String} name
 */

InstitutionalPortfolioInfo.prototype['name'] = undefined;
/**
 * <code>put</code> or <code>call</code> for options.
 * @member {String} putCall
 */

InstitutionalPortfolioInfo.prototype['putCall'] = undefined;
/**
 * Number of shares change.
 * @member {Number} change
 */

InstitutionalPortfolioInfo.prototype['change'] = undefined;
/**
 * Number of shares with no voting rights.
 * @member {Number} noVoting
 */

InstitutionalPortfolioInfo.prototype['noVoting'] = undefined;
/**
 * Percentage of portfolio.
 * @member {Number} percentage
 */

InstitutionalPortfolioInfo.prototype['percentage'] = undefined;
/**
 * Number of shares.
 * @member {Number} share
 */

InstitutionalPortfolioInfo.prototype['share'] = undefined;
/**
 * Number of shares with shared voting rights.
 * @member {Number} sharedVoting
 */

InstitutionalPortfolioInfo.prototype['sharedVoting'] = undefined;
/**
 * Number of shares with sole voting rights.
 * @member {Number} soleVoting
 */

InstitutionalPortfolioInfo.prototype['soleVoting'] = undefined;
/**
 * Position value.
 * @member {Number} value
 */

InstitutionalPortfolioInfo.prototype['value'] = undefined;
var _default = InstitutionalPortfolioInfo;
exports["default"] = _default;