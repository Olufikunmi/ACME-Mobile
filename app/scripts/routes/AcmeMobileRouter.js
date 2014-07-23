/*global define*/

define([
    'jquery',
    'backbone',
    '../views/AccountSummaryView',
    '../views/LogInView',
    '../views/ContactView',
    '../views/AccountDetailsView',
    '../views/TransactionView'
], function ($, Backbone, AccountSummaryView, LogInView, ContactView, AccountDetailsView, TransactionView) {
    'use strict';
    console.log ("router")
    var AcmeMobileRouter = Backbone.Router.extend({
        routes: {
            'accounts' : 'showAccounts',
            'account/:accountID': 'showTransactions',
            'contact' : 'showContact',
            'transfer': 'showTransfer',
            'bill': 'showTransfer',

            //Default
            '': 'logIn'
        }

    });

    var initialize = function(){
        var acmeMobileRouter = new AcmeMobileRouter;

        acmeMobileRouter.on('route:showAccounts', function(){

            // Call render on the module we loaded in via the dependency array
            var accountSummaryView = new AccountSummaryView();
            accountSummaryView.render();
            console.log("Account Summary View");
        });

        acmeMobileRouter.on('route:showTransactions', function (accountId) {

            // Like above, call render but know that this view has nested sub views which
            // handle loading and displaying data from the GitHub API
            var accountDetailsView = new AccountDetailsView();
            accountDetailsView.render(accountId);
        });

        acmeMobileRouter.on('route:logIn', function (actions) {

            // We have no matching route, lets display the home page
            var logInView = new LogInView();
            logInView.render();
        });
        // Unlike the above, we don't call render on this view as it will handle
        // the render call internally after it loads data. Further more we load it
        // outside of an on-route function to have it loaded no matter which page is
        // loaded initially.

        acmeMobileRouter.on('route:showTransfer', function () {

            // We have no matching route, lets display the home page
            console.log("Route: " + Backbone.history.fragment);
            var transferView = new TransactionView();
            transferView.render(Backbone.history.fragment);
        });

        acmeMobileRouter.on('route:showContact', function () {

            // We have no matching route, lets display the home page
            var contactView = new ContactView();
            contactView.render();
        });

        Backbone.history.start();
        console.log ("Backbone is up!!")

    };
    return {
        initialize: initialize
    };

    return AcmeMobileRouter;
});
