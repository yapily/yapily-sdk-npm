/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.233
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
    root.YapilyApi.URL = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The URL model module.
   * @module model/URL
   * @version 0.0.233
   */

  /**
   * Constructs a new <code>URL</code>.
   * @alias module:model/URL
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>URL</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/URL} obj Optional instance to populate.
   * @return {module:model/URL} The populated <code>URL</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('authority')) {
        obj['authority'] = ApiClient.convertToType(data['authority'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], Object);
      }
      if (data.hasOwnProperty('defaultPort')) {
        obj['defaultPort'] = ApiClient.convertToType(data['defaultPort'], 'Number');
      }
      if (data.hasOwnProperty('file')) {
        obj['file'] = ApiClient.convertToType(data['file'], 'String');
      }
      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], 'String');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'Number');
      }
      if (data.hasOwnProperty('protocol')) {
        obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('ref')) {
        obj['ref'] = ApiClient.convertToType(data['ref'], 'String');
      }
      if (data.hasOwnProperty('userInfo')) {
        obj['userInfo'] = ApiClient.convertToType(data['userInfo'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} authority
   */
  exports.prototype['authority'] = undefined;
  /**
   * @member {Object} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {Number} defaultPort
   */
  exports.prototype['defaultPort'] = undefined;
  /**
   * @member {String} file
   */
  exports.prototype['file'] = undefined;
  /**
   * @member {String} host
   */
  exports.prototype['host'] = undefined;
  /**
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * @member {Number} port
   */
  exports.prototype['port'] = undefined;
  /**
   * @member {String} protocol
   */
  exports.prototype['protocol'] = undefined;
  /**
   * @member {String} query
   */
  exports.prototype['query'] = undefined;
  /**
   * @member {String} ref
   */
  exports.prototype['ref'] = undefined;
  /**
   * @member {String} userInfo
   */
  exports.prototype['userInfo'] = undefined;



  return exports;
}));


