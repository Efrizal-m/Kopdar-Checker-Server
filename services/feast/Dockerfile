FROM node
WORKDIR /usr/www/kopdar-feast
COPY . .
ENV PORT=4002
RUN npm i -g nodemon
RUN npm i && npm cache clean --force
EXPOSE 4001
CMD ["npm","run","dev"]