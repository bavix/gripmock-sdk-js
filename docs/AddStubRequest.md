# GripmockSdk.AddStubRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**service** | **String** |  | 
**method** | **String** |  | 
**priority** | **Number** | Priority of the stub. Higher priority stubs are matched first. | [optional] [default to 0]
**headers** | [**StubHeaders**](StubHeaders.md) |  | [optional] 
**input** | [**StubInput**](StubInput.md) |  | 
**inputs** | [**[StubInput]**](StubInput.md) | Inputs to match against. If multiple inputs are provided, the stub will be matched if any of the inputs match. | [optional] 
**output** | [**StubOutput**](StubOutput.md) |  | 


