FROM node:18-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies (dev + prod for now)
RUN npm install

# Copy the rest of your backend code
COPY . .

# Expose backend port
EXPOSE 3002

# Start the server
CMD ["node", "index.js"]
