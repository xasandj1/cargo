const fs = require('fs'),
      path = './gulp/tasks',
      taskPath = fs.readdirSync(path).map(file => file = path + '/' + file)
module.exports = taskPath