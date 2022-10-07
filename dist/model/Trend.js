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
 * The Trend model module.
 * @module model/Trend
 * @version 1.2.16
 */
var Trend = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Trend</code>.
   * @alias module:model/Trend
   */
  function Trend() {
    _classCallCheck(this, Trend);

    Trend.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Trend, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Trend</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Trend} obj Optional instance to populate.
     * @return {module:model/Trend} The populated <code>Trend</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Trend();

        if (data.hasOwnProperty('adx')) {
          obj['adx'] = _ApiClient["default"].convertToType(data['adx'], 'Number');
        }

        if (data.hasOwnProperty('trending')) {
          obj['trending'] = _ApiClient["default"].convertToType(data['trending'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Trend;
}();
/**
 * ADX reading
 * @member {Number} adx
 */


Trend.prototype['adx'] = undefined;
/**
 * Whether market is trending or going sideway
 * @member {Boolean} trending
 */

Trend.prototype['trending'] = undefined;
var _default = Trend;
exports["default"] = _default;