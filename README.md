<p align="center"><img src="assets/capu-animated.svg" width="360" alt="Capu tecleando, con café, con la lata y floreciendo"></p>

<h1 align="center">Capu</h1>

<p align="center">La mascota de <a href="https://deiza.org/code">Deiza Code</a>. Un capullo de rosa hecho bloque.<br>
<a href="https://marcosdeaza.github.io/capu/">Pruébalo en directo</a> · <a href="assets/capu-sheet.png">Ficha del personaje</a> · <a href="https://deiza.org/capu/">Kit de marca</a></p>

---

Capu es ocho píxeles de ancho, el pétalo izquierdo más alto que el resto y dos ojos que no son ojos: son huecos por los que se ve el fondo. Cuando necesita coger algo le brotan dos brazos de hoja. Nada más. Es mono precisamente porque no tiene casi nada.

En Deiza Code vive de pie sobre la barra de escritura: pasea un poco, se toma un café de vez en cuando y reacciona a lo que pasa. Teclea en un portátil lleno de pegatinas mientras el agente escribe, levanta la caja de `node_modules` con cada `npm install`, empuja el commit con `git push`, saca confeti cuando pasan los tests y se tapa la cara cuando fallan, le cuenta el bug al pato de goma, se pone el casco en Build, la gorra de piloto en Copilot, despliega el plano en Plan y se transforma en Super Saiyan cuando subes el esfuerzo a Omnisciente. Cuando la tarea termina, florece. Cuando se acaba el uso, se mustia y se pone a escribir el traspaso.

## Escenas

Hay 44 escenas, todas generadas por código desde [`src/capu.js`](src/capu.js). Cada una es un SVG animado en [`assets/scenes/`](assets/scenes).

**Trabajando**

|   |   |   |   |   |   |
| --- | --- | --- | --- | --- | --- |
| <img src="assets/scenes/thinking.svg" height="90" alt="thinking"> | <img src="assets/scenes/typing.svg" height="90" alt="typing"> | <img src="assets/scenes/reading.svg" height="90" alt="reading"> | <img src="assets/scenes/waiting.svg" height="90" alt="waiting"> | <img src="assets/scenes/web.svg" height="90" alt="web"> | <img src="assets/scenes/npm.svg" height="90" alt="npm"> |
| `thinking` | `typing` | `reading` | `waiting` | `web` | `npm` |
| <img src="assets/scenes/git.svg" height="90" alt="git"> | <img src="assets/scenes/tests.svg" height="90" alt="tests"> | <img src="assets/scenes/pass.svg" height="90" alt="pass"> | <img src="assets/scenes/fail.svg" height="90" alt="fail"> | <img src="assets/scenes/duck.svg" height="90" alt="duck"> | <img src="assets/scenes/fine.svg" height="90" alt="fine"> |
| `git` | `tests` | `pass` | `fail` | `duck` | `fine` |
| <img src="assets/scenes/oops.svg" height="90" alt="oops"> | <img src="assets/scenes/bloom.svg" height="90" alt="bloom"> |
| `oops` | `bloom` |

**Reaccionando a lo que tocas**

|   |   |   |   |   |   |
| --- | --- | --- | --- | --- | --- |
| <img src="assets/scenes/build.svg" height="90" alt="build"> | <img src="assets/scenes/copilot.svg" height="90" alt="copilot"> | <img src="assets/scenes/plan.svg" height="90" alt="plan"> | <img src="assets/scenes/low.svg" height="90" alt="low"> | <img src="assets/scenes/mid.svg" height="90" alt="mid"> | <img src="assets/scenes/high.svg" height="90" alt="high"> |
| `build` | `copilot` | `plan` | `low` | `mid` | `high` |
| <img src="assets/scenes/ultra.svg" height="90" alt="ultra"> | <img src="assets/scenes/saiyan.svg" height="90" alt="saiyan"> | <img src="assets/scenes/calm.svg" height="90" alt="calm"> | <img src="assets/scenes/gas.svg" height="90" alt="gas"> | <img src="assets/scenes/liquid.svg" height="90" alt="liquid"> | <img src="assets/scenes/solid.svg" height="90" alt="solid"> |
| `ultra` | `saiyan` | `calm` | `gas` | `liquid` | `solid` |
| <img src="assets/scenes/listen.svg" height="90" alt="listen"> | <img src="assets/scenes/notes.svg" height="90" alt="notes"> | <img src="assets/scenes/photo.svg" height="90" alt="photo"> | <img src="assets/scenes/halt.svg" height="90" alt="halt"> | <img src="assets/scenes/ask.svg" height="90" alt="ask"> | <img src="assets/scenes/trash.svg" height="90" alt="trash"> |
| `listen` | `notes` | `photo` | `halt` | `ask` | `trash` |

**En reposo**

|   |   |   |   |   |   |
| --- | --- | --- | --- | --- | --- |
| <img src="assets/scenes/idle.svg" height="90" alt="idle"> | <img src="assets/scenes/hello.svg" height="90" alt="hello"> | <img src="assets/scenes/watch.svg" height="90" alt="watch"> | <img src="assets/scenes/walk.svg" height="90" alt="walk"> | <img src="assets/scenes/coffee.svg" height="90" alt="coffee"> | <img src="assets/scenes/can.svg" height="90" alt="can"> |
| `idle` | `hello` | `watch` | `walk` | `coffee` | `can` |
| <img src="assets/scenes/focus.svg" height="90" alt="focus"> | <img src="assets/scenes/water.svg" height="90" alt="water"> | <img src="assets/scenes/stretch.svg" height="90" alt="stretch"> | <img src="assets/scenes/phone.svg" height="90" alt="phone"> | <img src="assets/scenes/sleep.svg" height="90" alt="sleep"> | <img src="assets/scenes/wilt.svg" height="90" alt="wilt"> |
| `focus` | `water` | `stretch` | `phone` | `sleep` | `wilt` |

<p align="center"><img src="assets/scenes/idle-saiyan.svg" height="110" alt="Capu en modo Omnisciente"> <img src="assets/scenes/typing-saiyan.svg" height="110" alt="Capu programando en modo Omnisciente"></p>
<p align="center">Con el esfuerzo en Omnisciente se queda con el pelo dorado y el aura en todas las escenas.</p>

## Cómo está hecho

- **Dos resoluciones.** La silueta base mide 8×10 y sirve para el logo, el favicon y la terminal. Las escenas van a doble resolución: Capu se dibuja con píxeles de 2×2 y los props (portátil, taza, lata, pato, lupa, casco, caja de cartón…) a píxel fino, como iconos de 16 px.
- **Sin imágenes.** Cada fotograma es una rejilla de colores dibujada con funciones (`body`, `stamp`, `fill`, `tint`) y se pinta como rectángulos SVG con `shape-rendering: crispEdges`. Todo cabe en un solo archivo sin dependencias.
- **Suelo.** Nada baja de la fila 28 de la escena: así Capu puede estar de pie sobre cualquier borde.
- **Director.** `Capu.Director` convierte lo que hace un agente en escenas: cada escena de trabajo dura un mínimo (nada de destellos de una décima), las reacciones a lo que toca el usuario se ven al momento, mete travesuras de vez en cuando y se duerme si nadie le hace caso.
- **Aura.** El modo Super Saiyan es un filtro: cambia los pétalos por pelo dorado y dibuja un contorno que parpadea alrededor de la silueta, sin tocar los ojos.

## Uso

En el navegador o en Electron:

```html
<script src="src/capu.js"></script>
<div id="capu"></div>
<script>
  const player = new Capu.Player(document.getElementById('capu'), { px: 3 });
  const director = new Capu.Director(player);
  director.set('writing');          // idle, thinking, writing, reading, running, web, npm, git, tests, approval…
  director.react('saiyan');         // una reacción y vuelve a lo que estaba haciendo
  Capu.setMod({ saiyan: true });    // pelo dorado y aura en todas las escenas
</script>
```

Como módulo ES (por ejemplo en React, ver [`examples/CapuSprite.tsx`](examples/CapuSprite.tsx)):

```js
import Capu from './src/capu.mjs';
const svg = Capu.toSVG(Capu.frameAt('coffee', 0), { px: 4 });
```

En Node, para exportar fotogramas o pintarlo en la terminal:

```js
const Capu = require('./src/capu.js');
console.log(Capu.toANSI(Capu.frameAt('idle', 0)).join('\n'));
```

```
  ██▄ ▄▄     Capu
  ████████   la mascota de Deiza Code
  ██ ██ ██
  ████████
  ▀█▀▀▀▀█▀
```

`node terminal/demo.js` lo anima en la terminal (parpadea, mira, florece).

### API

| | |
|---|---|
| `Capu.frame(scene, t)` | Rejilla de colores del instante `t` (ms) de una escena |
| `Capu.frameAt(scene, i)` | El fotograma `i` |
| `Capu.toSVG(grid, { px, crop, mono, fluid, title })` | SVG pixel-perfect |
| `Capu.toANSI(grid, { crop, indent })` | Líneas para la terminal (medios bloques, color real) |
| `Capu.base({ eyes, top })` | La silueta base 8×10 |
| `Capu.sceneBox(names, pad)` / `centeredBox(names, pad)` | Recorte que contiene todos los fotogramas |
| `new Capu.Player(el, { px, crop, scene })` | Anima dentro de un elemento: `play(scene, onEnd)`, `stop()` |
| `new Capu.Director(player, { sleepAfter })` | `set(state)`, `react(scene, after)`, `poke()`, `pause()`, `resume()` |
| `Capu.setMod({ saiyan })` | Modificadores globales de aspecto |

## Regenerar los assets

```bash
node scripts/build-assets.js     # logos, iconos, PNG, poses, animaciones y la ficha (assets/)
node scripts/build-art.js        # portada 16:9 y mural 21:9 animados
node scripts/build-gallery.js    # un SVG animado por escena (assets/scenes/)
```

## Paleta

| Cuerpo | Lado | Flor | Hoja | Crema | Grafito | Ocre |
|---|---|---|---|---|---|---|
| `#C04A56` | `#9A3743` | `#F09AA6` | `#94B07C` | `#F4ECE1` | `#5B5450` | `#E7B447` |

## Licencia

MIT. Hecho por Marcos de Aza para [Deiza](https://deiza.org).
