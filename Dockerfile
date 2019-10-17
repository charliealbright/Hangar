FROM node:10
EXPOSE 80
COPY . /node/app
WORKDIR /node/app
CMD [ "npm", "start" ]