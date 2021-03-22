/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.321
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
    root.YapilyApi.RegistrationRequestManual = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The RegistrationRequestManual model module.
   * @module model/RegistrationRequestManual
   * @version 0.0.321
   */

  /**
   * Constructs a new <code>RegistrationRequestManual</code>.
   * @alias module:model/RegistrationRequestManual
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>RegistrationRequestManual</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RegistrationRequestManual} obj Optional instance to populate.
   * @return {module:model/RegistrationRequestManual} The populated <code>RegistrationRequestManual</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
      }
      if (data.hasOwnProperty('clientSecret')) {
        obj['clientSecret'] = ApiClient.convertToType(data['clientSecret'], 'String');
      }
      if (data.hasOwnProperty('tppId')) {
        obj['tppId'] = ApiClient.convertToType(data['tppId'], 'String');
      }
      if (data.hasOwnProperty('softwareId')) {
        obj['softwareId'] = ApiClient.convertToType(data['softwareId'], 'String');
      }
      if (data.hasOwnProperty('clientName')) {
        obj['clientName'] = ApiClient.convertToType(data['clientName'], 'String');
      }
      if (data.hasOwnProperty('signingKeyId')) {
        obj['signingKeyId'] = ApiClient.convertToType(data['signingKeyId'], 'String');
      }
      if (data.hasOwnProperty('signingCertificateId')) {
        obj['signingCertificateId'] = ApiClient.convertToType(data['signingCertificateId'], 'String');
      }
      if (data.hasOwnProperty('transportKeyId')) {
        obj['transportKeyId'] = ApiClient.convertToType(data['transportKeyId'], 'String');
      }
      if (data.hasOwnProperty('transportCertificateId')) {
        obj['transportCertificateId'] = ApiClient.convertToType(data['transportCertificateId'], 'String');
      }
      if (data.hasOwnProperty('clientUri')) {
        obj['clientUri'] = ApiClient.convertToType(data['clientUri'], 'String');
      }
      if (data.hasOwnProperty('termsOfServiceUri')) {
        obj['termsOfServiceUri'] = ApiClient.convertToType(data['termsOfServiceUri'], 'String');
      }
      if (data.hasOwnProperty('ssaJwt')) {
        obj['ssaJwt'] = ApiClient.convertToType(data['ssaJwt'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} clientId
   */
  exports.prototype['clientId'] = undefined;
  /**
   * @member {String} clientSecret
   */
  exports.prototype['clientSecret'] = undefined;
  /**
   * @member {String} tppId
   */
  exports.prototype['tppId'] = undefined;
  /**
   * @member {String} softwareId
   */
  exports.prototype['softwareId'] = undefined;
  /**
   * @member {String} clientName
   */
  exports.prototype['clientName'] = undefined;
  /**
   * @member {String} signingKeyId
   */
  exports.prototype['signingKeyId'] = undefined;
  /**
   * @member {String} signingCertificateId
   */
  exports.prototype['signingCertificateId'] = undefined;
  /**
   * @member {String} transportKeyId
   */
  exports.prototype['transportKeyId'] = undefined;
  /**
   * @member {String} transportCertificateId
   */
  exports.prototype['transportCertificateId'] = undefined;
  /**
   * @member {String} clientUri
   */
  exports.prototype['clientUri'] = undefined;
  /**
   * @member {String} termsOfServiceUri
   */
  exports.prototype['termsOfServiceUri'] = undefined;
  /**
   * @member {String} ssaJwt
   */
  exports.prototype['ssaJwt'] = undefined;



  return exports;
}));


