# 💊 sterilize
[![NPM Version](https://img.shields.io/npm/v/sterilize.svg?style=flat-square)](https://www.npmjs.com/package/sterilize)
[![node](https://img.shields.io/node/v/sterilize.svg?style=flat-square)](https://www.npmjs.com/package/sterilize)
[![Build Status](https://img.shields.io/travis/dotcypress/sterilize.svg?branch=master&style=flat-square)](https://travis-ci.org/dotcypress/sterilize)

> JS Object cleanup

## Installation

```js
$ npm install sterilize
```

## Example
  
```js
const exclude = require('sterilize/exclude')
const sanitizeUser = exclude('password', 'id')
const result = sanitizeUser({id: 42, name: 'Rupert', password: 'qwerty'})

// result: { name: 'Rupert'}

```

```js
const only = require('sterilize/only')
const sanitizeUser = only('name')
const result = sanitizeUser({id: 42, name: 'Rupert', password: 'qwerty'})

// result: { name: 'Rupert'}
```
