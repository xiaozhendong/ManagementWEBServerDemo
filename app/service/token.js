const Service = require('egg').Service;
const jwt = require("jsonwebtoken");

class TokenService extends Service {
    async createToken(username,password){

        let Token = jwt.sign({
            data: username
        }, this.app.config.keys, { expiresIn: '2h' });
        return Token;

    }
}

module.exports=TokenService