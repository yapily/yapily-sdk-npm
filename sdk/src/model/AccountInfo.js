/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.249
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
    define(['ApiClient', 'model/AccountIdentification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountIdentification'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.AccountInfo = factory(root.YapilyApi.ApiClient, root.YapilyApi.AccountIdentification);
  }
}(this, function(ApiClient, AccountIdentification) {
  'use strict';



  /**
   * The AccountInfo model module.
   * @module model/AccountInfo
   * @version 0.0.249
   */

  /**
   * Constructs a new <code>AccountInfo</code>.
   * @alias module:model/AccountInfo
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AccountInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountInfo} obj Optional instance to populate.
   * @return {module:model/AccountInfo} The populated <code>AccountInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('accountIdentification')) {
        obj['accountIdentification'] = AccountIdentification.constructFromObject(data['accountIdentification']);
      }
    }
    return obj;
  }

  /**
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * @member {module:model/AccountIdentification} accountIdentification
   */
  exports.prototype['accountIdentification'] = undefined;



  return exports;
}));


