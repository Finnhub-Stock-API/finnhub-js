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
 * The UsptoPatent model module.
 * @module model/UsptoPatent
 * @version 1.2.16
 */
var UsptoPatent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UsptoPatent</code>.
   * @alias module:model/UsptoPatent
   */
  function UsptoPatent() {
    _classCallCheck(this, UsptoPatent);

    UsptoPatent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UsptoPatent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UsptoPatent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsptoPatent} obj Optional instance to populate.
     * @return {module:model/UsptoPatent} The populated <code>UsptoPatent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UsptoPatent();

        if (data.hasOwnProperty('applicationNumber')) {
          obj['applicationNumber'] = _ApiClient["default"].convertToType(data['applicationNumber'], 'String');
        }

        if (data.hasOwnProperty('companyFilingName')) {
          obj['companyFilingName'] = _ApiClient["default"].convertToType(data['companyFilingName'], ['String']);
        }

        if (data.hasOwnProperty('filingDate')) {
          obj['filingDate'] = _ApiClient["default"].convertToType(data['filingDate'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('filingStatus')) {
          obj['filingStatus'] = _ApiClient["default"].convertToType(data['filingStatus'], 'String');
        }

        if (data.hasOwnProperty('patentNumber')) {
          obj['patentNumber'] = _ApiClient["default"].convertToType(data['patentNumber'], 'String');
        }

        if (data.hasOwnProperty('publicationDate')) {
          obj['publicationDate'] = _ApiClient["default"].convertToType(data['publicationDate'], 'String');
        }

        if (data.hasOwnProperty('patentType')) {
          obj['patentType'] = _ApiClient["default"].convertToType(data['patentType'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UsptoPatent;
}();
/**
 * Application Number.
 * @member {String} applicationNumber
 */


UsptoPatent.prototype['applicationNumber'] = undefined;
/**
 * Array of companies' name on the patent.
 * @member {Array.<String>} companyFilingName
 */

UsptoPatent.prototype['companyFilingName'] = undefined;
/**
 * Filing date.
 * @member {String} filingDate
 */

UsptoPatent.prototype['filingDate'] = undefined;
/**
 * Description.
 * @member {String} description
 */

UsptoPatent.prototype['description'] = undefined;
/**
 * Filing status.
 * @member {String} filingStatus
 */

UsptoPatent.prototype['filingStatus'] = undefined;
/**
 * Patent number.
 * @member {String} patentNumber
 */

UsptoPatent.prototype['patentNumber'] = undefined;
/**
 * Publication date.
 * @member {String} publicationDate
 */

UsptoPatent.prototype['publicationDate'] = undefined;
/**
 * Patent's type.
 * @member {String} patentType
 */

UsptoPatent.prototype['patentType'] = undefined;
/**
 * URL of the original article.
 * @member {String} url
 */

UsptoPatent.prototype['url'] = undefined;
var _default = UsptoPatent;
exports["default"] = _default;