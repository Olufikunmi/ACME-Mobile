/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var LogInModel = Backbone.Model.extend({
        defaults: {
            login: 'N/A',
            password: 'N/A'
        },

        url: function()  {
            return 'http://ctvbootcamp.herokuapp.com/login';            ;
        }
    });

    return LogInModel;
});
