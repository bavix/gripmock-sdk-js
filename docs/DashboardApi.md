# GripmockSdk.DashboardApi

All URIs are relative to *https://raw.githubusercontent.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dashboard**](DashboardApi.md#dashboard) | **GET** /dashboard | Dashboard aggregate payload
[**dashboardInfo**](DashboardApi.md#dashboardInfo) | **GET** /dashboard/info | Dashboard runtime and build info
[**dashboardOverview**](DashboardApi.md#dashboardOverview) | **GET** /dashboard/overview | Dashboard overview metrics



## dashboard

> Dashboard dashboard()

Dashboard aggregate payload

Returns combined dashboard counters, runtime metadata, and process state in one response.

### Example

```javascript
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.DashboardApi();
apiInstance.dashboard().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dashboardInfo

> DashboardInfo dashboardInfo()

Dashboard runtime and build info

Returns GripMock build metadata and current runtime process information.

### Example

```javascript
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.DashboardApi();
apiInstance.dashboardInfo().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**DashboardInfo**](DashboardInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dashboardOverview

> DashboardOverview dashboardOverview()

Dashboard overview metrics

Returns lightweight aggregate counters for admin UI dashboard.

### Example

```javascript
import GripmockSdk from '@bavix/gripmock-sdk';

let apiInstance = new GripmockSdk.DashboardApi();
apiInstance.dashboardOverview().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**DashboardOverview**](DashboardOverview.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

