## ESLint

```json
{
  "extends": ["next", "next/core-web-vitals", "eslint:recommended"],
  "globals": {
    "React": "readonly"
  },
  "rules": {
    "no-unused-vars": [1, { "args": "after-used", "argsIgnorePattern": "^_" }]
  }
}
```

- In the above small code example we have added a few additional defaults, we have said that React will always be defined even if we don't specifically import it, and I have added a personal custom rule that I like which allows you to prefix variables with an underscore _ if you have declared them but not used them in the code.

## husky
 - Husky is a tool for running scripts at different stages of the git process, for example add, commit, push, etc. We would like to be able to set certain conditions, and only allow things like commit and push to succeed if our code meets those conditions, presuming that it indicates our project is of acceptable quality.
```bash
npx husky add .husky/pre-commit "yarn lint"
```
 - The above says that in order for our commit to succeed, the yarn lint script must first run and succeed. "Succeed" in this context means no errors
```bash
npx husky add .husky/pre-push "yarn build"
```
 - The above says that in order for our push to succeed, the yarn build script must first run and succeed. "Succeed" in this context means no errors.

## Commitlint
  - a standard convention for all our commit messages, and we can enforce that convention using a tool called commitlint. Commitlint is a tool that will check our commit messages against a set of rules, and if they don't meet those rules, it will prevent the commit from succeeding.