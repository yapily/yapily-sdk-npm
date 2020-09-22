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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OverdraftOtherFeeType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OverdraftOtherFeeType'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.OverdraftOverdraftFeeChargeCap = factory(root.YapilyApi.ApiClient, root.YapilyApi.OverdraftOtherFeeType);
  }
}(this, function(ApiClient, OverdraftOtherFeeType) {
  'use strict';



  /**
   * The OverdraftOverdraftFeeChargeCap model module.
   * @module model/OverdraftOverdraftFeeChargeCap
   * @version 0.0.243
   */

  /**
   * Constructs a new <code>OverdraftOverdraftFeeChargeCap</code>.
   * Details about any caps (maximum charges) that apply to a particular fee/charge
   * @alias module:model/OverdraftOverdraftFeeChargeCap
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>OverdraftOverdraftFeeChargeCap</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OverdraftOverdraftFeeChargeCap} obj Optional instance to populate.
   * @return {module:model/OverdraftOverdraftFeeChargeCap} The populated <code>OverdraftOverdraftFeeChargeCap</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CappingPeriod')) {
        obj['CappingPeriod'] = ApiClient.convertToType(data['CappingPeriod'], 'String');
      }
      if (data.hasOwnProperty('FeeCapAmount')) {
        obj['FeeCapAmount'] = ApiClient.convertToType(data['FeeCapAmount'], 'String');
      }
      if (data.hasOwnProperty('FeeCapOccurrence')) {
        obj['FeeCapOccurrence'] = ApiClient.convertToType(data['FeeCapOccurrence'], 'Number');
      }
      if (data.hasOwnProperty('FeeType')) {
        obj['FeeType'] = ApiClient.convertToType(data['FeeType'], ['String']);
      }
      if (data.hasOwnProperty('MinMaxType')) {
        obj['MinMaxType'] = ApiClient.convertToType(data['MinMaxType'], 'String');
      }
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], ['String']);
      }
      if (data.hasOwnProperty('OtherFeeType')) {
        obj['OtherFeeType'] = ApiClient.convertToType(data['OtherFeeType'], [OverdraftOtherFeeType]);
      }
      if (data.hasOwnProperty('OverdraftControlIndicator')) {
        obj['OverdraftControlIndicator'] = ApiClient.convertToType(data['OverdraftControlIndicator'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OverdraftOverdraftFeeChargeCap.CappingPeriodEnum} CappingPeriod
   */
  exports.prototype['CappingPeriod'] = undefined;
  /**
   * @member {String} FeeCapAmount
   */
  exports.prototype['FeeCapAmount'] = undefined;
  /**
   * @member {Number} FeeCapOccurrence
   */
  exports.prototype['FeeCapOccurrence'] = undefined;
  /**
   * @member {Array.<module:model/OverdraftOverdraftFeeChargeCap.FeeTypeEnum>} FeeType
   */
  exports.prototype['FeeType'] = undefined;
  /**
   * @member {module:model/OverdraftOverdraftFeeChargeCap.MinMaxTypeEnum} MinMaxType
   */
  exports.prototype['MinMaxType'] = undefined;
  /**
   * @member {Array.<String>} Notes
   */
  exports.prototype['Notes'] = undefined;
  /**
   * @member {Array.<module:model/OverdraftOtherFeeType>} OtherFeeType
   */
  exports.prototype['OtherFeeType'] = undefined;
  /**
   * @member {Boolean} OverdraftControlIndicator
   */
  exports.prototype['OverdraftControlIndicator'] = undefined;


  /**
   * Allowed values for the <code>CappingPeriod</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CappingPeriodEnum = {
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
   * Allowed values for the <code>feeType</code> property.
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

  /**
   * Allowed values for the <code>MinMaxType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MinMaxTypeEnum = {
    /**
     * value: "Minimum"
     * @const
     */
    "Minimum": "Minimum",
    /**
     * value: "Maximum"
     * @const
     */
    "Maximum": "Maximum"  };


  return exports;
}));


