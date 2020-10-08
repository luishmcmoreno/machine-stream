FROM node:12-alpine AS machine-stream-build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install

COPY . /app

RUN npm run build:prod

FROM nginx:alpine
COPY --from=machine-stream-build /app/dist/machine-stream /usr/share/nginx/html
EXPOSE 80