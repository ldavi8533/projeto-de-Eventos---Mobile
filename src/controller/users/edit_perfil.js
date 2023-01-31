const User = require("../../models/User")

async function updateUser(req, res) {
    User.findOne({email: req.params.email}).then((user) =>{
      res.render('edit',{user: user})
    })
  }
  
async function confirmEdit(req, res) {
    User.findOne({email: req.body.email}).then((user)=>{
  
      user.nome = req.body.nome
      user.apelido = req.body.apelido
      user.email = req.body.email
      user.telefone = req.body.telefone
      user.save().then(()=>{
        res.render('confirmedit')
      })
  
    })
  }

  module.exports = {updateUser, confirmEdit}