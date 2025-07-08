# client
FROM node:24-slim

MAINTAINER Eugene Kovalskyi

WORKDIR /client

COPY . .

RUN npm i && \
		npm run build && \
		npm i -g serve

CMD serve -s dist -l 3001