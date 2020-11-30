/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.282
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
    root.YapilyApi.MonitoringFeatureStatus = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The MonitoringFeatureStatus model module.
   * @module model/MonitoringFeatureStatus
   * @version 0.0.282
   */

  /**
   * Constructs a new <code>MonitoringFeatureStatus</code>.
   * @alias module:model/MonitoringFeatureStatus
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>MonitoringFeatureStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonitoringFeatureStatus} obj Optional instance to populate.
   * @return {module:model/MonitoringFeatureStatus} The populated <code>MonitoringFeatureStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('lastTested')) {
        obj['lastTested'] = ApiClient.convertToType(data['lastTested'], 'Date');
      }
      if (data.hasOwnProperty('span')) {
        obj['span'] = ApiClient.convertToType(data['span'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Date} lastTested
   */
  exports.prototype['lastTested'] = undefined;
  /**
   * @member {String} span
   */
  exports.prototype['span'] = undefined;
  /**
   * @member {module:model/MonitoringFeatureStatus.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Up"
     * @const
     */
    "Up": "Up",
    /**
     * value: "Down"
     * @const
     */
    "Down": "Down",
    /**
     * value: "Warning"
     * @const
     */
    "Warning": "Warning",
    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",
    /**
     * value: "Expired"
     * @const
     */
    "Expired": "Expired"  };


  return exports;
}));


