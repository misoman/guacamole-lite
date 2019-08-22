#!/usr/bin/env node
const Server = require('./lib/Server.js');
const websocketOptions = {
    port: 8080
};
const guacdOptions = {
    port: 4822,
    host: '127.0.0.1'
};
const clientOptions = {
    crypt: {
        cypher: 'AES-256-CBC',
        key: 'MySuperSecretKeyForParamsToken12'
    },
    log: {
        level: 'DEBUG'
    }
};
const guacServer = new Server(websocketOptions, guacdOptions, clientOptions);