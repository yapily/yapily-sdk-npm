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
    define(['ApiClient', 'model/InstitutionConsent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InstitutionConsent'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ApplicationUser = factory(root.YapilyApi.ApiClient, root.YapilyApi.InstitutionConsent);
  }
}(this, function(ApiClient, InstitutionConsent) {
  'use strict';



  /**
   * The ApplicationUser model module.
   * @module model/ApplicationUser
   * @version 0.0.365
   */

  /**
   * Constructs a new <code>ApplicationUser</code>.
   * @alias module:model/ApplicationUser
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ApplicationUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicationUser} obj Optional instance to populate.
   * @return {module:model/ApplicationUser} The populated <code>ApplicationUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('applicationUuid')) {
        obj['applicationUuid'] = ApiClient.convertToType(data['applicationUuid'], 'String');
      }
      if (data.hasOwnProperty('applicationUserId')) {
        obj['applicationUserId'] = ApiClient.convertToType(data['applicationUserId'], 'String');
      }
      if (data.hasOwnProperty('referenceId')) {
        obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
      }
      if (data.hasOwnProperty('institutionConsents')) {
        obj['institutionConsents'] = ApiClient.convertToType(data['institutionConsents'], [InstitutionConsent]);
      }
    }
    return obj;
  }

  /**
   * User UUID
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {String} applicationUuid
   */
  exports.prototype['applicationUuid'] = undefined;
  /**
   * @member {String} applicationUserId
   */
  exports.prototype['applicationUserId'] = undefined;
  /**
   * @member {String} referenceId
   */
  exports.prototype['referenceId'] = undefined;
  /**
   * @member {Array.<module:model/InstitutionConsent>} institutionConsents
   */
  exports.prototype['institutionConsents'] = undefined;



  return exports;
}));


