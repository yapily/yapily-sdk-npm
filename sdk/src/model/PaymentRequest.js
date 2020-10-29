/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.265
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
    define(['ApiClient', 'model/Amount', 'model/InternationalPaymentRequest', 'model/Payee', 'model/Payer', 'model/PeriodicPaymentRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'), require('./InternationalPaymentRequest'), require('./Payee'), require('./Payer'), require('./PeriodicPaymentRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.PaymentRequest = factory(root.YapilyApi.ApiClient, root.YapilyApi.Amount, root.YapilyApi.InternationalPaymentRequest, root.YapilyApi.Payee, root.YapilyApi.Payer, root.YapilyApi.PeriodicPaymentRequest);
  }
}(this, function(ApiClient, Amount, InternationalPaymentRequest, Payee, Payer, PeriodicPaymentRequest) {
  'use strict';



  /**
   * The PaymentRequest model module.
   * @module model/PaymentRequest
   * @version 0.0.265
   */

  /**
   * Constructs a new <code>PaymentRequest</code>.
   * @alias module:model/PaymentRequest
   * @class
   * @param type {module:model/PaymentRequest.TypeEnum} 
   * @param payee {module:model/Payee} 
   */
  var exports = function(type, payee) {
    var _this = this;

    _this['type'] = type;
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
      if (data.hasOwnProperty('payer')) {
        obj['payer'] = Payer.constructFromObject(data['payer']);
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
      if (data.hasOwnProperty('periodicPayment')) {
        obj['periodicPayment'] = PeriodicPaymentRequest.constructFromObject(data['periodicPayment']);
      }
      if (data.hasOwnProperty('internationalPayment')) {
        obj['internationalPayment'] = InternationalPaymentRequest.constructFromObject(data['internationalPayment']);
      }
      if (data.hasOwnProperty('readRefundAccount')) {
        obj['readRefundAccount'] = ApiClient.convertToType(data['readRefundAccount'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} paymentIdempotencyId
   */
  exports.prototype['paymentIdempotencyId'] = undefined;
  /**
   * @member {module:model/Payer} payer
   */
  exports.prototype['payer'] = undefined;
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
   * @member {module:model/PeriodicPaymentRequest} periodicPayment
   */
  exports.prototype['periodicPayment'] = undefined;
  /**
   * @member {module:model/InternationalPaymentRequest} internationalPayment
   */
  exports.prototype['internationalPayment'] = undefined;
  /**
   * @member {Boolean} readRefundAccount
   */
  exports.prototype['readRefundAccount'] = undefined;


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
    "DOMESTIC_PAYMENT": "DOMESTIC_PAYMENT",
    /**
     * value: "DOMESTIC_INSTANT_PAYMENT"
     * @const
     */
    "DOMESTIC_INSTANT_PAYMENT": "DOMESTIC_INSTANT_PAYMENT",
    /**
     * value: "DOMESTIC_VARIABLE_RECURRING_PAYMENT"
     * @const
     */
    "DOMESTIC_VARIABLE_RECURRING_PAYMENT": "DOMESTIC_VARIABLE_RECURRING_PAYMENT",
    /**
     * value: "DOMESTIC_SCHEDULED_PAYMENT"
     * @const
     */
    "DOMESTIC_SCHEDULED_PAYMENT": "DOMESTIC_SCHEDULED_PAYMENT",
    /**
     * value: "DOMESTIC_PERIODIC_PAYMENT"
     * @const
     */
    "DOMESTIC_PERIODIC_PAYMENT": "DOMESTIC_PERIODIC_PAYMENT",
    /**
     * value: "INTERNATIONAL_PAYMENT"
     * @const
     */
    "INTERNATIONAL_PAYMENT": "INTERNATIONAL_PAYMENT",
    /**
     * value: "INTERNATIONAL_SCHEDULED_PAYMENT"
     * @const
     */
    "INTERNATIONAL_SCHEDULED_PAYMENT": "INTERNATIONAL_SCHEDULED_PAYMENT",
    /**
     * value: "INTERNATIONAL_PERIODIC_PAYMENT"
     * @const
     */
    "INTERNATIONAL_PERIODIC_PAYMENT": "INTERNATIONAL_PERIODIC_PAYMENT",
    /**
     * value: "BULK_PAYMENT"
     * @const
     */
    "BULK_PAYMENT": "BULK_PAYMENT"  };


  return exports;
}));


