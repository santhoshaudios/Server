
const jsonfile = require('jsonfile')
const file = './codestack/Client/src/asserts/content/content.json'
const Fs = require('fs')  
const { checkRepo } = require('../services/chickRepo')


module.exports.getdata = async (req,res)=>{
    await checkRepo()
    if(Fs.existsSync(file)){   
        jsonfile.readFile(file, function (err, obj) {
            if (err) {
                // console.log(err);
                res.send({'status':false,'msg':err})
            }
            console.log('getdata');
            res.send({'status':true,'object':obj})
        })
    }
    else
    res.send({'status':false,'msg':'no page found'})
}
module.exports.savedata = async (req,res)=>{
    await checkRepo()
    if(Fs.existsSync(file)){   
        jsonfile.readFile(file, function (err, obj) {
            if (err) {
                // console.log(err);
                res.send({'status':false,'msg':err})
            }
            else if(obj){
                obj[req.body.key] = req.body.value ;
                jsonfile.writeFile(file,obj,function(err,obj){
                    if (err) {
                        console.log(err);
                        res.send({'status':false,'msg':err})
                    }
                    res.send({'status':true,'object':obj})
                })
            }
        })
    }
    else
    res.send({'status':false,'msg':'no page found'})

}

