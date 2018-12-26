var fs=require('fs')
var path=require('path')
var Storage=require('../Storage')

function deleteUser(user,callback){
  Storage.getData('users')
          .then(function(users){
            var resultUsers=users.current.filter(function(mapUser){
              return mapuser.nombre!=user.nombre
            })
            var userDataPath=path.join(__dirname,'../')+'/Storage/data/user.json'
            fs.writeFile(userDataPath,JSON.stringify({current:resultUsers}),function(err){
              if(err) callback(err)
              callback(null,'ok')
            })
          }).catch(function(err){
            callback(err)
          })
}

module.exports=deleteUser
