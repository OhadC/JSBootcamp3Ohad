var ListView = /** @class */ (function () {
    function ListView(element) {
        this.element = element;
    }
    ListView.prototype.add = function (str) {
        var li = document.createElement("li");
        var node = document.createTextNode(str);
        li.appendChild(node);
        this.element.appendChild(li);
    };
    return ListView;
}());
//# sourceMappingURL=ListView.js.map