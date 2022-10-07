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
 * The CovidInfo model module.
 * @module model/CovidInfo
 * @version 1.2.16
 */
var CovidInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CovidInfo</code>.
   * @alias module:model/CovidInfo
   */
  function CovidInfo() {
    _classCallCheck(this, CovidInfo);

    CovidInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CovidInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CovidInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CovidInfo} obj Optional instance to populate.
     * @return {module:model/CovidInfo} The populated <code>CovidInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CovidInfo();

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('case')) {
          obj['case'] = _ApiClient["default"].convertToType(data['case'], 'Number');
        }

        if (data.hasOwnProperty('death')) {
          obj['death'] = _ApiClient["default"].convertToType(data['death'], 'Number');
        }

        if (data.hasOwnProperty('updated')) {
          obj['updated'] = _ApiClient["default"].convertToType(data['updated'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CovidInfo;
}();
/**
 * State.
 * @member {String} state
 */


CovidInfo.prototype['state'] = undefined;
/**
 * Number of confirmed cases.
 * @member {Number} case
 */

CovidInfo.prototype['case'] = undefined;
/**
 * Number of confirmed deaths.
 * @member {Number} death
 */

CovidInfo.prototype['death'] = undefined;
/**
 * Updated time.
 * @member {String} updated
 */

CovidInfo.prototype['updated'] = undefined;
var _default = CovidInfo;
exports["default"] = _default;