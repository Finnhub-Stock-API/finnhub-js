"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TranscriptContent = _interopRequireDefault(require("./TranscriptContent"));

var _TranscriptParticipant = _interopRequireDefault(require("./TranscriptParticipant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EarningsCallTranscripts model module.
 * @module model/EarningsCallTranscripts
 * @version 1.2.19
 */
var EarningsCallTranscripts = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EarningsCallTranscripts</code>.
   * @alias module:model/EarningsCallTranscripts
   */
  function EarningsCallTranscripts() {
    _classCallCheck(this, EarningsCallTranscripts);

    EarningsCallTranscripts.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EarningsCallTranscripts, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EarningsCallTranscripts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EarningsCallTranscripts} obj Optional instance to populate.
     * @return {module:model/EarningsCallTranscripts} The populated <code>EarningsCallTranscripts</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EarningsCallTranscripts();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('transcript')) {
          obj['transcript'] = _ApiClient["default"].convertToType(data['transcript'], [_TranscriptContent["default"]]);
        }

        if (data.hasOwnProperty('participant')) {
          obj['participant'] = _ApiClient["default"].convertToType(data['participant'], [_TranscriptParticipant["default"]]);
        }

        if (data.hasOwnProperty('audio')) {
          obj['audio'] = _ApiClient["default"].convertToType(data['audio'], 'String');
        }

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

  return EarningsCallTranscripts;
}();
/**
 * Company symbol.
 * @member {String} symbol
 */


EarningsCallTranscripts.prototype['symbol'] = undefined;
/**
 * Transcript content.
 * @member {Array.<module:model/TranscriptContent>} transcript
 */

EarningsCallTranscripts.prototype['transcript'] = undefined;
/**
 * Participant list
 * @member {Array.<module:model/TranscriptParticipant>} participant
 */

EarningsCallTranscripts.prototype['participant'] = undefined;
/**
 * Audio link.
 * @member {String} audio
 */

EarningsCallTranscripts.prototype['audio'] = undefined;
/**
 * Transcript's ID.
 * @member {String} id
 */

EarningsCallTranscripts.prototype['id'] = undefined;
/**
 * Title.
 * @member {String} title
 */

EarningsCallTranscripts.prototype['title'] = undefined;
/**
 * Time of the event.
 * @member {String} time
 */

EarningsCallTranscripts.prototype['time'] = undefined;
/**
 * Year of earnings result in the case of earnings call transcript.
 * @member {Number} year
 */

EarningsCallTranscripts.prototype['year'] = undefined;
/**
 * Quarter of earnings result in the case of earnings call transcript.
 * @member {Number} quarter
 */

EarningsCallTranscripts.prototype['quarter'] = undefined;
var _default = EarningsCallTranscripts;
exports["default"] = _default;