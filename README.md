# App da Fábrica de Fertilizantes

Aplicativo web simples em HTML, CSS e JavaScript organizado por módulos. Agora utiliza [Tailwind CSS](https://tailwindcss.com/) para o layout.

## Estrutura
- `index.html` – tela de login
- `dashboard.html` – painel principal com links para os módulos
- `modules/` – páginas para cada módulo da fábrica
- `js/` – scripts JavaScript (Firebase e autenticação)
- `css/` – estilos básicos (apenas ajustes específicos)

## Uso
1. Configure o Firebase em `js/firebase.js` e crie documentos em `users/{uid}` com o campo `role`.
2. Abra `index.html` em um servidor estático (ou use o Firebase Hosting).
3. Faça login com um usuário autorizado para acessar o painel e navegar entre os módulos.

## Desenvolvimento
- `npm run lint` executa o ESLint com as regras padrão de JavaScript.
- `npm test` executa os testes com Jest.
