/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/TransactionModel'
], function ($, _, Backbone, JST, TransactionModel) {
    'use strict';

    var TransactionView = Backbone.View.extend({
        transactionTemplate: JST['app/scripts/templates/TransactionView.ejs'],

        events: {
            'submit #transfer': 'submit'
        },

        el: $("#page"),

        render: function (transactionType) {
            $('.menu li').removeClass('active');
            $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
            var that = this;
            that.$el.html(that.transactionTemplate);
            if(transactionType == "transfer"){
                $(".transfer").show();
            }
            else{
                $(".billPay").show();
            }

        },

        submit: function(e) {
            e.preventDefault();
            console.log("Transfer");

            $("input").attr('disabled', 'disabled');
            $("select").attr('disabled', 'disabled');
            $(".transferSuccess").show();
            $("#btnSubmit").hide();
        }
    });

    return TransactionView;
});
