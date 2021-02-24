FROM node
WORKDIR /usr/www/kopdar-futsal
COPY . .
ENV PORT=4003
RUN npm i -g nodemon
RUN npm i && npm cache clean --force
EXPOSE 4002
CMD ["npm","run","dev"]