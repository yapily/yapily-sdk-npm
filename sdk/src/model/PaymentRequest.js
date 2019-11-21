/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.161
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountIdentification', 'model/Amount', 'model/Payee', 'model/PeriodicPaymentRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountIdentification'), require('./Amount'), require('./Payee'), require('./PeriodicPaymentRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.PaymentRequest = factory(root.YapilyApi.ApiClient, root.YapilyApi.AccountIdentification, root.YapilyApi.Amount, root.YapilyApi.Payee, root.YapilyApi.PeriodicPaymentRequest);
  }
}(this, function(ApiClient, AccountIdentification, Amount, Payee, PeriodicPaymentRequest) {
  'use strict';



  /**
   * The PaymentRequest model module.
   * @module model/PaymentRequest
   * @version 0.0.161
   */

  /**
   * Constructs a new <code>PaymentRequest</code>.
   * @alias module:model/PaymentRequest
   * @class
   * @param paymentIdempotencyId {String} 
   * @param payee {module:model/Payee} 
   */
  var exports = function(paymentIdempotencyId, payee) {
    var _this = this;

    _this['paymentIdempotencyId'] = paymentIdempotencyId;
    _this['payee'] = payee;
  };

  /**
   * Constructs a <code>PaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentRequest} obj Optional instance to populate.
   * @return {module:model/PaymentRequest} The populated <code>PaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('paymentIdempotencyId')) {
        obj['paymentIdempotencyId'] = ApiClient.convertToType(data['paymentIdempotencyId'], 'String');
      }
      if (data.hasOwnProperty('payerAccountIdentifications')) {
        obj['payerAccountIdentifications'] = ApiClient.convertToType(data['payerAccountIdentifications'], [AccountIdentification]);
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = Amount.constructFromObject(data['amount']);
      }
      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('contextType')) {
        obj['contextType'] = ApiClient.convertToType(data['contextType'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('paymentDateTime')) {
        obj['paymentDateTime'] = ApiClient.convertToType(data['paymentDateTime'], 'Date');
      }
      if (data.hasOwnProperty('payee')) {
        obj['payee'] = Payee.constructFromObject(data['payee']);
      }
      if (data.hasOwnProperty('periodicPayments')) {
        obj['periodicPayments'] = PeriodicPaymentRequest.constructFromObject(data['periodicPayments']);
      }
    }
    return obj;
  }

  /**
   * @member {String} paymentIdempotencyId
   */
  exports.prototype['paymentIdempotencyId'] = undefined;
  /**
   * @member {Array.<module:model/AccountIdentification>} payerAccountIdentifications
   */
  exports.prototype['payerAccountIdentifications'] = undefined;
  /**
   * @member {module:model/Amount} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * @member {module:model/PaymentRequest.ContextTypeEnum} contextType
   */
  exports.prototype['contextType'] = undefined;
  /**
   * @member {module:model/PaymentRequest.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Date} paymentDateTime
   */
  exports.prototype['paymentDateTime'] = undefined;
  /**
   * @member {module:model/Payee} payee
   */
  exports.prototype['payee'] = undefined;
  /**
   * @member {module:model/PeriodicPaymentRequest} periodicPayments
   */
  exports.prototype['periodicPayments'] = undefined;


  /**
   * Allowed values for the <code>contextType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ContextTypeEnum = {
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

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "DOMESTIC_PAYMENT"
     * @const
     */
    "PAYMENT": "DOMESTIC_PAYMENT",
    /**
     * value: "DOMESTIC_VARIABLE_RECURRING_PAYMENT"
     * @const
     */
    "VARIABLE_RECURRING_PAYMENT": "DOMESTIC_VARIABLE_RECURRING_PAYMENT",
    /**
     * value: "DOMESTIC_SCHEDULED_PAYMENT"
     * @const
     */
    "SCHEDULED_PAYMENT": "DOMESTIC_SCHEDULED_PAYMENT",
    /**
     * value: "DOMESTIC_PERIODIC_PAYMENT"
     * @const
     */
    "PERIODIC_PAYMENT": "DOMESTIC_PERIODIC_PAYMENT"  };


  return exports;
}));


