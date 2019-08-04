import inView from "in-view";
inView.threshold(0.5);
inView('section, header')
    .on('enter', (el) => {
        el.setAttribute('on', 'on');
    })
    .on('exit', (el) => {
        el.removeAttribute('on');
    });