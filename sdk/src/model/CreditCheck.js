/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.267
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.CreditCheck = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CreditCheck model module.
   * @module model/CreditCheck
   * @version 0.0.267
   */

  /**
   * Constructs a new <code>CreditCheck</code>.
   * Credit check criteria that the account holder will need to meet to take out the PCA product
   * @alias module:model/CreditCheck
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CreditCheck</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreditCheck} obj Optional instance to populate.
   * @return {module:model/CreditCheck} The populated <code>CreditCheck</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], ['String']);
      }
      if (data.hasOwnProperty('ScoringType')) {
        obj['ScoringType'] = ApiClient.convertToType(data['ScoringType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} Notes
   */
  exports.prototype['Notes'] = undefined;
  /**
   * @member {module:model/CreditCheck.ScoringTypeEnum} ScoringType
   */
  exports.prototype['ScoringType'] = undefined;


  /**
   * Allowed values for the <code>ScoringType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScoringTypeEnum = {
    /**
     * value: "Hard"
     * @const
     */
    "Hard": "Hard",
    /**
     * value: "Soft"
     * @const
     */
    "Soft": "Soft"  };


  return exports;
}));


