const fs = require("fs").promises;
const path = require("path");

async function readdir(rootdir) {
    rootdir = rootdir || path.resolve(__dirname);
    const files = await fs.readdir(rootdir);
    walk(files, rootdir);
}

async function walk(files, rootdir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootdir, file);
        const stat = await fs.stat(fileFullPath);

        if (/\.git/g.test(fileFullPath)) continue;
        if (/node-modules/g.test(fileFullPath)) continue;

        if (stat.isDirectory()) {
            readdir(fileFullPath);
            continue;
        };
        
        if(!/\.css/g.test(fileFullPath) && !/\.html/g.test(fileFullPath)) continue;
        console.log(file);
    };
};

readdir(path.resolve(__dirname, "../", "../"));
