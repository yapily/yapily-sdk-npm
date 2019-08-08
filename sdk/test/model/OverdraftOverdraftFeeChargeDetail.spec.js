/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.131
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
    instance = new YapilyApi.OverdraftOverdraftFeeChargeDetail();
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

  describe('OverdraftOverdraftFeeChargeDetail', function() {
    it('should create an instance of OverdraftOverdraftFeeChargeDetail', function() {
      // uncomment below and update the code to test OverdraftOverdraftFeeChargeDetail
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeDetail();
      //expect(instance).to.be.a(YapilyApi.OverdraftOverdraftFeeChargeDetail);
    });

    it('should have the property applicationFrequency (base name: "ApplicationFrequency")', function() {
      // uncomment below and update the code to test the property applicationFrequency
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeDetail();
      //expect(instance).to.be();
    });

    it('should have the property calculationFrequency (base name: "CalculationFrequency")', function() {
      // uncomment below and update the code to test the property calculationFrequency
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeDetail();
      //expect(instance).to.be();
    });

    it('should have the property feeAmount (base name: "FeeAmount")', function() {
      // uncomment below and update the code to test the property feeAmount
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeDetail();
      //expect(instance).to.be();
    });

    it('should have the property feeRate (base name: "FeeRate")', function() {
      // uncomment below and update the code to test the property feeRate
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeDetail();
      //expect(instance).to.be();
    });

    it('should have the property feeRateType (base name: "FeeRateType")', function() {
      // uncomment below and update the code to test the property feeRateType
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeDetail();
      //expect(instance).to.be();
    });

    it('should have the property feeType (base name: "FeeType")', function() {
      // uncomment below and update the code to test the property feeType
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeDetail();
      //expect(instance).to.be();
    });

    it('should have the property incrementalBorrowingAmount (base name: "IncrementalBorrowingAmount")', function() {
      // uncomment below and update the code to test the property incrementalBorrowingAmount
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeDetail();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "Notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeDetail();
      //expect(instance).to.be();
    });

    it('should have the property otherApplicationFrequency (base name: "OtherApplicationFrequency")', function() {
      // uncomment below and update the code to test the property otherApplicationFrequency
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeDetail();
      //expect(instance).to.be();
    });

    it('should have the property otherCalculationFrequency (base name: "OtherCalculationFrequency")', function() {
      // uncomment below and update the code to test the property otherCalculationFrequency
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeDetail();
      //expect(instance).to.be();
    });

    it('should have the property otherFeeRateType (base name: "OtherFeeRateType")', function() {
      // uncomment below and update the code to test the property otherFeeRateType
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeDetail();
      //expect(instance).to.be();
    });

    it('should have the property otherFeeType (base name: "OtherFeeType")', function() {
      // uncomment below and update the code to test the property otherFeeType
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeDetail();
      //expect(instance).to.be();
    });

    it('should have the property overdraftControlIndicator (base name: "OverdraftControlIndicator")', function() {
      // uncomment below and update the code to test the property overdraftControlIndicator
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeDetail();
      //expect(instance).to.be();
    });

    it('should have the property overdraftFeeChargeCap (base name: "OverdraftFeeChargeCap")', function() {
      // uncomment below and update the code to test the property overdraftFeeChargeCap
      //var instane = new YapilyApi.OverdraftOverdraftFeeChargeDetail();
      //expect(instance).to.be();
    });

  });

}));
