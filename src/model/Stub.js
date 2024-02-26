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
import StubHeaders from './StubHeaders';
import StubInput from './StubInput';
import StubOutput from './StubOutput';

/**
 * The Stub model module.
 * @module model/Stub
 * @version 1.0.0
 */
class Stub {
    /**
     * Constructs a new <code>Stub</code>.
     * @alias module:model/Stub
     * @param service {String} 
     * @param method {String} 
     * @param input {module:model/StubInput} 
     * @param output {module:model/StubOutput} 
     */
    constructor(service, method, input, output) { 
        
        Stub.initialize(this, service, method, input, output);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, service, method, input, output) { 
        obj['service'] = service;
        obj['method'] = method;
        obj['input'] = input;
        obj['output'] = output;
    }

    /**
     * Constructs a <code>Stub</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Stub} obj Optional instance to populate.
     * @return {module:model/Stub} The populated <code>Stub</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Stub();

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
                obj['headers'] = StubHeaders.constructFromObject(data['headers']);
            }
            if (data.hasOwnProperty('input')) {
                obj['input'] = StubInput.constructFromObject(data['input']);
            }
            if (data.hasOwnProperty('output')) {
                obj['output'] = StubOutput.constructFromObject(data['output']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Stub</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Stub</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Stub.RequiredProperties) {
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
        // validate the optional field `headers`
        if (data['headers']) { // data not null
          StubHeaders.validateJSON(data['headers']);
        }
        // validate the optional field `input`
        if (data['input']) { // data not null
          StubInput.validateJSON(data['input']);
        }
        // validate the optional field `output`
        if (data['output']) { // data not null
          StubOutput.validateJSON(data['output']);
        }

        return true;
    }


}

Stub.RequiredProperties = ["service", "method", "input", "output"];

/**
 * @member {String} id
 */
Stub.prototype['id'] = undefined;

/**
 * @member {String} service
 */
Stub.prototype['service'] = undefined;

/**
 * @member {String} method
 */
Stub.prototype['method'] = undefined;

/**
 * @member {module:model/StubHeaders} headers
 */
Stub.prototype['headers'] = undefined;

/**
 * @member {module:model/StubInput} input
 */
Stub.prototype['input'] = undefined;

/**
 * @member {module:model/StubOutput} output
 */
Stub.prototype['output'] = undefined;






export default Stub;

