/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.238
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
    instance = new YapilyApi.Transaction();
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

  describe('Transaction', function() {
    it('should create an instance of Transaction', function() {
      // uncomment below and update the code to test Transaction
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be.a(YapilyApi.Transaction);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property bookingDateTime (base name: "bookingDateTime")', function() {
      // uncomment below and update the code to test the property bookingDateTime
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property valueDateTime (base name: "valueDateTime")', function() {
      // uncomment below and update the code to test the property valueDateTime
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionAmount (base name: "transactionAmount")', function() {
      // uncomment below and update the code to test the property transactionAmount
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property currencyExchange (base name: "currencyExchange")', function() {
      // uncomment below and update the code to test the property currencyExchange
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property chargeDetails (base name: "chargeDetails")', function() {
      // uncomment below and update the code to test the property chargeDetails
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property statementReferences (base name: "statementReferences")', function() {
      // uncomment below and update the code to test the property statementReferences
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionInformation (base name: "transactionInformation")', function() {
      // uncomment below and update the code to test the property transactionInformation
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property addressDetails (base name: "addressDetails")', function() {
      // uncomment below and update the code to test the property addressDetails
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property isoBankTransactionCode (base name: "isoBankTransactionCode")', function() {
      // uncomment below and update the code to test the property isoBankTransactionCode
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property proprietaryBankTransactionCode (base name: "proprietaryBankTransactionCode")', function() {
      // uncomment below and update the code to test the property proprietaryBankTransactionCode
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property merchant (base name: "merchant")', function() {
      // uncomment below and update the code to test the property merchant
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property enrichment (base name: "enrichment")', function() {
      // uncomment below and update the code to test the property enrichment
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property supplementaryData (base name: "supplementaryData")', function() {
      // uncomment below and update the code to test the property supplementaryData
      //var instance = new YapilyApi.Transaction();
      //expect(instance).to.be();
    });

  });

}));
