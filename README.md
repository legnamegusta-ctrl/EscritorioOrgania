# App da Fábrica de Fertilizantes

Aplicativo web simples em **HTML, CSS e JavaScript** organizado por módulos. O login de administradores usa Firebase Authentication (substitua as chaves em `js/firebase.js`).

## Estrutura
- `index.html` – tela de login
- `dashboard.html` – painel principal com links para os módulos
- `modules/` – páginas para cada módulo da fábrica
- `js/` – scripts JavaScript (Firebase e autenticação)
- `css/` – estilos básicos

## Uso
1. Configure o Firebase em `js/firebase.js`.
2. Abra `index.html` em um servidor estático (ou use o Firebase Hosting).
3. Faça login com um usuário autorizado para acessar o painel e navegar entre os módulos.

Este projeto é um esqueleto inicial; as funcionalidades específicas de cada módulo ainda precisam ser implementadas.
