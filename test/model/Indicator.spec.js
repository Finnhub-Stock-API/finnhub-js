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
    instance = new finnhub.Indicator();
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

  describe('Indicator', function() {
    it('should create an instance of Indicator', function() {
      // uncomment below and update the code to test Indicator
      //var instane = new finnhub.Indicator();
      //expect(instance).to.be.a(finnhub.Indicator);
    });

    it('should have the property buy (base name: "buy")', function() {
      // uncomment below and update the code to test the property buy
      //var instane = new finnhub.Indicator();
      //expect(instance).to.be();
    });

    it('should have the property neutral (base name: "neutral")', function() {
      // uncomment below and update the code to test the property neutral
      //var instane = new finnhub.Indicator();
      //expect(instance).to.be();
    });

    it('should have the property sell (base name: "sell")', function() {
      // uncomment below and update the code to test the property sell
      //var instane = new finnhub.Indicator();
      //expect(instance).to.be();
    });

  });

}));
