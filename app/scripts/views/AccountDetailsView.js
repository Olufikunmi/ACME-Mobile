/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/AccountModel'
], function ($, _, Backbone, JST, AccountModel) {
    'use strict';

    var AccountDetailsView = Backbone.View.extend({
        accountDetailsTemplate: JST['app/scripts/templates/AccountDetailsView.ejs'],

        el: $("#page"),

        render: function(accountId) {
            $('.menu li').removeClass('active');
            $('.menu li a[href="' + window.location.hash + '"]').parent().addClass('active');
            var that = this;
            var transactionsModel = new AccountModel();
            transactionsModel.url = "http://ctvbootcamp.herokuapp.com/accounts/" + accountId;
            console.log("Fetching transactions from: " + transactionsModel.url);
            console.log("Transactions Model " + transactionsModel);
            transactionsModel.fetch({ //fetch data from ACME server
                success: function (transactionsModel) {
                    var template = that.accountDetailsTemplate({transactionsModel: transactionsModel.attributes.accountDetails});
                    console.log("after template bind ");
                    that.$el.html(template);
                }
            });
        }

});
    return AccountDetailsView;
});
