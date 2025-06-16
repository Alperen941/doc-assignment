# ─────────── 1) BUILD ────────────────────────────────────────────────
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build          # produces /app/dist

# ─────────── 2) RUNTIME ─────────────────────────────────────────────
FROM nginx:alpine
# copy built static assets into Nginx’ html folder
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
