# Instruções 
Para realizar o deploy em um servidor com nginx

## Fazer backup, se necessário 
mkdir ~/backup 
cp -r /var/www/controleura.orivaldo.net/  ~/backup/

## Limpar o conteúdo antigo da pasta pública 
sudo rm /var/www/controleura.orivaldo.net/* -rf

## Entrar na pasta pública 
cd /var/www/controleura.orivaldo.net/

## Copiar para pasta pública 
sudo cp -r  ~/controle_ura_react/build .