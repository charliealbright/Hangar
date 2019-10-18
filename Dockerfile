FROM node:10
EXPOSE 80
COPY . /app
WORKDIR /app
RUN npm install
CMD [ "npm", "start" ]