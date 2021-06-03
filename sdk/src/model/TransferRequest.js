/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.351
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
    root.YapilyApi.TransferRequest = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The TransferRequest model module.
   * @module model/TransferRequest
   * @version 0.0.351
   */

  /**
   * Constructs a new <code>TransferRequest</code>.
   * @alias module:model/TransferRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>TransferRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferRequest} obj Optional instance to populate.
   * @return {module:model/TransferRequest} The populated <code>TransferRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('transferReferenceId')) {
        obj['transferReferenceId'] = ApiClient.convertToType(data['transferReferenceId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * @member {String} transferReferenceId
   */
  exports.prototype['transferReferenceId'] = undefined;



  return exports;
}));


