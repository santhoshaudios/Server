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
        .clone(`https://itsmanibharathi:${process.env.gitTOKEN}@${process.env.githubID}`)
        console.log(process.env.gitTOKEN);
    }

    return true
}