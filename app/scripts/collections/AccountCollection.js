/*global define*/

define([
    'underscore',
    'backbone',
    'models/AccountModel'
], function (_, Backbone, AccountModel) {
    'use strict';

    var AccountCollection = Backbone.Collection.extend({
        model: AccountModel,
        url: 'http://ctvbootcamp.herokuapp.com/accounts',
        parse: function(response){
            return response.accountSummary.accounts;
        }
    });

    return AccountCollection;
});
