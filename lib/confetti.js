// Confetti Script by "Michael Beckius" https://codepen.io/bananascript/pen/EyZeWm **Changed**

"use strict";

let container = null;
let confetti = [];
let isAnimating = false;
let animationFrameId = null;

function startConfetti(duration = 3000) {
  var random = Math.random,
    cos = Math.cos,
    sin = Math.sin,
    PI = Math.PI,
    PI2 = PI * 2,
    timer = undefined,
    frame = undefined;

  var particles = 10,
    spread = 40,
    sizeMin = 3,
    sizeMax = 12 - sizeMin,
    eccentricity = 10,
    deviation = 100,
    dxThetaMin = -0.1,
    dxThetaMax = -dxThetaMin - dxThetaMin,
    dyMin = 0.05,
    dyMax = 0.3,
    dThetaMin = 0.4,
    dThetaMax = 0.7 - dThetaMin;

  var colorThemes = [
    function () {
      return color(
        (25 + random() * 255) | 0,
        (100 + random() * 150) | 0,
        (100 + random() * 100) | 0
      );
    },
    function () {
      var black = (150 + random() * 105) | 0;
      return color(255, black, black);
    },
    function () {
      var black = (150 + random() * 105) | 0;
      return color(black, 255, black);
    },
    function () {
      var black = (150 + random() * 105) | 0;
      return color(black, black, 255);
    },
    function () {
      return color(255, 200, (150 + random() * 105) | 0);
    },
    function () {
      return color((150 + random() * 105) | 0, 255, 255);
    },
    function () {
      var gray = (200 + random() * 55) | 0;
      return color(gray, gray, gray);
    },
    function () {
      return colorThemes[random() < 0.5 ? 1 : 2]();
    },
    function () {
      return colorThemes[random() < 0.5 ? 3 : 5]();
    },
    function () {
      return colorThemes[random() < 0.5 ? 2 : 4]();
    },
  ];

  function color(r, g, b) {
    r = Math.max(0, Math.min(255, Math.floor(r)));
    g = Math.max(0, Math.min(255, Math.floor(g)));
    b = Math.max(0, Math.min(255, Math.floor(b)));
    return `rgb(${r},${g},${b})`;
  }

  function interpolation(a, b, t) {
    t = Math.max(0, Math.min(1, t));
    return ((1 - Math.cos(Math.PI * t)) / 2) * (b - a) + a;
  }

  var radius = 1 / eccentricity,
    radius2 = radius + radius;
  function createPoisson() {
    var domain = [radius, 1 - radius],
      measure = 1 - radius2,
      spline = [0, 1],
      maxIterations = 1000;
    let iterationCount = 0;
    while (measure && iterationCount < maxIterations) {
      iterationCount++;
      var dart = measure * random(),
        i,
        l,
        interval,
        a,
        b,
        c,
        d;
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        (a = domain[i]), (b = domain[i + 1]), (interval = b - a);
        if (dart < measure + interval) {
          spline.push((dart += a - measure));
          break;
        }
        measure += interval;
      }
      (c = dart - radius), (d = dart + radius);
      for (i = domain.length - 1; i > 0; i -= 2) {
        (l = i - 1), (a = domain[l]), (b = domain[i]);
        if (a >= c && a < d)
          if (b > d) domain[l] = d;
          else domain.splice(l, 2);
        else if (a < c && b > c)
          if (b <= d) domain[i] = c;
          else domain.splice(i, 0, c, d);
      }
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i + 1] - domain[i];
    }

    return spline.sort();
  }

  if (!container) {
    container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "0";
    container.style.overflow = "visible";
    container.style.zIndex = "9999";
    document.body.appendChild(container);
  }

  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement("div");
    this.inner = document.createElement("div");
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style,
      innerStyle = this.inner.style;
    outerStyle.position = "absolute";
    outerStyle.width = sizeMin + sizeMax * random() + "px";
    outerStyle.height = sizeMin + sizeMax * random() + "px";
    innerStyle.width = "100%";
    innerStyle.height = "100%";
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = "50px";
    outerStyle.transform = "rotate(" + 360 * random() + "deg)";
    this.axis =
      "rotate3D(" + cos(360 * random()) + "," + cos(360 * random()) + ",0,";
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + "deg)";

    this.x = window.innerWidth * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + "px";
    outerStyle.top = this.y + "px";

    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function (height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      var phi = (this.frame % 7777) / 7777,
        i = 0,
        j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + "px";
      outerStyle.top = this.y + rho * sin(phi) + "px";
      innerStyle.transform = this.axis + this.theta + "deg)";
      return this.y > height + deviation;
    };
  }

  function poof() {
    var theme = colorThemes[0];
    let confetiEklenecekAdet = 300 - confetti.length;

    if (confetti.length < 300) {
      let eklenecekAdet = Math.min(confetiEklenecekAdet, 50);
      for (let i = 0; i < eklenecekAdet; i++) {
        let confetto = new Confetto(theme);
        confetti.push(confetto);
        container.appendChild(confetto.outer);
      }
    }

    if (!isAnimating) {
      isAnimating = true;
      animate();
    }
  }

  function animate(timestamp) {
    if (!isAnimating) return;

    let delta = lastTime ? timestamp - lastTime : 0;
    lastTime = timestamp;
    let height = window.innerHeight;

    for (let i = confetti.length - 1; i >= 0; --i) {
      if (confetti[i].update(height, delta)) {
        container.removeChild(confetti[i].outer);
        confetti.splice(i, 1);
      }
    }

    if (confetti.length === 0) {
      stopConfetti();
      return;
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  let lastTime = null;

  function stopConfetti() {
    isAnimating = false;
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    setTimeout(() => {
      if (container) {
        document.body.removeChild(container);
        container = null;
      }
    }, duration);
  }

  poof();
}
