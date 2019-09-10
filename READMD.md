## Jest

- Install `yarn add --dev jest`
- Config `package.json`

```json
  "scripts": {
    "test": "jest --passWithNoTests"
  },
```

## Eslint

- Install **eslint** and **prettier** in **vscode**
- Install `yarn add --dev eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-node eslint-config-node`
- Install `npx install-peerdeps --dev eslint-config-airbnb-base`
- Config

```json
{
  "extends": ["airbnb-base", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "no-unused-vars": "off",
    "no-console": "off",
    "prettier/prettier": "error",
    "func-names": "off",
    "no-process-exit": "off"
  }
}
```

- Config `package.json`

```json
  "scripts": {
    "lint": "eslint ./",
  },
```

## Prettier

- Install `yarn add --dev prettier pretty-quick`
- Config `.prettierrc` [Rules](https://prettier.io/docs/en/options.html)

```json
{
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

- Config `package.json`

```json
  "scripts": {
    "format": "pretty-quick"
  },
```

## Husky

- Install `yarn add --dev husky`
- Config `package.json`

```json
	"husky": {
		"hooks": {
			"pre-commit": "pretty-quick --staged && npm run lint && npm run test"
		}
	}
```
