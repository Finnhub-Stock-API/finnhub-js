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
 * The HistoricalNBBO model module.
 * @module model/HistoricalNBBO
 * @version 1.2.16
 */
var HistoricalNBBO = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoricalNBBO</code>.
   * @alias module:model/HistoricalNBBO
   */
  function HistoricalNBBO() {
    _classCallCheck(this, HistoricalNBBO);

    HistoricalNBBO.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoricalNBBO, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoricalNBBO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalNBBO} obj Optional instance to populate.
     * @return {module:model/HistoricalNBBO} The populated <code>HistoricalNBBO</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoricalNBBO();

        if (data.hasOwnProperty('s')) {
          obj['s'] = _ApiClient["default"].convertToType(data['s'], 'String');
        }

        if (data.hasOwnProperty('skip')) {
          obj['skip'] = _ApiClient["default"].convertToType(data['skip'], 'Number');
        }

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('av')) {
          obj['av'] = _ApiClient["default"].convertToType(data['av'], ['Number']);
        }

        if (data.hasOwnProperty('a')) {
          obj['a'] = _ApiClient["default"].convertToType(data['a'], ['Number']);
        }

        if (data.hasOwnProperty('ax')) {
          obj['ax'] = _ApiClient["default"].convertToType(data['ax'], ['String']);
        }

        if (data.hasOwnProperty('bv')) {
          obj['bv'] = _ApiClient["default"].convertToType(data['bv'], ['Number']);
        }

        if (data.hasOwnProperty('b')) {
          obj['b'] = _ApiClient["default"].convertToType(data['b'], ['Number']);
        }

        if (data.hasOwnProperty('bx')) {
          obj['bx'] = _ApiClient["default"].convertToType(data['bx'], ['String']);
        }

        if (data.hasOwnProperty('t')) {
          obj['t'] = _ApiClient["default"].convertToType(data['t'], ['Number']);
        }

        if (data.hasOwnProperty('c')) {
          obj['c'] = _ApiClient["default"].convertToType(data['c'], [['String']]);
        }
      }

      return obj;
    }
  }]);

  return HistoricalNBBO;
}();
/**
 * Symbol.
 * @member {String} s
 */


HistoricalNBBO.prototype['s'] = undefined;
/**
 * Number of ticks skipped.
 * @member {Number} skip
 */

HistoricalNBBO.prototype['skip'] = undefined;
/**
 * Number of ticks returned. If <code>count</code> < <code>limit</code>, all data for that date has been returned.
 * @member {Number} count
 */

HistoricalNBBO.prototype['count'] = undefined;
/**
 * Total number of ticks for that date.
 * @member {Number} total
 */

HistoricalNBBO.prototype['total'] = undefined;
/**
 * List of Ask volume data.
 * @member {Array.<Number>} av
 */

HistoricalNBBO.prototype['av'] = undefined;
/**
 * List of Ask price data.
 * @member {Array.<Number>} a
 */

HistoricalNBBO.prototype['a'] = undefined;
/**
 * List of venues/exchanges - Ask price. A list of exchange codes can be found <a target=\"_blank\" href=\"https://docs.google.com/spreadsheets/d/1Tj53M1svmr-hfEtbk6_NpVR1yAyGLMaH6ByYU6CG0ZY/edit?usp=sharing\",>here</a>
 * @member {Array.<String>} ax
 */

HistoricalNBBO.prototype['ax'] = undefined;
/**
 * List of Bid volume data.
 * @member {Array.<Number>} bv
 */

HistoricalNBBO.prototype['bv'] = undefined;
/**
 * List of Bid price data.
 * @member {Array.<Number>} b
 */

HistoricalNBBO.prototype['b'] = undefined;
/**
 * List of venues/exchanges - Bid price. A list of exchange codes can be found <a target=\"_blank\" href=\"https://docs.google.com/spreadsheets/d/1Tj53M1svmr-hfEtbk6_NpVR1yAyGLMaH6ByYU6CG0ZY/edit?usp=sharing\",>here</a>
 * @member {Array.<String>} bx
 */

HistoricalNBBO.prototype['bx'] = undefined;
/**
 * List of timestamp in UNIX ms.
 * @member {Array.<Number>} t
 */

HistoricalNBBO.prototype['t'] = undefined;
/**
 * List of quote conditions. A comprehensive list of quote conditions code can be found <a target=\"_blank\" href=\"https://docs.google.com/spreadsheets/d/1iiA6e7Osdtai0oPMOUzgAIKXCsay89dFDmsegz6OpEg/edit?usp=sharing\">here</a>
 * @member {Array.<Array.<String>>} c
 */

HistoricalNBBO.prototype['c'] = undefined;
var _default = HistoricalNBBO;
exports["default"] = _default;