const path = require('path'); 

/**
 * Add module resolving to the src directory
 */
module.exports = {
  resolve: {
    modules: [
      'node_modules', 
      path.resolve(__dirname, '..', 'src')
    ]
  }
}
