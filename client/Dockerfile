# client
FROM node:24-slim AS dist

MAINTAINER Eugene Kovalskyi

WORKDIR /client

COPY . .

RUN npm i && \
		npm run build

FROM nginx:1.29

COPY --from=dist /client/dist /usr/share/nginx/html
COPY --from=dist /client/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]