module.exports = (...options) => {
  const blacklist = new Set(Array.isArray(options[0]) ? options[0] : [...options])
  const handler = {
    ownKeys: (target) => Object.keys(target).filter((prop) => !blacklist.has(prop))
  }
  return (input) => Object.assign({}, new Proxy(input, handler))
}
