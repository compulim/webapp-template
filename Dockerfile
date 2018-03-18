FROM node:alpine
LABEL version="1.0.0"
WORKDIR /webapp/
ADD . /webapp/
RUN npm install
RUN npm run bootstrap
RUN npm run build
EXPOSE 80
ENV PORT=80
ENTRYPOINT node packages/server
