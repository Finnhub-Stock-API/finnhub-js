/**
 * Finnhub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.finnhub);
  }
}(this, function(expect, finnhub) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new finnhub.SimilarityIndexInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SimilarityIndexInfo', function() {
    it('should create an instance of SimilarityIndexInfo', function() {
      // uncomment below and update the code to test SimilarityIndexInfo
      //var instane = new finnhub.SimilarityIndexInfo();
      //expect(instance).to.be.a(finnhub.SimilarityIndexInfo);
    });

    it('should have the property cik (base name: "cik")', function() {
      // uncomment below and update the code to test the property cik
      //var instance = new finnhub.SimilarityIndexInfo();
      //expect(instance).to.be();
    });

    it('should have the property item1 (base name: "item1")', function() {
      // uncomment below and update the code to test the property item1
      //var instance = new finnhub.SimilarityIndexInfo();
      //expect(instance).to.be();
    });

    it('should have the property item1a (base name: "item1a")', function() {
      // uncomment below and update the code to test the property item1a
      //var instance = new finnhub.SimilarityIndexInfo();
      //expect(instance).to.be();
    });

    it('should have the property item2 (base name: "item2")', function() {
      // uncomment below and update the code to test the property item2
      //var instance = new finnhub.SimilarityIndexInfo();
      //expect(instance).to.be();
    });

    it('should have the property item7 (base name: "item7")', function() {
      // uncomment below and update the code to test the property item7
      //var instance = new finnhub.SimilarityIndexInfo();
      //expect(instance).to.be();
    });

    it('should have the property item7a (base name: "item7a")', function() {
      // uncomment below and update the code to test the property item7a
      //var instance = new finnhub.SimilarityIndexInfo();
      //expect(instance).to.be();
    });

    it('should have the property accessNumber (base name: "accessNumber")', function() {
      // uncomment below and update the code to test the property accessNumber
      //var instance = new finnhub.SimilarityIndexInfo();
      //expect(instance).to.be();
    });

    it('should have the property form (base name: "form")', function() {
      // uncomment below and update the code to test the property form
      //var instance = new finnhub.SimilarityIndexInfo();
      //expect(instance).to.be();
    });

    it('should have the property filedDate (base name: "filedDate")', function() {
      // uncomment below and update the code to test the property filedDate
      //var instance = new finnhub.SimilarityIndexInfo();
      //expect(instance).to.be();
    });

    it('should have the property acceptedDate (base name: "acceptedDate")', function() {
      // uncomment below and update the code to test the property acceptedDate
      //var instance = new finnhub.SimilarityIndexInfo();
      //expect(instance).to.be();
    });

    it('should have the property reportUrl (base name: "reportUrl")', function() {
      // uncomment below and update the code to test the property reportUrl
      //var instance = new finnhub.SimilarityIndexInfo();
      //expect(instance).to.be();
    });

    it('should have the property filingUrl (base name: "filingUrl")', function() {
      // uncomment below and update the code to test the property filingUrl
      //var instance = new finnhub.SimilarityIndexInfo();
      //expect(instance).to.be();
    });

  });

}));
