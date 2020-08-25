/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.229
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
    root.YapilyApi.URI = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The URI model module.
   * @module model/URI
   * @version 0.0.229
   */

  /**
   * Constructs a new <code>URI</code>.
   * @alias module:model/URI
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>URI</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/URI} obj Optional instance to populate.
   * @return {module:model/URI} The populated <code>URI</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('absolute')) {
        obj['absolute'] = ApiClient.convertToType(data['absolute'], 'Boolean');
      }
      if (data.hasOwnProperty('authority')) {
        obj['authority'] = ApiClient.convertToType(data['authority'], 'String');
      }
      if (data.hasOwnProperty('fragment')) {
        obj['fragment'] = ApiClient.convertToType(data['fragment'], 'String');
      }
      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], 'String');
      }
      if (data.hasOwnProperty('opaque')) {
        obj['opaque'] = ApiClient.convertToType(data['opaque'], 'Boolean');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'Number');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('rawAuthority')) {
        obj['rawAuthority'] = ApiClient.convertToType(data['rawAuthority'], 'String');
      }
      if (data.hasOwnProperty('rawFragment')) {
        obj['rawFragment'] = ApiClient.convertToType(data['rawFragment'], 'String');
      }
      if (data.hasOwnProperty('rawPath')) {
        obj['rawPath'] = ApiClient.convertToType(data['rawPath'], 'String');
      }
      if (data.hasOwnProperty('rawQuery')) {
        obj['rawQuery'] = ApiClient.convertToType(data['rawQuery'], 'String');
      }
      if (data.hasOwnProperty('rawSchemeSpecificPart')) {
        obj['rawSchemeSpecificPart'] = ApiClient.convertToType(data['rawSchemeSpecificPart'], 'String');
      }
      if (data.hasOwnProperty('rawUserInfo')) {
        obj['rawUserInfo'] = ApiClient.convertToType(data['rawUserInfo'], 'String');
      }
      if (data.hasOwnProperty('scheme')) {
        obj['scheme'] = ApiClient.convertToType(data['scheme'], 'String');
      }
      if (data.hasOwnProperty('schemeSpecificPart')) {
        obj['schemeSpecificPart'] = ApiClient.convertToType(data['schemeSpecificPart'], 'String');
      }
      if (data.hasOwnProperty('userInfo')) {
        obj['userInfo'] = ApiClient.convertToType(data['userInfo'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} absolute
   */
  exports.prototype['absolute'] = undefined;
  /**
   * @member {String} authority
   */
  exports.prototype['authority'] = undefined;
  /**
   * @member {String} fragment
   */
  exports.prototype['fragment'] = undefined;
  /**
   * @member {String} host
   */
  exports.prototype['host'] = undefined;
  /**
   * @member {Boolean} opaque
   */
  exports.prototype['opaque'] = undefined;
  /**
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * @member {Number} port
   */
  exports.prototype['port'] = undefined;
  /**
   * @member {String} query
   */
  exports.prototype['query'] = undefined;
  /**
   * @member {String} rawAuthority
   */
  exports.prototype['rawAuthority'] = undefined;
  /**
   * @member {String} rawFragment
   */
  exports.prototype['rawFragment'] = undefined;
  /**
   * @member {String} rawPath
   */
  exports.prototype['rawPath'] = undefined;
  /**
   * @member {String} rawQuery
   */
  exports.prototype['rawQuery'] = undefined;
  /**
   * @member {String} rawSchemeSpecificPart
   */
  exports.prototype['rawSchemeSpecificPart'] = undefined;
  /**
   * @member {String} rawUserInfo
   */
  exports.prototype['rawUserInfo'] = undefined;
  /**
   * @member {String} scheme
   */
  exports.prototype['scheme'] = undefined;
  /**
   * @member {String} schemeSpecificPart
   */
  exports.prototype['schemeSpecificPart'] = undefined;
  /**
   * @member {String} userInfo
   */
  exports.prototype['userInfo'] = undefined;



  return exports;
}));


