/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.243
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
    instance = new YapilyApi.BulkUserDeleteDetails();
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

  describe('BulkUserDeleteDetails', function() {
    it('should create an instance of BulkUserDeleteDetails', function() {
      // uncomment below and update the code to test BulkUserDeleteDetails
      //var instance = new YapilyApi.BulkUserDeleteDetails();
      //expect(instance).to.be.a(YapilyApi.BulkUserDeleteDetails);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new YapilyApi.BulkUserDeleteDetails();
      //expect(instance).to.be();
    });

    it('should have the property invalidApplicationUserIds (base name: "invalidApplicationUserIds")', function() {
      // uncomment below and update the code to test the property invalidApplicationUserIds
      //var instance = new YapilyApi.BulkUserDeleteDetails();
      //expect(instance).to.be();
    });

    it('should have the property invalidUserUuids (base name: "invalidUserUuids")', function() {
      // uncomment below and update the code to test the property invalidUserUuids
      //var instance = new YapilyApi.BulkUserDeleteDetails();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new YapilyApi.BulkUserDeleteDetails();
      //expect(instance).to.be();
    });

    it('should have the property startedAt (base name: "startedAt")', function() {
      // uncomment below and update the code to test the property startedAt
      //var instance = new YapilyApi.BulkUserDeleteDetails();
      //expect(instance).to.be();
    });

    it('should have the property users (base name: "users")', function() {
      // uncomment below and update the code to test the property users
      //var instance = new YapilyApi.BulkUserDeleteDetails();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new YapilyApi.BulkUserDeleteDetails();
      //expect(instance).to.be();
    });

  });

}));
