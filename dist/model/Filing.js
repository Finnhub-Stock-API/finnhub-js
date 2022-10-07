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
 * The Filing model module.
 * @module model/Filing
 * @version 1.2.16
 */
var Filing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Filing</code>.
   * @alias module:model/Filing
   */
  function Filing() {
    _classCallCheck(this, Filing);

    Filing.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Filing, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Filing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Filing} obj Optional instance to populate.
     * @return {module:model/Filing} The populated <code>Filing</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Filing();

        if (data.hasOwnProperty('accessNumber')) {
          obj['accessNumber'] = _ApiClient["default"].convertToType(data['accessNumber'], 'String');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('cik')) {
          obj['cik'] = _ApiClient["default"].convertToType(data['cik'], 'String');
        }

        if (data.hasOwnProperty('form')) {
          obj['form'] = _ApiClient["default"].convertToType(data['form'], 'String');
        }

        if (data.hasOwnProperty('filedDate')) {
          obj['filedDate'] = _ApiClient["default"].convertToType(data['filedDate'], 'String');
        }

        if (data.hasOwnProperty('acceptedDate')) {
          obj['acceptedDate'] = _ApiClient["default"].convertToType(data['acceptedDate'], 'String');
        }

        if (data.hasOwnProperty('reportUrl')) {
          obj['reportUrl'] = _ApiClient["default"].convertToType(data['reportUrl'], 'String');
        }

        if (data.hasOwnProperty('filingUrl')) {
          obj['filingUrl'] = _ApiClient["default"].convertToType(data['filingUrl'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Filing;
}();
/**
 * Access number.
 * @member {String} accessNumber
 */


Filing.prototype['accessNumber'] = undefined;
/**
 * Symbol.
 * @member {String} symbol
 */

Filing.prototype['symbol'] = undefined;
/**
 * CIK.
 * @member {String} cik
 */

Filing.prototype['cik'] = undefined;
/**
 * Form type.
 * @member {String} form
 */

Filing.prototype['form'] = undefined;
/**
 * Filed date <code>%Y-%m-%d %H:%M:%S</code>.
 * @member {String} filedDate
 */

Filing.prototype['filedDate'] = undefined;
/**
 * Accepted date <code>%Y-%m-%d %H:%M:%S</code>.
 * @member {String} acceptedDate
 */

Filing.prototype['acceptedDate'] = undefined;
/**
 * Report's URL.
 * @member {String} reportUrl
 */

Filing.prototype['reportUrl'] = undefined;
/**
 * Filing's URL.
 * @member {String} filingUrl
 */

Filing.prototype['filingUrl'] = undefined;
var _default = Filing;
exports["default"] = _default;