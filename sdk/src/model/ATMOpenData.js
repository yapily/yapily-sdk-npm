/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.277
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
    define(['ApiClient', 'model/ATMOpenDataBrand'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ATMOpenDataBrand'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ATMOpenData = factory(root.YapilyApi.ApiClient, root.YapilyApi.ATMOpenDataBrand);
  }
}(this, function(ApiClient, ATMOpenDataBrand) {
  'use strict';



  /**
   * The ATMOpenData model module.
   * @module model/ATMOpenData
   * @version 0.0.277
   */

  /**
   * Constructs a new <code>ATMOpenData</code>.
   * Environment of the ATM.
   * @alias module:model/ATMOpenData
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ATMOpenData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ATMOpenData} obj Optional instance to populate.
   * @return {module:model/ATMOpenData} The populated <code>ATMOpenData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Brand')) {
        obj['Brand'] = ApiClient.convertToType(data['Brand'], [ATMOpenDataBrand]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ATMOpenDataBrand>} Brand
   */
  exports.prototype['Brand'] = undefined;



  return exports;
}));


