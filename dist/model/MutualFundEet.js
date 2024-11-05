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
 * The MutualFundEet model module.
 * @module model/MutualFundEet
 * @version 1.2.19
 */
var MutualFundEet = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MutualFundEet</code>.
   * @alias module:model/MutualFundEet
   */
  function MutualFundEet() {
    _classCallCheck(this, MutualFundEet);

    MutualFundEet.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MutualFundEet, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MutualFundEet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualFundEet} obj Optional instance to populate.
     * @return {module:model/MutualFundEet} The populated <code>MutualFundEet</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MutualFundEet();

        if (data.hasOwnProperty('isin')) {
          obj['isin'] = _ApiClient["default"].convertToType(data['isin'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], Object);
        }
      }

      return obj;
    }
  }]);

  return MutualFundEet;
}();
/**
 * ISIN.
 * @member {String} isin
 */


MutualFundEet.prototype['isin'] = undefined;
/**
 * @member {Object} data
 */

MutualFundEet.prototype['data'] = undefined;
var _default = MutualFundEet;
exports["default"] = _default;