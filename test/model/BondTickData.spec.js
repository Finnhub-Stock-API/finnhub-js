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
    instance = new finnhub.BondTickData();
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

  describe('BondTickData', function() {
    it('should create an instance of BondTickData', function() {
      // uncomment below and update the code to test BondTickData
      //var instane = new finnhub.BondTickData();
      //expect(instance).to.be.a(finnhub.BondTickData);
    });

    it('should have the property skip (base name: "skip")', function() {
      // uncomment below and update the code to test the property skip
      //var instance = new finnhub.BondTickData();
      //expect(instance).to.be();
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instance = new finnhub.BondTickData();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new finnhub.BondTickData();
      //expect(instance).to.be();
    });

    it('should have the property v (base name: "v")', function() {
      // uncomment below and update the code to test the property v
      //var instance = new finnhub.BondTickData();
      //expect(instance).to.be();
    });

    it('should have the property p (base name: "p")', function() {
      // uncomment below and update the code to test the property p
      //var instance = new finnhub.BondTickData();
      //expect(instance).to.be();
    });

    it('should have the property t (base name: "t")', function() {
      // uncomment below and update the code to test the property t
      //var instance = new finnhub.BondTickData();
      //expect(instance).to.be();
    });

    it('should have the property si (base name: "si")', function() {
      // uncomment below and update the code to test the property si
      //var instance = new finnhub.BondTickData();
      //expect(instance).to.be();
    });

    it('should have the property cp (base name: "cp")', function() {
      // uncomment below and update the code to test the property cp
      //var instance = new finnhub.BondTickData();
      //expect(instance).to.be();
    });

    it('should have the property c (base name: "c")', function() {
      // uncomment below and update the code to test the property c
      //var instance = new finnhub.BondTickData();
      //expect(instance).to.be();
    });

  });

}));