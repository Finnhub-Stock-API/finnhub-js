"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FundOwnershipInfo = _interopRequireDefault(require("./FundOwnershipInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FundOwnership model module.
 * @module model/FundOwnership
 * @version 1.2.15
 */
var FundOwnership = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FundOwnership</code>.
   * @alias module:model/FundOwnership
   */
  function FundOwnership() {
    _classCallCheck(this, FundOwnership);

    FundOwnership.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FundOwnership, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FundOwnership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundOwnership} obj Optional instance to populate.
     * @return {module:model/FundOwnership} The populated <code>FundOwnership</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FundOwnership();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('ownership')) {
          obj['ownership'] = _ApiClient["default"].convertToType(data['ownership'], [_FundOwnershipInfo["default"]]);
        }
      }

      return obj;
    }
  }]);

  return FundOwnership;
}();
/**
 * Symbol of the company.
 * @member {String} symbol
 */


FundOwnership.prototype['symbol'] = undefined;
/**
 * Array of investors with detailed information about their holdings.
 * @member {Array.<module:model/FundOwnershipInfo>} ownership
 */

FundOwnership.prototype['ownership'] = undefined;
var _default = FundOwnership;
exports["default"] = _default;