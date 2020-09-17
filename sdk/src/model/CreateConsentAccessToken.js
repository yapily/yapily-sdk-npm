/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.241
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
    root.YapilyApi.CreateConsentAccessToken = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CreateConsentAccessToken model module.
   * @module model/CreateConsentAccessToken
   * @version 0.0.241
   */

  /**
   * Constructs a new <code>CreateConsentAccessToken</code>.
   * @alias module:model/CreateConsentAccessToken
   * @class
   * @param accessToken {String} 
   * @param refreshToken {String} 
   * @param institutionId {String} 
   * @param scope {String} 
   */
  var exports = function(accessToken, refreshToken, institutionId, scope) {
    var _this = this;

    _this['accessToken'] = accessToken;
    _this['refreshToken'] = refreshToken;
    _this['institutionId'] = institutionId;
    _this['scope'] = scope;
  };

  /**
   * Constructs a <code>CreateConsentAccessToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateConsentAccessToken} obj Optional instance to populate.
   * @return {module:model/CreateConsentAccessToken} The populated <code>CreateConsentAccessToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accessToken')) {
        obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
      }
      if (data.hasOwnProperty('refreshToken')) {
        obj['refreshToken'] = ApiClient.convertToType(data['refreshToken'], 'String');
      }
      if (data.hasOwnProperty('institutionId')) {
        obj['institutionId'] = ApiClient.convertToType(data['institutionId'], 'String');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} accessToken
   */
  exports.prototype['accessToken'] = undefined;
  /**
   * @member {String} refreshToken
   */
  exports.prototype['refreshToken'] = undefined;
  /**
   * @member {String} institutionId
   */
  exports.prototype['institutionId'] = undefined;
  /**
   * @member {String} scope
   */
  exports.prototype['scope'] = undefined;



  return exports;
}));


