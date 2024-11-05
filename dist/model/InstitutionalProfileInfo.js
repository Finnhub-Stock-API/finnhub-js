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
 * The InstitutionalProfileInfo model module.
 * @module model/InstitutionalProfileInfo
 * @version 1.2.19
 */
var InstitutionalProfileInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstitutionalProfileInfo</code>.
   * @alias module:model/InstitutionalProfileInfo
   */
  function InstitutionalProfileInfo() {
    _classCallCheck(this, InstitutionalProfileInfo);

    InstitutionalProfileInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstitutionalProfileInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstitutionalProfileInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstitutionalProfileInfo} obj Optional instance to populate.
     * @return {module:model/InstitutionalProfileInfo} The populated <code>InstitutionalProfileInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstitutionalProfileInfo();

        if (data.hasOwnProperty('cik')) {
          obj['cik'] = _ApiClient["default"].convertToType(data['cik'], 'String');
        }

        if (data.hasOwnProperty('firmType')) {
          obj['firmType'] = _ApiClient["default"].convertToType(data['firmType'], 'String');
        }

        if (data.hasOwnProperty('manager')) {
          obj['manager'] = _ApiClient["default"].convertToType(data['manager'], 'String');
        }

        if (data.hasOwnProperty('philosophy')) {
          obj['philosophy'] = _ApiClient["default"].convertToType(data['philosophy'], 'String');
        }

        if (data.hasOwnProperty('profile')) {
          obj['profile'] = _ApiClient["default"].convertToType(data['profile'], 'String');
        }

        if (data.hasOwnProperty('profileImg')) {
          obj['profileImg'] = _ApiClient["default"].convertToType(data['profileImg'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InstitutionalProfileInfo;
}();
/**
 * Investor's company CIK.
 * @member {String} cik
 */


InstitutionalProfileInfo.prototype['cik'] = undefined;
/**
 * Firm type.
 * @member {String} firmType
 */

InstitutionalProfileInfo.prototype['firmType'] = undefined;
/**
 * Manager.
 * @member {String} manager
 */

InstitutionalProfileInfo.prototype['manager'] = undefined;
/**
 * Investing philosophy.
 * @member {String} philosophy
 */

InstitutionalProfileInfo.prototype['philosophy'] = undefined;
/**
 * Profile info.
 * @member {String} profile
 */

InstitutionalProfileInfo.prototype['profile'] = undefined;
/**
 * Profile image.
 * @member {String} profileImg
 */

InstitutionalProfileInfo.prototype['profileImg'] = undefined;
var _default = InstitutionalProfileInfo;
exports["default"] = _default;