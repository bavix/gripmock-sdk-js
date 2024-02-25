/**
 * GripMock API Schema
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SearchRequest model module.
 * @module model/SearchRequest
 * @version 2.4.0
 */
class SearchRequest {
    /**
     * Constructs a new <code>SearchRequest</code>.
     * @alias module:model/SearchRequest
     * @param service {String} 
     * @param method {String} 
     * @param data {Object.<String, Object>} 
     */
    constructor(service, method, data) { 
        
        SearchRequest.initialize(this, service, method, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, service, method, data) { 
        obj['service'] = service;
        obj['method'] = method;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>SearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchRequest} obj Optional instance to populate.
     * @return {module:model/SearchRequest} The populated <code>SearchRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiClient.convertToType(data['service'], 'String');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], {'String': 'String'});
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], {'String': Object});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SearchRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['service'] && !(typeof data['service'] === 'string' || data['service'] instanceof String)) {
            throw new Error("Expected the field `service` to be a primitive type in the JSON string but got " + data['service']);
        }
        // ensure the json data is a string
        if (data['method'] && !(typeof data['method'] === 'string' || data['method'] instanceof String)) {
            throw new Error("Expected the field `method` to be a primitive type in the JSON string but got " + data['method']);
        }

        return true;
    }


}

SearchRequest.RequiredProperties = ["service", "method", "data"];

/**
 * @member {String} id
 */
SearchRequest.prototype['id'] = undefined;

/**
 * @member {String} service
 */
SearchRequest.prototype['service'] = undefined;

/**
 * @member {String} method
 */
SearchRequest.prototype['method'] = undefined;

/**
 * @member {Object.<String, String>} headers
 */
SearchRequest.prototype['headers'] = undefined;

/**
 * @member {Object.<String, Object>} data
 */
SearchRequest.prototype['data'] = undefined;






export default SearchRequest;

