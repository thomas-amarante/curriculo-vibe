# Etapa 1: Build da aplicação React
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servir a aplicação com Nginx
FROM nginx:1.23-alpine AS production
WORKDIR /usr/share/nginx/html
# Limpa os arquivos padrão do Nginx
RUN rm -rf ./*
# Copia os arquivos da build da etapa anterior
COPY --from=builder /app/dist .
# Copia a configuração personalizada do Nginx (será criada a seguir)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
