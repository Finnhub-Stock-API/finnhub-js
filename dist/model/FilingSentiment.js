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
 * The FilingSentiment model module.
 * @module model/FilingSentiment
 * @version 1.2.16
 */
var FilingSentiment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FilingSentiment</code>.
   * @alias module:model/FilingSentiment
   */
  function FilingSentiment() {
    _classCallCheck(this, FilingSentiment);

    FilingSentiment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FilingSentiment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FilingSentiment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilingSentiment} obj Optional instance to populate.
     * @return {module:model/FilingSentiment} The populated <code>FilingSentiment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FilingSentiment();

        if (data.hasOwnProperty('negative')) {
          obj['negative'] = _ApiClient["default"].convertToType(data['negative'], 'Number');
        }

        if (data.hasOwnProperty('positive')) {
          obj['positive'] = _ApiClient["default"].convertToType(data['positive'], 'Number');
        }

        if (data.hasOwnProperty('polarity')) {
          obj['polarity'] = _ApiClient["default"].convertToType(data['polarity'], 'Number');
        }

        if (data.hasOwnProperty('litigious')) {
          obj['litigious'] = _ApiClient["default"].convertToType(data['litigious'], 'Number');
        }

        if (data.hasOwnProperty('uncertainty')) {
          obj['uncertainty'] = _ApiClient["default"].convertToType(data['uncertainty'], 'Number');
        }

        if (data.hasOwnProperty('constraining')) {
          obj['constraining'] = _ApiClient["default"].convertToType(data['constraining'], 'Number');
        }

        if (data.hasOwnProperty('modal-weak')) {
          obj['modal-weak'] = _ApiClient["default"].convertToType(data['modal-weak'], 'Number');
        }

        if (data.hasOwnProperty('modal-strong')) {
          obj['modal-strong'] = _ApiClient["default"].convertToType(data['modal-strong'], 'Number');
        }

        if (data.hasOwnProperty('modal-moderate')) {
          obj['modal-moderate'] = _ApiClient["default"].convertToType(data['modal-moderate'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return FilingSentiment;
}();
/**
 * % of negative words in the filing.
 * @member {Number} negative
 */


FilingSentiment.prototype['negative'] = undefined;
/**
 * % of positive words in the filing.
 * @member {Number} positive
 */

FilingSentiment.prototype['positive'] = undefined;
/**
 * % of polarity words in the filing.
 * @member {Number} polarity
 */

FilingSentiment.prototype['polarity'] = undefined;
/**
 * % of litigious words in the filing.
 * @member {Number} litigious
 */

FilingSentiment.prototype['litigious'] = undefined;
/**
 * % of uncertainty words in the filing.
 * @member {Number} uncertainty
 */

FilingSentiment.prototype['uncertainty'] = undefined;
/**
 * % of constraining words in the filing.
 * @member {Number} constraining
 */

FilingSentiment.prototype['constraining'] = undefined;
/**
 * % of modal-weak words in the filing.
 * @member {Number} modal-weak
 */

FilingSentiment.prototype['modal-weak'] = undefined;
/**
 * % of modal-strong words in the filing.
 * @member {Number} modal-strong
 */

FilingSentiment.prototype['modal-strong'] = undefined;
/**
 * % of modal-moderate words in the filing.
 * @member {Number} modal-moderate
 */

FilingSentiment.prototype['modal-moderate'] = undefined;
var _default = FilingSentiment;
exports["default"] = _default;