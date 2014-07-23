/*global require*/
'use strict';

require.config({
    shim: {
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore'
    }
});

require([
    'backbone',
    'routes/AcmeMobileRouter'
], function (Backbone, Router) {
    Router.initialize();
    console.log ("Router is up")
});
