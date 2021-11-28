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
    instance = new finnhub.CryptoProfile();
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

  describe('CryptoProfile', function() {
    it('should create an instance of CryptoProfile', function() {
      // uncomment below and update the code to test CryptoProfile
      //var instane = new finnhub.CryptoProfile();
      //expect(instance).to.be.a(finnhub.CryptoProfile);
    });

    it('should have the property longName (base name: "longName")', function() {
      // uncomment below and update the code to test the property longName
      //var instance = new finnhub.CryptoProfile();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new finnhub.CryptoProfile();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new finnhub.CryptoProfile();
      //expect(instance).to.be();
    });

    it('should have the property website (base name: "website")', function() {
      // uncomment below and update the code to test the property website
      //var instance = new finnhub.CryptoProfile();
      //expect(instance).to.be();
    });

    it('should have the property marketCap (base name: "marketCap")', function() {
      // uncomment below and update the code to test the property marketCap
      //var instance = new finnhub.CryptoProfile();
      //expect(instance).to.be();
    });

    it('should have the property totalSupply (base name: "totalSupply")', function() {
      // uncomment below and update the code to test the property totalSupply
      //var instance = new finnhub.CryptoProfile();
      //expect(instance).to.be();
    });

    it('should have the property maxSupply (base name: "maxSupply")', function() {
      // uncomment below and update the code to test the property maxSupply
      //var instance = new finnhub.CryptoProfile();
      //expect(instance).to.be();
    });

    it('should have the property circulatingSupply (base name: "circulatingSupply")', function() {
      // uncomment below and update the code to test the property circulatingSupply
      //var instance = new finnhub.CryptoProfile();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instance = new finnhub.CryptoProfile();
      //expect(instance).to.be();
    });

    it('should have the property launchDate (base name: "launchDate")', function() {
      // uncomment below and update the code to test the property launchDate
      //var instance = new finnhub.CryptoProfile();
      //expect(instance).to.be();
    });

    it('should have the property proofType (base name: "proofType")', function() {
      // uncomment below and update the code to test the property proofType
      //var instance = new finnhub.CryptoProfile();
      //expect(instance).to.be();
    });

  });

}));
