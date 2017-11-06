const server = require('server');
const express = require('express');
const { modern } = server.utils;

const middleware = modern(express.static('./'));

server(middleware).then(ctx => {
  console.log(`Server running at: http://localhost:${ctx.options.port}/`);
})
