const fs = require("fs").promises;

module.exports = (obj, filePath) => {
    const json = JSON.stringify(obj, '', 4);
    
// flag: 'a': adiciona ao conteúdo já existente no arquivo
//       'w': reescreve o arquivo
    fs.writeFile(filePath, json, { flag: "w", encoding: "UTF-8" });
    console.log('File writed!');
};