# Step 1: Build the frontend
FROM node:20-alpine as frontend

# Install pnpm
RUN npm i -g pnpm

# Set the working directory for frontend
WORKDIR /usr/src/frontend

# Copy the frontend package.json and pnpm-lock.yaml
COPY frontend/package*.json frontend/pnpm-lock.yaml ./

# Install frontend dependencies
RUN pnpm install

# Copy the rest of the frontend files
COPY frontend ./

# Build the frontend assets
RUN pnpm build

# Step 2: Build the backend (NestJS)
FROM node:20-alpine as backend

# Install pnpm
RUN npm i -g pnpm

# Set the working directory for backend
WORKDIR /usr/src/backend

# Copy the backend package.json and pnpm-lock.yaml
COPY backend/package*.json backend/pnpm-lock.yaml ./

# Install backend dependencies
RUN pnpm install

# Copy the rest of the backend files
COPY backend ./

# Build the backend (NestJS)
RUN pnpm build

# Step 3: Create production image
FROM node:20-alpine as production

# Set the working directory
WORKDIR /usr/src/app

# Install pnpm
RUN npm i -g pnpm

# Copy backend code and the frontend build assets
COPY --from=frontend /usr/src/frontend/dist /usr/src/app/frontend/dist
COPY --from=backend /usr/src/backend/dist /usr/src/app/backend/dist

# Install only production dependencies for backend
COPY backend/package*.json backend/pnpm-lock.yaml ./
RUN pnpm install --prod

# Set environment variable for production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Expose application port
EXPOSE 8080

# Run the NestJS application
CMD ["node", "backend/dist/main"]
