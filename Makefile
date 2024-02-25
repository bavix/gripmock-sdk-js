gen-client:
	# https://github.com/OpenAPITools/openapi-generator
	openapi-generator generate -i https://raw.githubusercontent.com/bavix/gripmock-openapi/master/api.yaml -g javascript -o ./generated/ -c config.yaml
