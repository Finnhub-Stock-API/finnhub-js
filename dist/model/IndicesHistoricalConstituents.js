"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IndexHistoricalConstituent = _interopRequireDefault(require("./IndexHistoricalConstituent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IndicesHistoricalConstituents model module.
 * @module model/IndicesHistoricalConstituents
 * @version 1.2.16
 */
var IndicesHistoricalConstituents = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IndicesHistoricalConstituents</code>.
   * @alias module:model/IndicesHistoricalConstituents
   */
  function IndicesHistoricalConstituents() {
    _classCallCheck(this, IndicesHistoricalConstituents);

    IndicesHistoricalConstituents.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IndicesHistoricalConstituents, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IndicesHistoricalConstituents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IndicesHistoricalConstituents} obj Optional instance to populate.
     * @return {module:model/IndicesHistoricalConstituents} The populated <code>IndicesHistoricalConstituents</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IndicesHistoricalConstituents();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('historicalConstituents')) {
          obj['historicalConstituents'] = _ApiClient["default"].convertToType(data['historicalConstituents'], [_IndexHistoricalConstituent["default"]]);
        }
      }

      return obj;
    }
  }]);

  return IndicesHistoricalConstituents;
}();
/**
 * Index's symbol.
 * @member {String} symbol
 */


IndicesHistoricalConstituents.prototype['symbol'] = undefined;
/**
 * Array of historical constituents.
 * @member {Array.<module:model/IndexHistoricalConstituent>} historicalConstituents
 */

IndicesHistoricalConstituents.prototype['historicalConstituents'] = undefined;
var _default = IndicesHistoricalConstituents;
exports["default"] = _default;