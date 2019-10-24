/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.158
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
    define(['ApiClient', 'model/MerchantInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MerchantInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.SortCodePaymentRequest = factory(root.YapilyApi.ApiClient, root.YapilyApi.MerchantInfo);
  }
}(this, function(ApiClient, MerchantInfo) {
  'use strict';




  /**
   * The SortCodePaymentRequest model module.
   * @module model/SortCodePaymentRequest
   * @version 0.0.158
   */

  /**
   * Constructs a new <code>SortCodePaymentRequest</code>.
   * @alias module:model/SortCodePaymentRequest
   * @class
   * @param name {String} 
   * @param amount {Number} 
   * @param currency {String} 
   * @param reference {String} 
   * @param country {String} 
   * @param accountNumber {String} 
   * @param sortCode {String} 
   */
  var exports = function(name, amount, currency, reference, country, accountNumber, sortCode) {
    var _this = this;


    _this['name'] = name;
    _this['amount'] = amount;
    _this['currency'] = currency;
    _this['reference'] = reference;
    _this['country'] = country;

    _this['accountNumber'] = accountNumber;
    _this['sortCode'] = sortCode;

  };

  /**
   * Constructs a <code>SortCodePaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SortCodePaymentRequest} obj Optional instance to populate.
   * @return {module:model/SortCodePaymentRequest} The populated <code>SortCodePaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('senderAccountId')) {
        obj['senderAccountId'] = ApiClient.convertToType(data['senderAccountId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('accountNumber')) {
        obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'String');
      }
      if (data.hasOwnProperty('sortCode')) {
        obj['sortCode'] = ApiClient.convertToType(data['sortCode'], 'String');
      }
      if (data.hasOwnProperty('merchantInfo')) {
        obj['merchantInfo'] = MerchantInfo.constructFromObject(data['merchantInfo']);
      }
    }
    return obj;
  }

  /**
   * @member {String} senderAccountId
   */
  exports.prototype['senderAccountId'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {module:model/SortCodePaymentRequest.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} accountNumber
   */
  exports.prototype['accountNumber'] = undefined;
  /**
   * @member {String} sortCode
   */
  exports.prototype['sortCode'] = undefined;
  /**
   * @member {module:model/MerchantInfo} merchantInfo
   */
  exports.prototype['merchantInfo'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "BILL"
     * @const
     */
    "BILL": "BILL",
    /**
     * value: "GOODS"
     * @const
     */
    "GOODS": "GOODS",
    /**
     * value: "SERVICES"
     * @const
     */
    "SERVICES": "SERVICES",
    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER",
    /**
     * value: "PERSON_TO_PERSON"
     * @const
     */
    "PERSON_TO_PERSON": "PERSON_TO_PERSON"  };


  return exports;
}));


