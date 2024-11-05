"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CompanyNewsStatistics = _interopRequireDefault(require("./CompanyNewsStatistics"));

var _Sentiment = _interopRequireDefault(require("./Sentiment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NewsSentiment model module.
 * @module model/NewsSentiment
 * @version 1.2.19
 */
var NewsSentiment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewsSentiment</code>.
   * @alias module:model/NewsSentiment
   */
  function NewsSentiment() {
    _classCallCheck(this, NewsSentiment);

    NewsSentiment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewsSentiment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NewsSentiment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewsSentiment} obj Optional instance to populate.
     * @return {module:model/NewsSentiment} The populated <code>NewsSentiment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewsSentiment();

        if (data.hasOwnProperty('buzz')) {
          obj['buzz'] = _CompanyNewsStatistics["default"].constructFromObject(data['buzz']);
        }

        if (data.hasOwnProperty('companyNewsScore')) {
          obj['companyNewsScore'] = _ApiClient["default"].convertToType(data['companyNewsScore'], 'Number');
        }

        if (data.hasOwnProperty('sectorAverageBullishPercent')) {
          obj['sectorAverageBullishPercent'] = _ApiClient["default"].convertToType(data['sectorAverageBullishPercent'], 'Number');
        }

        if (data.hasOwnProperty('sectorAverageNewsScore')) {
          obj['sectorAverageNewsScore'] = _ApiClient["default"].convertToType(data['sectorAverageNewsScore'], 'Number');
        }

        if (data.hasOwnProperty('sentiment')) {
          obj['sentiment'] = _Sentiment["default"].constructFromObject(data['sentiment']);
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NewsSentiment;
}();
/**
 * @member {module:model/CompanyNewsStatistics} buzz
 */


NewsSentiment.prototype['buzz'] = undefined;
/**
 * News score.
 * @member {Number} companyNewsScore
 */

NewsSentiment.prototype['companyNewsScore'] = undefined;
/**
 * Sector average bullish percent.
 * @member {Number} sectorAverageBullishPercent
 */

NewsSentiment.prototype['sectorAverageBullishPercent'] = undefined;
/**
 * Sectore average score.
 * @member {Number} sectorAverageNewsScore
 */

NewsSentiment.prototype['sectorAverageNewsScore'] = undefined;
/**
 * @member {module:model/Sentiment} sentiment
 */

NewsSentiment.prototype['sentiment'] = undefined;
/**
 * Requested symbol.
 * @member {String} symbol
 */

NewsSentiment.prototype['symbol'] = undefined;
var _default = NewsSentiment;
exports["default"] = _default;