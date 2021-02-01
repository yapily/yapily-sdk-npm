/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.303
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
    root.YapilyApi.CoreProduct = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CoreProduct model module.
   * @module model/CoreProduct
   * @version 0.0.303
   */

  /**
   * Constructs a new <code>CoreProduct</code>.
   * Core feature of the PCA product which can be associated to a particular Marketing State
   * @alias module:model/CoreProduct
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CoreProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CoreProduct} obj Optional instance to populate.
   * @return {module:model/CoreProduct} The populated <code>CoreProduct</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MonthlyMaximumCharge')) {
        obj['MonthlyMaximumCharge'] = ApiClient.convertToType(data['MonthlyMaximumCharge'], 'String');
      }
      if (data.hasOwnProperty('ProductDescription')) {
        obj['ProductDescription'] = ApiClient.convertToType(data['ProductDescription'], 'String');
      }
      if (data.hasOwnProperty('ProductURL')) {
        obj['ProductURL'] = ApiClient.convertToType(data['ProductURL'], 'String');
      }
      if (data.hasOwnProperty('SalesAccessChannels')) {
        obj['SalesAccessChannels'] = ApiClient.convertToType(data['SalesAccessChannels'], ['String']);
      }
      if (data.hasOwnProperty('ServicingAccessChannels')) {
        obj['ServicingAccessChannels'] = ApiClient.convertToType(data['ServicingAccessChannels'], ['String']);
      }
      if (data.hasOwnProperty('TcsAndCsURL')) {
        obj['TcsAndCsURL'] = ApiClient.convertToType(data['TcsAndCsURL'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} MonthlyMaximumCharge
   */
  exports.prototype['MonthlyMaximumCharge'] = undefined;
  /**
   * @member {String} ProductDescription
   */
  exports.prototype['ProductDescription'] = undefined;
  /**
   * @member {String} ProductURL
   */
  exports.prototype['ProductURL'] = undefined;
  /**
   * @member {Array.<module:model/CoreProduct.SalesAccessChannelsEnum>} SalesAccessChannels
   */
  exports.prototype['SalesAccessChannels'] = undefined;
  /**
   * @member {Array.<module:model/CoreProduct.ServicingAccessChannelsEnum>} ServicingAccessChannels
   */
  exports.prototype['ServicingAccessChannels'] = undefined;
  /**
   * @member {String} TcsAndCsURL
   */
  exports.prototype['TcsAndCsURL'] = undefined;


  /**
   * Allowed values for the <code>salesAccessChannels</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SalesAccessChannelsEnum = {
    /**
     * value: "Branch"
     * @const
     */
    "Branch": "Branch",
    /**
     * value: "CallCentre"
     * @const
     */
    "CallCentre": "CallCentre",
    /**
     * value: "Post"
     * @const
     */
    "Post": "Post",
    /**
     * value: "Online"
     * @const
     */
    "Online": "Online",
    /**
     * value: "RelationshipManager"
     * @const
     */
    "RelationshipManager": "RelationshipManager"  };

  /**
   * Allowed values for the <code>servicingAccessChannels</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ServicingAccessChannelsEnum = {
    /**
     * value: "ATM"
     * @const
     */
    "ATM": "ATM",
    /**
     * value: "Branch"
     * @const
     */
    "Branch": "Branch",
    /**
     * value: "CallCentre"
     * @const
     */
    "CallCentre": "CallCentre",
    /**
     * value: "Post"
     * @const
     */
    "Post": "Post",
    /**
     * value: "MobileBankingApp"
     * @const
     */
    "MobileBankingApp": "MobileBankingApp",
    /**
     * value: "Online"
     * @const
     */
    "Online": "Online",
    /**
     * value: "PostOffice"
     * @const
     */
    "PostOffice": "PostOffice",
    /**
     * value: "RelationshipManager"
     * @const
     */
    "RelationshipManager": "RelationshipManager",
    /**
     * value: "Text"
     * @const
     */
    "Text": "Text"  };


  return exports;
}));


