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
 * The StubInput model module.
 * @module model/StubInput
 * @version 2.4.0
 */
class StubInput {
    /**
     * Constructs a new <code>StubInput</code>.
     * @alias module:model/StubInput
     */
    constructor() { 
        
        StubInput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StubInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StubInput} obj Optional instance to populate.
     * @return {module:model/StubInput} The populated <code>StubInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StubInput();

            if (data.hasOwnProperty('ignoreArrayOrder')) {
                obj['ignoreArrayOrder'] = ApiClient.convertToType(data['ignoreArrayOrder'], 'Boolean');
            }
            if (data.hasOwnProperty('equals')) {
                obj['equals'] = ApiClient.convertToType(data['equals'], {'String': Object});
            }
            if (data.hasOwnProperty('contains')) {
                obj['contains'] = ApiClient.convertToType(data['contains'], {'String': Object});
            }
            if (data.hasOwnProperty('matches')) {
                obj['matches'] = ApiClient.convertToType(data['matches'], {'String': Object});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StubInput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StubInput</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} ignoreArrayOrder
 * @default false
 */
StubInput.prototype['ignoreArrayOrder'] = false;

/**
 * @member {Object.<String, Object>} equals
 */
StubInput.prototype['equals'] = undefined;

/**
 * @member {Object.<String, Object>} contains
 */
StubInput.prototype['contains'] = undefined;

/**
 * @member {Object.<String, Object>} matches
 */
StubInput.prototype['matches'] = undefined;






export default StubInput;

