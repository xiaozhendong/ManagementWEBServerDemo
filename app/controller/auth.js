'use strict';

const Controller = require('egg').Controller;

class AuthController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = 'hi, egg';
    }
}

module.exports = AuthController;
