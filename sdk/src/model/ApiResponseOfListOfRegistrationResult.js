/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.358
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
    define(['ApiClient', 'model/RegistrationResult', 'model/ResponseMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RegistrationResult'), require('./ResponseMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ApiResponseOfListOfRegistrationResult = factory(root.YapilyApi.ApiClient, root.YapilyApi.RegistrationResult, root.YapilyApi.ResponseMeta);
  }
}(this, function(ApiClient, RegistrationResult, ResponseMeta) {
  'use strict';



  /**
   * The ApiResponseOfListOfRegistrationResult model module.
   * @module model/ApiResponseOfListOfRegistrationResult
   * @version 0.0.358
   */

  /**
   * Constructs a new <code>ApiResponseOfListOfRegistrationResult</code>.
   * @alias module:model/ApiResponseOfListOfRegistrationResult
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ApiResponseOfListOfRegistrationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseOfListOfRegistrationResult} obj Optional instance to populate.
   * @return {module:model/ApiResponseOfListOfRegistrationResult} The populated <code>ApiResponseOfListOfRegistrationResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = ResponseMeta.constructFromObject(data['meta']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [RegistrationResult]);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ResponseMeta} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {Array.<module:model/RegistrationResult>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {Object.<String, String>} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


