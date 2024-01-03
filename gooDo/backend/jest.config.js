const globalConfig = require('../jest.config.js')
module.exports = {
  ...globalConfig
  // coverageThreshold: {
  //   global: {
  //     ...globalConfig.coverageThreshold.global,
  //     lines: 60
  //   }
  // }
}
