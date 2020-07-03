/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};
    config.author="xiaozhendong"
    // use for cookie sign key, should change to your own and keep security
    config.appName= appInfo.name
    config.keys = appInfo.name + '_1592656009900_6142';
    config.security = {
        csrf: {
            enable: false,
        },
    }
    // add your middleware config here
    config.middleware = ['errorHandler']
    // 只对 /api 前缀的 url 路径生效
    config.errorHandler = {
        match: '/api',
    }

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};
