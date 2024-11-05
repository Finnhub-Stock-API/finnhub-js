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
    instance = new finnhub.InFilingResponse();
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

  describe('InFilingResponse', function() {
    it('should create an instance of InFilingResponse', function() {
      // uncomment below and update the code to test InFilingResponse
      //var instane = new finnhub.InFilingResponse();
      //expect(instance).to.be.a(finnhub.InFilingResponse);
    });

    it('should have the property filingId (base name: "filingId")', function() {
      // uncomment below and update the code to test the property filingId
      //var instance = new finnhub.InFilingResponse();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new finnhub.InFilingResponse();
      //expect(instance).to.be();
    });

    it('should have the property filerId (base name: "filerId")', function() {
      // uncomment below and update the code to test the property filerId
      //var instance = new finnhub.InFilingResponse();
      //expect(instance).to.be();
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instance = new finnhub.InFilingResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new finnhub.InFilingResponse();
      //expect(instance).to.be();
    });

    it('should have the property acceptanceDate (base name: "acceptanceDate")', function() {
      // uncomment below and update the code to test the property acceptanceDate
      //var instance = new finnhub.InFilingResponse();
      //expect(instance).to.be();
    });

    it('should have the property filedDate (base name: "filedDate")', function() {
      // uncomment below and update the code to test the property filedDate
      //var instance = new finnhub.InFilingResponse();
      //expect(instance).to.be();
    });

    it('should have the property reportDate (base name: "reportDate")', function() {
      // uncomment below and update the code to test the property reportDate
      //var instance = new finnhub.InFilingResponse();
      //expect(instance).to.be();
    });

    it('should have the property form (base name: "form")', function() {
      // uncomment below and update the code to test the property form
      //var instance = new finnhub.InFilingResponse();
      //expect(instance).to.be();
    });

    it('should have the property amend (base name: "amend")', function() {
      // uncomment below and update the code to test the property amend
      //var instance = new finnhub.InFilingResponse();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new finnhub.InFilingResponse();
      //expect(instance).to.be();
    });

    it('should have the property pageCount (base name: "pageCount")', function() {
      // uncomment below and update the code to test the property pageCount
      //var instance = new finnhub.InFilingResponse();
      //expect(instance).to.be();
    });

    it('should have the property documentCount (base name: "documentCount")', function() {
      // uncomment below and update the code to test the property documentCount
      //var instance = new finnhub.InFilingResponse();
      //expect(instance).to.be();
    });

    it('should have the property documents (base name: "documents")', function() {
      // uncomment below and update the code to test the property documents
      //var instance = new finnhub.InFilingResponse();
      //expect(instance).to.be();
    });

  });

}));