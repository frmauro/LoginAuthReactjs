FROM node:20-alpine AS builder

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install --frozen-lockfile

# Copia os arquivos do projeto
COPY . .

# Compila a aplicação
RUN npm run build

# Fase de produção
FROM nginx:alpine

# Copia os arquivos gerados na build para o servidor Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
