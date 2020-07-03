module.exports=()=>{
    return async function error_handler(ctx,next){
        try{

            await  next()
        }catch (e) {
            console.log(e)
            ctx.logger.error({date:Date.now(),e});
            const status = e.status || 500;
            // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
            const error = '服务器内部错误！'

            // 从 error 对象上读出各个属性，设置到响应中
            ctx.body = {status:"FAILED", message:error };
            if (status === 422) {
                ctx.body.message = e.errors;
            }
            ctx.status = status;
        }
    }
}