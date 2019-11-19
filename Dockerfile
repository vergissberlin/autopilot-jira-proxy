FROM node:11

WORKDIR /var/app
COPY . .

RUN npm ci
RUN npm run build

WORKDIR /var/app/dist
EXPOSE 8080
CMD [ "node", "index.js" ]
