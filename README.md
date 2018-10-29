# Infocorp Website

Website para a EJ de ciência da computação Infocorp.

## Começando 🔥

Essas instruções vão exemplificar como construir um ambiente de desenvolvimento
e de testes para o projeto.

### Pré-requisitos

Ferramentas necessárias para construir o website

* [NodeJS](https://nodejs.org/en/) versão 8 ou superior
* Parcel (Bundler)
* npm ou [Yarn](https://yarnpkg.com/en/)
* git

### Instalando

Neste documento usarei o [Yarn](https://yarnpkg.com/en/) para gerenciar os pacotes.

Clone o repositório

Exemplo usando a linha de comando:
```
git clone https://github.com/infocorpjr/website.git
```

Entre no diretório do projeto:
```
cd website
```

Dentro do diretório execute o comando yarn para garantir que
os todos os pacotes sejam instalados
```
yarn
```

Para iniciar um servidor de desenvolvimento usando o parcel
```
parcel src\index.html --open
```

Caso ele não encontre algumas dependências espere ele instalar cancele o comando
e execute novamente.

Para gerar uma build de produção do site
```
parcel build src\index.html --no-minify -d public
```
O build deve estar dentro da pasta `public`

## Contribuindo

Leia [CONTRIBUTING.md](CONTRIBUTING.md).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Licença

Este projeto é licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes. 

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
