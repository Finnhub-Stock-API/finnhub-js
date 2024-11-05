"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IPOEvent = _interopRequireDefault(require("./IPOEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IPOCalendar model module.
 * @module model/IPOCalendar
 * @version 1.2.19
 */
var IPOCalendar = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IPOCalendar</code>.
   * @alias module:model/IPOCalendar
   */
  function IPOCalendar() {
    _classCallCheck(this, IPOCalendar);

    IPOCalendar.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IPOCalendar, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IPOCalendar</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IPOCalendar} obj Optional instance to populate.
     * @return {module:model/IPOCalendar} The populated <code>IPOCalendar</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IPOCalendar();

        if (data.hasOwnProperty('ipoCalendar')) {
          obj['ipoCalendar'] = _ApiClient["default"].convertToType(data['ipoCalendar'], [_IPOEvent["default"]]);
        }
      }

      return obj;
    }
  }]);

  return IPOCalendar;
}();
/**
 * Array of IPO events.
 * @member {Array.<module:model/IPOEvent>} ipoCalendar
 */


IPOCalendar.prototype['ipoCalendar'] = undefined;
var _default = IPOCalendar;
exports["default"] = _default;