import { Perlin2D } from "wasm-noise";
var perlin = Perlin2D.new();
document.getElementById("output");
let t = 0;
let size = 150;

function write() {
  //   console.log(t);
  let str = `<pre>`;
  let s = 0.03;
  t++;
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      let xo = perlin.get3(i * s, j * s, t * 0.01);
      let v = perlin.get3((i + xo * 10) * s, (j + 55.4) * s, t * 0.01);
      let c = " ";
      if (v > -0.3) {
        c = ".";
      }
      if (v > 0.3) {
        c = "*";
      }
      if (v > 0.6) {
        c = "#";
      }
      str += c;
    }
    str += "\n";
  }
  output.innerHTML = str;
  window.requestAnimationFrame(write);
}

window.requestAnimationFrame(write);
