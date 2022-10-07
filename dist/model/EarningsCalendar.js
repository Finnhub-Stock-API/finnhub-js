"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EarningRelease = _interopRequireDefault(require("./EarningRelease"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EarningsCalendar model module.
 * @module model/EarningsCalendar
 * @version 1.2.16
 */
var EarningsCalendar = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EarningsCalendar</code>.
   * @alias module:model/EarningsCalendar
   */
  function EarningsCalendar() {
    _classCallCheck(this, EarningsCalendar);

    EarningsCalendar.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EarningsCalendar, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EarningsCalendar</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EarningsCalendar} obj Optional instance to populate.
     * @return {module:model/EarningsCalendar} The populated <code>EarningsCalendar</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EarningsCalendar();

        if (data.hasOwnProperty('earningsCalendar')) {
          obj['earningsCalendar'] = _ApiClient["default"].convertToType(data['earningsCalendar'], [_EarningRelease["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EarningsCalendar;
}();
/**
 * Array of earnings release.
 * @member {Array.<module:model/EarningRelease>} earningsCalendar
 */


EarningsCalendar.prototype['earningsCalendar'] = undefined;
var _default = EarningsCalendar;
exports["default"] = _default;