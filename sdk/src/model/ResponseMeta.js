/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.165
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.1
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
    root.YapilyApi.ResponseMeta = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ResponseMeta model module.
   * @module model/ResponseMeta
   * @version 0.0.165
   */

  /**
   * Constructs a new <code>ResponseMeta</code>.
   * @alias module:model/ResponseMeta
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ResponseMeta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseMeta} obj Optional instance to populate.
   * @return {module:model/ResponseMeta} The populated <code>ResponseMeta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('tracingId')) {
        obj['tracingId'] = ApiClient.convertToType(data['tracingId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} tracingId
   */
  exports.prototype['tracingId'] = undefined;



  return exports;
}));


