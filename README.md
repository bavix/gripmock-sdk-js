# gripmock-sdk-js

GripmockSdkJs - JavaScript client for gripmock-sdk-js
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.4.0
- Package version: 2.4.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install gripmock-sdk-js --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your gripmock-sdk-js from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var GripmockSdkJs = require('gripmock-sdk-js');


var api = new GripmockSdkJs.HealthcheckApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.liveness(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://raw.githubusercontent.com/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*GripmockSdkJs.HealthcheckApi* | [**liveness**](docs/HealthcheckApi.md#liveness) | **GET** /health/liveness | Liveness check
*GripmockSdkJs.HealthcheckApi* | [**readiness**](docs/HealthcheckApi.md#readiness) | **GET** /health/readiness | Readiness check
*GripmockSdkJs.StubsApi* | [**addStub**](docs/StubsApi.md#addStub) | **POST** /stubs | Add a new stub to the store
*GripmockSdkJs.StubsApi* | [**batchStubsDelete**](docs/StubsApi.md#batchStubsDelete) | **POST** /stubs/batchDelete | Deletes a pack by IDs
*GripmockSdkJs.StubsApi* | [**deleteStubByID**](docs/StubsApi.md#deleteStubByID) | **DELETE** /stubs/{uuid} | Deletes stub by ID
*GripmockSdkJs.StubsApi* | [**listStubs**](docs/StubsApi.md#listStubs) | **GET** /stubs | Getting a list of stubs
*GripmockSdkJs.StubsApi* | [**listUnusedStubs**](docs/StubsApi.md#listUnusedStubs) | **GET** /stubs/unused | Getting a list of unused stubs
*GripmockSdkJs.StubsApi* | [**listUsedStubs**](docs/StubsApi.md#listUsedStubs) | **GET** /stubs/used | Getting a list of used stubs
*GripmockSdkJs.StubsApi* | [**purgeStubs**](docs/StubsApi.md#purgeStubs) | **DELETE** /stubs | Remove all stubs
*GripmockSdkJs.StubsApi* | [**searchStubs**](docs/StubsApi.md#searchStubs) | **POST** /stubs/search | Stub storage search


## Documentation for Models

 - [GripmockSdkJs.AddStub200Response](docs/AddStub200Response.md)
 - [GripmockSdkJs.AddStubRequest](docs/AddStubRequest.md)
 - [GripmockSdkJs.MessageOK](docs/MessageOK.md)
 - [GripmockSdkJs.SearchRequest](docs/SearchRequest.md)
 - [GripmockSdkJs.SearchResponse](docs/SearchResponse.md)
 - [GripmockSdkJs.Stub](docs/Stub.md)
 - [GripmockSdkJs.StubHeaders](docs/StubHeaders.md)
 - [GripmockSdkJs.StubInput](docs/StubInput.md)
 - [GripmockSdkJs.StubOutput](docs/StubOutput.md)


## Documentation for Authorization

Endpoints do not require authorization.

