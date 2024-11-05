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
 * The BondTickData model module.
 * @module model/BondTickData
 * @version 1.2.19
 */
var BondTickData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BondTickData</code>.
   * @alias module:model/BondTickData
   */
  function BondTickData() {
    _classCallCheck(this, BondTickData);

    BondTickData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BondTickData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BondTickData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BondTickData} obj Optional instance to populate.
     * @return {module:model/BondTickData} The populated <code>BondTickData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BondTickData();

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

        if (data.hasOwnProperty('y')) {
          obj['y'] = _ApiClient["default"].convertToType(data['y'], ['Number']);
        }

        if (data.hasOwnProperty('t')) {
          obj['t'] = _ApiClient["default"].convertToType(data['t'], ['Number']);
        }

        if (data.hasOwnProperty('si')) {
          obj['si'] = _ApiClient["default"].convertToType(data['si'], ['String']);
        }

        if (data.hasOwnProperty('cp')) {
          obj['cp'] = _ApiClient["default"].convertToType(data['cp'], ['String']);
        }

        if (data.hasOwnProperty('rp')) {
          obj['rp'] = _ApiClient["default"].convertToType(data['rp'], ['String']);
        }

        if (data.hasOwnProperty('ats')) {
          obj['ats'] = _ApiClient["default"].convertToType(data['ats'], ['String']);
        }

        if (data.hasOwnProperty('c')) {
          obj['c'] = _ApiClient["default"].convertToType(data['c'], [['String']]);
        }
      }

      return obj;
    }
  }]);

  return BondTickData;
}();
/**
 * Number of ticks skipped.
 * @member {Number} skip
 */


BondTickData.prototype['skip'] = undefined;
/**
 * Number of ticks returned. If <code>count</code> < <code>limit</code>, all data for that date has been returned.
 * @member {Number} count
 */

BondTickData.prototype['count'] = undefined;
/**
 * Total number of ticks for that date.
 * @member {Number} total
 */

BondTickData.prototype['total'] = undefined;
/**
 * List of volume data.
 * @member {Array.<Number>} v
 */

BondTickData.prototype['v'] = undefined;
/**
 * List of price data.
 * @member {Array.<Number>} p
 */

BondTickData.prototype['p'] = undefined;
/**
 * List of yield data.
 * @member {Array.<Number>} y
 */

BondTickData.prototype['y'] = undefined;
/**
 * List of timestamp in UNIX ms.
 * @member {Array.<Number>} t
 */

BondTickData.prototype['t'] = undefined;
/**
 * List of values showing the side (Buy/sell) of each trade. List of supported values: <a target=\"_blank\" href=\"https://docs.google.com/spreadsheets/d/1O3aueXSPOqo7Iuyz4PqDG6yZunHsX8BTefZ2kFk5pz4/edit?usp=sharing\",>here</a>
 * @member {Array.<String>} si
 */

BondTickData.prototype['si'] = undefined;
/**
 * List of values showing the counterparty of each trade. List of supported values: <a target=\"_blank\" href=\"https://docs.google.com/spreadsheets/d/1O3aueXSPOqo7Iuyz4PqDG6yZunHsX8BTefZ2kFk5pz4/edit?usp=sharing\",>here</a>
 * @member {Array.<String>} cp
 */

BondTickData.prototype['cp'] = undefined;
/**
 * List of values showing the reporting party of each trade. List of supported values: <a target=\"_blank\" href=\"https://docs.google.com/spreadsheets/d/1O3aueXSPOqo7Iuyz4PqDG6yZunHsX8BTefZ2kFk5pz4/edit?usp=sharing\",>here</a>
 * @member {Array.<String>} rp
 */

BondTickData.prototype['rp'] = undefined;
/**
 * ATS flag. Y or empty
 * @member {Array.<String>} ats
 */

BondTickData.prototype['ats'] = undefined;
/**
 * List of trade conditions. A comprehensive list of trade conditions code can be found <a target=\"_blank\" href=\"https://docs.google.com/spreadsheets/d/1O3aueXSPOqo7Iuyz4PqDG6yZunHsX8BTefZ2kFk5pz4/edit?usp=sharing\">here</a>
 * @member {Array.<Array.<String>>} c
 */

BondTickData.prototype['c'] = undefined;
var _default = BondTickData;
exports["default"] = _default;