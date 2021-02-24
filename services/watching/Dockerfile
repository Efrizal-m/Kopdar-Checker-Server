FROM node
WORKDIR /usr/www/kopdar-watching
COPY . .
ENV PORT=4004
RUN npm i -g nodemon
RUN npm i && npm cache clean --force
EXPOSE 4003
CMD ["npm","run","dev"]