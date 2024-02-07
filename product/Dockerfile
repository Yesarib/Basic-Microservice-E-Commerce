FROM node:18

WORKDIR /usr/src/app/product

COPY package*.json ./
RUN npm install
RUN npm rebuild bcrypt --build-from-source

COPY . .


RUN npm run build
ENV PORT=8080
EXPOSE 8080
CMD ["node","dist/index.js"]
