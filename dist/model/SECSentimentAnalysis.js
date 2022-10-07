"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilingSentiment = _interopRequireDefault(require("./FilingSentiment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SECSentimentAnalysis model module.
 * @module model/SECSentimentAnalysis
 * @version 1.2.16
 */
var SECSentimentAnalysis = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SECSentimentAnalysis</code>.
   * @alias module:model/SECSentimentAnalysis
   */
  function SECSentimentAnalysis() {
    _classCallCheck(this, SECSentimentAnalysis);

    SECSentimentAnalysis.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SECSentimentAnalysis, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SECSentimentAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SECSentimentAnalysis} obj Optional instance to populate.
     * @return {module:model/SECSentimentAnalysis} The populated <code>SECSentimentAnalysis</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SECSentimentAnalysis();

        if (data.hasOwnProperty('accessNumber')) {
          obj['accessNumber'] = _ApiClient["default"].convertToType(data['accessNumber'], 'String');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('cik')) {
          obj['cik'] = _ApiClient["default"].convertToType(data['cik'], 'String');
        }

        if (data.hasOwnProperty('sentiment')) {
          obj['sentiment'] = _FilingSentiment["default"].constructFromObject(data['sentiment']);
        }
      }

      return obj;
    }
  }]);

  return SECSentimentAnalysis;
}();
/**
 * Access number.
 * @member {String} accessNumber
 */


SECSentimentAnalysis.prototype['accessNumber'] = undefined;
/**
 * Symbol.
 * @member {String} symbol
 */

SECSentimentAnalysis.prototype['symbol'] = undefined;
/**
 * CIK.
 * @member {String} cik
 */

SECSentimentAnalysis.prototype['cik'] = undefined;
/**
 * @member {module:model/FilingSentiment} sentiment
 */

SECSentimentAnalysis.prototype['sentiment'] = undefined;
var _default = SECSentimentAnalysis;
exports["default"] = _default;