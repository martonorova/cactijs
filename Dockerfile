FROM node:10

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "node", "src/index.js" ]