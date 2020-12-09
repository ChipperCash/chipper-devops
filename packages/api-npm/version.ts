// Return the current NPM package version for this project
export function getNpmPackageVersion () {
  return process.env.npm_package_version
}