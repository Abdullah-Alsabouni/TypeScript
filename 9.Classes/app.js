var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes \u00A3").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('Abdulah', 'Work in the OpenAI', 10000000);
var invTwo = new Invoice('luigi', 'Work in the luigi web site', 1000);
console.log(invOne, invTwo);
