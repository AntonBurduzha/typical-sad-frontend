# typical-sad-frontend

## Build setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build (project need http server, so opening index.html over file:// wont work.)
```

## Deploy build via docker (check you have installed Docker)
``` bash
# build your own image
docker build -t <IMAGE_NAME> .

# run container from created image
docker run -p 8080:80 <IMAGE_NAME>

# try url
0.0.0.0:8080
