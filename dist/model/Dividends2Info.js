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
 * The Dividends2Info model module.
 * @module model/Dividends2Info
 * @version 1.2.16
 */
var Dividends2Info = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Dividends2Info</code>.
   * @alias module:model/Dividends2Info
   */
  function Dividends2Info() {
    _classCallCheck(this, Dividends2Info);

    Dividends2Info.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Dividends2Info, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Dividends2Info</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Dividends2Info} obj Optional instance to populate.
     * @return {module:model/Dividends2Info} The populated <code>Dividends2Info</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Dividends2Info();

        if (data.hasOwnProperty('exDate')) {
          obj['exDate'] = _ApiClient["default"].convertToType(data['exDate'], 'Date');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Dividends2Info;
}();
/**
 * Ex-Dividend date.
 * @member {Date} exDate
 */


Dividends2Info.prototype['exDate'] = undefined;
/**
 * Amount in local currency.
 * @member {Number} amount
 */

Dividends2Info.prototype['amount'] = undefined;
var _default = Dividends2Info;
exports["default"] = _default;