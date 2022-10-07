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
 * The CryptoProfile model module.
 * @module model/CryptoProfile
 * @version 1.2.16
 */
var CryptoProfile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CryptoProfile</code>.
   * @alias module:model/CryptoProfile
   */
  function CryptoProfile() {
    _classCallCheck(this, CryptoProfile);

    CryptoProfile.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CryptoProfile, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CryptoProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CryptoProfile} obj Optional instance to populate.
     * @return {module:model/CryptoProfile} The populated <code>CryptoProfile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CryptoProfile();

        if (data.hasOwnProperty('longName')) {
          obj['longName'] = _ApiClient["default"].convertToType(data['longName'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('website')) {
          obj['website'] = _ApiClient["default"].convertToType(data['website'], 'String');
        }

        if (data.hasOwnProperty('marketCap')) {
          obj['marketCap'] = _ApiClient["default"].convertToType(data['marketCap'], 'Number');
        }

        if (data.hasOwnProperty('totalSupply')) {
          obj['totalSupply'] = _ApiClient["default"].convertToType(data['totalSupply'], 'Number');
        }

        if (data.hasOwnProperty('maxSupply')) {
          obj['maxSupply'] = _ApiClient["default"].convertToType(data['maxSupply'], 'Number');
        }

        if (data.hasOwnProperty('circulatingSupply')) {
          obj['circulatingSupply'] = _ApiClient["default"].convertToType(data['circulatingSupply'], 'Number');
        }

        if (data.hasOwnProperty('logo')) {
          obj['logo'] = _ApiClient["default"].convertToType(data['logo'], 'String');
        }

        if (data.hasOwnProperty('launchDate')) {
          obj['launchDate'] = _ApiClient["default"].convertToType(data['launchDate'], 'String');
        }

        if (data.hasOwnProperty('proofType')) {
          obj['proofType'] = _ApiClient["default"].convertToType(data['proofType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CryptoProfile;
}();
/**
 * Long name.
 * @member {String} longName
 */


CryptoProfile.prototype['longName'] = undefined;
/**
 * Name.
 * @member {String} name
 */

CryptoProfile.prototype['name'] = undefined;
/**
 * Description.
 * @member {String} description
 */

CryptoProfile.prototype['description'] = undefined;
/**
 * Project's website.
 * @member {String} website
 */

CryptoProfile.prototype['website'] = undefined;
/**
 * Market capitalization.
 * @member {Number} marketCap
 */

CryptoProfile.prototype['marketCap'] = undefined;
/**
 * Total supply.
 * @member {Number} totalSupply
 */

CryptoProfile.prototype['totalSupply'] = undefined;
/**
 * Max supply.
 * @member {Number} maxSupply
 */

CryptoProfile.prototype['maxSupply'] = undefined;
/**
 * Circulating supply.
 * @member {Number} circulatingSupply
 */

CryptoProfile.prototype['circulatingSupply'] = undefined;
/**
 * Logo image.
 * @member {String} logo
 */

CryptoProfile.prototype['logo'] = undefined;
/**
 * Launch date.
 * @member {String} launchDate
 */

CryptoProfile.prototype['launchDate'] = undefined;
/**
 * Proof type.
 * @member {String} proofType
 */

CryptoProfile.prototype['proofType'] = undefined;
var _default = CryptoProfile;
exports["default"] = _default;