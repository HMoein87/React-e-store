FROM node:20.11.1-alpine

WORKDIR /app

COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/

RUN npm install -g json-server

EXPOSE 3001
WORKDIR /app

EXPOSE 3000
RUN npm install

CMD npm start
