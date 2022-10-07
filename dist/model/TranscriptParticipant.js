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
 * The TranscriptParticipant model module.
 * @module model/TranscriptParticipant
 * @version 1.2.16
 */
var TranscriptParticipant = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TranscriptParticipant</code>.
   * @alias module:model/TranscriptParticipant
   */
  function TranscriptParticipant() {
    _classCallCheck(this, TranscriptParticipant);

    TranscriptParticipant.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TranscriptParticipant, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TranscriptParticipant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TranscriptParticipant} obj Optional instance to populate.
     * @return {module:model/TranscriptParticipant} The populated <code>TranscriptParticipant</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TranscriptParticipant();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('role')) {
          obj['role'] = _ApiClient["default"].convertToType(data['role'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TranscriptParticipant;
}();
/**
 * Participant's name
 * @member {String} name
 */


TranscriptParticipant.prototype['name'] = undefined;
/**
 * Participant's description
 * @member {String} description
 */

TranscriptParticipant.prototype['description'] = undefined;
/**
 * Whether the speak is a company's executive or an analyst
 * @member {String} role
 */

TranscriptParticipant.prototype['role'] = undefined;
var _default = TranscriptParticipant;
exports["default"] = _default;