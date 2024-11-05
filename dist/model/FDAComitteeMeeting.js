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
 * The FDAComitteeMeeting model module.
 * @module model/FDAComitteeMeeting
 * @version 1.2.19
 */
var FDAComitteeMeeting = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FDAComitteeMeeting</code>.
   * @alias module:model/FDAComitteeMeeting
   */
  function FDAComitteeMeeting() {
    _classCallCheck(this, FDAComitteeMeeting);

    FDAComitteeMeeting.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FDAComitteeMeeting, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FDAComitteeMeeting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FDAComitteeMeeting} obj Optional instance to populate.
     * @return {module:model/FDAComitteeMeeting} The populated <code>FDAComitteeMeeting</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FDAComitteeMeeting();

        if (data.hasOwnProperty('fromDate')) {
          obj['fromDate'] = _ApiClient["default"].convertToType(data['fromDate'], 'String');
        }

        if (data.hasOwnProperty('toDate')) {
          obj['toDate'] = _ApiClient["default"].convertToType(data['toDate'], 'String');
        }

        if (data.hasOwnProperty('eventDescription')) {
          obj['eventDescription'] = _ApiClient["default"].convertToType(data['eventDescription'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FDAComitteeMeeting;
}();
/**
 * Start time of the event in EST.
 * @member {String} fromDate
 */


FDAComitteeMeeting.prototype['fromDate'] = undefined;
/**
 * End time of the event in EST.
 * @member {String} toDate
 */

FDAComitteeMeeting.prototype['toDate'] = undefined;
/**
 * Event's description.
 * @member {String} eventDescription
 */

FDAComitteeMeeting.prototype['eventDescription'] = undefined;
/**
 * URL.
 * @member {String} url
 */

FDAComitteeMeeting.prototype['url'] = undefined;
var _default = FDAComitteeMeeting;
exports["default"] = _default;