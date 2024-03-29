/**
 * GripMock API Schema
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import MessageOK from '../model/MessageOK';

/**
* Healthcheck service.
* @module api/HealthcheckApi
* @version 1.0.0
*/
export default class HealthcheckApi {

    /**
    * Constructs a new HealthcheckApi. 
    * @alias module:api/HealthcheckApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Liveness check
     * The test says that the service is alive and yet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MessageOK} and HTTP response
     */
    livenessWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MessageOK;
      return this.apiClient.callApi(
        '/health/liveness', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Liveness check
     * The test says that the service is alive and yet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MessageOK}
     */
    liveness() {
      return this.livenessWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Readiness check
     * The test indicates readiness to receive traffic
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MessageOK} and HTTP response
     */
    readinessWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MessageOK;
      return this.apiClient.callApi(
        '/health/readiness', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Readiness check
     * The test indicates readiness to receive traffic
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MessageOK}
     */
    readiness() {
      return this.readinessWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
