/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.345
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
    define(['ApiClient', 'model/PersonalCurrentAccountPCA'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PersonalCurrentAccountPCA'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.PersonalCurrentAccountBrand = factory(root.YapilyApi.ApiClient, root.YapilyApi.PersonalCurrentAccountPCA);
  }
}(this, function(ApiClient, PersonalCurrentAccountPCA) {
  'use strict';



  /**
   * The PersonalCurrentAccountBrand model module.
   * @module model/PersonalCurrentAccountBrand
   * @version 0.0.345
   */

  /**
   * Constructs a new <code>PersonalCurrentAccountBrand</code>.
   * Brand registered by the banking group at https://register.fca.org.uk/
   * @alias module:model/PersonalCurrentAccountBrand
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PersonalCurrentAccountBrand</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonalCurrentAccountBrand} obj Optional instance to populate.
   * @return {module:model/PersonalCurrentAccountBrand} The populated <code>PersonalCurrentAccountBrand</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('BrandName')) {
        obj['BrandName'] = ApiClient.convertToType(data['BrandName'], 'String');
      }
      if (data.hasOwnProperty('PCA')) {
        obj['PCA'] = ApiClient.convertToType(data['PCA'], [PersonalCurrentAccountPCA]);
      }
    }
    return obj;
  }

  /**
   * @member {String} BrandName
   */
  exports.prototype['BrandName'] = undefined;
  /**
   * @member {Array.<module:model/PersonalCurrentAccountPCA>} PCA
   */
  exports.prototype['PCA'] = undefined;



  return exports;
}));


