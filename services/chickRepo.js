// const { default: simpleGit } = require("simple-git");
const { promises: Fs } = require('fs');
const path = require("path");
const { default: simpleGit } = require('simple-git');

async function exists (path) {  
  try {
    await Fs.access(path)
    return true
  } catch {
    return false
  }
}
module.exports.checkRepo = async ()=> {
  console.log(path.join('./','codestack','Client'));
    console.log(await exists(  path.join("./",'codestack','Client')));
    if(! await exists(path.join('./','codestack','Client'))){
        // console.log('hi'+);
        new simpleGit(path.join('./codestack'))
        .outputHandler((command, stdout, stderr) => {
          stdout.pipe(process.stdout);
          stderr.pipe(process.stderr)
          stdout.on('data', (data) => {
            console.log(data.toString('utf8'));
            res.json({"status":true,msgg:data.toString('utf8')})
          })
        })
        .clone(`https://Santhosh-erode:${process.env.gitTOKEN}@${process.env.githubID}`)
        console.log(process.env.gitTOKEN);
    }

    return true
}