# GripmockSdkJs.StubsApi

All URIs are relative to *https://raw.githubusercontent.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addStub**](StubsApi.md#addStub) | **POST** /stubs | Add a new stub to the store
[**batchStubsDelete**](StubsApi.md#batchStubsDelete) | **POST** /stubs/batchDelete | Deletes a pack by IDs
[**deleteStubByID**](StubsApi.md#deleteStubByID) | **DELETE** /stubs/{uuid} | Deletes stub by ID
[**listStubs**](StubsApi.md#listStubs) | **GET** /stubs | Getting a list of stubs
[**listUnusedStubs**](StubsApi.md#listUnusedStubs) | **GET** /stubs/unused | Getting a list of unused stubs
[**listUsedStubs**](StubsApi.md#listUsedStubs) | **GET** /stubs/used | Getting a list of used stubs
[**purgeStubs**](StubsApi.md#purgeStubs) | **DELETE** /stubs | Remove all stubs
[**searchStubs**](StubsApi.md#searchStubs) | **POST** /stubs/search | Stub storage search



## addStub

> AddStub200Response addStub(addStubRequest)

Add a new stub to the store

Add a new stub to the store

### Example

```javascript
import GripmockSdkJs from 'gripmock-sdk-js';

let apiInstance = new GripmockSdkJs.StubsApi();
let addStubRequest = new GripmockSdkJs.AddStubRequest(); // AddStubRequest | Create a new pet in the store
apiInstance.addStub(addStubRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addStubRequest** | [**AddStubRequest**](AddStubRequest.md)| Create a new pet in the store | 

### Return type

[**AddStub200Response**](AddStub200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## batchStubsDelete

> batchStubsDelete(requestBody)

Deletes a pack by IDs

Takes IDs as input and deletes them

### Example

```javascript
import GripmockSdkJs from 'gripmock-sdk-js';

let apiInstance = new GripmockSdkJs.StubsApi();
let requestBody = ["51c50050-ec27-4dae-a583-a32ca71a1dd5"]; // [String] | Create a new pet in the store
apiInstance.batchStubsDelete(requestBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | [**[String]**](String.md)| Create a new pet in the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deleteStubByID

> deleteStubByID(uuid)

Deletes stub by ID

The method removes the stub by ID

### Example

```javascript
import GripmockSdkJs from 'gripmock-sdk-js';

let apiInstance = new GripmockSdkJs.StubsApi();
let uuid = "uuid_example"; // String | ID of stub
apiInstance.deleteStubByID(uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| ID of stub | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## listStubs

> [Stub] listStubs()

Getting a list of stubs

The list of stubs is required to view all added stubs

### Example

```javascript
import GripmockSdkJs from 'gripmock-sdk-js';

let apiInstance = new GripmockSdkJs.StubsApi();
apiInstance.listStubs((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Stub]**](Stub.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUnusedStubs

> [Stub] listUnusedStubs()

Getting a list of unused stubs

The list is needed to quickly find unused stubs

### Example

```javascript
import GripmockSdkJs from 'gripmock-sdk-js';

let apiInstance = new GripmockSdkJs.StubsApi();
apiInstance.listUnusedStubs((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Stub]**](Stub.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUsedStubs

> [Stub] listUsedStubs()

Getting a list of used stubs

The list is needed to quickly find used stubs

### Example

```javascript
import GripmockSdkJs from 'gripmock-sdk-js';

let apiInstance = new GripmockSdkJs.StubsApi();
apiInstance.listUsedStubs((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Stub]**](Stub.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## purgeStubs

> purgeStubs()

Remove all stubs

Completely clears the stub storage

### Example

```javascript
import GripmockSdkJs from 'gripmock-sdk-js';

let apiInstance = new GripmockSdkJs.StubsApi();
apiInstance.purgeStubs((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## searchStubs

> SearchResponse searchStubs(searchRequest)

Stub storage search

Performs a search for a stub by the given conditions

### Example

```javascript
import GripmockSdkJs from 'gripmock-sdk-js';

let apiInstance = new GripmockSdkJs.StubsApi();
let searchRequest = new GripmockSdkJs.SearchRequest(); // SearchRequest | Description of filtering
apiInstance.searchStubs(searchRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchRequest** | [**SearchRequest**](SearchRequest.md)| Description of filtering | 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

