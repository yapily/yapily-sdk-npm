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
    define(['ApiClient', 'model/CreditInterestCreditInterestEligibility', 'model/CreditInterestTierBand'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreditInterestCreditInterestEligibility'), require('./CreditInterestTierBand'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.CreditInterestTierBandSet = factory(root.YapilyApi.ApiClient, root.YapilyApi.CreditInterestCreditInterestEligibility, root.YapilyApi.CreditInterestTierBand);
  }
}(this, function(ApiClient, CreditInterestCreditInterestEligibility, CreditInterestTierBand) {
  'use strict';



  /**
   * The CreditInterestTierBandSet model module.
   * @module model/CreditInterestTierBandSet
   * @version 0.0.254
   */

  /**
   * Constructs a new <code>CreditInterestTierBandSet</code>.
   * The group of tiers or bands for which credit interest can be applied.
   * @alias module:model/CreditInterestTierBandSet
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CreditInterestTierBandSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreditInterestTierBandSet} obj Optional instance to populate.
   * @return {module:model/CreditInterestTierBandSet} The populated <code>CreditInterestTierBandSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CalculationMethod')) {
        obj['CalculationMethod'] = ApiClient.convertToType(data['CalculationMethod'], 'String');
      }
      if (data.hasOwnProperty('CreditInterestEligibility')) {
        obj['CreditInterestEligibility'] = ApiClient.convertToType(data['CreditInterestEligibility'], [CreditInterestCreditInterestEligibility]);
      }
      if (data.hasOwnProperty('Destination')) {
        obj['Destination'] = ApiClient.convertToType(data['Destination'], 'String');
      }
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], ['String']);
      }
      if (data.hasOwnProperty('TierBand')) {
        obj['TierBand'] = ApiClient.convertToType(data['TierBand'], [CreditInterestTierBand]);
      }
      if (data.hasOwnProperty('TierBandMethod')) {
        obj['TierBandMethod'] = ApiClient.convertToType(data['TierBandMethod'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CreditInterestTierBandSet.CalculationMethodEnum} CalculationMethod
   */
  exports.prototype['CalculationMethod'] = undefined;
  /**
   * @member {Array.<module:model/CreditInterestCreditInterestEligibility>} CreditInterestEligibility
   */
  exports.prototype['CreditInterestEligibility'] = undefined;
  /**
   * @member {module:model/CreditInterestTierBandSet.DestinationEnum} Destination
   */
  exports.prototype['Destination'] = undefined;
  /**
   * @member {Array.<String>} Notes
   */
  exports.prototype['Notes'] = undefined;
  /**
   * @member {Array.<module:model/CreditInterestTierBand>} TierBand
   */
  exports.prototype['TierBand'] = undefined;
  /**
   * @member {module:model/CreditInterestTierBandSet.TierBandMethodEnum} TierBandMethod
   */
  exports.prototype['TierBandMethod'] = undefined;


  /**
   * Allowed values for the <code>CalculationMethod</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CalculationMethodEnum = {
    /**
     * value: "Compound"
     * @const
     */
    "Compound": "Compound",
    /**
     * value: "SimpleInterest"
     * @const
     */
    "SimpleInterest": "SimpleInterest"  };

  /**
   * Allowed values for the <code>Destination</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DestinationEnum = {
    /**
     * value: "PayAway"
     * @const
     */
    "PayAway": "PayAway",
    /**
     * value: "SelfCredit"
     * @const
     */
    "SelfCredit": "SelfCredit"  };

  /**
   * Allowed values for the <code>TierBandMethod</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TierBandMethodEnum = {
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


