import { getNpmPackageVersion } from './version'

describe('api-npm', () => {
  it('returns correct NPM package version', async () => {
    const packageVersion = getNpmPackageVersion()
    expect(packageVersion).toBe('1.0.0')
  })
})