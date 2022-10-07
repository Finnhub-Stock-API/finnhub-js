"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstitutionalOwnershipInfo = _interopRequireDefault(require("./InstitutionalOwnershipInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstitutionalOwnershipGroup model module.
 * @module model/InstitutionalOwnershipGroup
 * @version 1.2.16
 */
var InstitutionalOwnershipGroup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstitutionalOwnershipGroup</code>.
   * @alias module:model/InstitutionalOwnershipGroup
   */
  function InstitutionalOwnershipGroup() {
    _classCallCheck(this, InstitutionalOwnershipGroup);

    InstitutionalOwnershipGroup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstitutionalOwnershipGroup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstitutionalOwnershipGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstitutionalOwnershipGroup} obj Optional instance to populate.
     * @return {module:model/InstitutionalOwnershipGroup} The populated <code>InstitutionalOwnershipGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstitutionalOwnershipGroup();

        if (data.hasOwnProperty('reportDate')) {
          obj['reportDate'] = _ApiClient["default"].convertToType(data['reportDate'], 'String');
        }

        if (data.hasOwnProperty('ownership')) {
          obj['ownership'] = _ApiClient["default"].convertToType(data['ownership'], [_InstitutionalOwnershipInfo["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InstitutionalOwnershipGroup;
}();
/**
 * Report date.
 * @member {String} reportDate
 */


InstitutionalOwnershipGroup.prototype['reportDate'] = undefined;
/**
 * Array of institutional investors.
 * @member {Array.<module:model/InstitutionalOwnershipInfo>} ownership
 */

InstitutionalOwnershipGroup.prototype['ownership'] = undefined;
var _default = InstitutionalOwnershipGroup;
exports["default"] = _default;