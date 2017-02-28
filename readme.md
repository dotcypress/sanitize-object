# 💊 sanitize-object
[![NPM Version](https://img.shields.io/npm/v/sanitize-object.svg?style=flat-square)](https://www.npmjs.com/package/sanitize-object)
[![node](https://img.shields.io/node/v/sanitize-object.svg?style=flat-square)](https://www.npmjs.com/package/sanitize-object)
[![Build Status](https://img.shields.io/travis/dotcypress/sanitize-object.svg?branch=master&style=flat-square)](https://travis-ci.org/dotcypress/sanitize-object)

> Experimental JS Object cleanup

## Installation

```js
$ npm install sanitize-object
```

## Example
  
```js
const { exclude, only } = require('sanitize-object/exclude')

const sanitizeUser = exclude('password', 'id')
const result = sanitizeUser({id: 42, name: 'Rupert', password: 'qwerty'})
// result: { name: 'Rupert'}

const sanitizeUser = only('name')
const result = sanitizeUser({id: 42, name: 'Rupert', password: 'qwerty'})
// result: { name: 'Rupert'}

```
