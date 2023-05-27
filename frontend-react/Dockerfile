FROM node:18.2.0-bullseye-slim

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev