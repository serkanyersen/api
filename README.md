# API
Basic apis for the experiments

## Endpoints
url | method | description
----|--------|------------
/v1/sass | POST | send scss code in `code` property and receive compiled css, you can also send sass configuration as additional properties. such as, `&sass=true` lets you use indented format instead of scss or `&outputStyle=compressed` will get you compressed verison of sass output
/v1/sass | GET | send a file url in `file` property and receive compiled css, you can also send sass configuration as additional properties same as `POST` properties
/v1/coffee | POST | send coffeeScript code in `code` property and receive compiled JS. you can also add `&bare=true` to get unwrapped version of the output
/v1/coffee | GET | send a file url in `file` property and receive compiled JS. you can also add `&bare=true` to get unwrapped version of the output
