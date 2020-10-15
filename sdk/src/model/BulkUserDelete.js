/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.257
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
    root.YapilyApi.BulkUserDelete = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The BulkUserDelete model module.
   * @module model/BulkUserDelete
   * @version 0.0.257
   */

  /**
   * Constructs a new <code>BulkUserDelete</code>.
   * @alias module:model/BulkUserDelete
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>BulkUserDelete</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkUserDelete} obj Optional instance to populate.
   * @return {module:model/BulkUserDelete} The populated <code>BulkUserDelete</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('startedAt')) {
        obj['startedAt'] = ApiClient.convertToType(data['startedAt'], 'Date');
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
   * @member {module:model/BulkUserDelete.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Date} startedAt
   */
  exports.prototype['startedAt'] = undefined;
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


