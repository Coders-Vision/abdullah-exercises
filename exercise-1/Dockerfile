# Base stage to have pnpm installed
FROM node:20-alpine as base

RUN npm i -g pnpm

WORKDIR /usr/src/backend

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install

# Build stage
FROM base as build

# Copy application source
COPY . .

# Build NestJS app
RUN pnpm build

# Build React app
WORKDIR /usr/src/frontend
RUN pnpm install
RUN pnpm run build

# Production stage
FROM node:20-alpine as production

RUN npm i -g pnpm

WORKDIR /usr/src/backend

# Copy production dependencies
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install --prod

# Copy NestJS build output
COPY --from=build /usr/src/dist ./dist

# Copy React build output
COPY --from=build /usr/src/frontend/dist ./frontend/dist

# Set environment variable
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Expose application port
EXPOSE 8080

# Run NestJS app
CMD ["node", "dist/main"]
