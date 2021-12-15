
  
FROM node:14.18.1-alpine

WORKDIR /server

COPY package.json ./

COPY package-lock.json ./

RUN npm install -f

RUN npm install -g ts-node-dev

RUN npm install -g typescript@latest

COPY . ./

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "dev"]