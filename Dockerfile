FROM node:10

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY ./src ./src

EXPOSE 3000

ENTRYPOINT [ "npx", "nodemon", "src/index.js" ]