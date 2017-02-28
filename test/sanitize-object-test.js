const { test } = require('ava')
const { exclude, only } = require('../')

test('exclude', (t) => {
  const sanitizeExclude = exclude('password', 'id', 'memo')
  const result = sanitizeExclude({id: 42, name: 'Rupert', password: 'qwerty'})
  t.deepEqual(result, {name: 'Rupert'})
})

test('exclude', (t) => {
  const sanitizeExclude = exclude(['password', 'id'])
  const result = sanitizeExclude({id: 42, name: 'Rupert', password: 'qwerty'})
  t.deepEqual(result, {name: 'Rupert'})
})

test('exclude', (t) => {
  const sanitizeExclude = exclude('password')
  const result = sanitizeExclude({id: 42, name: 'Rupert', password: 'qwerty'})
  t.deepEqual(result, {id: 42, name: 'Rupert'})
})

test('include', (t) => {
  const sanitizeOnly = only('name', 'memo')
  const result = sanitizeOnly({id: 42, name: 'Rupert', password: 'qwerty'})
  t.deepEqual(result, {name: 'Rupert'})
})

test('include', (t) => {
  const sanitizeOnly = only(['name', 'id'])
  const result = sanitizeOnly({id: 42, name: 'Rupert', password: 'qwerty'})
  t.deepEqual(result, {id: 42, name: 'Rupert'})
})

test('include', (t) => {
  const sanitizeOnly = only('name', 'id')
  const result = sanitizeOnly({id: 42, name: 'Rupert', password: 'qwerty'})
  t.deepEqual(result, {id: 42, name: 'Rupert'})
})
