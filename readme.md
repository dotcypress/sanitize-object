# 💊 sterilize
[![NPM Version](https://img.shields.io/npm/v/sterilize.svg?style=flat-square)](https://www.npmjs.com/package/sterilize)
[![Build Status](https://img.shields.io/travis/dotcypress/sterilize.svg?branch=master&style=flat-square)](https://travis-ci.org/dotcypress/sterilize)

> JS Object cleanup

## Installation

```js
$ npm install sterilize
```

## Example
  
```js
const sterilize = require('sterilize')
const s = sterilize('password', 'id')

const result = s({id: 42, name: 'Rupert', password: 'qwerty'})

// result === { name: 'Rupert'}

```
