/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.345
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
    define(['ApiClient', 'model/Application'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Application'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ApplicationsApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.Application);
  }
}(this, function(ApiClient, Application) {
  'use strict';

  /**
   * Applications service.
   * @module api/ApplicationsApi
   * @version 0.0.345
   */

  /**
   * Constructs a new ApplicationsApi. 
   * @alias module:api/ApplicationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getApplicationMeUsingGET operation.
     * @callback module:api/ApplicationsApi~getApplicationMeUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Application} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the details of the application that owns the request credentials
     * @param {Object} opts Optional parameters
     * @param {String} opts.xYapilyApiVersion Api Version
     * @param {module:api/ApplicationsApi~getApplicationMeUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Application}
     */
    this.getApplicationMeUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-yapily-api-version': opts['xYapilyApiVersion']
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Application;
      return this.apiClient.callApi(
        '/me', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
