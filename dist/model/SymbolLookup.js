"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SymbolLookupInfo = _interopRequireDefault(require("./SymbolLookupInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SymbolLookup model module.
 * @module model/SymbolLookup
 * @version 1.2.16
 */
var SymbolLookup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SymbolLookup</code>.
   * @alias module:model/SymbolLookup
   */
  function SymbolLookup() {
    _classCallCheck(this, SymbolLookup);

    SymbolLookup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SymbolLookup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SymbolLookup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SymbolLookup} obj Optional instance to populate.
     * @return {module:model/SymbolLookup} The populated <code>SymbolLookup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SymbolLookup();

        if (data.hasOwnProperty('result')) {
          obj['result'] = _ApiClient["default"].convertToType(data['result'], [_SymbolLookupInfo["default"]]);
        }

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SymbolLookup;
}();
/**
 * Array of search results.
 * @member {Array.<module:model/SymbolLookupInfo>} result
 */


SymbolLookup.prototype['result'] = undefined;
/**
 * Number of results.
 * @member {Number} count
 */

SymbolLookup.prototype['count'] = undefined;
var _default = SymbolLookup;
exports["default"] = _default;