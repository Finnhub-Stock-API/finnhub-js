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
 * The OwnershipInfo model module.
 * @module model/OwnershipInfo
 * @version 1.2.19
 */
var OwnershipInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OwnershipInfo</code>.
   * @alias module:model/OwnershipInfo
   */
  function OwnershipInfo() {
    _classCallCheck(this, OwnershipInfo);

    OwnershipInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OwnershipInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OwnershipInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OwnershipInfo} obj Optional instance to populate.
     * @return {module:model/OwnershipInfo} The populated <code>OwnershipInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OwnershipInfo();

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
      }

      return obj;
    }
  }]);

  return OwnershipInfo;
}();
/**
 * Investor's name.
 * @member {String} name
 */


OwnershipInfo.prototype['name'] = undefined;
/**
 * Number of shares held by the investor.
 * @member {Number} share
 */

OwnershipInfo.prototype['share'] = undefined;
/**
 * Number of share changed (net buy or sell) from the last period.
 * @member {Number} change
 */

OwnershipInfo.prototype['change'] = undefined;
/**
 * Filing date.
 * @member {Date} filingDate
 */

OwnershipInfo.prototype['filingDate'] = undefined;
var _default = OwnershipInfo;
exports["default"] = _default;