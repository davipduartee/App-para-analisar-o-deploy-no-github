# App para analisar o deploy no GitHub

Calculadora de IMC simples, feita em HTML, CSS e JavaScript puro, com **CI/CD no GitHub Actions**:

1. **Testes** — a cada push ou pull request, o workflow roda `npm test` (test runner nativo do Node, sem dependências).
2. **Deploy** — se os testes passarem na branch principal, o site da pasta `site/` é publicado no **GitHub Pages**.

## Rodando localmente

```bash
npm test
```

Para ver o app, abra a pasta `site/` com qualquer servidor estático, por exemplo:

```bash
npx serve site
```

## Estrutura

```
site/             # app publicado no GitHub Pages
  index.html
  style.css
  app.js          # interface
  imc.js          # lógica (testada)
tests/
  imc.test.js     # testes automatizados
.github/workflows/
  ci-cd.yml       # pipeline: testes -> deploy
```

## Ativando o GitHub Pages

Em **Settings → Pages → Build and deployment → Source**, escolha **GitHub Actions**.
