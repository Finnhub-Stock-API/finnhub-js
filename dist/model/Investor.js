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
 * The Investor model module.
 * @module model/Investor
 * @version 1.2.2
 */
var Investor = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Investor</code>.
   * @alias module:model/Investor
   */
  function Investor() {
    _classCallCheck(this, Investor);

    Investor.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Investor, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Investor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Investor} obj Optional instance to populate.
     * @return {module:model/Investor} The populated <code>Investor</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Investor();

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

  return Investor;
}();
/**
 * Investor's name.
 * @member {String} name
 */


Investor.prototype['name'] = undefined;
/**
 * Number of shares held by the investor.
 * @member {Number} share
 */

Investor.prototype['share'] = undefined;
/**
 * Number of share changed (net buy or sell) from the last period.
 * @member {Number} change
 */

Investor.prototype['change'] = undefined;
/**
 * Filing date.
 * @member {Date} filingDate
 */

Investor.prototype['filingDate'] = undefined;
var _default = Investor;
exports["default"] = _default;