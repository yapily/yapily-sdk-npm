/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.146
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
    instance = new YapilyApi.URI();
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

  describe('URI', function() {
    it('should create an instance of URI', function() {
      // uncomment below and update the code to test URI
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be.a(YapilyApi.URI);
    });

    it('should have the property absolute (base name: "absolute")', function() {
      // uncomment below and update the code to test the property absolute
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

    it('should have the property authority (base name: "authority")', function() {
      // uncomment below and update the code to test the property authority
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

    it('should have the property fragment (base name: "fragment")', function() {
      // uncomment below and update the code to test the property fragment
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

    it('should have the property opaque (base name: "opaque")', function() {
      // uncomment below and update the code to test the property opaque
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

    it('should have the property query (base name: "query")', function() {
      // uncomment below and update the code to test the property query
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

    it('should have the property rawAuthority (base name: "rawAuthority")', function() {
      // uncomment below and update the code to test the property rawAuthority
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

    it('should have the property rawFragment (base name: "rawFragment")', function() {
      // uncomment below and update the code to test the property rawFragment
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

    it('should have the property rawPath (base name: "rawPath")', function() {
      // uncomment below and update the code to test the property rawPath
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

    it('should have the property rawQuery (base name: "rawQuery")', function() {
      // uncomment below and update the code to test the property rawQuery
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

    it('should have the property rawSchemeSpecificPart (base name: "rawSchemeSpecificPart")', function() {
      // uncomment below and update the code to test the property rawSchemeSpecificPart
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

    it('should have the property rawUserInfo (base name: "rawUserInfo")', function() {
      // uncomment below and update the code to test the property rawUserInfo
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

    it('should have the property scheme (base name: "scheme")', function() {
      // uncomment below and update the code to test the property scheme
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

    it('should have the property schemeSpecificPart (base name: "schemeSpecificPart")', function() {
      // uncomment below and update the code to test the property schemeSpecificPart
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

    it('should have the property userInfo (base name: "userInfo")', function() {
      // uncomment below and update the code to test the property userInfo
      //var instane = new YapilyApi.URI();
      //expect(instance).to.be();
    });

  });

}));
