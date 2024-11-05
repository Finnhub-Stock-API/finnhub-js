"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SymbolChangeInfo = _interopRequireDefault(require("./SymbolChangeInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SymbolChange model module.
 * @module model/SymbolChange
 * @version 1.2.19
 */
var SymbolChange = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SymbolChange</code>.
   * @alias module:model/SymbolChange
   */
  function SymbolChange() {
    _classCallCheck(this, SymbolChange);

    SymbolChange.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SymbolChange, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SymbolChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SymbolChange} obj Optional instance to populate.
     * @return {module:model/SymbolChange} The populated <code>SymbolChange</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SymbolChange();

        if (data.hasOwnProperty('fromDate')) {
          obj['fromDate'] = _ApiClient["default"].convertToType(data['fromDate'], 'String');
        }

        if (data.hasOwnProperty('toDate')) {
          obj['toDate'] = _ApiClient["default"].convertToType(data['toDate'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_SymbolChangeInfo["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SymbolChange;
}();
/**
 * From date.
 * @member {String} fromDate
 */


SymbolChange.prototype['fromDate'] = undefined;
/**
 * To date.
 * @member {String} toDate
 */

SymbolChange.prototype['toDate'] = undefined;
/**
 * Array of symbol change events.
 * @member {Array.<module:model/SymbolChangeInfo>} data
 */

SymbolChange.prototype['data'] = undefined;
var _default = SymbolChange;
exports["default"] = _default;