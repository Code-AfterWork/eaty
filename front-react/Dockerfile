FROM node:alpine


WORKDIR /app
COPY package.json /app/package.json
# COPY package-lock.json /code/package-lock.json

# RUN npm ci
COPY . /app

# ENV CI=true
ENV PORT=3000

CMD [ "npm", "start" ]

# WORKDIR /app

# COPY package.json  ./

# RUN yarn install

# RUN yarn global add nodemon

# COPY . .

# RUN yarn start

# EXPOSE 3000

# CMD ["nodemon", "index.js"]
