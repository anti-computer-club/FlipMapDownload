FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma client
RUN npx prisma generate

# Optional: run migration in container startup (only in dev)
CMD npx prisma migrate deploy && npm run start

EXPOSE 4000
