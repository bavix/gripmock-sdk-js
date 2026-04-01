# GripmockSdk.McpApi

All URIs are relative to *https://raw.githubusercontent.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mcpInfo**](McpApi.md#mcpInfo) | **GET** /mcp | MCP transport metadata
[**mcpMessage**](McpApi.md#mcpMessage) | **POST** /mcp | MCP JSON-RPC endpoint



## mcpInfo

> McpInfoResponse mcpInfo()

MCP transport metadata

Returns MCP server metadata, supported protocol versions and transport details.

### Example

```javascript
import GripmockSdk from '@bavix/@bavix/@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.McpApi();
apiInstance.mcpInfo().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**McpInfoResponse**](McpInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mcpMessage

> McpResponse mcpMessage(mcpRequest)

MCP JSON-RPC endpoint

Accepts MCP JSON-RPC requests (&#x60;initialize&#x60;, &#x60;ping&#x60;, &#x60;tools/list&#x60;, &#x60;tools/call&#x60;) and returns JSON-RPC responses.

### Example

```javascript
import GripmockSdk from '@bavix/@bavix/@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.McpApi();
let mcpRequest = new GripmockSdk.McpRequest(); // McpRequest | 
apiInstance.mcpMessage(mcpRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mcpRequest** | [**McpRequest**](McpRequest.md)|  | 

### Return type

[**McpResponse**](McpResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

