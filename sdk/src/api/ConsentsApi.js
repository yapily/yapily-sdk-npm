/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.310
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
    define(['ApiClient', 'model/ApiListResponseOfConsent', 'model/ApiResponseOfAuthorisationRequestResponse', 'model/ApiResponseOfConsent', 'model/ApiResponseOfConsentDeleteResponse', 'model/Consent', 'model/ConsentAuthCodeRequest', 'model/CreateConsentAccessToken', 'model/OneTimeTokenRequest', 'model/PreAuthorisationRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiListResponseOfConsent'), require('../model/ApiResponseOfAuthorisationRequestResponse'), require('../model/ApiResponseOfConsent'), require('../model/ApiResponseOfConsentDeleteResponse'), require('../model/Consent'), require('../model/ConsentAuthCodeRequest'), require('../model/CreateConsentAccessToken'), require('../model/OneTimeTokenRequest'), require('../model/PreAuthorisationRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ConsentsApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApiListResponseOfConsent, root.YapilyApi.ApiResponseOfAuthorisationRequestResponse, root.YapilyApi.ApiResponseOfConsent, root.YapilyApi.ApiResponseOfConsentDeleteResponse, root.YapilyApi.Consent, root.YapilyApi.ConsentAuthCodeRequest, root.YapilyApi.CreateConsentAccessToken, root.YapilyApi.OneTimeTokenRequest, root.YapilyApi.PreAuthorisationRequest);
  }
}(this, function(ApiClient, ApiListResponseOfConsent, ApiResponseOfAuthorisationRequestResponse, ApiResponseOfConsent, ApiResponseOfConsentDeleteResponse, Consent, ConsentAuthCodeRequest, CreateConsentAccessToken, OneTimeTokenRequest, PreAuthorisationRequest) {
  'use strict';

  /**
   * Consents service.
   * @module api/ConsentsApi
   * @version 0.0.310
   */

  /**
   * Constructs a new ConsentsApi. 
   * @alias module:api/ConsentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addConsentUsingPOST operation.
     * @callback module:api/ConsentsApi~addConsentUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Consent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post consent
     * @param {String} userUuid userUuid
     * @param {module:model/CreateConsentAccessToken} createConsentAccessToken createConsentAccessToken
     * @param {module:api/ConsentsApi~addConsentUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Consent}
     */
    this.addConsentUsingPOST = function(userUuid, createConsentAccessToken, callback) {
      var postBody = createConsentAccessToken;
      // verify the required parameter 'userUuid' is set
      if (userUuid === undefined || userUuid === null) {
        throw new Error("Missing the required parameter 'userUuid' when calling addConsentUsingPOST");
      }
      // verify the required parameter 'createConsentAccessToken' is set
      if (createConsentAccessToken === undefined || createConsentAccessToken === null) {
        throw new Error("Missing the required parameter 'createConsentAccessToken' when calling addConsentUsingPOST");
      }

      var pathParams = {
        'userUuid': userUuid
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Consent;
      return this.apiClient.callApi(
        '/users/{userUuid}/consents', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createConsentWithCodeUsingPOST operation.
     * @callback module:api/ConsentsApi~createConsentWithCodeUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Consent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post auth-code and auth-state
     * @param {module:model/ConsentAuthCodeRequest} consentByAuthCode consentByAuthCode
     * @param {module:api/ConsentsApi~createConsentWithCodeUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Consent}
     */
    this.createConsentWithCodeUsingPOST = function(consentByAuthCode, callback) {
      var postBody = consentByAuthCode;
      // verify the required parameter 'consentByAuthCode' is set
      if (consentByAuthCode === undefined || consentByAuthCode === null) {
        throw new Error("Missing the required parameter 'consentByAuthCode' when calling createConsentWithCodeUsingPOST");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Consent;
      return this.apiClient.callApi(
        '/consent-auth-code', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createPreAuthorisationRequestUsingPOST operation.
     * @callback module:api/ConsentsApi~createPreAuthorisationRequestUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfAuthorisationRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate request for user to pre authorise
     * @param {module:model/PreAuthorisationRequest} preAuthorisationRequest preAuthorisationRequest
     * @param {module:api/ConsentsApi~createPreAuthorisationRequestUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfAuthorisationRequestResponse}
     */
    this.createPreAuthorisationRequestUsingPOST = function(preAuthorisationRequest, callback) {
      var postBody = preAuthorisationRequest;
      // verify the required parameter 'preAuthorisationRequest' is set
      if (preAuthorisationRequest === undefined || preAuthorisationRequest === null) {
        throw new Error("Missing the required parameter 'preAuthorisationRequest' when calling createPreAuthorisationRequestUsingPOST");
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

    /**
     * Callback function to receive the result of the deleteUsingDELETE operation.
     * @callback module:api/ConsentsApi~deleteUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfConsentDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete consent
     * @param {String} consentId consentId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.forceDelete forceDelete (default to true)
     * @param {module:api/ConsentsApi~deleteUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfConsentDeleteResponse}
     */
    this.deleteUsingDELETE = function(consentId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'consentId' is set
      if (consentId === undefined || consentId === null) {
        throw new Error("Missing the required parameter 'consentId' when calling deleteUsingDELETE");
      }

      var pathParams = {
        'consentId': consentId
      };
      var queryParams = {
        'forceDelete': opts['forceDelete'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfConsentDeleteResponse;
      return this.apiClient.callApi(
        '/consents/{consentId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConsentByIdUsingGET operation.
     * @callback module:api/ConsentsApi~getConsentByIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfConsent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get consent
     * @param {String} consentId consentId
     * @param {module:api/ConsentsApi~getConsentByIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfConsent}
     */
    this.getConsentByIdUsingGET = function(consentId, callback) {
      var postBody = null;
      // verify the required parameter 'consentId' is set
      if (consentId === undefined || consentId === null) {
        throw new Error("Missing the required parameter 'consentId' when calling getConsentByIdUsingGET");
      }

      var pathParams = {
        'consentId': consentId
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
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfConsent;
      return this.apiClient.callApi(
        '/consents/{consentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConsentBySingleAccessConsentUsingPOST operation.
     * @callback module:api/ConsentsApi~getConsentBySingleAccessConsentUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Consent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post one time token
     * @param {module:model/OneTimeTokenRequest} oneTimeToken oneTimeToken
     * @param {module:api/ConsentsApi~getConsentBySingleAccessConsentUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Consent}
     */
    this.getConsentBySingleAccessConsentUsingPOST = function(oneTimeToken, callback) {
      var postBody = oneTimeToken;
      // verify the required parameter 'oneTimeToken' is set
      if (oneTimeToken === undefined || oneTimeToken === null) {
        throw new Error("Missing the required parameter 'oneTimeToken' when calling getConsentBySingleAccessConsentUsingPOST");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Consent;
      return this.apiClient.callApi(
        '/consent-one-time-token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConsentsUsingGET operation.
     * @callback module:api/ConsentsApi~getConsentsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponseOfConsent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get consents sorted by creation date
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterApplicationUserId Filter consents by your application user Id (applicationUserId)
     * @param {Array.<String>} opts.filterUserUuid Filter consents by Yapily user Id (userUuid)
     * @param {Array.<String>} opts.filterInstitution Use this parameter to filter consent by institution, using the Yapily institution Id
     * @param {Array.<String>} opts.filterStatus Use this parameter to filter consent by status
     * @param {String} opts.from Use this parameter to filter consents created after the date specified
     * @param {String} opts.before Use this parameter to filter consents created before the date specified
     * @param {Number} opts.limit Use this parameter to limit consent results, max limit is 20
     * @param {Number} opts.offset Use this parameter to specify the offset of the results (default to 0)
     * @param {module:api/ConsentsApi~getConsentsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfConsent}
     */
    this.getConsentsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'before': opts['before'],
        'limit': opts['limit'],
        'offset': opts['offset'],
      };
      var collectionQueryParams = {
        'filter[applicationUserId]': {
          value: opts['filterApplicationUserId'],
          collectionFormat: 'multi'
        },
        'filter[userUuid]': {
          value: opts['filterUserUuid'],
          collectionFormat: 'multi'
        },
        'filter[institution]': {
          value: opts['filterInstitution'],
          collectionFormat: 'multi'
        },
        'filter[status]': {
          value: opts['filterStatus'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiListResponseOfConsent;
      return this.apiClient.callApi(
        '/consents', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserConsentsUsingGET operation.
     * @callback module:api/ConsentsApi~getUserConsentsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Consent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get latest user consents
     * @param {String} userUuid userUuid
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterInstitution Use this parameter to filter consent by institution, using the Yapily institution Id. This replaces the deprecated `institutionId` query param.
     * @param {Number} opts.limit Use this parameter to limit consent results, max limit is 20
     * @param {module:api/ConsentsApi~getUserConsentsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Consent>}
     */
    this.getUserConsentsUsingGET = function(userUuid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userUuid' is set
      if (userUuid === undefined || userUuid === null) {
        throw new Error("Missing the required parameter 'userUuid' when calling getUserConsentsUsingGET");
      }

      var pathParams = {
        'userUuid': userUuid
      };
      var queryParams = {
        'filter[institution]': opts['filterInstitution'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = [Consent];
      return this.apiClient.callApi(
        '/users/{userUuid}/consents', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
