FROM node:10
EXPOSE 80
RUN npm install
RUN npm build
CMD [ "npm", "start" ]