"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CompanyESG = _interopRequireDefault(require("./CompanyESG2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HistoricalCompanyESG model module.
 * @module model/HistoricalCompanyESG
 * @version 1.2.19
 */
var HistoricalCompanyESG = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoricalCompanyESG</code>.
   * @alias module:model/HistoricalCompanyESG
   */
  function HistoricalCompanyESG() {
    _classCallCheck(this, HistoricalCompanyESG);

    HistoricalCompanyESG.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoricalCompanyESG, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoricalCompanyESG</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalCompanyESG} obj Optional instance to populate.
     * @return {module:model/HistoricalCompanyESG} The populated <code>HistoricalCompanyESG</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoricalCompanyESG();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_CompanyESG["default"]]);
        }
      }

      return obj;
    }
  }]);

  return HistoricalCompanyESG;
}();
/**
 * symbol
 * @member {String} symbol
 */


HistoricalCompanyESG.prototype['symbol'] = undefined;
/**
 * Historical ESG data points.
 * @member {Array.<module:model/CompanyESG2>} data
 */

HistoricalCompanyESG.prototype['data'] = undefined;
var _default = HistoricalCompanyESG;
exports["default"] = _default;