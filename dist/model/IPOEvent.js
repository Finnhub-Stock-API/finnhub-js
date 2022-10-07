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
 * The IPOEvent model module.
 * @module model/IPOEvent
 * @version 1.2.16
 */
var IPOEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IPOEvent</code>.
   * @alias module:model/IPOEvent
   */
  function IPOEvent() {
    _classCallCheck(this, IPOEvent);

    IPOEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IPOEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IPOEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IPOEvent} obj Optional instance to populate.
     * @return {module:model/IPOEvent} The populated <code>IPOEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IPOEvent();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Date');
        }

        if (data.hasOwnProperty('exchange')) {
          obj['exchange'] = _ApiClient["default"].convertToType(data['exchange'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'String');
        }

        if (data.hasOwnProperty('numberOfShares')) {
          obj['numberOfShares'] = _ApiClient["default"].convertToType(data['numberOfShares'], 'Number');
        }

        if (data.hasOwnProperty('totalSharesValue')) {
          obj['totalSharesValue'] = _ApiClient["default"].convertToType(data['totalSharesValue'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return IPOEvent;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


IPOEvent.prototype['symbol'] = undefined;
/**
 * IPO date.
 * @member {Date} date
 */

IPOEvent.prototype['date'] = undefined;
/**
 * Exchange.
 * @member {String} exchange
 */

IPOEvent.prototype['exchange'] = undefined;
/**
 * Company's name.
 * @member {String} name
 */

IPOEvent.prototype['name'] = undefined;
/**
 * IPO status. Can take 1 of the following values: <code>expected</code>,<code>priced</code>,<code>withdrawn</code>,<code>filed</code>
 * @member {String} status
 */

IPOEvent.prototype['status'] = undefined;
/**
 * Projected price or price range.
 * @member {String} price
 */

IPOEvent.prototype['price'] = undefined;
/**
 * Number of shares offered during the IPO.
 * @member {Number} numberOfShares
 */

IPOEvent.prototype['numberOfShares'] = undefined;
/**
 * Total shares value.
 * @member {Number} totalSharesValue
 */

IPOEvent.prototype['totalSharesValue'] = undefined;
var _default = IPOEvent;
exports["default"] = _default;