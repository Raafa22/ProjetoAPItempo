# Previsão do Tempo com IA Generalista

## Visão Geral
Este projeto consiste em uma aplicação web que permite consultar a previsão do tempo para qualquer cidade do mundo. Ele foi desenvolvido como parte do curso de IA Generalista, com o objetivo de explorar conceitos de Inteligência Artificial, aprimorar habilidades em engenharia de prompt e experimentar diferentes abordagens de automação e integração com APIs públicas.

## Propósito do Projeto
- **Aprendizado Prático:** Aplicar conceitos de IA em um projeto real, facilitando o entendimento de como essas tecnologias podem ser usadas no dia a dia do desenvolvimento.
- **Exploração de Estratégias:** Testar diferentes técnicas de engenharia de prompt para melhorar a comunicação com modelos de IA e automatizar tarefas.
- **Demonstração de Produtividade:** Mostrar como a IA pode acelerar o desenvolvimento de software, sugerindo código, testes e melhorias.

## Funcionalidades Principais
- **Consulta em Tempo Real:** Permite buscar a previsão do tempo para qualquer cidade, utilizando APIs públicas confiáveis.
- **Interface Responsiva:** Layout adaptável para diferentes dispositivos, com foco em acessibilidade e experiência do usuário.
- **Tratamento de Erros:** Mensagens claras para o usuário em caso de falhas, como cidade não encontrada ou problemas de conexão.
- **Testes Automatizados:** Cobertura de cenários diversos para garantir a robustez e confiabilidade da aplicação.

## Estrutura Técnica do Projeto
- **Frontend:** Desenvolvido com HTML5, CSS3 (responsivo e acessível) e JavaScript moderno (ES6+).
- **APIs Utilizadas:**
  - [Open-Meteo Geocoding API](https://open-meteo.com/) – Para converter o nome da cidade em coordenadas geográficas.
  - [Open-Meteo Weather API](https://open-meteo.com/) – Para obter a previsão do tempo baseada nas coordenadas.
- **Testes:** Automatizados com Jest, facilitando a validação do código.
- **Organização dos Arquivos:**
  - `index.html`: Página principal da aplicação.
  - `style/weather.css`: Estilos visuais e responsividade.
  - `scripts/app2.js`: Lógica de busca e processamento dos dados do clima.
  - `scripts/weather-ui.js`: Integração entre interface e lógica de negócio.
  - `scripts/app2.test.js`: Testes automatizados para garantir o funcionamento correto.

## Camadas do Projeto

### 1. Interface do Usuário (Front-end)
- **Arquivos:** `index.html`, `style/weather.css`, `scripts/weather-ui.js`
- **Descrição:** 
  - Proporciona uma experiência intuitiva e acessível, permitindo ao usuário inserir o nome da cidade e visualizar a previsão do tempo de forma clara.
  - A estrutura HTML, os estilos CSS e a lógica de interação foram otimizados com auxílio de IA, garantindo boas práticas de usabilidade e acessibilidade.

### 2. Lógica de Negócio (API de Clima)
- **Arquivo:** `scripts/app2.js`
- **Descrição:** 
  - Responsável por buscar as coordenadas da cidade informada e consultar a previsão do tempo nas APIs públicas.
  - Inclui tratamento de erros para diferentes situações, como cidade inexistente ou falha na conexão.
  - A IA foi utilizada para estruturar as funções, sugerir melhorias e definir casos de teste.

### 3. Testes Automatizados
- **Arquivo:** `scripts/app2.test.js`
- **Descrição:** 
  - Garante que a aplicação funcione corretamente em diferentes cenários, incluindo casos de sucesso, falhas e situações extremas.
  - Os testes foram criados com apoio de IA, cobrindo situações reais e edge cases para aumentar a confiabilidade do sistema.

## Engenharia de Prompt
Durante o desenvolvimento, foram aplicadas técnicas avançadas de engenharia de prompt, como o método Traci e a abordagem de árvore, para:
- Estruturar melhor as solicitações feitas à IA.
- Obter respostas mais precisas e contextualizadas.
- Explorar diferentes formas de automação e geração de código.

## Benefícios do Uso de IA no Projeto
- **Aceleração do Desenvolvimento:** Redução significativa do tempo necessário para implementar funcionalidades, corrigir bugs e escrever testes.
- **Geração Automática de Código:** Sugestões de código, testes e documentação feitas pela IA.
- **Melhoria Contínua:** Recomendações de boas práticas e otimizações constantes durante o desenvolvimento.

## Guia Prático: Como Executar o Projeto

### Pré-requisitos
- Navegador moderno (Chrome, Edge, Firefox, etc.)
- (Opcional) Node.js e npm para executar os testes automatizados

### Passo a Passo

1. **Obtenha o projeto:**
   - Via git:
     ```bash
     git clone https://github.com/Caiqe/ProjetoIA-Previs-oDoTempo.git
     ```
   - Ou baixe o arquivo ZIP do repositório e extraia em uma pasta de sua preferência.

2. **Acesse a pasta do projeto:**
   ```bash
   cd ProjetoIA-Previs-oDoTempo-main
   ```

3. **Execute a aplicação:**
   - Abra o arquivo `index.html` diretamente no navegador.
   - Não é necessário instalar servidor local, pois a aplicação roda totalmente no lado do cliente.

4. **(Opcional) Execute os testes automatizados:**
   - Instale o Node.js e npm, caso ainda não tenha.
   - Instale as dependências do projeto:
     ```bash
     npm install
     ```
   - Execute os testes:
     ```bash
     npm test
     ```

### Observações Importantes
- É necessário estar conectado à internet para consumir as APIs públicas de previsão do tempo.
- Para personalizar estilos ou funcionalidades, basta editar os arquivos nas pastas `scripts` e `style`.

---


