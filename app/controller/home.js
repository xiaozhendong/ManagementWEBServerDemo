'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1" />
    <meta name="viewport" content="width=device-width" />
    <title>icejs simple app</title>
  <link rel="shortcut icon" href="/public/favicon.png"><link href="/public/css/index.css" rel="stylesheet"></head>

  <body>
    <div id="ice-container"></div>
  <script type="text/javascript" src="/public/js/index.js"></script></body>
</html>`;
  }
}

module.exports = HomeController;
