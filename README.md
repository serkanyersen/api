# API
Basic apis for the experiments

## Endpoints
url | method | description
----|--------|------------
/v1/sass | POST | send scss code in `code` property and receive compiled css, you can also send sass configuration as additional properties. such as, `&sass=true` lets you use indented format instead of scss or `&outputStyle=compressed` will get you compressed verison of sass output
/v1/sass | GET | send a file url in `file` property and receive compiled css, you can also send sass configuration as additional properties same as `POST` properties
/v1/coffee | POST | send coffeeScript code in `code` property and receive compiled JS. you can also add `&bare=true` to get unwrapped version of the output
/v1/coffee | GET | send a file url in `file` property and receive compiled JS. you can also add `&bare=true` to get unwrapped version of the output
/v1/es6 | POST | send es6 code in `code` property and receive compiled JS. you can also add `&stage=0` to get experimental version
/v1/es6 | GET | send a file url in `file` property and receive compiled JS. you can also add `&stage=0` to get experimental version
/v1/md5 | POST | give any string in `code` and will give you back md5
/v1/md5 | GET | send a file url in `file` property and receive md5
/v1/echo | G,P | give any string in `code` and will give you back the string, you can send `&delay=1000` to mimic slow connection or send `&error=any message` to mimic error message
