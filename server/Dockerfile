# server
FROM node:24-slim

MAINTAINER Eugene Kovalskyi

WORKDIR /server

COPY . .

RUN npm i && \
		npx prisma generate && \
		npx prisma db push && \
		npm run build

CMD npm run start:prod