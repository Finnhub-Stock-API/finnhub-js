"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BondYieldCurveInfo = _interopRequireDefault(require("./BondYieldCurveInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BondYieldCurve model module.
 * @module model/BondYieldCurve
 * @version 1.2.19
 */
var BondYieldCurve = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BondYieldCurve</code>.
   * @alias module:model/BondYieldCurve
   */
  function BondYieldCurve() {
    _classCallCheck(this, BondYieldCurve);

    BondYieldCurve.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BondYieldCurve, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BondYieldCurve</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BondYieldCurve} obj Optional instance to populate.
     * @return {module:model/BondYieldCurve} The populated <code>BondYieldCurve</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BondYieldCurve();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_BondYieldCurveInfo["default"]]);
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BondYieldCurve;
}();
/**
 * Array of data.
 * @member {Array.<module:model/BondYieldCurveInfo>} data
 */


BondYieldCurve.prototype['data'] = undefined;
/**
 * Bond's code
 * @member {String} code
 */

BondYieldCurve.prototype['code'] = undefined;
var _default = BondYieldCurve;
exports["default"] = _default;