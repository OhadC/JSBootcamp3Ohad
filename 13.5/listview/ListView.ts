class ListView {
    constructor(private element) { }

    add(str) {
        const li = document.createElement("li");
        const node = document.createTextNode(str);
        li.appendChild(node)
        this.element.appendChild(li)
    }
}
