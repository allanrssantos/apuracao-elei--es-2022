# Apuração 2º Turno Eleição - Presidente e Governador de SP

O projeto foi desenvolvido com [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Dados do projeto.

Nesse projeto estou consumindo a API oficial do [TSE](https://www.tse.jus.br/eleicoes/eleicoes-2022/interessados-na-divulgacao-de-resultados-2022) e tratando os dados para utiliza-los.

Estou utilizando [Angular Material](https://material.angular.io/) e [NGX Charts](https://swimlane.gitbook.io/ngx-charts/) para apresentação dos dados no template.

Esse projeto não é para interação do usuário, ele apenas apresenta os dados e os atualiza a cada 30s, mas o retorno de novos dados depende do TSE.

Para tutilização clone o repositório e instale as dependências do projeto `npm instal`, após a instalção use o comando `ng s --o` para rodar o projeto. 

Observação importante: Os dados só serão apresentados no Templete após o TSE iniciar a divulgação do resultado.
