FROM alpine:3.7

# Add nginx and nodejs
RUN apk add --update nginx nodejs

# Create the directories we need
RUN mkdir -p /tmp/nginx/typical-sad-frontend
RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html

# Copy the respective nginx config files to container
COPY nginx-config/nginx.conf /etc/nginx/nginx.conf
COPY nginx-config/default.conf /etc/nginx/conf.d/default.conf

# Set the directory we want to run the next commands for
WORKDIR /tmp/nginx/typical-sad-frontend
# Copy our source code into the container
COPY . .

RUN npm install
RUN npm run build

# copy dist to nginx serve dir
RUN cp -r dist/* /var/www/html

# make all files belong to the nginx user
RUN chown nginx:nginx /var/www/html

# start nginx and keep the process from backgrounding and the container from quitting
CMD ["nginx", "-g", "daemon off;"]
