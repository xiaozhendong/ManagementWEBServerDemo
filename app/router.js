'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  console.log(app.config.env)
  router.get('/', controller.home.index);
};
