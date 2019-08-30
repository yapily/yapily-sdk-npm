/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.137
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OtherType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OtherType'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.CreditInterestCreditInterestEligibility = factory(root.YapilyApi.ApiClient, root.YapilyApi.OtherType);
  }
}(this, function(ApiClient, OtherType) {
  'use strict';




  /**
   * The CreditInterestCreditInterestEligibility model module.
   * @module model/CreditInterestCreditInterestEligibility
   * @version 0.0.137
   */

  /**
   * Constructs a new <code>CreditInterestCreditInterestEligibility</code>.
   * Eligibility for credit interest
   * @alias module:model/CreditInterestCreditInterestEligibility
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>CreditInterestCreditInterestEligibility</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreditInterestCreditInterestEligibility} obj Optional instance to populate.
   * @return {module:model/CreditInterestCreditInterestEligibility} The populated <code>CreditInterestCreditInterestEligibility</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Amount')) {
        obj['Amount'] = ApiClient.convertToType(data['Amount'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('Indicator')) {
        obj['Indicator'] = ApiClient.convertToType(data['Indicator'], 'Boolean');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], ['String']);
      }
      if (data.hasOwnProperty('OtherType')) {
        obj['OtherType'] = OtherType.constructFromObject(data['OtherType']);
      }
      if (data.hasOwnProperty('Period')) {
        obj['Period'] = ApiClient.convertToType(data['Period'], 'String');
      }
      if (data.hasOwnProperty('Textual')) {
        obj['Textual'] = ApiClient.convertToType(data['Textual'], 'String');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Amount
   */
  exports.prototype['Amount'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Boolean} Indicator
   */
  exports.prototype['Indicator'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {Array.<String>} Notes
   */
  exports.prototype['Notes'] = undefined;
  /**
   * @member {module:model/OtherType} OtherType
   */
  exports.prototype['OtherType'] = undefined;
  /**
   * @member {module:model/CreditInterestCreditInterestEligibility.PeriodEnum} Period
   */
  exports.prototype['Period'] = undefined;
  /**
   * @member {String} Textual
   */
  exports.prototype['Textual'] = undefined;
  /**
   * @member {module:model/CreditInterestCreditInterestEligibility.TypeEnum} Type
   */
  exports.prototype['Type'] = undefined;


  /**
   * Allowed values for the <code>Period</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PeriodEnum = {
    /**
     * value: "Day"
     * @const
     */
    "Day": "Day",
    /**
     * value: "Half Year"
     * @const
     */
    "Half Year": "Half Year",
    /**
     * value: "Month"
     * @const
     */
    "Month": "Month",
    /**
     * value: "Quarter"
     * @const
     */
    "Quarter": "Quarter",
    /**
     * value: "Week"
     * @const
     */
    "Week": "Week",
    /**
     * value: "AcademicTerm"
     * @const
     */
    "AcademicTerm": "AcademicTerm",
    /**
     * value: "Year"
     * @const
     */
    "Year": "Year"  };

  /**
   * Allowed values for the <code>Type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "DirectDebits"
     * @const
     */
    "DirectDebits": "DirectDebits",
    /**
     * value: "ExistingCustomers"
     * @const
     */
    "ExistingCustomers": "ExistingCustomers",
    /**
     * value: "MinimumOperatingBalance"
     * @const
     */
    "MinimumOperatingBalance": "MinimumOperatingBalance",
    /**
     * value: "MinimumDeposit"
     * @const
     */
    "MinimumDeposit": "MinimumDeposit",
    /**
     * value: "NewCustomersOnly"
     * @const
     */
    "NewCustomersOnly": "NewCustomersOnly",
    /**
     * value: "PreviousBankruptcyAllowed"
     * @const
     */
    "PreviousBankruptcyAllowed": "PreviousBankruptcyAllowed",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",
    /**
     * value: "StudentsOnly"
     * @const
     */
    "StudentsOnly": "StudentsOnly",
    /**
     * value: "SoleStudentAccount"
     * @const
     */
    "SoleStudentAccount": "SoleStudentAccount",
    /**
     * value: "SoleUkAccount"
     * @const
     */
    "SoleUkAccount": "SoleUkAccount",
    /**
     * value: "SwitchersOnly"
     * @const
     */
    "SwitchersOnly": "SwitchersOnly",
    /**
     * value: "UCASFulltimeTwoYears"
     * @const
     */
    "UCASFulltimeTwoYears": "UCASFulltimeTwoYears"  };


  return exports;
}));


