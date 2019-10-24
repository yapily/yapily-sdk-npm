/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.158
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.YapilyApi);
  }
}(this, function(expect, YapilyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YapilyApi.PeriodicPaymentRequest();
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

  describe('PeriodicPaymentRequest', function() {
    it('should create an instance of PeriodicPaymentRequest', function() {
      // uncomment below and update the code to test PeriodicPaymentRequest
      //var instane = new YapilyApi.PeriodicPaymentRequest();
      //expect(instance).to.be.a(YapilyApi.PeriodicPaymentRequest);
    });

    it('should have the property frequency (base name: "frequency")', function() {
      // uncomment below and update the code to test the property frequency
      //var instane = new YapilyApi.PeriodicPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property numberOfPayments (base name: "numberOfPayments")', function() {
      // uncomment below and update the code to test the property numberOfPayments
      //var instane = new YapilyApi.PeriodicPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property nextPaymentDateTime (base name: "nextPaymentDateTime")', function() {
      // uncomment below and update the code to test the property nextPaymentDateTime
      //var instane = new YapilyApi.PeriodicPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property nextPaymentAmount (base name: "nextPaymentAmount")', function() {
      // uncomment below and update the code to test the property nextPaymentAmount
      //var instane = new YapilyApi.PeriodicPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property finalPaymentDateTime (base name: "finalPaymentDateTime")', function() {
      // uncomment below and update the code to test the property finalPaymentDateTime
      //var instane = new YapilyApi.PeriodicPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property finalPaymentAmount (base name: "finalPaymentAmount")', function() {
      // uncomment below and update the code to test the property finalPaymentAmount
      //var instane = new YapilyApi.PeriodicPaymentRequest();
      //expect(instance).to.be();
    });

  });

}));
