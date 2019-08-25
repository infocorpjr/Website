/**
 *
 * @return void
 */
function openMenu() {
    const body = document.body;
    if (body.hasAttribute('menu')) {
        return;
    }
    body.setAttribute('menu', '');
}

function closeMenu() {
    const body = document.body;
    if (!body.hasAttribute('menu')) {
        return;
    }
    body.removeAttribute('menu')
}

let hamburger_open = document.getElementById('hamburger_open');
if (hamburger_open) {
    if (hamburger_open.addEventListener) {
        hamburger_open.addEventListener('click', openMenu, false);
    } else if (hamburger_open.attachEvent) {
        hamburger_open.attachEvent('onclick', openMenu);
    }
}

let hamburger_close = document.getElementById('hamburger_close');
if (hamburger_close) {
    if (hamburger_close.addEventListener) {
        hamburger_close.addEventListener('click', closeMenu, false);
    } else if (hamburger_close.attachEvent) {
        hamburger_close.attachEvent('onclick', closeMenu);
    }
}
