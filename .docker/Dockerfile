ARG NODE_VERSION=14.15.0-stretch
FROM node:${NODE_VERSION}

COPY package.json /app/

WORKDIR /app

ENV NODEJS_DEBUG_PORT=9099

EXPOSE ${NODEJS_DEBUG_PORT}

RUN npm i \
  && npm install -g nodemon \
  && npm cache clean --force

EXPOSE 3000

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

COPY ./.docker/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

COPY ./ /app/

ENTRYPOINT ["/entrypoint.sh"]
