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
    define(['ApiClient', 'model/ApiResponseOfListOfBeneficiary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseOfListOfBeneficiary'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.BeneficiariesApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApiResponseOfListOfBeneficiary);
  }
}(this, function(ApiClient, ApiResponseOfListOfBeneficiary) {
  'use strict';

  /**
   * Beneficiaries service.
   * @module api/BeneficiariesApi
   * @version 0.0.348
   */

  /**
   * Constructs a new BeneficiariesApi. 
   * @alias module:api/BeneficiariesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getBeneficiariesUsingGET operation.
     * @callback module:api/BeneficiariesApi~getBeneficiariesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfListOfBeneficiary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get beneficiaries
     * @param {String} accountId Account Id
     * @param {String} consent Consent Token
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion Api Version
     * @param {module:api/BeneficiariesApi~getBeneficiariesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfListOfBeneficiary}
     */
    this.getBeneficiariesUsingGET = function(accountId, consent, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBeneficiariesUsingGET");
      }
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getBeneficiariesUsingGET");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-yapily-api-version': opts['xYapilyApiVersion'],
        'consent': consent
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfListOfBeneficiary;
      return this.apiClient.callApi(
        '/accounts/{accountId}/beneficiaries', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
