/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.365
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
    instance = new YapilyApi.Account();
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

  describe('Account', function() {
    it('should create an instance of Account', function() {
      // uncomment below and update the code to test Account
      //var instance = new YapilyApi.Account();
      //expect(instance).to.be.a(YapilyApi.Account);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new YapilyApi.Account();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new YapilyApi.Account();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new YapilyApi.Account();
      //expect(instance).to.be();
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instance = new YapilyApi.Account();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new YapilyApi.Account();
      //expect(instance).to.be();
    });

    it('should have the property usageType (base name: "usageType")', function() {
      // uncomment below and update the code to test the property usageType
      //var instance = new YapilyApi.Account();
      //expect(instance).to.be();
    });

    it('should have the property accountType (base name: "accountType")', function() {
      // uncomment below and update the code to test the property accountType
      //var instance = new YapilyApi.Account();
      //expect(instance).to.be();
    });

    it('should have the property nickname (base name: "nickname")', function() {
      // uncomment below and update the code to test the property nickname
      //var instance = new YapilyApi.Account();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instance = new YapilyApi.Account();
      //expect(instance).to.be();
    });

    it('should have the property accountNames (base name: "accountNames")', function() {
      // uncomment below and update the code to test the property accountNames
      //var instance = new YapilyApi.Account();
      //expect(instance).to.be();
    });

    it('should have the property accountIdentifications (base name: "accountIdentifications")', function() {
      // uncomment below and update the code to test the property accountIdentifications
      //var instance = new YapilyApi.Account();
      //expect(instance).to.be();
    });

    it('should have the property accountBalances (base name: "accountBalances")', function() {
      // uncomment below and update the code to test the property accountBalances
      //var instance = new YapilyApi.Account();
      //expect(instance).to.be();
    });

  });

}));
