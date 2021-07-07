/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.362
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OtherApplicationFrequency', 'model/OtherBankInterestType', 'model/OtherCalculationFrequency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OtherApplicationFrequency'), require('./OtherBankInterestType'), require('./OtherCalculationFrequency'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.CreditInterestTierBand = factory(root.YapilyApi.ApiClient, root.YapilyApi.OtherApplicationFrequency, root.YapilyApi.OtherBankInterestType, root.YapilyApi.OtherCalculationFrequency);
  }
}(this, function(ApiClient, OtherApplicationFrequency, OtherBankInterestType, OtherCalculationFrequency) {
  'use strict';



  /**
   * The CreditInterestTierBand model module.
   * @module model/CreditInterestTierBand
   * @version 0.0.362
   */

  /**
   * Constructs a new <code>CreditInterestTierBand</code>.
   * Tier Band Details
   * @alias module:model/CreditInterestTierBand
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CreditInterestTierBand</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreditInterestTierBand} obj Optional instance to populate.
   * @return {module:model/CreditInterestTierBand} The populated <code>CreditInterestTierBand</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('AER')) {
        obj['AER'] = ApiClient.convertToType(data['AER'], 'String');
      }
      if (data.hasOwnProperty('ApplicationFrequency')) {
        obj['ApplicationFrequency'] = ApiClient.convertToType(data['ApplicationFrequency'], 'String');
      }
      if (data.hasOwnProperty('BankInterestRate')) {
        obj['BankInterestRate'] = ApiClient.convertToType(data['BankInterestRate'], 'String');
      }
      if (data.hasOwnProperty('BankInterestRateType')) {
        obj['BankInterestRateType'] = ApiClient.convertToType(data['BankInterestRateType'], 'String');
      }
      if (data.hasOwnProperty('CalculationFrequency')) {
        obj['CalculationFrequency'] = ApiClient.convertToType(data['CalculationFrequency'], 'String');
      }
      if (data.hasOwnProperty('DepositInterestAppliedCoverage')) {
        obj['DepositInterestAppliedCoverage'] = ApiClient.convertToType(data['DepositInterestAppliedCoverage'], 'String');
      }
      if (data.hasOwnProperty('FixedVariableInterestRateType')) {
        obj['FixedVariableInterestRateType'] = ApiClient.convertToType(data['FixedVariableInterestRateType'], 'String');
      }
      if (data.hasOwnProperty('Identification')) {
        obj['Identification'] = ApiClient.convertToType(data['Identification'], 'String');
      }
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], ['String']);
      }
      if (data.hasOwnProperty('OtherApplicationFrequency')) {
        obj['OtherApplicationFrequency'] = OtherApplicationFrequency.constructFromObject(data['OtherApplicationFrequency']);
      }
      if (data.hasOwnProperty('OtherBankInterestType')) {
        obj['OtherBankInterestType'] = OtherBankInterestType.constructFromObject(data['OtherBankInterestType']);
      }
      if (data.hasOwnProperty('OtherCalculationFrequency')) {
        obj['OtherCalculationFrequency'] = OtherCalculationFrequency.constructFromObject(data['OtherCalculationFrequency']);
      }
      if (data.hasOwnProperty('TierValueMaximum')) {
        obj['TierValueMaximum'] = ApiClient.convertToType(data['TierValueMaximum'], 'String');
      }
      if (data.hasOwnProperty('TierValueMinimum')) {
        obj['TierValueMinimum'] = ApiClient.convertToType(data['TierValueMinimum'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} AER
   */
  exports.prototype['AER'] = undefined;
  /**
   * @member {module:model/CreditInterestTierBand.ApplicationFrequencyEnum} ApplicationFrequency
   */
  exports.prototype['ApplicationFrequency'] = undefined;
  /**
   * @member {String} BankInterestRate
   */
  exports.prototype['BankInterestRate'] = undefined;
  /**
   * @member {module:model/CreditInterestTierBand.BankInterestRateTypeEnum} BankInterestRateType
   */
  exports.prototype['BankInterestRateType'] = undefined;
  /**
   * @member {module:model/CreditInterestTierBand.CalculationFrequencyEnum} CalculationFrequency
   */
  exports.prototype['CalculationFrequency'] = undefined;
  /**
   * @member {module:model/CreditInterestTierBand.DepositInterestAppliedCoverageEnum} DepositInterestAppliedCoverage
   */
  exports.prototype['DepositInterestAppliedCoverage'] = undefined;
  /**
   * @member {module:model/CreditInterestTierBand.FixedVariableInterestRateTypeEnum} FixedVariableInterestRateType
   */
  exports.prototype['FixedVariableInterestRateType'] = undefined;
  /**
   * @member {String} Identification
   */
  exports.prototype['Identification'] = undefined;
  /**
   * @member {Array.<String>} Notes
   */
  exports.prototype['Notes'] = undefined;
  /**
   * @member {module:model/OtherApplicationFrequency} OtherApplicationFrequency
   */
  exports.prototype['OtherApplicationFrequency'] = undefined;
  /**
   * @member {module:model/OtherBankInterestType} OtherBankInterestType
   */
  exports.prototype['OtherBankInterestType'] = undefined;
  /**
   * @member {module:model/OtherCalculationFrequency} OtherCalculationFrequency
   */
  exports.prototype['OtherCalculationFrequency'] = undefined;
  /**
   * @member {String} TierValueMaximum
   */
  exports.prototype['TierValueMaximum'] = undefined;
  /**
   * @member {String} TierValueMinimum
   */
  exports.prototype['TierValueMinimum'] = undefined;


  /**
   * Allowed values for the <code>ApplicationFrequency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ApplicationFrequencyEnum = {
    /**
     * value: "PerAcademicTerm"
     * @const
     */
    "PerAcademicTerm": "PerAcademicTerm",
    /**
     * value: "Daily"
     * @const
     */
    "Daily": "Daily",
    /**
     * value: "HalfYearly"
     * @const
     */
    "HalfYearly": "HalfYearly",
    /**
     * value: "Monthly"
     * @const
     */
    "Monthly": "Monthly",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",
    /**
     * value: "Quarterly"
     * @const
     */
    "Quarterly": "Quarterly",
    /**
     * value: "PerStatementDate"
     * @const
     */
    "PerStatementDate": "PerStatementDate",
    /**
     * value: "Weekly"
     * @const
     */
    "Weekly": "Weekly",
    /**
     * value: "Yearly"
     * @const
     */
    "Yearly": "Yearly"  };

  /**
   * Allowed values for the <code>BankInterestRateType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BankInterestRateTypeEnum = {
    /**
     * value: "LinkedBaseRate"
     * @const
     */
    "LinkedBaseRate": "LinkedBaseRate",
    /**
     * value: "Gross"
     * @const
     */
    "Gross": "Gross",
    /**
     * value: "Net"
     * @const
     */
    "Net": "Net",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other"  };

  /**
   * Allowed values for the <code>CalculationFrequency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CalculationFrequencyEnum = {
    /**
     * value: "PerAcademicTerm"
     * @const
     */
    "PerAcademicTerm": "PerAcademicTerm",
    /**
     * value: "Daily"
     * @const
     */
    "Daily": "Daily",
    /**
     * value: "HalfYearly"
     * @const
     */
    "HalfYearly": "HalfYearly",
    /**
     * value: "Monthly"
     * @const
     */
    "Monthly": "Monthly",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",
    /**
     * value: "Quarterly"
     * @const
     */
    "Quarterly": "Quarterly",
    /**
     * value: "PerStatementDate"
     * @const
     */
    "PerStatementDate": "PerStatementDate",
    /**
     * value: "Weekly"
     * @const
     */
    "Weekly": "Weekly",
    /**
     * value: "Yearly"
     * @const
     */
    "Yearly": "Yearly"  };

  /**
   * Allowed values for the <code>DepositInterestAppliedCoverage</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DepositInterestAppliedCoverageEnum = {
    /**
     * value: "Tiered"
     * @const
     */
    "Tiered": "Tiered",
    /**
     * value: "Whole"
     * @const
     */
    "Whole": "Whole"  };

  /**
   * Allowed values for the <code>FixedVariableInterestRateType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FixedVariableInterestRateTypeEnum = {
    /**
     * value: "Fixed"
     * @const
     */
    "Fixed": "Fixed",
    /**
     * value: "Variable"
     * @const
     */
    "Variable": "Variable"  };


  return exports;
}));


