const fs = require('fs').promises;

module.exports = (path, content) => {
     fs.writeFile(path, content, {flag: "w", encoding: "utf-8"});
};