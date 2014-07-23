/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/AccountCollection'
], function ($, _, Backbone, JST, AccountsCollection) {
    'use strict';

    var AccountSummaryView = Backbone.View.extend({
        accountSummaryTemplate: JST['app/scripts/templates/AccountSummaryView.ejs'],

        el: $("#page"),

        render: function () {
            $('.menu li').removeClass('active');
            $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
            var that = this;
            this.accountsCollection = new AccountsCollection();
            console.log("Fetching transactions from: " + this.accountsCollection.url);

            this.accountsCollection.fetch({ //fetch data from ACME server
                success: function (accountsCollection) {
                    var template = that.accountSummaryTemplate({accountsList: accountsCollection.models});
                    that.$el.html(template);
                }
            });

            return this;
        }
    });
    return AccountSummaryView;
});
