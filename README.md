# Hashtag Search - IBM

## Links
- [Hashtag Search](https://teste-tecnico-ibm.vercel.app/)
- [GitHub](https://github.com/Lccas)
- [Linkedin](https://www.linkedin.com/in/leonardocarvalho133/)

## Sumário
- [Um pouco sobre o projeto](#um-pouco-sobre-o-projeto)
- [Comandos para instalação](#comandos-para-instalação)
- [Tecnologias utilizadas](#tecnologias-utilizadas)

## Um pouco sobre o projeto
O projeto foi realizado como atividade para IBM.
A ideia é ser um projeto de pesquisa de hashtags no twitter e com isso trazer as informações de onde a hashtag foi publicada, quantas pessoas fizeram a pesquisa e outros dados
Ele foi criado utilizando React.JS, utilizando o Framework Material UI para customização e criação de componentes. Para criação do login foi utilizado o auth0, que é uma plataforma onde é possível fazer conexão com redes sociais em sistemas, no caso foi utilizado para login com twitter. Támbem foi utilizado Django para renderização do projeto e foi planejado o backend ser em python utilizando Django.

## Comandos para instalação
Clone o projeto do Github
```bash
https://github.com/Lccas/Teste-tecnico-ibm.git
```

Depois disso é necessario entrar nas pastas:
```bash
cd Teste-tecnico-ibm
cd ibmfrontend
```

Após abrir o projeto em sua máquina, utilize este comando
```bash
npm install
```
*OBS: Enquanto ele faz a instalação, pegue um café :D*


Após finalizar a instalação, rodaremos o comando de build:
```bash
npm run build
```

Assim que o build terminar, voltaremos para o diretório inicial:
```bash
cd ..
```

Já no diretório inicial, entre na pasta "ibmbackend":
```bash
cd ibmbackend
```

Rode o inicializador do django:
```bash
python3 manage.py runserver
```

Pronto!!
Agora o programa ja está rodando localmente na sua máquina :D


## Tecnologias utilizadas

- [React.js](https://pt-br.reactjs.org/)
- [Framework Material Ui](https://material-ui.com/pt/)
- [Auth0](https://auth0.com/pt)
- [Django](https://www.djangoproject.com/)
