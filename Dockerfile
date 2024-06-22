FROM node:lts-alpine

# Set default environment variables
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Install dependencies only for production
RUN npm install --production --silent && mv node_modules ../

# Copy the rest of the application code
COPY . .

# Ensure the application runs on a specific port
EXPOSE 3000

# Change ownership of the application directory to the node user
RUN chown -R node /usr/src/app

# Switch to the node user
USER node

# Start the application
CMD ["npm", "start"]
