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
    instance = new finnhub.FilingSentiment();
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

  describe('FilingSentiment', function() {
    it('should create an instance of FilingSentiment', function() {
      // uncomment below and update the code to test FilingSentiment
      //var instane = new finnhub.FilingSentiment();
      //expect(instance).to.be.a(finnhub.FilingSentiment);
    });

    it('should have the property negative (base name: "negative")', function() {
      // uncomment below and update the code to test the property negative
      //var instance = new finnhub.FilingSentiment();
      //expect(instance).to.be();
    });

    it('should have the property positive (base name: "positive")', function() {
      // uncomment below and update the code to test the property positive
      //var instance = new finnhub.FilingSentiment();
      //expect(instance).to.be();
    });

    it('should have the property polarity (base name: "polarity")', function() {
      // uncomment below and update the code to test the property polarity
      //var instance = new finnhub.FilingSentiment();
      //expect(instance).to.be();
    });

    it('should have the property litigious (base name: "litigious")', function() {
      // uncomment below and update the code to test the property litigious
      //var instance = new finnhub.FilingSentiment();
      //expect(instance).to.be();
    });

    it('should have the property uncertainty (base name: "uncertainty")', function() {
      // uncomment below and update the code to test the property uncertainty
      //var instance = new finnhub.FilingSentiment();
      //expect(instance).to.be();
    });

    it('should have the property constraining (base name: "constraining")', function() {
      // uncomment below and update the code to test the property constraining
      //var instance = new finnhub.FilingSentiment();
      //expect(instance).to.be();
    });

    it('should have the property modalWeak (base name: "modal-weak")', function() {
      // uncomment below and update the code to test the property modalWeak
      //var instance = new finnhub.FilingSentiment();
      //expect(instance).to.be();
    });

    it('should have the property modalStrong (base name: "modal-strong")', function() {
      // uncomment below and update the code to test the property modalStrong
      //var instance = new finnhub.FilingSentiment();
      //expect(instance).to.be();
    });

    it('should have the property modalModerate (base name: "modal-moderate")', function() {
      // uncomment below and update the code to test the property modalModerate
      //var instance = new finnhub.FilingSentiment();
      //expect(instance).to.be();
    });

  });

}));
