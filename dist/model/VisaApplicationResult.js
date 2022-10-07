"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VisaApplication = _interopRequireDefault(require("./VisaApplication"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VisaApplicationResult model module.
 * @module model/VisaApplicationResult
 * @version 1.2.16
 */
var VisaApplicationResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VisaApplicationResult</code>.
   * @alias module:model/VisaApplicationResult
   */
  function VisaApplicationResult() {
    _classCallCheck(this, VisaApplicationResult);

    VisaApplicationResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VisaApplicationResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VisaApplicationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VisaApplicationResult} obj Optional instance to populate.
     * @return {module:model/VisaApplicationResult} The populated <code>VisaApplicationResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VisaApplicationResult();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_VisaApplication["default"]]);
        }
      }

      return obj;
    }
  }]);

  return VisaApplicationResult;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


VisaApplicationResult.prototype['symbol'] = undefined;
/**
 * Array of H1b and Permanent visa applications.
 * @member {Array.<module:model/VisaApplication>} data
 */

VisaApplicationResult.prototype['data'] = undefined;
var _default = VisaApplicationResult;
exports["default"] = _default;