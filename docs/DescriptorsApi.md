# GripmockSdk.DescriptorsApi

All URIs are relative to *https://raw.githubusercontent.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDescriptors**](DescriptorsApi.md#addDescriptors) | **POST** /descriptors | Upload FileDescriptorSet
[**listDescriptors**](DescriptorsApi.md#listDescriptors) | **GET** /descriptors | List service IDs from REST-added descriptors



## addDescriptors

> AddDescriptorsResponse addDescriptors(body)

Upload FileDescriptorSet

Accepts binary Protocol Buffers FileDescriptorSet. Registers descriptors for dynamic service discovery. Returns service IDs for later removal via DELETE /services/{serviceID}.

### Example

```javascript
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.DescriptorsApi();
let body = "/path/to/file"; // File | 
apiInstance.addDescriptors(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **File**|  | 

### Return type

[**AddDescriptorsResponse**](AddDescriptorsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json


## listDescriptors

> DescriptorServiceIDs listDescriptors()

List service IDs from REST-added descriptors

Returns service IDs (e.g. helloworld.Greeter) added via POST /descriptors. Use DELETE /services/{serviceID} to remove.

### Example

```javascript
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.DescriptorsApi();
apiInstance.listDescriptors().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**DescriptorServiceIDs**](DescriptorServiceIDs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

