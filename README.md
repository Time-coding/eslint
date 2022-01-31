# eslint-plugin-foo

orts定制的foo实例

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-foo`:

```sh
npm install eslint-plugin-foo --save-dev
```

## Usage

Add `foo` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "foo"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "foo/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


