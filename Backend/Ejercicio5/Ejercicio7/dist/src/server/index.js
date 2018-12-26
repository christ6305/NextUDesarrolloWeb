'use strict';

/*
* Dependencias
*/

var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var port = 8082;
var app = express();

app.use(express.static('public'));