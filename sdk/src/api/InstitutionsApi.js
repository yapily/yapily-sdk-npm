/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.263
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
    define(['ApiClient', 'model/ApiListResponseOfFeatureDetails', 'model/ApiListResponseOfInstitution', 'model/Institution'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiListResponseOfFeatureDetails'), require('../model/ApiListResponseOfInstitution'), require('../model/Institution'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.InstitutionsApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApiListResponseOfFeatureDetails, root.YapilyApi.ApiListResponseOfInstitution, root.YapilyApi.Institution);
  }
}(this, function(ApiClient, ApiListResponseOfFeatureDetails, ApiListResponseOfInstitution, Institution) {
  'use strict';

  /**
   * Institutions service.
   * @module api/InstitutionsApi
   * @version 0.0.263
   */

  /**
   * Constructs a new InstitutionsApi. 
   * @alias module:api/InstitutionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getFeatureDetailsUsingGET operation.
     * @callback module:api/InstitutionsApi~getFeatureDetailsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponseOfFeatureDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve details for Yapily's institution features
     * @param {module:api/InstitutionsApi~getFeatureDetailsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfFeatureDetails}
     */
    this.getFeatureDetailsUsingGET = function(callback) {
      var postBody = null;

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
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiListResponseOfFeatureDetails;
      return this.apiClient.callApi(
        '/features', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getInstitutionUsingGET operation.
     * @callback module:api/InstitutionsApi~getInstitutionUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Institution} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves details of a specific institution available in Yapily
     * @param {String} institutionId institutionId
     * @param {module:api/InstitutionsApi~getInstitutionUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Institution}
     */
    this.getInstitutionUsingGET = function(institutionId, callback) {
      var postBody = null;
      // verify the required parameter 'institutionId' is set
      if (institutionId === undefined || institutionId === null) {
        throw new Error("Missing the required parameter 'institutionId' when calling getInstitutionUsingGET");
      }

      var pathParams = {
        'institutionId': institutionId
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
      var returnType = Institution;
      return this.apiClient.callApi(
        '/institutions/{institutionId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getInstitutionsUsingGET operation.
     * @callback module:api/InstitutionsApi~getInstitutionsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponseOfInstitution} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the list of institutions available in Yapily
     * @param {module:api/InstitutionsApi~getInstitutionsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfInstitution}
     */
    this.getInstitutionsUsingGET = function(callback) {
      var postBody = null;

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
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiListResponseOfInstitution;
      return this.apiClient.callApi(
        '/institutions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
