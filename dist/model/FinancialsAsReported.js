"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Report = _interopRequireDefault(require("./Report"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FinancialsAsReported model module.
 * @module model/FinancialsAsReported
 * @version 1.2.16
 */
var FinancialsAsReported = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FinancialsAsReported</code>.
   * @alias module:model/FinancialsAsReported
   */
  function FinancialsAsReported() {
    _classCallCheck(this, FinancialsAsReported);

    FinancialsAsReported.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FinancialsAsReported, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FinancialsAsReported</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FinancialsAsReported} obj Optional instance to populate.
     * @return {module:model/FinancialsAsReported} The populated <code>FinancialsAsReported</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FinancialsAsReported();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('cik')) {
          obj['cik'] = _ApiClient["default"].convertToType(data['cik'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Report["default"]]);
        }
      }

      return obj;
    }
  }]);

  return FinancialsAsReported;
}();
/**
 * Symbol
 * @member {String} symbol
 */


FinancialsAsReported.prototype['symbol'] = undefined;
/**
 * CIK
 * @member {String} cik
 */

FinancialsAsReported.prototype['cik'] = undefined;
/**
 * Array of filings.
 * @member {Array.<module:model/Report>} data
 */

FinancialsAsReported.prototype['data'] = undefined;
var _default = FinancialsAsReported;
exports["default"] = _default;