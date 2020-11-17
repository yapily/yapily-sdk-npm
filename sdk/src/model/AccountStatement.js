/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.275
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
    root.YapilyApi.AccountStatement = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AccountStatement model module.
   * @module model/AccountStatement
   * @version 0.0.275
   */

  /**
   * Constructs a new <code>AccountStatement</code>.
   * @alias module:model/AccountStatement
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AccountStatement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountStatement} obj Optional instance to populate.
   * @return {module:model/AccountStatement} The populated <code>AccountStatement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('startDateTime')) {
        obj['startDateTime'] = ApiClient.convertToType(data['startDateTime'], 'Date');
      }
      if (data.hasOwnProperty('endDateTime')) {
        obj['endDateTime'] = ApiClient.convertToType(data['endDateTime'], 'Date');
      }
      if (data.hasOwnProperty('creationDateTime')) {
        obj['creationDateTime'] = ApiClient.convertToType(data['creationDateTime'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Date} startDateTime
   */
  exports.prototype['startDateTime'] = undefined;
  /**
   * @member {Date} endDateTime
   */
  exports.prototype['endDateTime'] = undefined;
  /**
   * @member {Date} creationDateTime
   */
  exports.prototype['creationDateTime'] = undefined;



  return exports;
}));


