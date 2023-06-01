FROM node:16

WORKDIR .

COPY .  .
RUN npm install -g npm@9.6.6
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build
CMD ["pnpm","run","dev"]