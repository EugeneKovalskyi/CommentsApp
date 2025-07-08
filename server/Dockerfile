# server
FROM node:24-slim

MAINTAINER Eugene Kovalskyi

WORKDIR /server

COPY . .

RUN npm i && \
		npm run build

CMD npm run start:prod