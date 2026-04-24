# ✨ Glow Todo

Lista de tarefas moderna, vibrante e cheia de energia! Gerencie seus afazeres com uma interface glassmorphism premium, animações fluidas e persistência de dados.

## 🚀 Tecnologias Utilizadas

- **React 19**: Biblioteca core para construção da interface reativa
- **TypeScript**: Tipagem estática para maior segurança e produtividade
- **Vite**: Build tool extremamente rápida para desenvolvimento moderno
- **Tailwind CSS 4**: Estilização baseada em utilitários com suporte nativo a variáveis CSS e novos recursos
- **Lucide React**: Biblioteca de ícones minimalistas e consistentes
- **Google Fonts**: Fonte [Outfit](https://fonts.google.com/specimen/Outfit) para uma estética limpa e moderna

## 🎨 Layout

- Visual focado em **Glassmorphism**, com backgrounds translúcidos e desfoque (blur)
- **Blobs Animados**: Fundo dinâmico com círculos coloridos que flutuam suavemente
- Suporte a **Gradients**: Uso estratégico de gradientes em textos e elementos de destaque
- **Micro-animações**: Feedback visual em hover e interações com transições suaves
- Design **Mobile-First**: Interface totalmente responsiva que se adapta a qualquer dispositivo
- Sombras personalizadas (**Shadow Glow**) para profundidade e realce

## 💡 Funcionalidades

- **Gerenciamento Completo**: Adicione, edite, conclua e remova tarefas de forma intuitiva
- **Stats Real-time**: Barra de progresso dinâmica mostrando o total de tarefas e o que já foi concluído
- **Persistência Local**: Suas tarefas são salvas automaticamente no `localStorage` do navegador
- **Feedback Visual**: Indicações claras de conclusão e estados de interação
- **Validação Inteligente**: Limite de caracteres e tratamento de espaços vazios
- **Interface Fluida**: Navegação rápida sem recarregamento de página

## ⚡ Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Michele-Moreira/todo.git
   ```
2. Instale as dependências:
   ```bash
   pnpm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm dev
   ```
4. Abra o link gerado no navegador e comece a organizar seu dia!

## 📁 Estrutura

```
├── public/          # Ativos estáticos
├── src/
│   ├── assets/      # Imagens e estilos globais
│   ├── components/  # Componentes React reutilizáveis
│   │   ├── stats-bar/
│   │   ├── task-card/
│   │   ├── task-list/
│   │   ├── todo-header/
│   │   └── ui/       # Componentes base de UI
│   ├── hooks/       # Custom hooks (lógica de estado)
│   ├── lib/         # Utilitários (shadcn/clsx/tailwind-merge)
│   ├── types/       # Definições de tipos TypeScript
│   ├── App.tsx      # Componente principal
│   └── main.tsx     # Ponto de entrada
├── index.html
├── package.json
└── vite.config.ts
```

## ✨ Créditos

Projeto desenvolvido com foco em UI/UX moderna, aplicando as melhores práticas de React e estilização avançada com Tailwind CSS.

---
