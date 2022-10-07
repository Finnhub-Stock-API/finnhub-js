"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IsinChangeInfo = _interopRequireDefault(require("./IsinChangeInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IsinChange model module.
 * @module model/IsinChange
 * @version 1.2.16
 */
var IsinChange = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IsinChange</code>.
   * @alias module:model/IsinChange
   */
  function IsinChange() {
    _classCallCheck(this, IsinChange);

    IsinChange.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IsinChange, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IsinChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IsinChange} obj Optional instance to populate.
     * @return {module:model/IsinChange} The populated <code>IsinChange</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IsinChange();

        if (data.hasOwnProperty('fromDate')) {
          obj['fromDate'] = _ApiClient["default"].convertToType(data['fromDate'], 'String');
        }

        if (data.hasOwnProperty('toDate')) {
          obj['toDate'] = _ApiClient["default"].convertToType(data['toDate'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_IsinChangeInfo["default"]]);
        }
      }

      return obj;
    }
  }]);

  return IsinChange;
}();
/**
 * From date.
 * @member {String} fromDate
 */


IsinChange.prototype['fromDate'] = undefined;
/**
 * To date.
 * @member {String} toDate
 */

IsinChange.prototype['toDate'] = undefined;
/**
 * Array of ISIN change events.
 * @member {Array.<module:model/IsinChangeInfo>} data
 */

IsinChange.prototype['data'] = undefined;
var _default = IsinChange;
exports["default"] = _default;