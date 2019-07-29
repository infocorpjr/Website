import inView from "in-view";

// IN VIEW /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// in-view supports all modern browsers and IE9+ ///////////////////////////////////////////////////////////////////////

inView.threshold(0.5);

inView('.home__header')
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

// PARTICLES ///////////////////////////////////////////////////////////////////////////////////////////////////////////
let canvas = document.getElementById('particles');
canvas.width = canvas.parentNode.clientWidth || canvas.parentNode.offsetWidth || canvas.parentNode.scrollWidth || 0;
canvas.height = canvas.parentNode.clientHeight || canvas.parentNode.offsetHeight || canvas.parentNode.scrollHeight || 0;

let c = canvas.getContext('2d');
let frame = 0;
let mouse = {
    x: undefined,
    y: undefined
};

let circleArray = [];
let colorArray = [
    '0,0,0',
    '118,225,244',
    '242,89,114',
    '95,161,244',
    '109,216,175',
    '255,255,89',
];

window.addEventListener('resize', function () {
    canvas.width = canvas.parentNode.clientWidth || canvas.parentNode.offsetWidth || canvas.parentNode.scrollWidth || 0;
    canvas.height = canvas.parentNode.clientHeight || canvas.parentNode.offsetHeight || canvas.parentNode.scrollHeight || 0;
    initCanvas();
});

function Circle(x, y, radius, vx, vy, rgb, opacity, birth, life) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.minRadius = radius;
    this.vx = vx;
    this.vy = vy;
    this.birth = birth;
    this.life = life;
    this.opacity = opacity;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        c.fillStyle = 'rgba(' + rgb + ',' + this.opacity + ')';
        c.fill();
    };

    this.update = function () {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.vx = -this.vx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.vy = -this.vy;
        }

        this.x += this.vx;
        this.y += this.vy;

        this.opacity = 1 - (((frame - this.birth) * 1) / this.life);

        if (frame > this.birth + this.life) {
            for (let i = 0; i < circleArray.length; i++) {
                if (this.birth == circleArray[i].birth && this.life == circleArray[i].life) {
                    circleArray.splice(i, 1);
                    break;
                }
            }
        } else {
            this.draw();
        }
    }
}


function initCanvas() {
    circleArray = [];
}

function drawCircles() {
    for (let i = 0; i < 80; i++) {
        let radius = 15;
        let vx = (Math.random() * 4) - ((Math.random() * 2) + 1);
        let vy = (Math.random() * 4) - ((Math.random() * 2) + 1);
        let spawnFrame = frame;
        let rgb = colorArray[Math.floor(Math.random() * colorArray.length)];
        let life = 800;
        circleArray.push(new Circle(mouse.x, mouse.y, radius, vx, vy, rgb, 1, spawnFrame, life));

    }
}

function animate() {
    requestAnimationFrame(animate);
    frame += 1;
    c.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

initCanvas();
animate();

// Inicia a animação das particulas ...
function particles() {
    mouse.x = (canvas.parentNode.clientWidth || canvas.parentNode.offsetWidth || canvas.parentNode.scrollWidth || 0) / 10;
    mouse.y = (canvas.parentNode.clientHeight || canvas.parentNode.offsetHeight || canvas.parentNode.scrollHeight || 0) / 2;
    drawCircles();
}
