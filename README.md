## pousadinha

> **Aplicação com a stack: React / Vite + SWC / Express.js / Sequelize / PostgreSQL com CRUD, autenticação, padrões avançados, rotas, paginação, etc, que adere às especificações e API do [RealWorld](https://realworld.io/).**


---

## Começando

Estas instruções ajudarão você a instalar e executar o projeto na sua máquina local para desenvolvimento e testes.

### Pré-requisitos

Antes de executar o projeto, certifique-se de ter as seguintes ferramentas e softwares instalados no seu computador:

- Editor de texto/IDE (ex: VS Code, Sublime Text, Atom)
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) `v18.11.0+`
- [NPM](https://www.npmjs.com/) (geralmente incluído com o Node.js)
- Banco de dados SQL

### Instalação

Para instalar o projeto no seu computador, siga estes passos:

1. Clone o repositório para a sua máquina local.

   ```bash
   git clone https://github.com/Gustavo-Coutinho/pousadinha.git
   ```

2. Navegue até o diretório do projeto.

   ```bash
   cd pousadinha
   ```

3. Instale as dependências do projeto executando o comando:

   ```bash
   npm install
   ```

### Configuração

1. Crie um arquivo `.env` no diretório raiz do projeto
2. Adicione as variáveis de ambiente necessárias conforme especificado no arquivo [`.env.example`](backend/.env.example)
3. (Opcional) atualize os parâmetros de configuração do Sequelize no arquivo [`config.js`](backend/config/config.js)
4. Se você **não** estiver usando PostgreSQL, também pode ser necessário instalar o driver para o seu banco de dados:

   <details>
   <summary>Use um dos seguintes comandos para instalar:</summary><br/>

   > Nota: a opção `-w backend` é usada para instalá-lo no backend [`package.json`](backend/package.json).

   ```bash
   npm install -w backend pg pg-hstore  # Postgres (já instalado)
   npm install -w backend mysql2
   npm install -w backend mariadb
   npm install -w backend sqlite3
   npm install -w backend tedious       # Microsoft SQL Server
   npm install -w backend oracledb      # Oracle Database
   ```

   > :information_source: Visite [Sequelize - Instalando](https://sequelize.org/docs/v6/getting-started/#installing) para obter mais informações.

   ***

   </details>

5. Crie o banco de dados especificado pela configuração executando

   > :warning: Certifique-se de ter criado um superusuário para o seu banco de dados.

   ```bash
   npm run sqlz -- db:create
   ```

   > :information_source: O comando `npm run sqlz` é um alias para `npx -w backend sequelize-cli`.
   > Execute `npm run sqlz -- --help` para ver mais comandos do `sequelize-cli` disponíveis.

6. Opcionalmente, você pode executar o seguinte comando para popular o seu banco de dados com alguns dados fictícios:

   ```bash
   npm run sqlz -- db:seed:all
   ```

### Uso

#### Servidor de Desenvolvimento

Para executar o projeto, siga estes passos:

1. Inicie o servidor de desenvolvimento executando o comando:

   ```bash
   npm run dev
   ```

2. Abra um navegador web e navegue para:
   - A página inicial ficará disponível em [`http://localhost:3000/`](http://localhost:3000).
   - Os endpoints da API ficarão disponíveis em [`http://localhost:3001/api`](http://localhost:3001/api).

#### Executando Testes

Para executar testes, basta executar o seguinte comando:

```bash
npm run test
```

#### Produção

O seguinte comando construirá a versão de produção do aplicativo:

```bash
npm run start
```

#### Agradecimento

Agradecimentos especiais ao [TonyMckes](https://github.com/TonyMckes/) que criou e disponibilizou a maior parte dessa aplicação (em inglês) no [repositório conduit](https://github.com/TonyMckes/conduit-realworld-example-app), sob licença MIT (uso permitido).
