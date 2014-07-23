/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/LogInModel'
], function ($, _, Backbone, JST, LogInModel) {
    'use strict';

    var LogInView = Backbone.View.extend({
        logInTemplate: JST['app/scripts/templates/LogInView.ejs'],

        events: {
            'submit #logIn': 'submit'
        },

        el: $("#page"),

        render: function() {
            var that = this;
            $('.menu li').removeClass('active');
            $('.menu li a[href="#"]').parent().addClass('active');
            this.$el.html(that.logInTemplate);
            console.log ("LogIn View")
        },

        submit: function(e) {
            e.preventDefault();

            var newLogIn = new LogInModel({});
            var login = this.$('input[name=username]').val();
            var password = this.$('input[name=password]').val();
            newLogIn.login = login;
            newLogIn.password = password;

            console.log("login: " + newLogIn.login);
            console.log("password: " + newLogIn.password);

            newLogIn.save({}, {
                success: function(model, response) {
                    console.log('SUCCESS:');
                    console.log(response);
                    Backbone.history.navigate('#accounts', true);
                },
                error: function(model, response){
                    console.log('Failure:');
                    console.log(response);
                    $(".error").show();
                }
            });

        }
    });

    return LogInView;
});
