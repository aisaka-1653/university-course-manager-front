FROM node:21.7.1

WORKDIR /myapp

COPY package.json package-lock.json ./
RUN npm install
COPY . .

CMD ["npm","run","dev"]
