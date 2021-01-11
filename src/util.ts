export default function addItem(value: string) {
    const node = document.createElement("li");
    const textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);

}