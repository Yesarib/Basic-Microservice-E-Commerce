FROM node:18

WORKDIR /usr/src/app/order

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
ENV USER=postgres
ENV PASSWORD=142536
CMD ["node","dist/index.js"]