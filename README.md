# Sistema de Gestão de Propostas de Empréstimo Pessoal

Projeto FullStack, com o Backend feito em Django REST Framework, e o Frontend feito em React. O intuito do projeto é de cadastrar propostas de emprestimo pessoal através do formulário em React, o Backend irá armazenar essas propostas em uma fila no RabbitMQ, e as propostas serão processadas e retiradas da fila por uma task do Celery. A aprovação e negação das propostas é feita de forma que metade das propostas serão aprovadas e a outra metade negadas, e é possível acompanhar esse status através do painel de admin do Django.

## Como executar o projeto

Para executar o projeto, basta fazer o **clone** deste repositório, acessar o diretório do projeto e executar usando o docker-compose:

```bash
docker-compose up --build
```

Com o docker executando, basta acessar `http://localhost:8000/admin` de dentro do navegador para ter acesso a tela de admin do Django. Nessa tela, use as seguinte credenciais para ter acesso ao painel de administrador do Django:

```
Username: ADMIN
Password: admin
```

Para acessar o frontend com o formulário de cadastro das propostas, basta acessar `http://localhost:5173` de dentro do navegador.

### Estruturação dos dados no backend

![DER](./der.png)

A organização do banco de dados foi feito conforme diagrama mostrado acima. Foi criada uma tabela **person** para armazenar os dados das pessoas que irão solicitar os emprestimos, e uma tabela **personal_loans** que irá armazenar os dados das propostas de emprestimos pessoais. Dessa forma, uma pessoa pode solicitar vários emprestismos, sem a necessidade de repetir os dados das pessoas para cada solicitação.

## Tecnologias utilizadas

- [Django](https://www.djangoproject.com/) + [Django REST Framework](https://www.django-rest-framework.org/)
- [Celery](https://docs.celeryq.dev/en/stable/)
- [RabbitMQ](https://www.rabbitmq.com/)
- [Docker](https://www.docker.com/)
- [React](https://react.dev/)
