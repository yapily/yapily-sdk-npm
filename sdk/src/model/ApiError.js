/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.346
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
    define(['ApiClient', 'model/InstitutionError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InstitutionError'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ApiError = factory(root.YapilyApi.ApiClient, root.YapilyApi.InstitutionError);
  }
}(this, function(ApiClient, InstitutionError) {
  'use strict';



  /**
   * The ApiError model module.
   * @module model/ApiError
   * @version 0.0.346
   */

  /**
   * Constructs a new <code>ApiError</code>.
   * @alias module:model/ApiError
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ApiError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiError} obj Optional instance to populate.
   * @return {module:model/ApiError} The populated <code>ApiError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
      if (data.hasOwnProperty('institutionError')) {
        obj['institutionError'] = InstitutionError.constructFromObject(data['institutionError']);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('tracingId')) {
        obj['tracingId'] = ApiClient.convertToType(data['tracingId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {module:model/InstitutionError} institutionError
   */
  exports.prototype['institutionError'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * @member {module:model/ApiError.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} tracingId
   */
  exports.prototype['tracingId'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "400"
     * @const
     */
    "400": "400",
    /**
     * value: "401"
     * @const
     */
    "401": "401",
    /**
     * value: "402"
     * @const
     */
    "402": "402",
    /**
     * value: "403"
     * @const
     */
    "403": "403",
    /**
     * value: "404"
     * @const
     */
    "404": "404",
    /**
     * value: "405"
     * @const
     */
    "405": "405",
    /**
     * value: "406"
     * @const
     */
    "406": "406",
    /**
     * value: "407"
     * @const
     */
    "407": "407",
    /**
     * value: "408"
     * @const
     */
    "408": "408",
    /**
     * value: "409"
     * @const
     */
    "409": "409",
    /**
     * value: "410"
     * @const
     */
    "410": "410",
    /**
     * value: "411"
     * @const
     */
    "411": "411",
    /**
     * value: "412"
     * @const
     */
    "412": "412",
    /**
     * value: "413"
     * @const
     */
    "413": "413",
    /**
     * value: "414"
     * @const
     */
    "414": "414",
    /**
     * value: "415"
     * @const
     */
    "415": "415",
    /**
     * value: "416"
     * @const
     */
    "416": "416",
    /**
     * value: "417"
     * @const
     */
    "417": "417",
    /**
     * value: "418"
     * @const
     */
    "418": "418",
    /**
     * value: "419"
     * @const
     */
    "419": "419",
    /**
     * value: "420"
     * @const
     */
    "420": "420",
    /**
     * value: "421"
     * @const
     */
    "421": "421",
    /**
     * value: "422"
     * @const
     */
    "422": "422",
    /**
     * value: "423"
     * @const
     */
    "423": "423",
    /**
     * value: "424"
     * @const
     */
    "424": "424",
    /**
     * value: "426"
     * @const
     */
    "426": "426",
    /**
     * value: "428"
     * @const
     */
    "428": "428",
    /**
     * value: "429"
     * @const
     */
    "429": "429",
    /**
     * value: "431"
     * @const
     */
    "431": "431",
    /**
     * value: "451"
     * @const
     */
    "451": "451",
    /**
     * value: "500"
     * @const
     */
    "500": "500",
    /**
     * value: "501"
     * @const
     */
    "501": "501",
    /**
     * value: "502"
     * @const
     */
    "502": "502",
    /**
     * value: "503"
     * @const
     */
    "503": "503",
    /**
     * value: "504"
     * @const
     */
    "504": "504",
    /**
     * value: "505"
     * @const
     */
    "505": "505",
    /**
     * value: "506"
     * @const
     */
    "506": "506",
    /**
     * value: "507"
     * @const
     */
    "507": "507",
    /**
     * value: "508"
     * @const
     */
    "508": "508",
    /**
     * value: "509"
     * @const
     */
    "509": "509",
    /**
     * value: "510"
     * @const
     */
    "510": "510",
    /**
     * value: "511"
     * @const
     */
    "511": "511"  };


  return exports;
}));


