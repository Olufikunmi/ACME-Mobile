/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var TransactionModel = Backbone.Model.extend({

        url: '',

        defaults: {
            toAccount:"",
            fromAccount:"",
            transDate:"",
            transAmount:"",
            transType:""
        },


        parse: function(response, options)  {
            return response;
        }
    });

    return TransactionModel;
});
