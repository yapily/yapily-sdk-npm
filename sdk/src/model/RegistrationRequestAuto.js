/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.334
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
    root.YapilyApi.RegistrationRequestAuto = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The RegistrationRequestAuto model module.
   * @module model/RegistrationRequestAuto
   * @version 0.0.334
   */

  /**
   * Constructs a new <code>RegistrationRequestAuto</code>.
   * @alias module:model/RegistrationRequestAuto
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>RegistrationRequestAuto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RegistrationRequestAuto} obj Optional instance to populate.
   * @return {module:model/RegistrationRequestAuto} The populated <code>RegistrationRequestAuto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('softwareId')) {
        obj['softwareId'] = ApiClient.convertToType(data['softwareId'], 'String');
      }
      if (data.hasOwnProperty('signingCertificateId')) {
        obj['signingCertificateId'] = ApiClient.convertToType(data['signingCertificateId'], 'String');
      }
      if (data.hasOwnProperty('transportCertificateId')) {
        obj['transportCertificateId'] = ApiClient.convertToType(data['transportCertificateId'], 'String');
      }
      if (data.hasOwnProperty('ssaJwt')) {
        obj['ssaJwt'] = ApiClient.convertToType(data['ssaJwt'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} softwareId
   */
  exports.prototype['softwareId'] = undefined;
  /**
   * @member {String} signingCertificateId
   */
  exports.prototype['signingCertificateId'] = undefined;
  /**
   * @member {String} transportCertificateId
   */
  exports.prototype['transportCertificateId'] = undefined;
  /**
   * @member {String} ssaJwt
   */
  exports.prototype['ssaJwt'] = undefined;



  return exports;
}));


