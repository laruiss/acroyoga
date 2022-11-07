# acroyoga-client

Projet fullstack pour voir des figures et créer des enchaînements d’acroyoga.

## Configuration minimale pour faire tourner le projet

- [Node.js v18+](https://nodejs.org/en/)
- npm v8+

### Configuration recommandée

- [@anfu/ni](https://github.com/antfu/ni) (`npm i -g @antfu/ni`)
- [Volta](https://volta.sh) (`curl https://get.volta.sh | $(basename $SHELL)`)

## Configuration recommandée pour l’édition

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Support de TS dans les fichiers `.vue`

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Personnaliser la configuration

Cf. [Vite Configuration Reference](https://vitejs.dev/config/).

## Installation des dépendances

```sh
npm install
```

### Compilation et Hot-Reload pour le Développement

```sh
npm run dev
```

### Type-Checking, Compilation et Minification pour la Production

```sh
npm run build
```

### Lancer les Tests Unitaires avec [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint avec [ESLint](https://eslint.org/)

```sh
npm run lint
```
