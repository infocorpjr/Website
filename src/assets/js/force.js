//
const updateFPS = 30
var showMouse = true
var time = 0

//
var controls = {
    ay: 0.5,
    fade: 0.96,
    v: 15,
    gcount: 15,
    clearForces() {
        forces = []
    }
}
var gui = new dat.GUI()
gui.add(controls, "ay", -2, 2).step(0.01)
gui.add(controls, "fade", 0, 1).step(0.01)
gui.add(controls, "v", 0, 50).step(0.1)
gui.add(controls, "gcount", 0, 100).step(1)
gui.add(controls, "clearForces")

class Particle {
    constructor(args) {
        let def = {
            p: new Vec2(0, 0),
            v: new Vec2(1, 0),
            a: new Vec2(0, 0),
            r: 1,
            color: "#fff"
        }
        Object.assign(def, args)
        Object.assign(this, def)
    }

    update() {
        this.p = this.p.add(this.v)
        this.v = this.v.add(this.a)
        this.v.move(0, controls.ay)
        this.v = this.v.mul(0.99 - this.r / 200)
        this.r *= controls.fade
        if (this.p.y + this.r > wh) {
            this.v.y = -Math.abs(this.v.y)
        }
        if (this.p.y - this.r < 0) {
            this.v.y = Math.abs(this.v.y)
        }
        if (this.p.x + this.r > ww) {
            this.v.x = -Math.abs(this.v.x)
        }
        if (this.p.x - this.r < 0) {
            this.v.x = Math.abs(this.v.x)
        }
    }

    draw() {
        ctx.save()
        ctx.translate(this.p.x, this.p.y)
        ctx.beginPath()
        ctx.arc(0, 0, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.restore()
    }
}

class Forcefield {
    constructor(args) {
        let def = {
            p: new Vec2(0, 0),
            value: 100
        }
        Object.assign(def, args)
        Object.assign(this, def)
    }

    draw() {
        ctx.save()
        ctx.translate(this.p.x, this.p.y)
        ctx.beginPath()
        ctx.arc(0, 0, Math.sqrt(Math.abs(this.value)), 0, Math.PI * 2)
        ctx.fillStyle = "white"
        ctx.fill()
        ctx.restore()
    }

    affect(particle) {
        let delta = particle.p.sub(this.p)
        let len = this.value / (1 + delta.length)
        let force = delta.unit.mul(len)
        // console.log(delta)
        particle.v.move(force.x, force.y)

    }
}

var particles = []
var forces = []

function init() {
    mousePos = new Vec2(ww / 2, wh / 2)
}

//Logic update
function update() {
    particles = particles.concat(Array.from({length: controls.gcount || 10}, (d, i) => {
        return new Particle({
            p: mousePos.clone(),
            v: new Vec2(Math.random() * controls.v - controls.v / 2, Math.random() * controls.v - controls.v / 2),
            r: Math.random() * 30,
            color: `rgba(255,${parseInt(Math.random() * 255)},${parseInt(Math.random() * 150)},1)`
        })
    }));

    var sp = particles.slice()
    sp.forEach((p, i) => {
        p.update()
        forces.forEach(f => f.affect(p))
        if (p.r < 0.1) {
            let d = sp.splice(i, 1)
            // delete d
        }
    });
    particles = sp
}


var time = 0

//
function render() {
    time++
    //
    ctx.fillStyle = "rgba(0,0,0,0.5)"
    ctx.fillRect(0, 0, ww, wh)

    //-------------------------
    //

    particles.forEach(p => p.draw())
    forces.forEach(f => f.draw())

    //-----------------------
    //

    ctx.fillStyle = "red"
    ctx.beginPath()
    ctx.circle(mousePos, 2)
    ctx.fill()

    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = "white"
    ctx.translate(mousePos.x, mousePos.y)
    ctx.strokeStyle = "red"
    let len = 20
    ctx.line(new Vec2(-len, 0), new Vec2(len, 0))
    ctx.line(new Vec2(0, -len), new Vec2(0, len))
    ctx.fillText(mousePos, 10, -10)
    ctx.stroke()
    ctx.restore()

    //schedule next render
    requestAnimationFrame(render)
}


//-------------------------------------
//-----Vec2 library
//
class Vec2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    set(x, y) {
        this.x = x
        this.y = y
    }

    add(v) {
        return new Vec2(this.x + v.x, this.y + v.y)
    }

    sub(v) {
        return this.add(v.mul(-1))
    }

    mul(s) {
        return new Vec2(this.x * s, this.y * s)
    }

    move(x, y) {
        this.x += x
        this.y += y
        return this
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    clone() {
        return new Vec2(this.x, this.y)
    }

    toString() {
        return `(${this.x},${this.y})`
    }

    equal(v) {
        return this.x == v.x && this.y == v.y
    }

    get angle() {
        return Math.atan2(this.y, this.x)
    }

    get degree() {
        return 360 * this.angle / 2 / Math.PI
    }

    get unit() {
        return this.mul(1 / this.length)
    }
}

//-----------------------------

//init canvas element
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//circle patch
ctx.circle = function (v, r) {
    this.arc(v.x, v.y, r, 0, Math.PI * 2)
};
//line Patch
ctx.line = function (v1, v2) {
    this.moveTo(v1.x, v1.y)
    this.lineTo(v2.x, v2.y)
};


window.addEventListener("resize", initCanvas)
window.addEventListener("load", loaded)

canvas.addEventListener("mousemove", mousemove)
canvas.addEventListener("mouseup", mouseup)
canvas.addEventListener("mousedown", mousedown)

canvas.addEventListener("dblclick", mousedblclick)

//
function initCanvas() {
    ww = canvas.width = window.innerWidth
    wh = canvas.height = window.innerHeight
}

//
function loaded() {
    initCanvas()
    init()
    requestAnimationFrame(render)
    setInterval(update, 1000 / updateFPS)
}

//
var mousePos = new Vec2(0, 0)
var mousePosDown = new Vec2(0, 0), mousePosUp = new Vec2(0, 0)

function mousedblclick(evt) {
    mousePos.set(evt.offsetX, evt.offsetY)
    var force = new Forcefield({p: mousePos.clone()})
    forces.push(force)
}

function mousemove(evt) {
    mousePos.set(evt.offsetX, evt.offsetY)
}

function mousedown(evt) {
    mousePos.set(evt.offsetX, evt.offsetY)
    mousePosDown = mousePos.clone()
}

function mouseup(evt) {
    mousePos.set(evt.offsetX, evt.offsetY)
    mousePosUp = mousePos.clone()
}