const d = new Date();
console.log(d);

async function getComponent() {
    const element = document.createElement('div');
    const text = document.createTextNode('text');
    element.appendChild(text);

    const t = await import(/* webpackChunkName: "lodash" */ 'text');

    return element;
}

getComponent().then(component => {
    document.body.appendChild(component);
});