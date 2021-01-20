import { appendFoo } from '../foo'

test('`bar` should return `foo_bar`', () => {
  expect(appendFoo('bar')).toBe('foo_bar')
})

test('`baz` should return `foo_baz`', () => {
  expect(appendFoo('baz')).toBe('foo_baz')
})

test('An empty string should return `foo_`', () => {
  expect(appendFoo('')).toBe('foo_')
})
