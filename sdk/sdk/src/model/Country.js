/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.5
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1-SNAPSHOT
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
    root.YapilyApi.Country = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Country model module.
   * @module model/Country
   * @version 0.0.5
   */

  /**
   * Constructs a new <code>Country</code>.
   * @alias module:model/Country
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Country</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Country} obj Optional instance to populate.
   * @return {module:model/Country} The populated <code>Country</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('countryCode2')) {
        obj['countryCode2'] = ApiClient.convertToType(data['countryCode2'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} countryCode2
   */
  exports.prototype['countryCode2'] = undefined;
  /**
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;



  return exports;
}));


