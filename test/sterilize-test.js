const { test } = require('ava')
const sterilize = require('../')

test('*', (t) => {
  const s = sterilize('password', 'id')
  const result = s({id: 42, name: 'Rupert', password: 'qwerty'})
  t.deepEqual(result, { name: 'Rupert'})
})

test('*', (t) => {
  const s = sterilize(['password', 'id'])
  const result = s({id: 42, name: 'Rupert', password: 'qwerty'})
  t.deepEqual(result, { name: 'Rupert'})
})

test('*', (t) => {
  const s = sterilize('password')
  const result = s({id: 42, name: 'Rupert', password: 'qwerty'})
  t.deepEqual(result, { id: 42, name: 'Rupert'})
})
