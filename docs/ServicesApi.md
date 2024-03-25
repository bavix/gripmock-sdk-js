# GripmockSdk.ServicesApi

All URIs are relative to *https://raw.githubusercontent.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**serviceMethodsList**](ServicesApi.md#serviceMethodsList) | **GET** /services/{serviceID}/methods | Service methods
[**servicesList**](ServicesApi.md#servicesList) | **GET** /services | Services



## serviceMethodsList

> [Method] serviceMethodsList(serviceID)

Service methods

List of registered service methods

### Example

```javascript
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.ServicesApi();
let serviceID = "serviceID_example"; // String | ID of service
apiInstance.serviceMethodsList(serviceID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceID** | **String**| ID of service | 

### Return type

[**[Method]**](Method.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## servicesList

> [Service] servicesList()

Services

List of registered services

### Example

```javascript
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.ServicesApi();
apiInstance.servicesList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Service]**](Service.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

