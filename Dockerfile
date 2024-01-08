FROM node

WORKDIR /app

COPY package.json /app/

RUN npm i

COPY . .

RUN npm run build

EXPOSE 4173

CMD [ "npm", "run", "serve"]