# GripmockSdk.ServicesApi

All URIs are relative to *https://raw.githubusercontent.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteService**](ServicesApi.md#deleteService) | **DELETE** /services/{serviceID} | Remove service
[**serviceMethodsList**](ServicesApi.md#serviceMethodsList) | **GET** /services/{serviceID}/methods | Service methods
[**servicesList**](ServicesApi.md#servicesList) | **GET** /services | Services



## deleteService

> deleteService(serviceID)

Remove service

Removes a service added via POST /descriptors. Services from startup (proto path) cannot be removed.

### Example

```javascript
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.ServicesApi();
let serviceID = "serviceID_example"; // String | Full service name (e.g. helloworld.Greeter)
apiInstance.deleteService(serviceID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceID** | **String**| Full service name (e.g. helloworld.Greeter) | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


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

