require("dotenv").config();
const crypto = require('crypto');
const User = require("../../models/User");
const mailer = require('../../models/mailer');

async function forgot_password(req, res) {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email }); 

        if(!user) 
            return res.status(400).send({ error: 'Usuário não encontrado em nossa base de dados'});

        const token = crypto.randomBytes(20).toString('hex');
        
        
        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordResetToken: token,            
                  }
            },
            );

        console.log(token);

        mailer.sendMail({
            to: email, 
            subject: 'Recuperação de acesso',
            from: 'rafa@gmail.com.br',
            template: 'auth/forgot_password',
            context: { token },
        }, (err) => {
           if (err) 
            return res.status(400).send({ error: 'Não foi possivel enviar o e-mail de recuperação de senha'});

            return res.status(200).send({ status: 'E-mail enviado com sucesso'});
        });
    } catch (err) {
        console.log(err);
        res.status(400).send({ error: 'Falha no sistema de recuperação de senha, tente novamente mais tarde'});
    }
};

module.exports = forgot_password;