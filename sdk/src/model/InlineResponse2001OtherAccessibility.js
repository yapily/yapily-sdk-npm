/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.238
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
    root.YapilyApi.InlineResponse2001OtherAccessibility = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The InlineResponse2001OtherAccessibility model module.
   * @module model/InlineResponse2001OtherAccessibility
   * @version 0.0.238
   */

  /**
   * Constructs a new <code>InlineResponse2001OtherAccessibility</code>.
   * Enter a new code , name and description for any other ATM accessibility options
   * @alias module:model/InlineResponse2001OtherAccessibility
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>InlineResponse2001OtherAccessibility</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2001OtherAccessibility} obj Optional instance to populate.
   * @return {module:model/InlineResponse2001OtherAccessibility} The populated <code>InlineResponse2001OtherAccessibility</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Code')) {
        obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Code
   */
  exports.prototype['Code'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;



  return exports;
}));


