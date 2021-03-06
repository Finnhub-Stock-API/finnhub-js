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
    instance = new finnhub.Company();
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

  describe('Company', function() {
    it('should create an instance of Company', function() {
      // uncomment below and update the code to test Company
      //var instane = new finnhub.Company();
      //expect(instance).to.be.a(finnhub.Company);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new finnhub.Company();
      //expect(instance).to.be();
    });

    it('should have the property age (base name: "age")', function() {
      // uncomment below and update the code to test the property age
      //var instane = new finnhub.Company();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new finnhub.Company();
      //expect(instance).to.be();
    });

    it('should have the property since (base name: "since")', function() {
      // uncomment below and update the code to test the property since
      //var instane = new finnhub.Company();
      //expect(instance).to.be();
    });

    it('should have the property sex (base name: "sex")', function() {
      // uncomment below and update the code to test the property sex
      //var instane = new finnhub.Company();
      //expect(instance).to.be();
    });

    it('should have the property compensation (base name: "compensation")', function() {
      // uncomment below and update the code to test the property compensation
      //var instane = new finnhub.Company();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new finnhub.Company();
      //expect(instance).to.be();
    });

  });

}));
