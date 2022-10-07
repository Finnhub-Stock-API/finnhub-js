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
 * The TickData model module.
 * @module model/TickData
 * @version 1.2.16
 */
var TickData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TickData</code>.
   * @alias module:model/TickData
   */
  function TickData() {
    _classCallCheck(this, TickData);

    TickData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TickData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TickData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TickData} obj Optional instance to populate.
     * @return {module:model/TickData} The populated <code>TickData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TickData();

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

        if (data.hasOwnProperty('v')) {
          obj['v'] = _ApiClient["default"].convertToType(data['v'], ['Number']);
        }

        if (data.hasOwnProperty('p')) {
          obj['p'] = _ApiClient["default"].convertToType(data['p'], ['Number']);
        }

        if (data.hasOwnProperty('t')) {
          obj['t'] = _ApiClient["default"].convertToType(data['t'], ['Number']);
        }

        if (data.hasOwnProperty('x')) {
          obj['x'] = _ApiClient["default"].convertToType(data['x'], ['String']);
        }

        if (data.hasOwnProperty('c')) {
          obj['c'] = _ApiClient["default"].convertToType(data['c'], [['String']]);
        }
      }

      return obj;
    }
  }]);

  return TickData;
}();
/**
 * Symbol.
 * @member {String} s
 */


TickData.prototype['s'] = undefined;
/**
 * Number of ticks skipped.
 * @member {Number} skip
 */

TickData.prototype['skip'] = undefined;
/**
 * Number of ticks returned. If <code>count</code> < <code>limit</code>, all data for that date has been returned.
 * @member {Number} count
 */

TickData.prototype['count'] = undefined;
/**
 * Total number of ticks for that date.
 * @member {Number} total
 */

TickData.prototype['total'] = undefined;
/**
 * List of volume data.
 * @member {Array.<Number>} v
 */

TickData.prototype['v'] = undefined;
/**
 * List of price data.
 * @member {Array.<Number>} p
 */

TickData.prototype['p'] = undefined;
/**
 * List of timestamp in UNIX ms.
 * @member {Array.<Number>} t
 */

TickData.prototype['t'] = undefined;
/**
 * List of venues/exchanges. A list of exchange codes can be found <a target=\"_blank\" href=\"https://docs.google.com/spreadsheets/d/1Tj53M1svmr-hfEtbk6_NpVR1yAyGLMaH6ByYU6CG0ZY/edit?usp=sharing\",>here</a>
 * @member {Array.<String>} x
 */

TickData.prototype['x'] = undefined;
/**
 * List of trade conditions. A comprehensive list of trade conditions code can be found <a target=\"_blank\" href=\"https://docs.google.com/spreadsheets/d/1PUxiSWPHSODbaTaoL2Vef6DgU-yFtlRGZf19oBb9Hp0/edit?usp=sharing\">here</a>
 * @member {Array.<Array.<String>>} c
 */

TickData.prototype['c'] = undefined;
var _default = TickData;
exports["default"] = _default;