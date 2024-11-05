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
 * The IndicesConstituentsBreakdown model module.
 * @module model/IndicesConstituentsBreakdown
 * @version 1.2.19
 */
var IndicesConstituentsBreakdown = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IndicesConstituentsBreakdown</code>.
   * @alias module:model/IndicesConstituentsBreakdown
   */
  function IndicesConstituentsBreakdown() {
    _classCallCheck(this, IndicesConstituentsBreakdown);

    IndicesConstituentsBreakdown.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IndicesConstituentsBreakdown, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IndicesConstituentsBreakdown</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IndicesConstituentsBreakdown} obj Optional instance to populate.
     * @return {module:model/IndicesConstituentsBreakdown} The populated <code>IndicesConstituentsBreakdown</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IndicesConstituentsBreakdown();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('isin')) {
          obj['isin'] = _ApiClient["default"].convertToType(data['isin'], 'String');
        }

        if (data.hasOwnProperty('cusip')) {
          obj['cusip'] = _ApiClient["default"].convertToType(data['cusip'], 'String');
        }

        if (data.hasOwnProperty('shareClassFIGI')) {
          obj['shareClassFIGI'] = _ApiClient["default"].convertToType(data['shareClassFIGI'], 'String');
        }

        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _ApiClient["default"].convertToType(data['weight'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return IndicesConstituentsBreakdown;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


IndicesConstituentsBreakdown.prototype['symbol'] = undefined;
/**
 * Name.
 * @member {String} name
 */

IndicesConstituentsBreakdown.prototype['name'] = undefined;
/**
 * ISIN.
 * @member {String} isin
 */

IndicesConstituentsBreakdown.prototype['isin'] = undefined;
/**
 * Cusip.
 * @member {String} cusip
 */

IndicesConstituentsBreakdown.prototype['cusip'] = undefined;
/**
 * Global Share Class FIGI.
 * @member {String} shareClassFIGI
 */

IndicesConstituentsBreakdown.prototype['shareClassFIGI'] = undefined;
/**
 * Weight.
 * @member {Number} weight
 */

IndicesConstituentsBreakdown.prototype['weight'] = undefined;
var _default = IndicesConstituentsBreakdown;
exports["default"] = _default;