"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstitutionalOwnershipGroup = _interopRequireDefault(require("./InstitutionalOwnershipGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstitutionalOwnership model module.
 * @module model/InstitutionalOwnership
 * @version 1.2.16
 */
var InstitutionalOwnership = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstitutionalOwnership</code>.
   * @alias module:model/InstitutionalOwnership
   */
  function InstitutionalOwnership() {
    _classCallCheck(this, InstitutionalOwnership);

    InstitutionalOwnership.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstitutionalOwnership, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstitutionalOwnership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstitutionalOwnership} obj Optional instance to populate.
     * @return {module:model/InstitutionalOwnership} The populated <code>InstitutionalOwnership</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstitutionalOwnership();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('cusip')) {
          obj['cusip'] = _ApiClient["default"].convertToType(data['cusip'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_InstitutionalOwnershipGroup["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InstitutionalOwnership;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


InstitutionalOwnership.prototype['symbol'] = undefined;
/**
 * Cusip.
 * @member {String} cusip
 */

InstitutionalOwnership.prototype['cusip'] = undefined;
/**
 * Array of institutional investors.
 * @member {Array.<module:model/InstitutionalOwnershipGroup>} data
 */

InstitutionalOwnership.prototype['data'] = undefined;
var _default = InstitutionalOwnership;
exports["default"] = _default;