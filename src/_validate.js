var api = require('./api.json')

module.exports = function validate(method, params) {
  // get all the requried params for this method
  let required = api[method]
  // collect any missing params
  let missing = required.filter(param=> {
    if (param.indexOf('-opt-') === 0) {
      return false;
    }
    return typeof params[param] === 'undefined'
  })
  // optimistic: assume the best but have a plan for the worst
  return missing.length? Error(`${method} missing params: ${missing.join(', ')}`) : false
}
