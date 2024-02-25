# GripmockSdkJs.HealthcheckApi

All URIs are relative to *https://raw.githubusercontent.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**liveness**](HealthcheckApi.md#liveness) | **GET** /health/liveness | Liveness check
[**readiness**](HealthcheckApi.md#readiness) | **GET** /health/readiness | Readiness check



## liveness

> MessageOK liveness()

Liveness check

The test says that the service is alive and yet

### Example

```javascript
import GripmockSdkJs from 'gripmock-sdk-js';

let apiInstance = new GripmockSdkJs.HealthcheckApi();
apiInstance.liveness((error, data, response) => {
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
import GripmockSdkJs from 'gripmock-sdk-js';

let apiInstance = new GripmockSdkJs.HealthcheckApi();
apiInstance.readiness((error, data, response) => {
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

[**MessageOK**](MessageOK.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

