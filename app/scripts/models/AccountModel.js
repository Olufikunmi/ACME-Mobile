/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var AccountModel = Backbone.Model.extend({
        defaults: {
            accountId: "N/A",
            accountNumber: "N/A",
            productName: "N/A",
            productGroup: "N/A",
            currentBalance: "",
            availableBalance: "",
            availableCredit:"",
            transactions: ""
        },

        url:""/*,

        parse: function(response){
            return response.accountDetails;
        }
*/
    });

    return AccountModel;
});
