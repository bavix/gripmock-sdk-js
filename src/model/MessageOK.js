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

import ApiClient from '../ApiClient';

/**
 * The MessageOK model module.
 * @module model/MessageOK
 * @version 1.0.0
 */
class MessageOK {
    /**
     * Constructs a new <code>MessageOK</code>.
     * @alias module:model/MessageOK
     * @param message {String} 
     * @param time {Date} 
     */
    constructor(message, time) { 
        
        MessageOK.initialize(this, message, time);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message, time) { 
        obj['message'] = message;
        obj['time'] = time;
    }

    /**
     * Constructs a <code>MessageOK</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageOK} obj Optional instance to populate.
     * @return {module:model/MessageOK} The populated <code>MessageOK</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageOK();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MessageOK</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MessageOK</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MessageOK.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}

MessageOK.RequiredProperties = ["message", "time"];

/**
 * @member {String} message
 */
MessageOK.prototype['message'] = undefined;

/**
 * @member {Date} time
 */
MessageOK.prototype['time'] = undefined;






export default MessageOK;

