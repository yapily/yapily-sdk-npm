/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.325
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
    define(['ApiClient', 'model/AccountIdentification', 'model/Address'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountIdentification'), require('./Address'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Payee = factory(root.YapilyApi.ApiClient, root.YapilyApi.AccountIdentification, root.YapilyApi.Address);
  }
}(this, function(ApiClient, AccountIdentification, Address) {
  'use strict';



  /**
   * The Payee model module.
   * @module model/Payee
   * @version 0.0.325
   */

  /**
   * Constructs a new <code>Payee</code>.
   * @alias module:model/Payee
   * @class
   * @param name {String} 
   * @param accountIdentifications {Array.<module:model/AccountIdentification>} 
   */
  var exports = function(name, accountIdentifications) {
    var _this = this;

    _this['name'] = name;
    _this['accountIdentifications'] = accountIdentifications;
  };

  /**
   * Constructs a <code>Payee</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Payee} obj Optional instance to populate.
   * @return {module:model/Payee} The populated <code>Payee</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = Address.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('accountIdentifications')) {
        obj['accountIdentifications'] = ApiClient.convertToType(data['accountIdentifications'], [AccountIdentification]);
      }
      if (data.hasOwnProperty('merchantId')) {
        obj['merchantId'] = ApiClient.convertToType(data['merchantId'], 'String');
      }
      if (data.hasOwnProperty('merchantCategoryCode')) {
        obj['merchantCategoryCode'] = ApiClient.convertToType(data['merchantCategoryCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/Address} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {Array.<module:model/AccountIdentification>} accountIdentifications
   */
  exports.prototype['accountIdentifications'] = undefined;
  /**
   * @member {String} merchantId
   */
  exports.prototype['merchantId'] = undefined;
  /**
   * @member {String} merchantCategoryCode
   */
  exports.prototype['merchantCategoryCode'] = undefined;



  return exports;
}));


