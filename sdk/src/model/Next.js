/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.230
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
    root.YapilyApi.Next = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Next model module.
   * @module model/Next
   * @version 0.0.230
   */

  /**
   * Constructs a new <code>Next</code>.
   * @alias module:model/Next
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Next</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Next} obj Optional instance to populate.
   * @return {module:model/Next} The populated <code>Next</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('before')) {
        obj['before'] = ApiClient.convertToType(data['before'], 'Date');
      }
      if (data.hasOwnProperty('cursor')) {
        obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'Date');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Date} before
   */
  exports.prototype['before'] = undefined;
  /**
   * @member {String} cursor
   */
  exports.prototype['cursor'] = undefined;
  /**
   * @member {Date} from
   */
  exports.prototype['from'] = undefined;
  /**
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;



  return exports;
}));


