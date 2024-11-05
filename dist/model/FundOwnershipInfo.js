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
 * The FundOwnershipInfo model module.
 * @module model/FundOwnershipInfo
 * @version 1.2.19
 */
var FundOwnershipInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FundOwnershipInfo</code>.
   * @alias module:model/FundOwnershipInfo
   */
  function FundOwnershipInfo() {
    _classCallCheck(this, FundOwnershipInfo);

    FundOwnershipInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FundOwnershipInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FundOwnershipInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundOwnershipInfo} obj Optional instance to populate.
     * @return {module:model/FundOwnershipInfo} The populated <code>FundOwnershipInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FundOwnershipInfo();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('share')) {
          obj['share'] = _ApiClient["default"].convertToType(data['share'], 'Number');
        }

        if (data.hasOwnProperty('change')) {
          obj['change'] = _ApiClient["default"].convertToType(data['change'], 'Number');
        }

        if (data.hasOwnProperty('filingDate')) {
          obj['filingDate'] = _ApiClient["default"].convertToType(data['filingDate'], 'Date');
        }

        if (data.hasOwnProperty('portfolioPercent')) {
          obj['portfolioPercent'] = _ApiClient["default"].convertToType(data['portfolioPercent'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return FundOwnershipInfo;
}();
/**
 * Investor's name.
 * @member {String} name
 */


FundOwnershipInfo.prototype['name'] = undefined;
/**
 * Number of shares held by the investor.
 * @member {Number} share
 */

FundOwnershipInfo.prototype['share'] = undefined;
/**
 * Number of share changed (net buy or sell) from the last period.
 * @member {Number} change
 */

FundOwnershipInfo.prototype['change'] = undefined;
/**
 * Filing date.
 * @member {Date} filingDate
 */

FundOwnershipInfo.prototype['filingDate'] = undefined;
/**
 * Percent of the fund's portfolio comprised of the company's share.
 * @member {Number} portfolioPercent
 */

FundOwnershipInfo.prototype['portfolioPercent'] = undefined;
var _default = FundOwnershipInfo;
exports["default"] = _default;