"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UsptoPatent = _interopRequireDefault(require("./UsptoPatent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UsptoPatentResult model module.
 * @module model/UsptoPatentResult
 * @version 1.2.19
 */
var UsptoPatentResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UsptoPatentResult</code>.
   * @alias module:model/UsptoPatentResult
   */
  function UsptoPatentResult() {
    _classCallCheck(this, UsptoPatentResult);

    UsptoPatentResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UsptoPatentResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UsptoPatentResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsptoPatentResult} obj Optional instance to populate.
     * @return {module:model/UsptoPatentResult} The populated <code>UsptoPatentResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UsptoPatentResult();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_UsptoPatent["default"]]);
        }
      }

      return obj;
    }
  }]);

  return UsptoPatentResult;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


UsptoPatentResult.prototype['symbol'] = undefined;
/**
 * Array of patents.
 * @member {Array.<module:model/UsptoPatent>} data
 */

UsptoPatentResult.prototype['data'] = undefined;
var _default = UsptoPatentResult;
exports["default"] = _default;