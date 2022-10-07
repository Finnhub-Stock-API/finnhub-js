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
 * The KeyCustomersSuppliers model module.
 * @module model/KeyCustomersSuppliers
 * @version 1.2.16
 */
var KeyCustomersSuppliers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>KeyCustomersSuppliers</code>.
   * @alias module:model/KeyCustomersSuppliers
   */
  function KeyCustomersSuppliers() {
    _classCallCheck(this, KeyCustomersSuppliers);

    KeyCustomersSuppliers.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(KeyCustomersSuppliers, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>KeyCustomersSuppliers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeyCustomersSuppliers} obj Optional instance to populate.
     * @return {module:model/KeyCustomersSuppliers} The populated <code>KeyCustomersSuppliers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new KeyCustomersSuppliers();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('industry')) {
          obj['industry'] = _ApiClient["default"].convertToType(data['industry'], 'String');
        }

        if (data.hasOwnProperty('customer')) {
          obj['customer'] = _ApiClient["default"].convertToType(data['customer'], 'Boolean');
        }

        if (data.hasOwnProperty('supplier')) {
          obj['supplier'] = _ApiClient["default"].convertToType(data['supplier'], 'Boolean');
        }

        if (data.hasOwnProperty('oneMonthCorrelation')) {
          obj['oneMonthCorrelation'] = _ApiClient["default"].convertToType(data['oneMonthCorrelation'], 'Number');
        }

        if (data.hasOwnProperty('oneYearCorrelation')) {
          obj['oneYearCorrelation'] = _ApiClient["default"].convertToType(data['oneYearCorrelation'], 'Number');
        }

        if (data.hasOwnProperty('sixMonthCorrelation')) {
          obj['sixMonthCorrelation'] = _ApiClient["default"].convertToType(data['sixMonthCorrelation'], 'Number');
        }

        if (data.hasOwnProperty('threeMonthCorrelation')) {
          obj['threeMonthCorrelation'] = _ApiClient["default"].convertToType(data['threeMonthCorrelation'], 'Number');
        }

        if (data.hasOwnProperty('twoWeekCorrelation')) {
          obj['twoWeekCorrelation'] = _ApiClient["default"].convertToType(data['twoWeekCorrelation'], 'Number');
        }

        if (data.hasOwnProperty('twoYearCorrelation')) {
          obj['twoYearCorrelation'] = _ApiClient["default"].convertToType(data['twoYearCorrelation'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return KeyCustomersSuppliers;
}();
/**
 * Symbol
 * @member {String} symbol
 */


KeyCustomersSuppliers.prototype['symbol'] = undefined;
/**
 * Name
 * @member {String} name
 */

KeyCustomersSuppliers.prototype['name'] = undefined;
/**
 * Country
 * @member {String} country
 */

KeyCustomersSuppliers.prototype['country'] = undefined;
/**
 * Industry
 * @member {String} industry
 */

KeyCustomersSuppliers.prototype['industry'] = undefined;
/**
 * Whether the company is a customer.
 * @member {Boolean} customer
 */

KeyCustomersSuppliers.prototype['customer'] = undefined;
/**
 * Whether the company is a supplier
 * @member {Boolean} supplier
 */

KeyCustomersSuppliers.prototype['supplier'] = undefined;
/**
 * 1-month price correlation
 * @member {Number} oneMonthCorrelation
 */

KeyCustomersSuppliers.prototype['oneMonthCorrelation'] = undefined;
/**
 * 1-year price correlation
 * @member {Number} oneYearCorrelation
 */

KeyCustomersSuppliers.prototype['oneYearCorrelation'] = undefined;
/**
 * 6-month price correlation
 * @member {Number} sixMonthCorrelation
 */

KeyCustomersSuppliers.prototype['sixMonthCorrelation'] = undefined;
/**
 * 3-month price correlation
 * @member {Number} threeMonthCorrelation
 */

KeyCustomersSuppliers.prototype['threeMonthCorrelation'] = undefined;
/**
 * 2-week price correlation
 * @member {Number} twoWeekCorrelation
 */

KeyCustomersSuppliers.prototype['twoWeekCorrelation'] = undefined;
/**
 * 2-year price correlation
 * @member {Number} twoYearCorrelation
 */

KeyCustomersSuppliers.prototype['twoYearCorrelation'] = undefined;
var _default = KeyCustomersSuppliers;
exports["default"] = _default;