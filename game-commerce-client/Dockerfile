FROM node:14.18.1-alpine


WORKDIR /app

ENV PATH /app/game-commerce-client/node_modules/.bin:$PATH

COPY package*.json ./

COPY tsconfig.json ./

RUN npm install --silent

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "docker"]