# GripmockSdk.StubsApi

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
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.StubsApi();
let addStubRequest = new GripmockSdk.AddStubRequest(); // AddStubRequest | Create a new pet in the store
apiInstance.addStub(addStubRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.StubsApi();
let requestBody = ["51c50050-ec27-4dae-a583-a32ca71a1dd5"]; // [String] | Create a new pet in the store
apiInstance.batchStubsDelete(requestBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.StubsApi();
let uuid = "uuid_example"; // String | ID of stub
apiInstance.deleteStubByID(uuid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.StubsApi();
apiInstance.listStubs().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.StubsApi();
apiInstance.listUnusedStubs().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.StubsApi();
apiInstance.listUsedStubs().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.StubsApi();
apiInstance.purgeStubs().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.StubsApi();
let searchRequest = new GripmockSdk.SearchRequest(); // SearchRequest | Description of filtering
apiInstance.searchStubs(searchRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

