/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ContactView = Backbone.View.extend({
        contactTemplate: JST['app/scripts/templates/ContactView.ejs'],

        el: $("#page"),

        render: function () {
            var that = this;
            $('.menu li').removeClass('active');
            $('.menu li a[href="#"]').parent().addClass('active');
            that.$el.html(that.contactTemplate);
            console.log("Contact View")
        }
    });

    return ContactView;
 });


