/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.348
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
    define(['ApiClient', 'model/Amount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.CreditLine = factory(root.YapilyApi.ApiClient, root.YapilyApi.Amount);
  }
}(this, function(ApiClient, Amount) {
  'use strict';



  /**
   * The CreditLine model module.
   * @module model/CreditLine
   * @version 0.0.348
   */

  /**
   * Constructs a new <code>CreditLine</code>.
   * @alias module:model/CreditLine
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CreditLine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreditLine} obj Optional instance to populate.
   * @return {module:model/CreditLine} The populated <code>CreditLine</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('creditLineAmount')) {
        obj['creditLineAmount'] = Amount.constructFromObject(data['creditLineAmount']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CreditLine.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/Amount} creditLineAmount
   */
  exports.prototype['creditLineAmount'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "AVAILABLE"
     * @const
     */
    "AVAILABLE": "AVAILABLE",
    /**
     * value: "CREDIT"
     * @const
     */
    "CREDIT": "CREDIT",
    /**
     * value: "EMERGENCY"
     * @const
     */
    "EMERGENCY": "EMERGENCY",
    /**
     * value: "PRE_AGREED"
     * @const
     */
    "PRE_AGREED": "PRE_AGREED",
    /**
     * value: "TEMPORARY"
     * @const
     */
    "TEMPORARY": "TEMPORARY",
    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER",
    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN"  };


  return exports;
}));


