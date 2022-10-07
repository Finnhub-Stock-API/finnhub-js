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
 * The BreakdownItem model module.
 * @module model/BreakdownItem
 * @version 1.2.16
 */
var BreakdownItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BreakdownItem</code>.
   * @alias module:model/BreakdownItem
   */
  function BreakdownItem() {
    _classCallCheck(this, BreakdownItem);

    BreakdownItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BreakdownItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BreakdownItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BreakdownItem} obj Optional instance to populate.
     * @return {module:model/BreakdownItem} The populated <code>BreakdownItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BreakdownItem();

        if (data.hasOwnProperty('accessNumber')) {
          obj['accessNumber'] = _ApiClient["default"].convertToType(data['accessNumber'], 'String');
        }

        if (data.hasOwnProperty('breakdown')) {
          obj['breakdown'] = _ApiClient["default"].convertToType(data['breakdown'], Object);
        }
      }

      return obj;
    }
  }]);

  return BreakdownItem;
}();
/**
 * Access number of the report from which the data is sourced.
 * @member {String} accessNumber
 */


BreakdownItem.prototype['accessNumber'] = undefined;
/**
 * @member {Object} breakdown
 */

BreakdownItem.prototype['breakdown'] = undefined;
var _default = BreakdownItem;
exports["default"] = _default;