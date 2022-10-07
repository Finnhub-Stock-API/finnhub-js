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
 * The InsiderSentimentsData model module.
 * @module model/InsiderSentimentsData
 * @version 1.2.16
 */
var InsiderSentimentsData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InsiderSentimentsData</code>.
   * @alias module:model/InsiderSentimentsData
   */
  function InsiderSentimentsData() {
    _classCallCheck(this, InsiderSentimentsData);

    InsiderSentimentsData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InsiderSentimentsData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InsiderSentimentsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InsiderSentimentsData} obj Optional instance to populate.
     * @return {module:model/InsiderSentimentsData} The populated <code>InsiderSentimentsData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InsiderSentimentsData();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('year')) {
          obj['year'] = _ApiClient["default"].convertToType(data['year'], 'Number');
        }

        if (data.hasOwnProperty('month')) {
          obj['month'] = _ApiClient["default"].convertToType(data['month'], 'Number');
        }

        if (data.hasOwnProperty('change')) {
          obj['change'] = _ApiClient["default"].convertToType(data['change'], 'Number');
        }

        if (data.hasOwnProperty('mspr')) {
          obj['mspr'] = _ApiClient["default"].convertToType(data['mspr'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InsiderSentimentsData;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


InsiderSentimentsData.prototype['symbol'] = undefined;
/**
 * Year.
 * @member {Number} year
 */

InsiderSentimentsData.prototype['year'] = undefined;
/**
 * Month.
 * @member {Number} month
 */

InsiderSentimentsData.prototype['month'] = undefined;
/**
 * Net buying/selling from all insiders' transactions.
 * @member {Number} change
 */

InsiderSentimentsData.prototype['change'] = undefined;
/**
 * Monthly share purchase ratio.
 * @member {Number} mspr
 */

InsiderSentimentsData.prototype['mspr'] = undefined;
var _default = InsiderSentimentsData;
exports["default"] = _default;