FROM node:10
EXPOSE 80
WORKDIR /home/node/app
CMD [ "npm", "start" ]