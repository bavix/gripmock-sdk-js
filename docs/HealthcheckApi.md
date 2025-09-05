# GripmockSdk.HealthcheckApi

All URIs are relative to *https://raw.githubusercontent.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**liveness**](HealthcheckApi.md#liveness) | **GET** /health/liveness | Liveness check
[**readiness**](HealthcheckApi.md#readiness) | **GET** /health/readiness | Readiness check



## liveness

> MessageOK liveness()

Liveness check

This endpoint indicates that the service is alive and ready to handle requests

### Example

```javascript
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.HealthcheckApi();
apiInstance.liveness().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**MessageOK**](MessageOK.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readiness

> MessageOK readiness()

Readiness check

The test indicates readiness to receive traffic

### Example

```javascript
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.HealthcheckApi();
apiInstance.readiness().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**MessageOK**](MessageOK.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

