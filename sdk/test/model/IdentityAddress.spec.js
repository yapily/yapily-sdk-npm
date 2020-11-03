/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.268
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
    instance = new YapilyApi.IdentityAddress();
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

  describe('IdentityAddress', function() {
    it('should create an instance of IdentityAddress', function() {
      // uncomment below and update the code to test IdentityAddress
      //var instance = new YapilyApi.IdentityAddress();
      //expect(instance).to.be.a(YapilyApi.IdentityAddress);
    });

    it('should have the property addressLines (base name: "addressLines")', function() {
      // uncomment below and update the code to test the property addressLines
      //var instance = new YapilyApi.IdentityAddress();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new YapilyApi.IdentityAddress();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instance = new YapilyApi.IdentityAddress();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new YapilyApi.IdentityAddress();
      //expect(instance).to.be();
    });

    it('should have the property streetName (base name: "streetName")', function() {
      // uncomment below and update the code to test the property streetName
      //var instance = new YapilyApi.IdentityAddress();
      //expect(instance).to.be();
    });

    it('should have the property buildingNumber (base name: "buildingNumber")', function() {
      // uncomment below and update the code to test the property buildingNumber
      //var instance = new YapilyApi.IdentityAddress();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new YapilyApi.IdentityAddress();
      //expect(instance).to.be();
    });

    it('should have the property county (base name: "county")', function() {
      // uncomment below and update the code to test the property county
      //var instance = new YapilyApi.IdentityAddress();
      //expect(instance).to.be();
    });

  });

}));
