@echo off
set IMAGE_NAME=login-auth
set CONTAINER_NAME=login-auth_container

echo Verificando se o container %CONTAINER_NAME% existe...
docker ps -a --format "{{.Names}}" | findstr /I "%CONTAINER_NAME%" >nul
if %ERRORLEVEL%==0 (
    echo Removendo container existente...
    docker rm -f %CONTAINER_NAME%
) else (
    echo Nenhum container para remover.
)

echo Verificando se a imagem %IMAGE_NAME% existe...
docker images -q %IMAGE_NAME% >nul
if %ERRORLEVEL%==0 (
    echo Removendo imagem existente...
    docker rmi -f %IMAGE_NAME%
) else (
    echo Nenhuma imagem para remover.
)

echo Criando nova imagem Docker...
docker build -t %IMAGE_NAME% .

echo Criando e iniciando container...
docker run -d -p 5003:80 --name %CONTAINER_NAME% --network quark %IMAGE_NAME%

echo Processo concluído!