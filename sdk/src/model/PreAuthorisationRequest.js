/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.209
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
    root.YapilyApi.PreAuthorisationRequest = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PreAuthorisationRequest model module.
   * @module model/PreAuthorisationRequest
   * @version 0.0.209
   */

  /**
   * Constructs a new <code>PreAuthorisationRequest</code>.
   * @alias module:model/PreAuthorisationRequest
   * @class
   * @param institutionId {String} 
   * @param callback {String} 
   * @param oneTimeToken {Boolean} 
   */
  var exports = function(institutionId, callback, oneTimeToken) {
    var _this = this;

    _this['institutionId'] = institutionId;
    _this['callback'] = callback;
    _this['oneTimeToken'] = oneTimeToken;
  };

  /**
   * Constructs a <code>PreAuthorisationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PreAuthorisationRequest} obj Optional instance to populate.
   * @return {module:model/PreAuthorisationRequest} The populated <code>PreAuthorisationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('userUuid')) {
        obj['userUuid'] = ApiClient.convertToType(data['userUuid'], 'String');
      }
      if (data.hasOwnProperty('applicationUserId')) {
        obj['applicationUserId'] = ApiClient.convertToType(data['applicationUserId'], 'String');
      }
      if (data.hasOwnProperty('forwardParameters')) {
        obj['forwardParameters'] = ApiClient.convertToType(data['forwardParameters'], ['String']);
      }
      if (data.hasOwnProperty('institutionId')) {
        obj['institutionId'] = ApiClient.convertToType(data['institutionId'], 'String');
      }
      if (data.hasOwnProperty('callback')) {
        obj['callback'] = ApiClient.convertToType(data['callback'], 'String');
      }
      if (data.hasOwnProperty('oneTimeToken')) {
        obj['oneTimeToken'] = ApiClient.convertToType(data['oneTimeToken'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} userUuid
   */
  exports.prototype['userUuid'] = undefined;
  /**
   * @member {String} applicationUserId
   */
  exports.prototype['applicationUserId'] = undefined;
  /**
   * @member {Array.<String>} forwardParameters
   */
  exports.prototype['forwardParameters'] = undefined;
  /**
   * @member {String} institutionId
   */
  exports.prototype['institutionId'] = undefined;
  /**
   * @member {String} callback
   */
  exports.prototype['callback'] = undefined;
  /**
   * @member {Boolean} oneTimeToken
   */
  exports.prototype['oneTimeToken'] = undefined;



  return exports;
}));

