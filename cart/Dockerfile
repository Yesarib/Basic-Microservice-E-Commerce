FROM node:18

WORKDIR /usr/src/app/cart

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
CMD ["node","dist/index.js"]