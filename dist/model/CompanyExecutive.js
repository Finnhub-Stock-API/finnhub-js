"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Company = _interopRequireDefault(require("./Company"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CompanyExecutive model module.
 * @module model/CompanyExecutive
 * @version 1.2.16
 */
var CompanyExecutive = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CompanyExecutive</code>.
   * @alias module:model/CompanyExecutive
   */
  function CompanyExecutive() {
    _classCallCheck(this, CompanyExecutive);

    CompanyExecutive.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CompanyExecutive, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CompanyExecutive</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyExecutive} obj Optional instance to populate.
     * @return {module:model/CompanyExecutive} The populated <code>CompanyExecutive</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CompanyExecutive();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('executive')) {
          obj['executive'] = _ApiClient["default"].convertToType(data['executive'], [_Company["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CompanyExecutive;
}();
/**
 * Company symbol.
 * @member {String} symbol
 */


CompanyExecutive.prototype['symbol'] = undefined;
/**
 * Array of company's executives and members of the Board.
 * @member {Array.<module:model/Company>} executive
 */

CompanyExecutive.prototype['executive'] = undefined;
var _default = CompanyExecutive;
exports["default"] = _default;