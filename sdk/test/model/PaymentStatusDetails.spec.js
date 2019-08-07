/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.128
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
    instance = new YapilyApi.PaymentStatusDetails();
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

  describe('PaymentStatusDetails', function() {
    it('should create an instance of PaymentStatusDetails', function() {
      // uncomment below and update the code to test PaymentStatusDetails
      //var instane = new YapilyApi.PaymentStatusDetails();
      //expect(instance).to.be.a(YapilyApi.PaymentStatusDetails);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new YapilyApi.PaymentStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property statusReason (base name: "statusReason")', function() {
      // uncomment below and update the code to test the property statusReason
      //var instane = new YapilyApi.PaymentStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property statusReasonDescription (base name: "statusReasonDescription")', function() {
      // uncomment below and update the code to test the property statusReasonDescription
      //var instane = new YapilyApi.PaymentStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property statusUpdateDate (base name: "statusUpdateDate")', function() {
      // uncomment below and update the code to test the property statusUpdateDate
      //var instane = new YapilyApi.PaymentStatusDetails();
      //expect(instance).to.be();
    });

  });

}));
