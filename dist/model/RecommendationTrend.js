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
 * The RecommendationTrend model module.
 * @module model/RecommendationTrend
 * @version 1.2.16
 */
var RecommendationTrend = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RecommendationTrend</code>.
   * @alias module:model/RecommendationTrend
   */
  function RecommendationTrend() {
    _classCallCheck(this, RecommendationTrend);

    RecommendationTrend.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RecommendationTrend, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RecommendationTrend</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecommendationTrend} obj Optional instance to populate.
     * @return {module:model/RecommendationTrend} The populated <code>RecommendationTrend</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RecommendationTrend();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('buy')) {
          obj['buy'] = _ApiClient["default"].convertToType(data['buy'], 'Number');
        }

        if (data.hasOwnProperty('hold')) {
          obj['hold'] = _ApiClient["default"].convertToType(data['hold'], 'Number');
        }

        if (data.hasOwnProperty('period')) {
          obj['period'] = _ApiClient["default"].convertToType(data['period'], 'String');
        }

        if (data.hasOwnProperty('sell')) {
          obj['sell'] = _ApiClient["default"].convertToType(data['sell'], 'Number');
        }

        if (data.hasOwnProperty('strongBuy')) {
          obj['strongBuy'] = _ApiClient["default"].convertToType(data['strongBuy'], 'Number');
        }

        if (data.hasOwnProperty('strongSell')) {
          obj['strongSell'] = _ApiClient["default"].convertToType(data['strongSell'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RecommendationTrend;
}();
/**
 * Company symbol.
 * @member {String} symbol
 */


RecommendationTrend.prototype['symbol'] = undefined;
/**
 * Number of recommendations that fall into the Buy category
 * @member {Number} buy
 */

RecommendationTrend.prototype['buy'] = undefined;
/**
 * Number of recommendations that fall into the Hold category
 * @member {Number} hold
 */

RecommendationTrend.prototype['hold'] = undefined;
/**
 * Updated period
 * @member {String} period
 */

RecommendationTrend.prototype['period'] = undefined;
/**
 * Number of recommendations that fall into the Sell category
 * @member {Number} sell
 */

RecommendationTrend.prototype['sell'] = undefined;
/**
 * Number of recommendations that fall into the Strong Buy category
 * @member {Number} strongBuy
 */

RecommendationTrend.prototype['strongBuy'] = undefined;
/**
 * Number of recommendations that fall into the Strong Sell category
 * @member {Number} strongSell
 */

RecommendationTrend.prototype['strongSell'] = undefined;
var _default = RecommendationTrend;
exports["default"] = _default;