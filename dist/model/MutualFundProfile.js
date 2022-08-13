"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MutualFundProfileData = _interopRequireDefault(require("./MutualFundProfileData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MutualFundProfile model module.
 * @module model/MutualFundProfile
 * @version 1.2.15
 */
var MutualFundProfile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MutualFundProfile</code>.
   * @alias module:model/MutualFundProfile
   */
  function MutualFundProfile() {
    _classCallCheck(this, MutualFundProfile);

    MutualFundProfile.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MutualFundProfile, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MutualFundProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualFundProfile} obj Optional instance to populate.
     * @return {module:model/MutualFundProfile} The populated <code>MutualFundProfile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MutualFundProfile();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('profile')) {
          obj['profile'] = _MutualFundProfileData["default"].constructFromObject(data['profile']);
        }
      }

      return obj;
    }
  }]);

  return MutualFundProfile;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


MutualFundProfile.prototype['symbol'] = undefined;
/**
 * @member {module:model/MutualFundProfileData} profile
 */

MutualFundProfile.prototype['profile'] = undefined;
var _default = MutualFundProfile;
exports["default"] = _default;