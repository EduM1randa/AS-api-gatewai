FROM node:18 AS base


WORKDIR /app


COPY package.json package-lock.json ./


RUN npm install


COPY . .

EXPOSE 3000


CMD ["npm", "run", "start:dev"]
