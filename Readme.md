
Explicação da arquitetura

O projeto foi organizado utilizando uma arquitetura em camadas para separar responsabilidades. A camada de controllers é responsável por receber as requisições HTTP e retornar as respostas. A camada de services contém a lógica de negócio da aplicação, como criação de usuários, cursos e matrículas. As rotas definem os endpoints da API e direcionam as requisições para os controllers. O banco de dados é gerenciado pelo Prisma, localizado na camada de infraestrutura. Essa separação facilita a manutenção, organização e escalabilidade do sistema.

Como usar:

Rode com Npm run dev

com a extensao thunder utilize os comandos 

## Endpoints

POST /users  
GET /users  
GET /users/{id}  
PUT /users/{id}  
DELETE /users/{id}
