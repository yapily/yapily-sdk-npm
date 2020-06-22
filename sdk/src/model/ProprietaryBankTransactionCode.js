/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.197
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
    root.YapilyApi.ProprietaryBankTransactionCode = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ProprietaryBankTransactionCode model module.
   * @module model/ProprietaryBankTransactionCode
   * @version 0.0.197
   */

  /**
   * Constructs a new <code>ProprietaryBankTransactionCode</code>.
   * @alias module:model/ProprietaryBankTransactionCode
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProprietaryBankTransactionCode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProprietaryBankTransactionCode} obj Optional instance to populate.
   * @return {module:model/ProprietaryBankTransactionCode} The populated <code>ProprietaryBankTransactionCode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('issuer')) {
        obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {String} issuer
   */
  exports.prototype['issuer'] = undefined;



  return exports;
}));


