# GripmockSdk.HistoryApi

All URIs are relative to *https://raw.githubusercontent.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listHistory**](HistoryApi.md#listHistory) | **GET** /history | Get call history



## listHistory

> [CallRecord] listHistory()

Get call history

Returns recorded gRPC calls (when history is enabled)

### Example

```javascript
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.HistoryApi();
apiInstance.listHistory().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[CallRecord]**](CallRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

