# GripmockSdk.VerifyApi

All URIs are relative to *https://raw.githubusercontent.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**verifyCalls**](VerifyApi.md#verifyCalls) | **POST** /verify | Verify call counts



## verifyCalls

> MessageOK verifyCalls(verifyRequest)

Verify call counts

Asserts that a method was called a specified number of times

### Example

```javascript
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.VerifyApi();
let verifyRequest = new GripmockSdk.VerifyRequest(); // VerifyRequest | 
apiInstance.verifyCalls(verifyRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifyRequest** | [**VerifyRequest**](VerifyRequest.md)|  | 

### Return type

[**MessageOK**](MessageOK.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

