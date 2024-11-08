# Usar a imagem do Node para fazer build e servir a aplicação com Vite
FROM node:lts-alpine
WORKDIR /app

# Instalar dependências para usar o modo produção
COPY package.json package-lock.json ./
RUN npm install --production

# Copiar os arquivos do backend
COPY . .

# Configurar qual a porta da API
ENV PORT=3001

# Expor a porta da API
EXPOSE 3001

# Rodar o backend (API) em modo produção
CMD ["npm", "run", "start"]
