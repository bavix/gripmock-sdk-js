# GripmockSdk.CallRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | **String** |  | [optional] 
**method** | **String** |  | [optional] 
**session** | **String** | Session ID (empty &#x3D; global) | [optional] 
**stubId** | **String** | Stub identifier | [optional] 
**timestamp** | **Date** |  | [optional] 
**request** | **{String: Object}** | Deprecated: use requests for streaming calls | [optional] 
**requests** | **[{String: Object}]** | Request messages for streaming calls (client stream, bidi stream) | [optional] 
**response** | **{String: Object}** | Deprecated: use responses for streaming calls | [optional] 
**responses** | **[{String: Object}]** | Response messages for streaming calls (server stream, bidi stream) | [optional] 
**code** | **Number** | gRPC status code (e.g., 0 for OK, 5 for NotFound) | [optional] 
**error** | **String** |  | [optional] 


