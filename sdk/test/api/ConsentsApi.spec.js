/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.207
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
    instance = new YapilyApi.ConsentsApi();
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

  describe('ConsentsApi', function() {
    describe('addConsentUsingPOST', function() {
      it('should call addConsentUsingPOST successfully', function(done) {
        //uncomment below and update the code to test addConsentUsingPOST
        //instance.addConsentUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createConsentWithCodeUsingPOST', function() {
      it('should call createConsentWithCodeUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createConsentWithCodeUsingPOST
        //instance.createConsentWithCodeUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUsingDELETE', function() {
      it('should call deleteUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteUsingDELETE
        //instance.deleteUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConsentByIdUsingGET', function() {
      it('should call getConsentByIdUsingGET successfully', function(done) {
        //uncomment below and update the code to test getConsentByIdUsingGET
        //instance.getConsentByIdUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConsentBySingleAccessConsentUsingPOST', function() {
      it('should call getConsentBySingleAccessConsentUsingPOST successfully', function(done) {
        //uncomment below and update the code to test getConsentBySingleAccessConsentUsingPOST
        //instance.getConsentBySingleAccessConsentUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConsentsUsingGET', function() {
      it('should call getConsentsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getConsentsUsingGET
        //instance.getConsentsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserConsentsUsingGET', function() {
      it('should call getUserConsentsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getUserConsentsUsingGET
        //instance.getUserConsentsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
