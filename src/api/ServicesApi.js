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
import Method from '../model/Method';
import Service from '../model/Service';

/**
* Services service.
* @module api/ServicesApi
* @version 1.0.0
*/
export default class ServicesApi {

    /**
    * Constructs a new ServicesApi. 
    * @alias module:api/ServicesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Service methods
     * List of registered service methods
     * @param {String} serviceID ID of service
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Method>} and HTTP response
     */
    serviceMethodsListWithHttpInfo(serviceID) {
      let postBody = null;
      // verify the required parameter 'serviceID' is set
      if (serviceID === undefined || serviceID === null) {
        throw new Error("Missing the required parameter 'serviceID' when calling serviceMethodsList");
      }

      let pathParams = {
        'serviceID': serviceID
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
      let returnType = [Method];
      return this.apiClient.callApi(
        '/services/{serviceID}/methods', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Service methods
     * List of registered service methods
     * @param {String} serviceID ID of service
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Method>}
     */
    serviceMethodsList(serviceID) {
      return this.serviceMethodsListWithHttpInfo(serviceID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Services
     * List of registered services
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Service>} and HTTP response
     */
    servicesListWithHttpInfo() {
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
      let returnType = [Service];
      return this.apiClient.callApi(
        '/services', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Services
     * List of registered services
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Service>}
     */
    servicesList() {
      return this.servicesListWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
