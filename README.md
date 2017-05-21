<p align="center"><img src="https://eagleappteam.com/images/fluctus.png"></p>

<p align="center"><img src="https://eagleappteam.com/images/waves3.png"></p>

<p align="center">A Javascript package for creating beautiful wave forms.</p>

<p align="center">
	<img src="https://img.shields.io/npm/v/fluctus.svg" alt="">
	<img src="https://img.shields.io/npm/dw/fluctus.svg" alt="">
</p>

## Introduction

This package provides the ability to create beautiful waves with the use of the HTML canvas element. Fluctus uses vanilla JS and is super lightweight.

## Quick Start

### Install through npm

```
npm install fluctus
```

Then require or import Fluctus in:
```
import fluctus from 'fluctus'
```

### Install through repo files

Fluctus Requires 2 things:

1. A Canvas element ``` <canvas class="fluctus" id="wave1"></canvas> ```
2. The Javascript ``` <script src="/js/fluctus.js"></script> ```

## Usage

Creating a new wave is as simple as passing in 6 arguments into the Fluctus method:

```javascript
fluctus(ID,Color, Zoom, Delay, Opacity, Height); 
```

### Parameters

1. ID

   The ID of the canvas element the wave should be drawn on.
2. Color

   The fill color (HEX) of the wave.
3. Zoom

   The Zoom value should be anywhere from 0 to 2.5 to produce desirable results. The lower the zoom value, the more waves the Fluctus will produce.
4. Delay

   The Delay value shifts the wave left and right. Lower values shift the wave to the right while higher values shift the wave to the left. Nominal values are 0 through 1000.
5. Opacity

   The opacity parameter sets the alpha of the wave. A value of 1 would be completely opaque while a value of 0 would be completely transparant.
6. Height

   The Height parameter manipulates the height of the wave. This is useful for "stacking" waves. The default height is 80.

Mess around with the Zoom, Delay, Opacity, and Height values to get the desired effect.

## Examples

### Single Wave

```
<canvas id="wave"></canvas>
```

```javascript
fluctus("wave", "#66a6ff", 1.2, 0, 1, 80);
```

<p align="center"><img src="https://eagleappteam.com/images/waveexample1.png"></p>

### Multiple Stacked Waves

```
<canvas id="wave1"></canvas>
<canvas id="wave2"></canvas>
<canvas id="wave3"></canvas>
```

```javascript
fluctus("wave1", "#66a6ff", 1.2, 350, 1, 80);
fluctus("wave2", "#89DDFF", 1.2, 0, 0.5, 80);
fluctus("wave3", "#89f7fe", 0.9, 450, 0.5, 150);
```

<p align="center"><img src="https://eagleappteam.com/images/waveexample2.png"></p>

