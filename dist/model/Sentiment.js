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
 * The Sentiment model module.
 * @module model/Sentiment
 * @version 1.2.15
 */
var Sentiment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Sentiment</code>.
   * @alias module:model/Sentiment
   */
  function Sentiment() {
    _classCallCheck(this, Sentiment);

    Sentiment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Sentiment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Sentiment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Sentiment} obj Optional instance to populate.
     * @return {module:model/Sentiment} The populated <code>Sentiment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Sentiment();

        if (data.hasOwnProperty('bearishPercent')) {
          obj['bearishPercent'] = _ApiClient["default"].convertToType(data['bearishPercent'], 'Number');
        }

        if (data.hasOwnProperty('bullishPercent')) {
          obj['bullishPercent'] = _ApiClient["default"].convertToType(data['bullishPercent'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Sentiment;
}();
/**
 * 
 * @member {Number} bearishPercent
 */


Sentiment.prototype['bearishPercent'] = undefined;
/**
 * 
 * @member {Number} bullishPercent
 */

Sentiment.prototype['bullishPercent'] = undefined;
var _default = Sentiment;
exports["default"] = _default;