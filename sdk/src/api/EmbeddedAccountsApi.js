/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.350
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
    define(['ApiClient', 'model/AccountEmbeddedAuthorisationRequest', 'model/ApiResponseOfAuthorisationEmbeddedRequestResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccountEmbeddedAuthorisationRequest'), require('../model/ApiResponseOfAuthorisationEmbeddedRequestResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.EmbeddedAccountsApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.AccountEmbeddedAuthorisationRequest, root.YapilyApi.ApiResponseOfAuthorisationEmbeddedRequestResponse);
  }
}(this, function(ApiClient, AccountEmbeddedAuthorisationRequest, ApiResponseOfAuthorisationEmbeddedRequestResponse) {
  'use strict';

  /**
   * EmbeddedAccounts service.
   * @module api/EmbeddedAccountsApi
   * @version 0.0.350
   */

  /**
   * Constructs a new EmbeddedAccountsApi. 
   * @alias module:api/EmbeddedAccountsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the initiateEmbeddedAccountRequestUsingPOST operation.
     * @callback module:api/EmbeddedAccountsApi~initiateEmbeddedAccountRequestUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfAuthorisationEmbeddedRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate a new embedded account request for user to authorize
     * @param {module:model/AccountEmbeddedAuthorisationRequest} accountAuthRequest accountAuthRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.psuId PSU ID
     * @param {String} opts.psuCorporateId PSU ID CORPORATE
     * @param {String} opts.psuIpAddress PSU IP ADDRESS
     * @param {module:api/EmbeddedAccountsApi~initiateEmbeddedAccountRequestUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfAuthorisationEmbeddedRequestResponse}
     */
    this.initiateEmbeddedAccountRequestUsingPOST = function(accountAuthRequest, opts, callback) {
      opts = opts || {};
      var postBody = accountAuthRequest;
      // verify the required parameter 'accountAuthRequest' is set
      if (accountAuthRequest === undefined || accountAuthRequest === null) {
        throw new Error("Missing the required parameter 'accountAuthRequest' when calling initiateEmbeddedAccountRequestUsingPOST");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'psu-id': opts['psuId'],
        'psu-corporate-id': opts['psuCorporateId'],
        'psu-ip-address': opts['psuIpAddress']
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfAuthorisationEmbeddedRequestResponse;
      return this.apiClient.callApi(
        '/embedded-account-auth-requests', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEmbeddedAccountRequestUsingPUT operation.
     * @callback module:api/EmbeddedAccountsApi~updateEmbeddedAccountRequestUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfAuthorisationEmbeddedRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an embedded account request with SCA info
     * @param {String} consentId consentId
     * @param {module:model/AccountEmbeddedAuthorisationRequest} accountAuthRequest accountAuthRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.psuId PSU ID
     * @param {String} opts.psuCorporateId PSU ID CORPORATE
     * @param {String} opts.psuIpAddress PSU IP ADDRESS
     * @param {module:api/EmbeddedAccountsApi~updateEmbeddedAccountRequestUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfAuthorisationEmbeddedRequestResponse}
     */
    this.updateEmbeddedAccountRequestUsingPUT = function(consentId, accountAuthRequest, opts, callback) {
      opts = opts || {};
      var postBody = accountAuthRequest;
      // verify the required parameter 'consentId' is set
      if (consentId === undefined || consentId === null) {
        throw new Error("Missing the required parameter 'consentId' when calling updateEmbeddedAccountRequestUsingPUT");
      }
      // verify the required parameter 'accountAuthRequest' is set
      if (accountAuthRequest === undefined || accountAuthRequest === null) {
        throw new Error("Missing the required parameter 'accountAuthRequest' when calling updateEmbeddedAccountRequestUsingPUT");
      }

      var pathParams = {
        'consentId': consentId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'psu-id': opts['psuId'],
        'psu-corporate-id': opts['psuCorporateId'],
        'psu-ip-address': opts['psuIpAddress']
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfAuthorisationEmbeddedRequestResponse;
      return this.apiClient.callApi(
        '/embedded-account-auth-requests/{consentId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
