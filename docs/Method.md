# GripmockSdk.Method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**name** | **String** |  | 
**methodType** | **String** | gRPC method interaction type | 
**requestType** | **String** | Fully-qualified protobuf request message type | [optional] 
**responseType** | **String** | Fully-qualified protobuf response message type | [optional] 
**requestSchema** | [**ProtoMessageSchema**](ProtoMessageSchema.md) |  | [optional] 
**responseSchema** | [**ProtoMessageSchema**](ProtoMessageSchema.md) |  | [optional] 
**clientStreaming** | **Boolean** | Indicates client-side streaming method | [optional] 
**serverStreaming** | **Boolean** | Indicates server-side streaming method | [optional] 



## Enum: MethodTypeEnum


* `unary` (value: `"unary"`)

* `client_streaming` (value: `"client_streaming"`)

* `server_streaming` (value: `"server_streaming"`)

* `bidi_streaming` (value: `"bidi_streaming"`)




