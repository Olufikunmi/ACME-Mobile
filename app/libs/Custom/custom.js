/**
 * Created by oajayi on 7/22/2014.
 */
Number.prototype.formatMoney2 = function(c, d, t){
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
Number.prototype.formatMoney = function(numberOfDecimals){
    var numberString = this.formatMoney2(numberOfDecimals);
    numberString = "$" + numberString;
    if(numberString.indexOf("-")>-1){
        numberString = numberString.replace("-", "");
        numberString = "(" + numberString;
        numberString = numberString + ")";
    }
    return numberString;
};
String.prototype.getMonth = function(){
    var dateParts = this.split("-");
    return dateParts[1];
};
String.prototype.getDay = function(){
    var dateParts = this.split("-");
    return dateParts[2];
};