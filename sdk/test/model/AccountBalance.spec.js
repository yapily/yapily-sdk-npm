/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.175
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.1
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
    instance = new YapilyApi.AccountBalance();
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

  describe('AccountBalance', function() {
    it('should create an instance of AccountBalance', function() {
      // uncomment below and update the code to test AccountBalance
      //var instance = new YapilyApi.AccountBalance();
      //expect(instance).to.be.a(YapilyApi.AccountBalance);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new YapilyApi.AccountBalance();
      //expect(instance).to.be();
    });

    it('should have the property dateTime (base name: "dateTime")', function() {
      // uncomment below and update the code to test the property dateTime
      //var instance = new YapilyApi.AccountBalance();
      //expect(instance).to.be();
    });

    it('should have the property balanceAmount (base name: "balanceAmount")', function() {
      // uncomment below and update the code to test the property balanceAmount
      //var instance = new YapilyApi.AccountBalance();
      //expect(instance).to.be();
    });

    it('should have the property creditLineIncluded (base name: "creditLineIncluded")', function() {
      // uncomment below and update the code to test the property creditLineIncluded
      //var instance = new YapilyApi.AccountBalance();
      //expect(instance).to.be();
    });

    it('should have the property creditLines (base name: "creditLines")', function() {
      // uncomment below and update the code to test the property creditLines
      //var instance = new YapilyApi.AccountBalance();
      //expect(instance).to.be();
    });

  });

}));
