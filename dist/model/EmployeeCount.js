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
 * The EmployeeCount model module.
 * @module model/EmployeeCount
 * @version 1.2.19
 */
var EmployeeCount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeCount</code>.
   * @alias module:model/EmployeeCount
   */
  function EmployeeCount() {
    _classCallCheck(this, EmployeeCount);

    EmployeeCount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeCount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeCount} obj Optional instance to populate.
     * @return {module:model/EmployeeCount} The populated <code>EmployeeCount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeCount();

        if (data.hasOwnProperty('atDate')) {
          obj['atDate'] = _ApiClient["default"].convertToType(data['atDate'], 'String');
        }

        if (data.hasOwnProperty('employee')) {
          obj['employee'] = _ApiClient["default"].convertToType(data['employee'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmployeeCount;
}();
/**
 * Date of the reading
 * @member {String} atDate
 */


EmployeeCount.prototype['atDate'] = undefined;
/**
 * Value
 * @member {Number} employee
 */

EmployeeCount.prototype['employee'] = undefined;
var _default = EmployeeCount;
exports["default"] = _default;