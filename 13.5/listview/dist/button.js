var Button = /** @class */ (function () {
    function Button(element) {
        this.element = element;
    }
    Button.prototype.click = function (callback) {
        this.element.addEventListener("click", callback);
    };
    return Button;
}());
//# sourceMappingURL=button.js.map