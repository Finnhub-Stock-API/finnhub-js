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
 * The MajorDevelopments model module.
 * @module model/MajorDevelopments
 * @version 1.2.1
 */
var MajorDevelopments = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MajorDevelopments</code>.
   * @alias module:model/MajorDevelopments
   */
  function MajorDevelopments() {
    _classCallCheck(this, MajorDevelopments);

    MajorDevelopments.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MajorDevelopments, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MajorDevelopments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MajorDevelopments} obj Optional instance to populate.
     * @return {module:model/MajorDevelopments} The populated <code>MajorDevelopments</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MajorDevelopments();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('majorDevelopment')) {
          obj['majorDevelopment'] = _ApiClient["default"].convertToType(data['majorDevelopment'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return MajorDevelopments;
}();
/**
 * Company symbol.
 * @member {String} symbol
 */


MajorDevelopments.prototype['symbol'] = undefined;
/**
 * Array of major developments.
 * @member {Array.<Object>} majorDevelopment
 */

MajorDevelopments.prototype['majorDevelopment'] = undefined;
var _default = MajorDevelopments;
exports["default"] = _default;