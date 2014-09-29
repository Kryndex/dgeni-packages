var path = require('canonical-path');
var packagePath = __dirname;
var Package = require('dgeni').Package;

module.exports = new Package('angularjs', ['jsdoc'])

.factory(require('./file-readers/ng'))
.factory(require('./services/moduleDefs'))
.factory(require('./services/moduleExtractor'))

.processor(require('./processors/generateModuleDocs'));

