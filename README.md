<h1 align="center">Fluctus</h1>

<p align="center"><img src="https://eagleappteam.com/images/waves2.png"></p>

<p align="center">A Javascript package for creating beautiful wave forms.</p>

## Introduction

This package provides the ability to create beautiful waves with the use of the HTML canvas element. Fluctus uses vanilla JS to and is super lightweight.

## Quick Start

Fluctus Requires 3 things:

1. A Canvas element ``` <canvas class="fluctus" id="wave1"></canvas> ```
2. Some custom CSS ``` <link rel="stylesheet" href="/css/fluctus.css"> ```
3. The Javascript ``` <script src="/js/fluctus.js"></script> ```

Creating a new wave is as simple as passing in 6 arguments into the Fluctus create method:

``` fluctus(ID of Canvas Element, HEX Color, Zoom, Delay, Transparency, Height Value); ```

Mess around with the Zoom, Delay, Transparency, and Height values to get the look you want.

## Example

``` fluctus("#sineWave", "#fff", 1.2, 0, true, 80); ```
