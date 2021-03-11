/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.315
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.0
 *
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
    factory(root.expect, root.YapilyApi);
  }
}(this, function(expect, YapilyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YapilyApi.InternationalPaymentRequest();
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

  describe('InternationalPaymentRequest', function() {
    it('should create an instance of InternationalPaymentRequest', function() {
      // uncomment below and update the code to test InternationalPaymentRequest
      //var instance = new YapilyApi.InternationalPaymentRequest();
      //expect(instance).to.be.a(YapilyApi.InternationalPaymentRequest);
    });

    it('should have the property currencyOfTransfer (base name: "currencyOfTransfer")', function() {
      // uncomment below and update the code to test the property currencyOfTransfer
      //var instance = new YapilyApi.InternationalPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property exchangeRateInformation (base name: "exchangeRateInformation")', function() {
      // uncomment below and update the code to test the property exchangeRateInformation
      //var instance = new YapilyApi.InternationalPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property purpose (base name: "purpose")', function() {
      // uncomment below and update the code to test the property purpose
      //var instance = new YapilyApi.InternationalPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new YapilyApi.InternationalPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property chargeBearer (base name: "chargeBearer")', function() {
      // uncomment below and update the code to test the property chargeBearer
      //var instance = new YapilyApi.InternationalPaymentRequest();
      //expect(instance).to.be();
    });

  });

}));
