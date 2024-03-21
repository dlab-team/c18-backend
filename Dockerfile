FROM node:21-alpine
WORKDIR /src
COPY . .
RUN npm install
CMD ["npm", "start"]