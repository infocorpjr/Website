# Infocorp Website

Website da Infocorp, empresa Júnior do Instituto de Computação, UFMT

## Começando 🔥

Essas instruções farão com que você tenha uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste. Veja a implantação de notas sobre como implantar o projeto em um sistema ativo.

### Pré-requisitos

Ferramentas necessárias para construir o website

* [NodeJS](https://nodejs.org/en/) versão 8 ou superior
* npm ou [Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)
* [Parcel](https://parceljs.org/getting_started.html)
* git

### Instalando

Neste documento será usado [Yarn](ttps://yarnpkg.com/lang/en/docs/install/#debian-stable) para gerenciar as dependências.

Clone o repositório

Exemplo usando a linha de comando:
```
git clone https://github.com/infocorpjr/website.git
```

Mude para o diretório do projeto:
```
cd website
```

No diretório execute o comando yarn para instalar as dependêcias.
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
