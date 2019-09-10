
## Environment Setup
#### Jest
- Install `yarn add --dev jest`
- Config `package.json`

```json
  "scripts": {
    "test": "jest --passWithNoTests --verbose --coverage",
  },
```
#### Typescript
- Install `yarn add --dev typescript ts-jest @types/express @types/node @types/jest @type/supretest`
- Config `yarn tsc --init`
- Config `yarn ts-jest config:init`
```json
{
  "compilerOptions": {
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    "allowJs": true,                       /* Allow javascript files to be compiled. */
    "sourceMap": true,                     /* Generates corresponding '.map' file. */
    "outDir": "./dist",                        /* Redirect output structure to the directory. */
    "rootDir": "./src",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    "strict": true,                           /* Enable all strict type-checking options. */
    "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true                   /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```
#### Eslint
- Install **eslint** and **prettier** in **vscode**
- Install `yarn add --dev eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-node eslint-config-node`
- Install `npx install-peerdeps --dev eslint-config-airbnb-base`
- Config
```json
{
    "extends": ["airbnb-base","prettier", "plugin:node/recommended"],
    "plugins": ["prettier"],
    "rules": {
        "no-unused-vars": "off",
        "no-console": "off",
        "prettier/prettier": "error",
        "func-names":"off",
        "no-process-exit":"off",
        "no-param-reassign":"off",
        "no-const-assign":"off",
        "node/no-unpublished-require":"off",
        "global-require":"off"
    },
    "env": {
        "jest": true
    }
}
```

- Config `package.json`

```json
  "scripts": {
    "lint": "eslint ./",
  },
```

#### Prettier

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

#### Husky

- Install `yarn add --dev husky`
- Config `package.json`

```json
	"husky": {
		"hooks": {
			"pre-commit": "pretty-quick --staged && npm run lint && npm run test"
		}
	}
```

## Test
### Types
- Unit Test: Test code without external resources
  - Easy to write, fast to execute, ideal for testing **algorithm**
- Integration Test: Test code with external resource
- e2e Test: Test code with UI

### Unit Testing
- Structure: `describe` > `it` > `expect`
```javascript
// Equality 
expect(…).toBe(); 
expect(…).toEqual();

// Truthiness 
expect(…).toBeDefined(); 
expect(…).toBeNull(); 
expect(…).toBeTruthy();
expect(…).toBeFalsy();

// Numbers 
expect(…).toBeGreaterThan(); 
expect(…).toBeGreaterThanOrEqual(); 
expect(…).toBeLessThan(); 
expect(…).toBeLessThanOrEqual();

// Strings 
expect(…).toMatch(/regularExp/);

// Arrays 
expect(…).toContain();

// Objects 
expect(…).toBe(); // check for the equality of object references 
expect(…).toEqual(); // check for the equality of properties 
expect(…).toMatchObject();

// Exceptions 
expect(() => { someCode }).toThrow();
```

#### Mock Function (fewer)
- When: some function depends on **External** resources
- Why: to `disengage` dependencies for standalone **unit** testing
- Two ways: `Override` or `jest.fn()`, second of which is more powerful

```javascript
  // simple
  const mockFunction = jest.fn();
  mockFunction.mockReturnValue(1);
  const result = mockFunction();
```

```javascript
  // promise
  const mockFunction = jest.fn();
  mockFunction.mockResolvedValue(1);
  mockFunction.mockRejectedValue(new Error('...'))
  const result = await mockFunction();
```

#### Best Practice
- If there is **too many** mock functions, you'd better do intergration test
- Scope unit test in cases with `less or no exteral dependencies`.

### Integration Test
- Install `yarn add --dev supertest`
- Create `Testing Database` and set up url with `config`
- **export server**
```javascript
// index.js
const server = app.listen(500, () => {
  console.log('Hello World');
});

module.exports = server;
```
- get
```javascript
// app.test.js: Integration test with Jest and Supertest
  describe('GET /', () => {
    it('should be successfully accessed', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });
  });
```
- post
```javascript
    const exec = async () => {
      return await request(server)
        .post('/api/genres/' + id)
        .set('x-auth-token', token)
        .send();
    }
```
- delete
```javascript
    const exec = async () => {
      return await request(server)
        .delete('/api/genres/' + id)
        .set('x-auth-token', token)
        .send();
    }
```

#### Database
- production: `serious` database
- development: `development` database
- testing: `dummy` database


[sth](https://medium.com/@qjli/how-to-mock-specific-module-function-in-jest-715e39a391f4)
