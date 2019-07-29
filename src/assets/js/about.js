

function component() {
    const element = document.createElement('div');
    const beyond = document.querySelector('body');
    beyond.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        const print = module.default;
        print();
    });
    return element;
}

component();
