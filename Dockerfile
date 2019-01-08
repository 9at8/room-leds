FROM node:11.6.0

# Set current directory
WORKDIR /app

# Copy package.json first and install packages to cache them
COPY package.json .
COPY yarn.lock .
RUN yarn

# Build app for prod
COPY . .
RUN yarn app:build

# Start in prod
CMD yarn app:start:prod
