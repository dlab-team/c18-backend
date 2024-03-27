FROM node:20.11.1-alpine
WORKDIR /src
COPY . .
RUN npm install
CMD ["npm", "start"]