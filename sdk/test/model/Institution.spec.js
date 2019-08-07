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
    instance = new YapilyApi.Institution();
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

  describe('Institution', function() {
    it('should create an instance of Institution', function() {
      // uncomment below and update the code to test Institution
      //var instane = new YapilyApi.Institution();
      //expect(instance).to.be.a(YapilyApi.Institution);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new YapilyApi.Institution();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new YapilyApi.Institution();
      //expect(instance).to.be();
    });

    it('should have the property fullName (base name: "fullName")', function() {
      // uncomment below and update the code to test the property fullName
      //var instane = new YapilyApi.Institution();
      //expect(instance).to.be();
    });

    it('should have the property countries (base name: "countries")', function() {
      // uncomment below and update the code to test the property countries
      //var instane = new YapilyApi.Institution();
      //expect(instance).to.be();
    });

    it('should have the property environmentType (base name: "environmentType")', function() {
      // uncomment below and update the code to test the property environmentType
      //var instane = new YapilyApi.Institution();
      //expect(instance).to.be();
    });

    it('should have the property credentialsType (base name: "credentialsType")', function() {
      // uncomment below and update the code to test the property credentialsType
      //var instane = new YapilyApi.Institution();
      //expect(instance).to.be();
    });

    it('should have the property media (base name: "media")', function() {
      // uncomment below and update the code to test the property media
      //var instane = new YapilyApi.Institution();
      //expect(instance).to.be();
    });

    it('should have the property features (base name: "features")', function() {
      // uncomment below and update the code to test the property features
      //var instane = new YapilyApi.Institution();
      //expect(instance).to.be();
    });

    it('should have the property monitoring (base name: "monitoring")', function() {
      // uncomment below and update the code to test the property monitoring
      //var instane = new YapilyApi.Institution();
      //expect(instance).to.be();
    });

  });

}));
