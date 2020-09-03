/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.234
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
    define(['ApiClient', 'model/UserDeleteResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserDeleteResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.BulkUserDeleteDetails = factory(root.YapilyApi.ApiClient, root.YapilyApi.UserDeleteResponse);
  }
}(this, function(ApiClient, UserDeleteResponse) {
  'use strict';



  /**
   * The BulkUserDeleteDetails model module.
   * @module model/BulkUserDeleteDetails
   * @version 0.0.234
   */

  /**
   * Constructs a new <code>BulkUserDeleteDetails</code>.
   * @alias module:model/BulkUserDeleteDetails
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>BulkUserDeleteDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkUserDeleteDetails} obj Optional instance to populate.
   * @return {module:model/BulkUserDeleteDetails} The populated <code>BulkUserDeleteDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('invalidApplicationUserIds')) {
        obj['invalidApplicationUserIds'] = ApiClient.convertToType(data['invalidApplicationUserIds'], ['String']);
      }
      if (data.hasOwnProperty('invalidUserUuids')) {
        obj['invalidUserUuids'] = ApiClient.convertToType(data['invalidUserUuids'], ['String']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('startedAt')) {
        obj['startedAt'] = ApiClient.convertToType(data['startedAt'], 'Date');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [UserDeleteResponse]);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Array.<String>} invalidApplicationUserIds
   */
  exports.prototype['invalidApplicationUserIds'] = undefined;
  /**
   * @member {Array.<String>} invalidUserUuids
   */
  exports.prototype['invalidUserUuids'] = undefined;
  /**
   * @member {module:model/BulkUserDeleteDetails.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Date} startedAt
   */
  exports.prototype['startedAt'] = undefined;
  /**
   * @member {Array.<module:model/UserDeleteResponse>} users
   */
  exports.prototype['users'] = undefined;
  /**
   * @member {Object.<String, String>} links
   */
  exports.prototype['links'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "IN_PROGRESS"
     * @const
     */
    "IN_PROGRESS": "IN_PROGRESS",
    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED",
    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED"  };


  return exports;
}));


