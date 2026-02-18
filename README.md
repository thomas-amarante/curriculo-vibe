# Currículo Vibe - Seu Portfólio Moderno

Este é um projeto React criado para ser um site de currículo/portfólio moderno e personalizável.

## 🚀 Começando

Para rodar o projeto localmente, siga estes passos:

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O site estará disponível em `http://localhost:5173`.

## 🎨 Personalização

Personalizar o site é fácil. Veja como alterar o conteúdo:

### 1. Informações Pessoais (Nome, Título, etc.)

-   **Componente Hero:** Abra `src/components/Hero.tsx` para alterar seu nome e título.
-   **Componente Footer:** Abra `src/components/Footer.tsx` para atualizar o nome no copyright e os links das suas redes sociais.

### 2. Projetos

-   **Arquivo de Dados:** Adicione, edite ou remova projetos no arquivo `src/data.ts`, no array `projects`.
-   **Estrutura do Projeto:**
    -   `title`: O nome do seu projeto.
    -   `description`: Uma breve descrição.
    -   `tags`: As tecnologias e ferramentas que você usou.
    -   `github`: O link para o repositório no GitHub (opcional).
    -   `link`: O link para o projeto online (opcional).

### 3. Habilidades

-   **Arquivo de Dados:** Edite a lista de habilidades no arquivo `src/data.ts`, no array `skills`.

### 4. Cores e Estilo

-   **Variáveis de Cor:** As cores principais estão definidas em `src/index.css`. Você pode alterar os valores das variáveis CSS para mudar a paleta de cores do site.
    ```css
    :root {
      --background-deep-blue: #0D1A63;
      --card-medium-blue: #1A2CA3;
      --accent-bright-blue: #2845D6;
      --cta-orange: #F68048;
      /* ... */
    }
    ```

## 🛠️ Tecnologias Utilizadas

-   **React**
-   **Vite**
-   **TypeScript**
-   **Framer Motion** (para animações)
-   **Lucide React** (para ícones)
-   **CSS Modules**

---

Feito com 💙
