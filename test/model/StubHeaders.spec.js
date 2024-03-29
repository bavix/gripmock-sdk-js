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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GripmockSdkJs);
  }
}(this, function(expect, GripmockSdkJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GripmockSdkJs.StubHeaders();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('StubHeaders', function() {
    it('should create an instance of StubHeaders', function() {
      // uncomment below and update the code to test StubHeaders
      //var instance = new GripmockSdkJs.StubHeaders();
      //expect(instance).to.be.a(GripmockSdkJs.StubHeaders);
    });

    it('should have the property equals (base name: "equals")', function() {
      // uncomment below and update the code to test the property equals
      //var instance = new GripmockSdkJs.StubHeaders();
      //expect(instance).to.be();
    });

    it('should have the property contains (base name: "contains")', function() {
      // uncomment below and update the code to test the property contains
      //var instance = new GripmockSdkJs.StubHeaders();
      //expect(instance).to.be();
    });

    it('should have the property matches (base name: "matches")', function() {
      // uncomment below and update the code to test the property matches
      //var instance = new GripmockSdkJs.StubHeaders();
      //expect(instance).to.be();
    });

  });

}));
