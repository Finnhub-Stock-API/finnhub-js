"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _KeyCustomersSuppliers = _interopRequireDefault(require("./KeyCustomersSuppliers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SupplyChainRelationships model module.
 * @module model/SupplyChainRelationships
 * @version 1.2.19
 */
var SupplyChainRelationships = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SupplyChainRelationships</code>.
   * @alias module:model/SupplyChainRelationships
   */
  function SupplyChainRelationships() {
    _classCallCheck(this, SupplyChainRelationships);

    SupplyChainRelationships.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SupplyChainRelationships, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SupplyChainRelationships</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SupplyChainRelationships} obj Optional instance to populate.
     * @return {module:model/SupplyChainRelationships} The populated <code>SupplyChainRelationships</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SupplyChainRelationships();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_KeyCustomersSuppliers["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SupplyChainRelationships;
}();
/**
 * symbol
 * @member {String} symbol
 */


SupplyChainRelationships.prototype['symbol'] = undefined;
/**
 * Key customers and suppliers.
 * @member {Array.<module:model/KeyCustomersSuppliers>} data
 */

SupplyChainRelationships.prototype['data'] = undefined;
var _default = SupplyChainRelationships;
exports["default"] = _default;