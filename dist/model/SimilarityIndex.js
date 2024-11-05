"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SimilarityIndexInfo = _interopRequireDefault(require("./SimilarityIndexInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SimilarityIndex model module.
 * @module model/SimilarityIndex
 * @version 1.2.19
 */
var SimilarityIndex = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SimilarityIndex</code>.
   * @alias module:model/SimilarityIndex
   */
  function SimilarityIndex() {
    _classCallCheck(this, SimilarityIndex);

    SimilarityIndex.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SimilarityIndex, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SimilarityIndex</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimilarityIndex} obj Optional instance to populate.
     * @return {module:model/SimilarityIndex} The populated <code>SimilarityIndex</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SimilarityIndex();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('cik')) {
          obj['cik'] = _ApiClient["default"].convertToType(data['cik'], 'String');
        }

        if (data.hasOwnProperty('similarity')) {
          obj['similarity'] = _ApiClient["default"].convertToType(data['similarity'], [_SimilarityIndexInfo["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SimilarityIndex;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


SimilarityIndex.prototype['symbol'] = undefined;
/**
 * CIK.
 * @member {String} cik
 */

SimilarityIndex.prototype['cik'] = undefined;
/**
 * Array of filings with its cosine similarity compared to the same report of the previous year.
 * @member {Array.<module:model/SimilarityIndexInfo>} similarity
 */

SimilarityIndex.prototype['similarity'] = undefined;
var _default = SimilarityIndex;
exports["default"] = _default;