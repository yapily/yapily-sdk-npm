/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.254
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
    define(['ApiClient', 'model/OverdraftOverdraftFeesCharges'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OverdraftOverdraftFeesCharges'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.OverdraftOverdraftTierBand = factory(root.YapilyApi.ApiClient, root.YapilyApi.OverdraftOverdraftFeesCharges);
  }
}(this, function(ApiClient, OverdraftOverdraftFeesCharges) {
  'use strict';



  /**
   * The OverdraftOverdraftTierBand model module.
   * @module model/OverdraftOverdraftTierBand
   * @version 0.0.254
   */

  /**
   * Constructs a new <code>OverdraftOverdraftTierBand</code>.
   * Provides overdraft details for a specific tier or band
   * @alias module:model/OverdraftOverdraftTierBand
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>OverdraftOverdraftTierBand</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OverdraftOverdraftTierBand} obj Optional instance to populate.
   * @return {module:model/OverdraftOverdraftTierBand} The populated <code>OverdraftOverdraftTierBand</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('BankGuaranteedIndicator')) {
        obj['BankGuaranteedIndicator'] = ApiClient.convertToType(data['BankGuaranteedIndicator'], 'Boolean');
      }
      if (data.hasOwnProperty('EAR')) {
        obj['EAR'] = ApiClient.convertToType(data['EAR'], 'String');
      }
      if (data.hasOwnProperty('Identification')) {
        obj['Identification'] = ApiClient.convertToType(data['Identification'], 'String');
      }
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], ['String']);
      }
      if (data.hasOwnProperty('OverdraftFeesCharges')) {
        obj['OverdraftFeesCharges'] = ApiClient.convertToType(data['OverdraftFeesCharges'], [OverdraftOverdraftFeesCharges]);
      }
      if (data.hasOwnProperty('OverdraftInterestChargingCoverage')) {
        obj['OverdraftInterestChargingCoverage'] = ApiClient.convertToType(data['OverdraftInterestChargingCoverage'], 'String');
      }
      if (data.hasOwnProperty('TierValueMax')) {
        obj['TierValueMax'] = ApiClient.convertToType(data['TierValueMax'], 'String');
      }
      if (data.hasOwnProperty('TierValueMin')) {
        obj['TierValueMin'] = ApiClient.convertToType(data['TierValueMin'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} BankGuaranteedIndicator
   */
  exports.prototype['BankGuaranteedIndicator'] = undefined;
  /**
   * @member {String} EAR
   */
  exports.prototype['EAR'] = undefined;
  /**
   * @member {String} Identification
   */
  exports.prototype['Identification'] = undefined;
  /**
   * @member {Array.<String>} Notes
   */
  exports.prototype['Notes'] = undefined;
  /**
   * @member {Array.<module:model/OverdraftOverdraftFeesCharges>} OverdraftFeesCharges
   */
  exports.prototype['OverdraftFeesCharges'] = undefined;
  /**
   * @member {module:model/OverdraftOverdraftTierBand.OverdraftInterestChargingCoverageEnum} OverdraftInterestChargingCoverage
   */
  exports.prototype['OverdraftInterestChargingCoverage'] = undefined;
  /**
   * @member {String} TierValueMax
   */
  exports.prototype['TierValueMax'] = undefined;
  /**
   * @member {String} TierValueMin
   */
  exports.prototype['TierValueMin'] = undefined;


  /**
   * Allowed values for the <code>OverdraftInterestChargingCoverage</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OverdraftInterestChargingCoverageEnum = {
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


  return exports;
}));


