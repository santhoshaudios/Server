const repoModel = require("../model/repoModel");
const { checkRepo } = require("../services/chickRepo");
const { default: simpleGit } = require("simple-git");
module.exports.addRepo = async (req,res)=>{
    console.log(req.body);
    try {
        const {reponame}= req.body;
        const email= req.body.userdata.email;
        if(email && reponame){
            const repo= await repoModel.create({email,reponame});
            console.log(repo);
            res.status(200).json({ status: true,msg:'repository successfull added'});
        }
        res.status(200).json({status: false,msg : "Repostiry name is required"})

    } catch (error) {
        
    }
}
module.exports.pushRepo = async (req,res)=>{
    await checkRepo()
    const val=req.body.msg || "force101";
    try {
        await new simpleGit('./codestack/Client/')
        .outputHandler((command, stdout, stderr) => {
          stdout.pipe(process.stdout);
          stderr.pipe(process.stderr)
          stdout.on('data', (data) => {
            console.log(data.toString('utf8'));
          })
        })
        .addConfig('user.name', 'Santhoshaudios')
        .addConfig('user.email', 'santhoshaudios@gmail.com')
        .add('.')
        .commit(val, '.');

        await new simpleGit('./codestack/Client/')
        .push('origin','master')
        res.json({"status":true})
    } catch (error) {
        res.json({"status":false ,"message":error})    
    }
}