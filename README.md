# Infocorp Website

Aqui, lhe ajudaremos com os primeiros passos para poder ajudar a desenvolver o website da Infocorp, a empresa Júnior do Instituto de Computação da UFMT.

## Começando 🔥

As instruções abaixo farão com que você tenha uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

As ferramentas necessárias para o desenvolvimento do website são:

* [NodeJS](https://nodejs.org/en/) versão 8 ou superior
* NPM
* [Parcel](https://parceljs.org/getting_started.html)
* Git

### Instalando :computer:

Primeiro, clone o repositório:

Exemplo usando a linha de comando:

* HTTP:
```
git clone https://github.com/infocorpjr/website.git website
```
**ou**

* SSH
```
git clone git@github.com:infocorpjr/Infocorp-website.git website
```

Depois, mude para o diretório do projeto:
```
cd website
```

No diretório execute um dos comandos abaixo para instalar as dependências:
```
npm install
```

Então, execute o comando abaixo para iniciar o servidor embutido:
```
npm run dev
```

**Atenção!** Para acessar as páginas é necessário digitar o caminho completo no navegador ex: `http://localhost:1234/about/index.html`


Caso queira gerar uma build de produção do site, execute o comando abaixo:
```
npm run build
```
Com isso, a build será gerada dentro da pasta `public`

## Você quer contribuir com o projeto?

Por favor, leia [contribuindo para com o projeto](CONTRIBUTING.md) para mais informações.

## Versão

Nós usamos o [SemVer](http://semver.org/) para o controle de versões. Para ver todas as versões disponíveis, veja [as tags neste repositório](https://github.com/infocorpjr/Infocorp-website/tags).

## Autores

* **Time de desenvolvimento da Infocorp** - *projeto inicial* - [Development Team](https://dev.infocorpjr.com/)

Veja também a lista dos [contribuidores](https://github.com/infocorpjr/Infocorp-website/graphs/contributors) participantes deste projeto.

## Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes. 
