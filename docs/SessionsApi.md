# GripmockSdk.SessionsApi

All URIs are relative to *https://raw.githubusercontent.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sessionsList**](SessionsApi.md#sessionsList) | **GET** /sessions | Session options



## sessionsList

> Sessions sessionsList()

Session options

Returns distinct non-empty session IDs available in current stubs.

### Example

```javascript
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.SessionsApi();
apiInstance.sessionsList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Sessions**](Sessions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

