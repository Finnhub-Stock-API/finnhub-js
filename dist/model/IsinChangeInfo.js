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
 * The IsinChangeInfo model module.
 * @module model/IsinChangeInfo
 * @version 1.2.19
 */
var IsinChangeInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IsinChangeInfo</code>.
   * @alias module:model/IsinChangeInfo
   */
  function IsinChangeInfo() {
    _classCallCheck(this, IsinChangeInfo);

    IsinChangeInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IsinChangeInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IsinChangeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IsinChangeInfo} obj Optional instance to populate.
     * @return {module:model/IsinChangeInfo} The populated <code>IsinChangeInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IsinChangeInfo();

        if (data.hasOwnProperty('atDate')) {
          obj['atDate'] = _ApiClient["default"].convertToType(data['atDate'], 'String');
        }

        if (data.hasOwnProperty('oldIsin')) {
          obj['oldIsin'] = _ApiClient["default"].convertToType(data['oldIsin'], 'String');
        }

        if (data.hasOwnProperty('newIsin')) {
          obj['newIsin'] = _ApiClient["default"].convertToType(data['newIsin'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IsinChangeInfo;
}();
/**
 * Event's date.
 * @member {String} atDate
 */


IsinChangeInfo.prototype['atDate'] = undefined;
/**
 * Old ISIN.
 * @member {String} oldIsin
 */

IsinChangeInfo.prototype['oldIsin'] = undefined;
/**
 * New ISIN.
 * @member {String} newIsin
 */

IsinChangeInfo.prototype['newIsin'] = undefined;
var _default = IsinChangeInfo;
exports["default"] = _default;