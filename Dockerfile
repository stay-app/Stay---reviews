FROM node:8.16.0-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN yarn install

EXPOSE 5002

CMD [ "yarn", "start", "&&", "yarn",'build']
