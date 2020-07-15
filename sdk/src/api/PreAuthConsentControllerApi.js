/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.210
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
    define(['ApiClient', 'model/ApiResponseOfAuthorisationRequestResponse', 'model/PreAuthorisationRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseOfAuthorisationRequestResponse'), require('../model/PreAuthorisationRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.PreAuthConsentControllerApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApiResponseOfAuthorisationRequestResponse, root.YapilyApi.PreAuthorisationRequest);
  }
}(this, function(ApiClient, ApiResponseOfAuthorisationRequestResponse, PreAuthorisationRequest) {
  'use strict';

  /**
   * PreAuthConsentController service.
   * @module api/PreAuthConsentControllerApi
   * @version 0.0.210
   */

  /**
   * Constructs a new PreAuthConsentControllerApi. 
   * @alias module:api/PreAuthConsentControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createPreAuthorisationUsingPOST operation.
     * @callback module:api/PreAuthConsentControllerApi~createPreAuthorisationUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfAuthorisationRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate request for user to pre authorise
     * @param {module:model/PreAuthorisationRequest} preAuthorisationRequest preAuthorisationRequest
     * @param {module:api/PreAuthConsentControllerApi~createPreAuthorisationUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfAuthorisationRequestResponse}
     */
    this.createPreAuthorisationUsingPOST = function(preAuthorisationRequest, callback) {
      var postBody = preAuthorisationRequest;
      // verify the required parameter 'preAuthorisationRequest' is set
      if (preAuthorisationRequest === undefined || preAuthorisationRequest === null) {
        throw new Error("Missing the required parameter 'preAuthorisationRequest' when calling createPreAuthorisationUsingPOST");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfAuthorisationRequestResponse;
      return this.apiClient.callApi(
        '/pre-auth-requests', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
