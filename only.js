module.exports = (...options) => {
  const whitelist = Array.isArray(options[0]) ? options[0] : [...options]
  const handler = { ownKeys: (target) => whitelist }
  return (input) => Object.assign({}, new Proxy(input, handler))
}
