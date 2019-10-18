FROM node:10
EXPOSE 80
RUN mkdir app
COPY . /app
WORKDIR /app
RUN npm install
RUN npm build
CMD [ "npm", "start" ]