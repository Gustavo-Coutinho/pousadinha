# Usar a imagem do Node para fazer build e servir a aplicação com Vite
FROM node:lts-alpine
WORKDIR /app

# Instalar dependências para usar o modo produção
COPY package.json package-lock.json ./
RUN npm install --production

# Copiar os arquivos do backend
COPY . .

# Expor a porta da API
EXPOSE 3001

# Criar banco de dados se ainda não existir e rodar o backend (API) em modo produção
CMD ["sh", "-c", "npm run sqlz -- db:create && npm run start"]
