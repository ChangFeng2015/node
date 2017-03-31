/**
 * Created by Dave on 2017/3/27.
 */
var register = require('babel-core/register');

register({
    presets:['stage-3']
});

require('./app.js');