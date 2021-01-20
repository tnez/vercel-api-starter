import { flattenQueryTerm } from '../utils'

test('when given a string it wraps in array', () => {
  expect(flattenQueryTerm('foo')).toBe('foo')
})

test('when given an array, it returns unchanged', () => {
  expect(flattenQueryTerm(['foo', 'baz'])).toBe('foo')
})

test('when given `undefined` it returns an empty array', () => {
  expect(flattenQueryTerm(undefined)).toBeUndefined()
})
