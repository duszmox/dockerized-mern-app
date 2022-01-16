# Pull Docker Hub base image
FROM node:lts-bullseye
# Set working directory
WORKDIR /usr/app
# Install app dependencies
COPY package*.json ./
RUN npm install -qy
# Copy app to container
COPY . .

ENV REACT_APP_BASE_URL=http://localhost:5000/api

# Run the "dev" script in package.json
CMD ["npm", "run", "dev"]