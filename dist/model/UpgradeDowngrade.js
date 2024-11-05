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
 * The UpgradeDowngrade model module.
 * @module model/UpgradeDowngrade
 * @version 1.2.19
 */
var UpgradeDowngrade = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpgradeDowngrade</code>.
   * @alias module:model/UpgradeDowngrade
   */
  function UpgradeDowngrade() {
    _classCallCheck(this, UpgradeDowngrade);

    UpgradeDowngrade.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpgradeDowngrade, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UpgradeDowngrade</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpgradeDowngrade} obj Optional instance to populate.
     * @return {module:model/UpgradeDowngrade} The populated <code>UpgradeDowngrade</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpgradeDowngrade();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('gradeTime')) {
          obj['gradeTime'] = _ApiClient["default"].convertToType(data['gradeTime'], 'Number');
        }

        if (data.hasOwnProperty('fromGrade')) {
          obj['fromGrade'] = _ApiClient["default"].convertToType(data['fromGrade'], 'String');
        }

        if (data.hasOwnProperty('toGrade')) {
          obj['toGrade'] = _ApiClient["default"].convertToType(data['toGrade'], 'String');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UpgradeDowngrade;
}();
/**
 * Company symbol.
 * @member {String} symbol
 */


UpgradeDowngrade.prototype['symbol'] = undefined;
/**
 * Upgrade/downgrade time in UNIX timestamp.
 * @member {Number} gradeTime
 */

UpgradeDowngrade.prototype['gradeTime'] = undefined;
/**
 * From grade.
 * @member {String} fromGrade
 */

UpgradeDowngrade.prototype['fromGrade'] = undefined;
/**
 * To grade.
 * @member {String} toGrade
 */

UpgradeDowngrade.prototype['toGrade'] = undefined;
/**
 * Company/analyst who did the upgrade/downgrade.
 * @member {String} company
 */

UpgradeDowngrade.prototype['company'] = undefined;
/**
 * Action can take any of the following values: <code>up(upgrade), down(downgrade), main(maintains), init(initiate), reit(reiterate)</code>.
 * @member {String} action
 */

UpgradeDowngrade.prototype['action'] = undefined;
var _default = UpgradeDowngrade;
exports["default"] = _default;