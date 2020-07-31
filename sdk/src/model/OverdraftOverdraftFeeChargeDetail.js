/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.217
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
    define(['ApiClient', 'model/OtherApplicationFrequency', 'model/OtherCalculationFrequency', 'model/OtherFeeRateType', 'model/OtherFeeType', 'model/OverdraftOverdraftFeeChargeCap'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OtherApplicationFrequency'), require('./OtherCalculationFrequency'), require('./OtherFeeRateType'), require('./OtherFeeType'), require('./OverdraftOverdraftFeeChargeCap'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.OverdraftOverdraftFeeChargeDetail = factory(root.YapilyApi.ApiClient, root.YapilyApi.OtherApplicationFrequency, root.YapilyApi.OtherCalculationFrequency, root.YapilyApi.OtherFeeRateType, root.YapilyApi.OtherFeeType, root.YapilyApi.OverdraftOverdraftFeeChargeCap);
  }
}(this, function(ApiClient, OtherApplicationFrequency, OtherCalculationFrequency, OtherFeeRateType, OtherFeeType, OverdraftOverdraftFeeChargeCap) {
  'use strict';



  /**
   * The OverdraftOverdraftFeeChargeDetail model module.
   * @module model/OverdraftOverdraftFeeChargeDetail
   * @version 0.0.217
   */

  /**
   * Constructs a new <code>OverdraftOverdraftFeeChargeDetail</code>.
   * Details about the fees/charges
   * @alias module:model/OverdraftOverdraftFeeChargeDetail
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>OverdraftOverdraftFeeChargeDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OverdraftOverdraftFeeChargeDetail} obj Optional instance to populate.
   * @return {module:model/OverdraftOverdraftFeeChargeDetail} The populated <code>OverdraftOverdraftFeeChargeDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ApplicationFrequency')) {
        obj['ApplicationFrequency'] = ApiClient.convertToType(data['ApplicationFrequency'], 'String');
      }
      if (data.hasOwnProperty('CalculationFrequency')) {
        obj['CalculationFrequency'] = ApiClient.convertToType(data['CalculationFrequency'], 'String');
      }
      if (data.hasOwnProperty('FeeAmount')) {
        obj['FeeAmount'] = ApiClient.convertToType(data['FeeAmount'], 'String');
      }
      if (data.hasOwnProperty('FeeRate')) {
        obj['FeeRate'] = ApiClient.convertToType(data['FeeRate'], 'String');
      }
      if (data.hasOwnProperty('FeeRateType')) {
        obj['FeeRateType'] = ApiClient.convertToType(data['FeeRateType'], 'String');
      }
      if (data.hasOwnProperty('FeeType')) {
        obj['FeeType'] = ApiClient.convertToType(data['FeeType'], 'String');
      }
      if (data.hasOwnProperty('IncrementalBorrowingAmount')) {
        obj['IncrementalBorrowingAmount'] = ApiClient.convertToType(data['IncrementalBorrowingAmount'], 'String');
      }
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], ['String']);
      }
      if (data.hasOwnProperty('OtherApplicationFrequency')) {
        obj['OtherApplicationFrequency'] = OtherApplicationFrequency.constructFromObject(data['OtherApplicationFrequency']);
      }
      if (data.hasOwnProperty('OtherCalculationFrequency')) {
        obj['OtherCalculationFrequency'] = OtherCalculationFrequency.constructFromObject(data['OtherCalculationFrequency']);
      }
      if (data.hasOwnProperty('OtherFeeRateType')) {
        obj['OtherFeeRateType'] = OtherFeeRateType.constructFromObject(data['OtherFeeRateType']);
      }
      if (data.hasOwnProperty('OtherFeeType')) {
        obj['OtherFeeType'] = OtherFeeType.constructFromObject(data['OtherFeeType']);
      }
      if (data.hasOwnProperty('OverdraftControlIndicator')) {
        obj['OverdraftControlIndicator'] = ApiClient.convertToType(data['OverdraftControlIndicator'], 'Boolean');
      }
      if (data.hasOwnProperty('OverdraftFeeChargeCap')) {
        obj['OverdraftFeeChargeCap'] = OverdraftOverdraftFeeChargeCap.constructFromObject(data['OverdraftFeeChargeCap']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OverdraftOverdraftFeeChargeDetail.ApplicationFrequencyEnum} ApplicationFrequency
   */
  exports.prototype['ApplicationFrequency'] = undefined;
  /**
   * @member {module:model/OverdraftOverdraftFeeChargeDetail.CalculationFrequencyEnum} CalculationFrequency
   */
  exports.prototype['CalculationFrequency'] = undefined;
  /**
   * @member {String} FeeAmount
   */
  exports.prototype['FeeAmount'] = undefined;
  /**
   * @member {String} FeeRate
   */
  exports.prototype['FeeRate'] = undefined;
  /**
   * @member {module:model/OverdraftOverdraftFeeChargeDetail.FeeRateTypeEnum} FeeRateType
   */
  exports.prototype['FeeRateType'] = undefined;
  /**
   * @member {module:model/OverdraftOverdraftFeeChargeDetail.FeeTypeEnum} FeeType
   */
  exports.prototype['FeeType'] = undefined;
  /**
   * @member {String} IncrementalBorrowingAmount
   */
  exports.prototype['IncrementalBorrowingAmount'] = undefined;
  /**
   * @member {Array.<String>} Notes
   */
  exports.prototype['Notes'] = undefined;
  /**
   * @member {module:model/OtherApplicationFrequency} OtherApplicationFrequency
   */
  exports.prototype['OtherApplicationFrequency'] = undefined;
  /**
   * @member {module:model/OtherCalculationFrequency} OtherCalculationFrequency
   */
  exports.prototype['OtherCalculationFrequency'] = undefined;
  /**
   * @member {module:model/OtherFeeRateType} OtherFeeRateType
   */
  exports.prototype['OtherFeeRateType'] = undefined;
  /**
   * @member {module:model/OtherFeeType} OtherFeeType
   */
  exports.prototype['OtherFeeType'] = undefined;
  /**
   * @member {Boolean} OverdraftControlIndicator
   */
  exports.prototype['OverdraftControlIndicator'] = undefined;
  /**
   * @member {module:model/OverdraftOverdraftFeeChargeCap} OverdraftFeeChargeCap
   */
  exports.prototype['OverdraftFeeChargeCap'] = undefined;


  /**
   * Allowed values for the <code>ApplicationFrequency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ApplicationFrequencyEnum = {
    /**
     * value: "AccountClosing"
     * @const
     */
    "AccountClosing": "AccountClosing",
    /**
     * value: "AccountOpening"
     * @const
     */
    "AccountOpening": "AccountOpening",
    /**
     * value: "AcademicTerm"
     * @const
     */
    "AcademicTerm": "AcademicTerm",
    /**
     * value: "ChargingPeriod"
     * @const
     */
    "ChargingPeriod": "ChargingPeriod",
    /**
     * value: "Daily"
     * @const
     */
    "Daily": "Daily",
    /**
     * value: "PerItem"
     * @const
     */
    "PerItem": "PerItem",
    /**
     * value: "Monthly"
     * @const
     */
    "Monthly": "Monthly",
    /**
     * value: "OnAccountAnniversary"
     * @const
     */
    "OnAccountAnniversary": "OnAccountAnniversary",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",
    /**
     * value: "PerHour"
     * @const
     */
    "PerHour": "PerHour",
    /**
     * value: "PerOccurrence"
     * @const
     */
    "PerOccurrence": "PerOccurrence",
    /**
     * value: "PerSheet"
     * @const
     */
    "PerSheet": "PerSheet",
    /**
     * value: "PerTransaction"
     * @const
     */
    "PerTransaction": "PerTransaction",
    /**
     * value: "PerTransactionAmount"
     * @const
     */
    "PerTransactionAmount": "PerTransactionAmount",
    /**
     * value: "PerTransactionPercentage"
     * @const
     */
    "PerTransactionPercentage": "PerTransactionPercentage",
    /**
     * value: "Quarterly"
     * @const
     */
    "Quarterly": "Quarterly",
    /**
     * value: "SixMonthly"
     * @const
     */
    "SixMonthly": "SixMonthly",
    /**
     * value: "StatementMonthly"
     * @const
     */
    "StatementMonthly": "StatementMonthly",
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
   * Allowed values for the <code>CalculationFrequency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CalculationFrequencyEnum = {
    /**
     * value: "AccountClosing"
     * @const
     */
    "AccountClosing": "AccountClosing",
    /**
     * value: "AccountOpening"
     * @const
     */
    "AccountOpening": "AccountOpening",
    /**
     * value: "AcademicTerm"
     * @const
     */
    "AcademicTerm": "AcademicTerm",
    /**
     * value: "ChargingPeriod"
     * @const
     */
    "ChargingPeriod": "ChargingPeriod",
    /**
     * value: "Daily"
     * @const
     */
    "Daily": "Daily",
    /**
     * value: "PerItem"
     * @const
     */
    "PerItem": "PerItem",
    /**
     * value: "Monthly"
     * @const
     */
    "Monthly": "Monthly",
    /**
     * value: "OnAccountAnniversary"
     * @const
     */
    "OnAccountAnniversary": "OnAccountAnniversary",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",
    /**
     * value: "PerHour"
     * @const
     */
    "PerHour": "PerHour",
    /**
     * value: "PerOccurrence"
     * @const
     */
    "PerOccurrence": "PerOccurrence",
    /**
     * value: "PerSheet"
     * @const
     */
    "PerSheet": "PerSheet",
    /**
     * value: "PerTransaction"
     * @const
     */
    "PerTransaction": "PerTransaction",
    /**
     * value: "PerTransactionAmount"
     * @const
     */
    "PerTransactionAmount": "PerTransactionAmount",
    /**
     * value: "PerTransactionPercentage"
     * @const
     */
    "PerTransactionPercentage": "PerTransactionPercentage",
    /**
     * value: "Quarterly"
     * @const
     */
    "Quarterly": "Quarterly",
    /**
     * value: "SixMonthly"
     * @const
     */
    "SixMonthly": "SixMonthly",
    /**
     * value: "StatementMonthly"
     * @const
     */
    "StatementMonthly": "StatementMonthly",
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
   * Allowed values for the <code>FeeRateType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FeeRateTypeEnum = {
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
   * Allowed values for the <code>FeeType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FeeTypeEnum = {
    /**
     * value: "ArrangedOverdraft"
     * @const
     */
    "ArrangedOverdraft": "ArrangedOverdraft",
    /**
     * value: "EmergencyBorrowing"
     * @const
     */
    "EmergencyBorrowing": "EmergencyBorrowing",
    /**
     * value: "BorrowingItem"
     * @const
     */
    "BorrowingItem": "BorrowingItem",
    /**
     * value: "OverdraftRenewal"
     * @const
     */
    "OverdraftRenewal": "OverdraftRenewal",
    /**
     * value: "AnnualReview"
     * @const
     */
    "AnnualReview": "AnnualReview",
    /**
     * value: "OverdraftSetup"
     * @const
     */
    "OverdraftSetup": "OverdraftSetup",
    /**
     * value: "Surcharge"
     * @const
     */
    "Surcharge": "Surcharge",
    /**
     * value: "TempOverdraft"
     * @const
     */
    "TempOverdraft": "TempOverdraft",
    /**
     * value: "UnauthorisedBorrowing"
     * @const
     */
    "UnauthorisedBorrowing": "UnauthorisedBorrowing",
    /**
     * value: "UnauthorisedPaidTrans"
     * @const
     */
    "UnauthorisedPaidTrans": "UnauthorisedPaidTrans",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",
    /**
     * value: "UnauthorisedUnpaidTrans"
     * @const
     */
    "UnauthorisedUnpaidTrans": "UnauthorisedUnpaidTrans"  };


  return exports;
}));


