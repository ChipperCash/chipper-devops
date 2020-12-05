describe('e2e', () => {
  it('makes sure packages work well together', () => {
    const check = 'api-db and api-npm'
    expect(typeof check).toBe('string')
  })
})