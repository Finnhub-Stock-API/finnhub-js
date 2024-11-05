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
 * The LobbyingData model module.
 * @module model/LobbyingData
 * @version 1.2.19
 */
var LobbyingData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LobbyingData</code>.
   * @alias module:model/LobbyingData
   */
  function LobbyingData() {
    _classCallCheck(this, LobbyingData);

    LobbyingData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LobbyingData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LobbyingData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LobbyingData} obj Optional instance to populate.
     * @return {module:model/LobbyingData} The populated <code>LobbyingData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LobbyingData();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('year')) {
          obj['year'] = _ApiClient["default"].convertToType(data['year'], 'Number');
        }

        if (data.hasOwnProperty('period')) {
          obj['period'] = _ApiClient["default"].convertToType(data['period'], 'String');
        }

        if (data.hasOwnProperty('income')) {
          obj['income'] = _ApiClient["default"].convertToType(data['income'], 'Number');
        }

        if (data.hasOwnProperty('expenses')) {
          obj['expenses'] = _ApiClient["default"].convertToType(data['expenses'], 'Number');
        }

        if (data.hasOwnProperty('documentUrl')) {
          obj['documentUrl'] = _ApiClient["default"].convertToType(data['documentUrl'], 'String');
        }

        if (data.hasOwnProperty('postedName')) {
          obj['postedName'] = _ApiClient["default"].convertToType(data['postedName'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient["default"].convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('registrantId')) {
          obj['registrantId'] = _ApiClient["default"].convertToType(data['registrantId'], 'String');
        }

        if (data.hasOwnProperty('senateId')) {
          obj['senateId'] = _ApiClient["default"].convertToType(data['senateId'], 'String');
        }

        if (data.hasOwnProperty('houseregistrantId')) {
          obj['houseregistrantId'] = _ApiClient["default"].convertToType(data['houseregistrantId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LobbyingData;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


LobbyingData.prototype['symbol'] = undefined;
/**
 * Company's name.
 * @member {String} name
 */

LobbyingData.prototype['name'] = undefined;
/**
 * Description.
 * @member {String} description
 */

LobbyingData.prototype['description'] = undefined;
/**
 * Country.
 * @member {String} country
 */

LobbyingData.prototype['country'] = undefined;
/**
 * Year.
 * @member {Number} year
 */

LobbyingData.prototype['year'] = undefined;
/**
 * Period.
 * @member {String} period
 */

LobbyingData.prototype['period'] = undefined;
/**
 * Income reported by lobbying firms.
 * @member {Number} income
 */

LobbyingData.prototype['income'] = undefined;
/**
 * Expenses reported by the company.
 * @member {Number} expenses
 */

LobbyingData.prototype['expenses'] = undefined;
/**
 * Document's URL.
 * @member {String} documentUrl
 */

LobbyingData.prototype['documentUrl'] = undefined;
/**
 * Posted name.
 * @member {String} postedName
 */

LobbyingData.prototype['postedName'] = undefined;
/**
 * Date.
 * @member {String} date
 */

LobbyingData.prototype['date'] = undefined;
/**
 * Client ID.
 * @member {String} clientId
 */

LobbyingData.prototype['clientId'] = undefined;
/**
 * Registrant ID.
 * @member {String} registrantId
 */

LobbyingData.prototype['registrantId'] = undefined;
/**
 * Senate ID.
 * @member {String} senateId
 */

LobbyingData.prototype['senateId'] = undefined;
/**
 * House registrant ID.
 * @member {String} houseregistrantId
 */

LobbyingData.prototype['houseregistrantId'] = undefined;
var _default = LobbyingData;
exports["default"] = _default;