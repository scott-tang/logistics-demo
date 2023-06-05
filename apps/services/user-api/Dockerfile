###########################
# Base Image
###########################
FROM node:lts-alpine
# install required OS packages
RUN apk add --update-cache curl

# Copy nx generated user-api build and install its own dependencies
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY dist/apps/user-api/. .
RUN yarn install

RUN touch /home/node/app/assets/index.html

# Expose the server port and run through node
WORKDIR /home/node/app
EXPOSE 3000
CMD [ "node", "main.js" ]
