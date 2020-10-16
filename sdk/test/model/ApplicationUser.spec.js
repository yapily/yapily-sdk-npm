/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.258
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
    instance = new YapilyApi.ApplicationUser();
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

  describe('ApplicationUser', function() {
    it('should create an instance of ApplicationUser', function() {
      // uncomment below and update the code to test ApplicationUser
      //var instance = new YapilyApi.ApplicationUser();
      //expect(instance).to.be.a(YapilyApi.ApplicationUser);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new YapilyApi.ApplicationUser();
      //expect(instance).to.be();
    });

    it('should have the property applicationUuid (base name: "applicationUuid")', function() {
      // uncomment below and update the code to test the property applicationUuid
      //var instance = new YapilyApi.ApplicationUser();
      //expect(instance).to.be();
    });

    it('should have the property applicationUserId (base name: "applicationUserId")', function() {
      // uncomment below and update the code to test the property applicationUserId
      //var instance = new YapilyApi.ApplicationUser();
      //expect(instance).to.be();
    });

    it('should have the property referenceId (base name: "referenceId")', function() {
      // uncomment below and update the code to test the property referenceId
      //var instance = new YapilyApi.ApplicationUser();
      //expect(instance).to.be();
    });

    it('should have the property institutionConsents (base name: "institutionConsents")', function() {
      // uncomment below and update the code to test the property institutionConsents
      //var instance = new YapilyApi.ApplicationUser();
      //expect(instance).to.be();
    });

  });

}));
