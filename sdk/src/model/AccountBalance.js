/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.258
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
    define(['ApiClient', 'model/Amount', 'model/CreditLine'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'), require('./CreditLine'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.AccountBalance = factory(root.YapilyApi.ApiClient, root.YapilyApi.Amount, root.YapilyApi.CreditLine);
  }
}(this, function(ApiClient, Amount, CreditLine) {
  'use strict';



  /**
   * The AccountBalance model module.
   * @module model/AccountBalance
   * @version 0.0.258
   */

  /**
   * Constructs a new <code>AccountBalance</code>.
   * @alias module:model/AccountBalance
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AccountBalance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountBalance} obj Optional instance to populate.
   * @return {module:model/AccountBalance} The populated <code>AccountBalance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('dateTime')) {
        obj['dateTime'] = ApiClient.convertToType(data['dateTime'], 'Date');
      }
      if (data.hasOwnProperty('balanceAmount')) {
        obj['balanceAmount'] = Amount.constructFromObject(data['balanceAmount']);
      }
      if (data.hasOwnProperty('creditLineIncluded')) {
        obj['creditLineIncluded'] = ApiClient.convertToType(data['creditLineIncluded'], 'Boolean');
      }
      if (data.hasOwnProperty('creditLines')) {
        obj['creditLines'] = ApiClient.convertToType(data['creditLines'], [CreditLine]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AccountBalance.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Timestamp of the last change of the balance amount
   * @member {Date} dateTime
   */
  exports.prototype['dateTime'] = undefined;
  /**
   * @member {module:model/Amount} balanceAmount
   */
  exports.prototype['balanceAmount'] = undefined;
  /**
   * Indicates whether or not the credit line is included in the balance
   * @member {Boolean} creditLineIncluded
   */
  exports.prototype['creditLineIncluded'] = undefined;
  /**
   * @member {Array.<module:model/CreditLine>} creditLines
   */
  exports.prototype['creditLines'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "CLOSING_AVAILABLE"
     * @const
     */
    "CLOSING_AVAILABLE": "CLOSING_AVAILABLE",
    /**
     * value: "CLOSING_BOOKED"
     * @const
     */
    "CLOSING_BOOKED": "CLOSING_BOOKED",
    /**
     * value: "CLOSING_CLEARED"
     * @const
     */
    "CLOSING_CLEARED": "CLOSING_CLEARED",
    /**
     * value: "EXPECTED"
     * @const
     */
    "EXPECTED": "EXPECTED",
    /**
     * value: "FORWARD_AVAILABLE"
     * @const
     */
    "FORWARD_AVAILABLE": "FORWARD_AVAILABLE",
    /**
     * value: "INFORMATION"
     * @const
     */
    "INFORMATION": "INFORMATION",
    /**
     * value: "INTERIM_AVAILABLE"
     * @const
     */
    "INTERIM_AVAILABLE": "INTERIM_AVAILABLE",
    /**
     * value: "INTERIM_BOOKED"
     * @const
     */
    "INTERIM_BOOKED": "INTERIM_BOOKED",
    /**
     * value: "INTERIM_CLEARED"
     * @const
     */
    "INTERIM_CLEARED": "INTERIM_CLEARED",
    /**
     * value: "OPENING_AVAILABLE"
     * @const
     */
    "OPENING_AVAILABLE": "OPENING_AVAILABLE",
    /**
     * value: "OPENING_BOOKED"
     * @const
     */
    "OPENING_BOOKED": "OPENING_BOOKED",
    /**
     * value: "OPENING_CLEARED"
     * @const
     */
    "OPENING_CLEARED": "OPENING_CLEARED",
    /**
     * value: "PREVIOUSLY_CLOSED_BOOKED"
     * @const
     */
    "PREVIOUSLY_CLOSED_BOOKED": "PREVIOUSLY_CLOSED_BOOKED",
    /**
     * value: "AUTHORISED"
     * @const
     */
    "AUTHORISED": "AUTHORISED",
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


