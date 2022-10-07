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
 * The FinancialStatements model module.
 * @module model/FinancialStatements
 * @version 1.2.16
 */
var FinancialStatements = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FinancialStatements</code>.
   * @alias module:model/FinancialStatements
   */
  function FinancialStatements() {
    _classCallCheck(this, FinancialStatements);

    FinancialStatements.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FinancialStatements, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FinancialStatements</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FinancialStatements} obj Optional instance to populate.
     * @return {module:model/FinancialStatements} The populated <code>FinancialStatements</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FinancialStatements();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('financials')) {
          obj['financials'] = _ApiClient["default"].convertToType(data['financials'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return FinancialStatements;
}();
/**
 * Symbol of the company.
 * @member {String} symbol
 */


FinancialStatements.prototype['symbol'] = undefined;
/**
 * An array of map of key, value pairs containing the data for each period.
 * @member {Array.<Object>} financials
 */

FinancialStatements.prototype['financials'] = undefined;
var _default = FinancialStatements;
exports["default"] = _default;