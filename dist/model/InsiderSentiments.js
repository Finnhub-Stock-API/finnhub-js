"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InsiderSentimentsData = _interopRequireDefault(require("./InsiderSentimentsData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InsiderSentiments model module.
 * @module model/InsiderSentiments
 * @version 1.2.19
 */
var InsiderSentiments = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InsiderSentiments</code>.
   * @alias module:model/InsiderSentiments
   */
  function InsiderSentiments() {
    _classCallCheck(this, InsiderSentiments);

    InsiderSentiments.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InsiderSentiments, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InsiderSentiments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InsiderSentiments} obj Optional instance to populate.
     * @return {module:model/InsiderSentiments} The populated <code>InsiderSentiments</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InsiderSentiments();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_InsiderSentimentsData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InsiderSentiments;
}();
/**
 * Symbol of the company.
 * @member {String} symbol
 */


InsiderSentiments.prototype['symbol'] = undefined;
/**
 * Array of sentiment data.
 * @member {Array.<module:model/InsiderSentimentsData>} data
 */

InsiderSentiments.prototype['data'] = undefined;
var _default = InsiderSentiments;
exports["default"] = _default;