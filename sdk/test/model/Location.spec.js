/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.325
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
    instance = new YapilyApi.Location();
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

  describe('Location', function() {
    it('should create an instance of Location', function() {
      // uncomment below and update the code to test Location
      //var instance = new YapilyApi.Location();
      //expect(instance).to.be.a(YapilyApi.Location);
    });

    it('should have the property locationCategory (base name: "LocationCategory")', function() {
      // uncomment below and update the code to test the property locationCategory
      //var instance = new YapilyApi.Location();
      //expect(instance).to.be();
    });

    it('should have the property otherLocationCategory (base name: "OtherLocationCategory")', function() {
      // uncomment below and update the code to test the property otherLocationCategory
      //var instance = new YapilyApi.Location();
      //expect(instance).to.be();
    });

    it('should have the property postalAddress (base name: "PostalAddress")', function() {
      // uncomment below and update the code to test the property postalAddress
      //var instance = new YapilyApi.Location();
      //expect(instance).to.be();
    });

    it('should have the property site (base name: "Site")', function() {
      // uncomment below and update the code to test the property site
      //var instance = new YapilyApi.Location();
      //expect(instance).to.be();
    });

    it('should have the property mapServiceLinks (base name: "mapServiceLinks")', function() {
      // uncomment below and update the code to test the property mapServiceLinks
      //var instance = new YapilyApi.Location();
      //expect(instance).to.be();
    });

  });

}));
