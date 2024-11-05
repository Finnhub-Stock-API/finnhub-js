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
 * The StockTranscripts model module.
 * @module model/StockTranscripts
 * @version 1.2.19
 */
var StockTranscripts = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StockTranscripts</code>.
   * @alias module:model/StockTranscripts
   */
  function StockTranscripts() {
    _classCallCheck(this, StockTranscripts);

    StockTranscripts.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StockTranscripts, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StockTranscripts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockTranscripts} obj Optional instance to populate.
     * @return {module:model/StockTranscripts} The populated <code>StockTranscripts</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StockTranscripts();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('time')) {
          obj['time'] = _ApiClient["default"].convertToType(data['time'], 'String');
        }

        if (data.hasOwnProperty('year')) {
          obj['year'] = _ApiClient["default"].convertToType(data['year'], 'Number');
        }

        if (data.hasOwnProperty('quarter')) {
          obj['quarter'] = _ApiClient["default"].convertToType(data['quarter'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return StockTranscripts;
}();
/**
 * Transcript's ID used to get the <a href=\"#transcripts\">full transcript</a>.
 * @member {String} id
 */


StockTranscripts.prototype['id'] = undefined;
/**
 * Title.
 * @member {String} title
 */

StockTranscripts.prototype['title'] = undefined;
/**
 * Time of the event.
 * @member {String} time
 */

StockTranscripts.prototype['time'] = undefined;
/**
 * Year of earnings result in the case of earnings call transcript.
 * @member {Number} year
 */

StockTranscripts.prototype['year'] = undefined;
/**
 * Quarter of earnings result in the case of earnings call transcript.
 * @member {Number} quarter
 */

StockTranscripts.prototype['quarter'] = undefined;
var _default = StockTranscripts;
exports["default"] = _default;