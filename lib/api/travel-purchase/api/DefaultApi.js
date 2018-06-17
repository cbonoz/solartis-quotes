/**
 * Solartis Policy Issuance API for ILT
 * To Policy Issuance for Leisure Travel from Solartis Rate API.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorModel', 'model/Request', 'model/SuccessResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorModel'), require('../model/Request'), require('../model/SuccessResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SolartisPolicyIssuanceApiForIlt) {
      root.SolartisPolicyIssuanceApiForIlt = {};
    }
    root.SolartisPolicyIssuanceApiForIlt.DefaultApi = factory(root.SolartisPolicyIssuanceApiForIlt.ApiClient, root.SolartisPolicyIssuanceApiForIlt.ErrorModel, root.SolartisPolicyIssuanceApiForIlt.Request, root.SolartisPolicyIssuanceApiForIlt.SuccessResponse);
  }
}(this, function(ApiClient, ErrorModel, Request, SuccessResponse) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the policyissuance operation.
     * @callback module:api/DefaultApi~policyissuanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Policy Issuance for Leisure Travel
     * @param {String} token Authentication Token
     * @param {String} contentType Content Type
     * @param {String} eventName EventName
     * @param {module:model/Request} request For request
     * @param {module:api/DefaultApi~policyissuanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    this.policyissuance = function(token, contentType, eventName, request, callback) {
      var postBody = request;

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling policyissuance");
      }

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling policyissuance");
      }

      // verify the required parameter 'eventName' is set
      if (eventName === undefined || eventName === null) {
        throw new Error("Missing the required parameter 'eventName' when calling policyissuance");
      }

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling policyissuance");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Token': token,
        'Content-Type': contentType,
        'EventName': eventName
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SuccessResponse;

      return this.apiClient.callApi(
        '/FireEventV2', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));