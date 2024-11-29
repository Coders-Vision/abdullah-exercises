FROM node:20-alpine as production

RUN npm i -g pnpm

WORKDIR /usr/src

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

ARG NODE_ENV=production



ENV NODE_ENV=${NODE_ENV}




EXPOSE 8080

CMD ["node", "dist/main"]