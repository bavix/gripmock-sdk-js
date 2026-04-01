# GripmockSdk.ProtoFieldSchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**jsonName** | **String** |  | 
**number** | **Number** |  | 
**kind** | **String** |  | 
**cardinality** | **String** |  | 
**typeName** | **String** | Referenced protobuf type for message/enum fields | [optional] 
**oneof** | **String** | Oneof group name if field belongs to oneof | [optional] 
**enumValues** | **[String]** |  | [optional] 
**map** | **Boolean** |  | [optional] 
**mapKeyKind** | **String** |  | [optional] 
**mapValueKind** | **String** |  | [optional] 
**mapValueTypeName** | **String** |  | [optional] 
**message** | [**ProtoMessageSchema**](ProtoMessageSchema.md) |  | [optional] 
**mapValueMessage** | [**ProtoMessageSchema**](ProtoMessageSchema.md) |  | [optional] 



## Enum: CardinalityEnum


* `optional` (value: `"optional"`)

* `required` (value: `"required"`)

* `repeated` (value: `"repeated"`)




