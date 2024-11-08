# Usar a imagem do Node para fazer build e servir a aplicação com Vite
FROM node:lts-alpine
WORKDIR /app

# Instalar dependências e construir o projeto
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Build do aplicativo Vite
RUN npm run build

# Expor a porta padrão 3000 do Vite
EXPOSE 3000

# Servir o frontend na porta 3000
CMD ["npm", "run", "dev"]
