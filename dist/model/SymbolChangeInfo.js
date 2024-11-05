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
 * The SymbolChangeInfo model module.
 * @module model/SymbolChangeInfo
 * @version 1.2.19
 */
var SymbolChangeInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SymbolChangeInfo</code>.
   * @alias module:model/SymbolChangeInfo
   */
  function SymbolChangeInfo() {
    _classCallCheck(this, SymbolChangeInfo);

    SymbolChangeInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SymbolChangeInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SymbolChangeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SymbolChangeInfo} obj Optional instance to populate.
     * @return {module:model/SymbolChangeInfo} The populated <code>SymbolChangeInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SymbolChangeInfo();

        if (data.hasOwnProperty('atDate')) {
          obj['atDate'] = _ApiClient["default"].convertToType(data['atDate'], 'String');
        }

        if (data.hasOwnProperty('oldSymbol')) {
          obj['oldSymbol'] = _ApiClient["default"].convertToType(data['oldSymbol'], 'String');
        }

        if (data.hasOwnProperty('newSymbol')) {
          obj['newSymbol'] = _ApiClient["default"].convertToType(data['newSymbol'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SymbolChangeInfo;
}();
/**
 * Event's date.
 * @member {String} atDate
 */


SymbolChangeInfo.prototype['atDate'] = undefined;
/**
 * Old symbol.
 * @member {String} oldSymbol
 */

SymbolChangeInfo.prototype['oldSymbol'] = undefined;
/**
 * New symbol.
 * @member {String} newSymbol
 */

SymbolChangeInfo.prototype['newSymbol'] = undefined;
var _default = SymbolChangeInfo;
exports["default"] = _default;