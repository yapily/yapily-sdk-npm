/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.356
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
    root.YapilyApi.NewApplicationUser = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The NewApplicationUser model module.
   * @module model/NewApplicationUser
   * @version 0.0.356
   */

  /**
   * Constructs a new <code>NewApplicationUser</code>.
   * @alias module:model/NewApplicationUser
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>NewApplicationUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewApplicationUser} obj Optional instance to populate.
   * @return {module:model/NewApplicationUser} The populated <code>NewApplicationUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('applicationUserId')) {
        obj['applicationUserId'] = ApiClient.convertToType(data['applicationUserId'], 'String');
      }
      if (data.hasOwnProperty('referenceId')) {
        obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} applicationUserId
   */
  exports.prototype['applicationUserId'] = undefined;
  /**
   * @member {String} referenceId
   */
  exports.prototype['referenceId'] = undefined;



  return exports;
}));


