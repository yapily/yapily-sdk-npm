/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.365
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
    root.YapilyApi.ScaMethod = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ScaMethod model module.
   * @module model/ScaMethod
   * @version 0.0.365
   */

  /**
   * Constructs a new <code>ScaMethod</code>.
   * @alias module:model/ScaMethod
   * @class
   * @param id {String} 
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;
  };

  /**
   * Constructs a <code>ScaMethod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScaMethod} obj Optional instance to populate.
   * @return {module:model/ScaMethod} The populated <code>ScaMethod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/ScaMethod.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "SMS_OTP"
     * @const
     */
    "SMS_OTP": "SMS_OTP",
    /**
     * value: "CHIP_OTP"
     * @const
     */
    "CHIP_OTP": "CHIP_OTP",
    /**
     * value: "PHOTO_OTP"
     * @const
     */
    "PHOTO_OTP": "PHOTO_OTP",
    /**
     * value: "PUSH_OTP"
     * @const
     */
    "PUSH_OTP": "PUSH_OTP"  };


  return exports;
}));


