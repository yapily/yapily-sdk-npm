/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.202
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
    root.YapilyApi.AgeEligibility = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AgeEligibility model module.
   * @module model/AgeEligibility
   * @version 0.0.202
   */

  /**
   * Constructs a new <code>AgeEligibility</code>.
   * Age eligibility that a person should be to hold this account
   * @alias module:model/AgeEligibility
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AgeEligibility</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgeEligibility} obj Optional instance to populate.
   * @return {module:model/AgeEligibility} The populated <code>AgeEligibility</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MaximumAge')) {
        obj['MaximumAge'] = ApiClient.convertToType(data['MaximumAge'], 'Number');
      }
      if (data.hasOwnProperty('MinimumAge')) {
        obj['MinimumAge'] = ApiClient.convertToType(data['MinimumAge'], 'Number');
      }
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} MaximumAge
   */
  exports.prototype['MaximumAge'] = undefined;
  /**
   * @member {Number} MinimumAge
   */
  exports.prototype['MinimumAge'] = undefined;
  /**
   * @member {Array.<String>} Notes
   */
  exports.prototype['Notes'] = undefined;



  return exports;
}));


