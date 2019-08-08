/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.131
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
    define(['ApiClient', 'model/AddressDetails', 'model/Amount', 'model/Balance', 'model/ChargeDetails', 'model/CurrencyExchange', 'model/IsoBankTransactionCode', 'model/Merchant', 'model/ProprietaryBankTransactionCode', 'model/StatementReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressDetails'), require('./Amount'), require('./Balance'), require('./ChargeDetails'), require('./CurrencyExchange'), require('./IsoBankTransactionCode'), require('./Merchant'), require('./ProprietaryBankTransactionCode'), require('./StatementReference'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Transaction = factory(root.YapilyApi.ApiClient, root.YapilyApi.AddressDetails, root.YapilyApi.Amount, root.YapilyApi.Balance, root.YapilyApi.ChargeDetails, root.YapilyApi.CurrencyExchange, root.YapilyApi.IsoBankTransactionCode, root.YapilyApi.Merchant, root.YapilyApi.ProprietaryBankTransactionCode, root.YapilyApi.StatementReference);
  }
}(this, function(ApiClient, AddressDetails, Amount, Balance, ChargeDetails, CurrencyExchange, IsoBankTransactionCode, Merchant, ProprietaryBankTransactionCode, StatementReference) {
  'use strict';




  /**
   * The Transaction model module.
   * @module model/Transaction
   * @version 0.0.131
   */

  /**
   * Constructs a new <code>Transaction</code>.
   * @alias module:model/Transaction
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Transaction} obj Optional instance to populate.
   * @return {module:model/Transaction} The populated <code>Transaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('bookingDateTime')) {
        obj['bookingDateTime'] = ApiClient.convertToType(data['bookingDateTime'], 'Date');
      }
      if (data.hasOwnProperty('valueDateTime')) {
        obj['valueDateTime'] = ApiClient.convertToType(data['valueDateTime'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('transactionAmount')) {
        obj['transactionAmount'] = Amount.constructFromObject(data['transactionAmount']);
      }
      if (data.hasOwnProperty('currencyExchange')) {
        obj['currencyExchange'] = CurrencyExchange.constructFromObject(data['currencyExchange']);
      }
      if (data.hasOwnProperty('chargeDetails')) {
        obj['chargeDetails'] = ChargeDetails.constructFromObject(data['chargeDetails']);
      }
      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('statementReferences')) {
        obj['statementReferences'] = ApiClient.convertToType(data['statementReferences'], [StatementReference]);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('transactionInformation')) {
        obj['transactionInformation'] = ApiClient.convertToType(data['transactionInformation'], ['String']);
      }
      if (data.hasOwnProperty('addressDetails')) {
        obj['addressDetails'] = AddressDetails.constructFromObject(data['addressDetails']);
      }
      if (data.hasOwnProperty('isoBankTransactionCode')) {
        obj['isoBankTransactionCode'] = IsoBankTransactionCode.constructFromObject(data['isoBankTransactionCode']);
      }
      if (data.hasOwnProperty('proprietaryBankTransactionCode')) {
        obj['proprietaryBankTransactionCode'] = ProprietaryBankTransactionCode.constructFromObject(data['proprietaryBankTransactionCode']);
      }
      if (data.hasOwnProperty('balance')) {
        obj['balance'] = Balance.constructFromObject(data['balance']);
      }
      if (data.hasOwnProperty('merchant')) {
        obj['merchant'] = Merchant.constructFromObject(data['merchant']);
      }
    }
    return obj;
  }

  /**
   * Transaction Id returned by the institution if present
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Transaction date as defined by the institution
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * Date and (if available) time that transaction is posted
   * @member {Date} bookingDateTime
   */
  exports.prototype['bookingDateTime'] = undefined;
  /**
   * The actual or expected date and time transaction is cleared
   * @member {Date} valueDateTime
   */
  exports.prototype['valueDateTime'] = undefined;
  /**
   * The status of the transaction
   * @member {module:model/Transaction.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Deprecated. Use the amount value in `transactionAmount` instead
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Deprecated. Use the currency value in `transactionAmount` instead
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {module:model/Amount} transactionAmount
   */
  exports.prototype['transactionAmount'] = undefined;
  /**
   * @member {module:model/CurrencyExchange} currencyExchange
   */
  exports.prototype['currencyExchange'] = undefined;
  /**
   * If present, contains details of any charges applied during this transaction
   * @member {module:model/ChargeDetails} chargeDetails
   */
  exports.prototype['chargeDetails'] = undefined;
  /**
   * Transaction reference
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * @member {Array.<module:model/StatementReference>} statementReferences
   */
  exports.prototype['statementReferences'] = undefined;
  /**
   * Unstructured text containing details of the transaction. Usage varies according to the institution
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Further information related to the transaction. Usage varies according to the institution
   * @member {Array.<String>} transactionInformation
   */
  exports.prototype['transactionInformation'] = undefined;
  /**
   * @member {module:model/AddressDetails} addressDetails
   */
  exports.prototype['addressDetails'] = undefined;
  /**
   * @member {module:model/IsoBankTransactionCode} isoBankTransactionCode
   */
  exports.prototype['isoBankTransactionCode'] = undefined;
  /**
   * @member {module:model/ProprietaryBankTransactionCode} proprietaryBankTransactionCode
   */
  exports.prototype['proprietaryBankTransactionCode'] = undefined;
  /**
   * Running account balance after transaction has been applied
   * @member {module:model/Balance} balance
   */
  exports.prototype['balance'] = undefined;
  /**
   * Merchant details
   * @member {module:model/Merchant} merchant
   */
  exports.prototype['merchant'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "ACCOUNT_CHECK"
     * @const
     */
    "ACCOUNT_CHECK": "ACCOUNT_CHECK",
    /**
     * value: "BOOKED"
     * @const
     */
    "BOOKED": "BOOKED",
    /**
     * value: "DECLINED"
     * @const
     */
    "DECLINED": "DECLINED",
    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",
    /**
     * value: "REFUNDED"
     * @const
     */
    "REFUNDED": "REFUNDED",
    /**
     * value: "RETRYING"
     * @const
     */
    "RETRYING": "RETRYING",
    /**
     * value: "REVERSED"
     * @const
     */
    "REVERSED": "REVERSED",
    /**
     * value: "UPCOMING"
     * @const
     */
    "UPCOMING": "UPCOMING"  };


  return exports;
}));


