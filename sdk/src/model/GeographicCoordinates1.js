/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.234
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
    root.YapilyApi.GeographicCoordinates1 = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GeographicCoordinates1 model module.
   * @module model/GeographicCoordinates1
   * @version 0.0.234
   */

  /**
   * Constructs a new <code>GeographicCoordinates1</code>.
   * Location on the earth specified by two numbers representing vertical and horizontal position.
   * @alias module:model/GeographicCoordinates1
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GeographicCoordinates1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeographicCoordinates1} obj Optional instance to populate.
   * @return {module:model/GeographicCoordinates1} The populated <code>GeographicCoordinates1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Latitude')) {
        obj['Latitude'] = ApiClient.convertToType(data['Latitude'], 'String');
      }
      if (data.hasOwnProperty('Longitude')) {
        obj['Longitude'] = ApiClient.convertToType(data['Longitude'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Latitude
   */
  exports.prototype['Latitude'] = undefined;
  /**
   * @member {String} Longitude
   */
  exports.prototype['Longitude'] = undefined;



  return exports;
}));


