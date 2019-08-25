import inView from "in-view";

// in-view supports all modern browsers and IE9+ ///////////////////////////////////////////////////////////////////////

inView.threshold(0.5);

inView('.begin')
    .on('enter', (el) => {
        el.setAttribute('data-on', true);
        particles();
    })
    .on('exit', (el) => {
        el.removeAttribute('data-on');
        initCanvas();
    });

inView('section, header')
    .on('enter', (el) => {
        el.setAttribute('on', 'on');
    })
    .on('exit', (el) => {
        el.removeAttribute('on');
    });

// COLORS //////////////////////////////////////////////////////////////////////////////////////////////////////////////

var canvas = document.getElementById('canvas');
if (canvas) {
    var width = 300;
    var height = 300;
    var context = canvas.getContext("2d");
    for (var i = 0; i < width; ++i) {
        var t = i / width;
        var r = Math.floor(255 * Math.sin(Math.PI * (t + 0 / 3)) ** 2);
        var g = Math.floor(255 * Math.sin(Math.PI * (t + 1 / 3)) ** 2);
        var b = Math.floor(255 * Math.sin(Math.PI * (t + 2 / 3)) ** 2);
        context.fillStyle = `rgb(${r},${g},${b})`;
        context.fillRect(i, 0, 1, height);
    }
}


