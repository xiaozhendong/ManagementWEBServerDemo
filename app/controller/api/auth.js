

module.exports.create= async (ctx)=> {

       const createLoginAuthRule = {

           username: { type: 'string',  required: true },
           password: { type: 'string',  required: true },
       };
        // 校验 `ctx.request.body` 是否符合我们预期的格式
        // 如果参数校验未通过，将会抛出一个 status = 422 的异常
        ctx.validate(createLoginAuthRule, ctx.request.body);
        const {username,password}=ctx.request.body

        const Token = await ctx.service.token.createToken(username,password);

        ctx.body={
            status:"SUCCESS",
            message:"",
            data:{
                token:Token,
                keys:ctx.app.config.keys
            }
        }
        ctx.status=200
    }



