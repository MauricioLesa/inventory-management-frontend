FROM node:20-alpine

WORKDIR /app

COPY package*.json /app

COPY . .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]
