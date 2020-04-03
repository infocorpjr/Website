import inView from "in-view";

// IN VIEW /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// in-view supports all modern browsers and IE9+ ///////////////////////////////////////////////////////////////////////

inView.threshold(0.5);

inView('.home__header')
    .on('enter', (el) => {
        el.setAttribute('data-on', true);
    })
    .on('exit', (el) => {
        el.removeAttribute('data-on');
    });

inView('section, header')
    .on('enter', (el) => {
        el.setAttribute('on', 'on');
    })
    .on('exit', (el) => {
        el.removeAttribute('on');
    });
