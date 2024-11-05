"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StockTranscripts = _interopRequireDefault(require("./StockTranscripts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EarningsCallTranscriptsList model module.
 * @module model/EarningsCallTranscriptsList
 * @version 1.2.19
 */
var EarningsCallTranscriptsList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EarningsCallTranscriptsList</code>.
   * @alias module:model/EarningsCallTranscriptsList
   */
  function EarningsCallTranscriptsList() {
    _classCallCheck(this, EarningsCallTranscriptsList);

    EarningsCallTranscriptsList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EarningsCallTranscriptsList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EarningsCallTranscriptsList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EarningsCallTranscriptsList} obj Optional instance to populate.
     * @return {module:model/EarningsCallTranscriptsList} The populated <code>EarningsCallTranscriptsList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EarningsCallTranscriptsList();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('transcripts')) {
          obj['transcripts'] = _ApiClient["default"].convertToType(data['transcripts'], [_StockTranscripts["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EarningsCallTranscriptsList;
}();
/**
 * Company symbol.
 * @member {String} symbol
 */


EarningsCallTranscriptsList.prototype['symbol'] = undefined;
/**
 * Array of transcripts' metadata
 * @member {Array.<module:model/StockTranscripts>} transcripts
 */

EarningsCallTranscriptsList.prototype['transcripts'] = undefined;
var _default = EarningsCallTranscriptsList;
exports["default"] = _default;