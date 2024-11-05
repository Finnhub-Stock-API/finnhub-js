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
 * The MarketStatus model module.
 * @module model/MarketStatus
 * @version 1.2.19
 */
var MarketStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MarketStatus</code>.
   * @alias module:model/MarketStatus
   */
  function MarketStatus() {
    _classCallCheck(this, MarketStatus);

    MarketStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MarketStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MarketStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketStatus} obj Optional instance to populate.
     * @return {module:model/MarketStatus} The populated <code>MarketStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MarketStatus();

        if (data.hasOwnProperty('exchange')) {
          obj['exchange'] = _ApiClient["default"].convertToType(data['exchange'], 'String');
        }

        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }

        if (data.hasOwnProperty('session')) {
          obj['session'] = _ApiClient["default"].convertToType(data['session'], 'String');
        }

        if (data.hasOwnProperty('holiday')) {
          obj['holiday'] = _ApiClient["default"].convertToType(data['holiday'], 'String');
        }

        if (data.hasOwnProperty('isOpen')) {
          obj['isOpen'] = _ApiClient["default"].convertToType(data['isOpen'], 'Boolean');
        }

        if (data.hasOwnProperty('t')) {
          obj['t'] = _ApiClient["default"].convertToType(data['t'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return MarketStatus;
}();
/**
 * Exchange.
 * @member {String} exchange
 */


MarketStatus.prototype['exchange'] = undefined;
/**
 * Timezone.
 * @member {String} timezone
 */

MarketStatus.prototype['timezone'] = undefined;
/**
 * Market session. Can be 1 of the following values: <code>pre-market</code>,<code>regular</code>,<code>post-market</code> or <code>null</code> if the market is closed.
 * @member {String} session
 */

MarketStatus.prototype['session'] = undefined;
/**
 * Holiday event.
 * @member {String} holiday
 */

MarketStatus.prototype['holiday'] = undefined;
/**
 * Whether the market is open at the moment.
 * @member {Boolean} isOpen
 */

MarketStatus.prototype['isOpen'] = undefined;
/**
 * Current timestamp.
 * @member {Number} t
 */

MarketStatus.prototype['t'] = undefined;
var _default = MarketStatus;
exports["default"] = _default;