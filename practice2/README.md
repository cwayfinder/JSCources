Canvas:

  MDN: '<canvas> is an HTML element which can be used to draw graphics using sc
  ripting (usually JavaScript). It can, for instance, be used to draw graphs, make photo compositions or do simple (and not so simple) animations.

  <canvas> was first introduced by Apple for the Mac OS X Dashboard and later implemented in Safari and Google Chrome. Gecko 1.8-based browsers, such as Firefox 1.5, also support this element. The <canvas> element is part of the WhatWG Web applications 1.0 specification also known as HTML5.'

  BASIC <CANVAS> SUPPORT
  {Browsers: ["IE",  "FIREFOX", "SAFARI",  "CHROME",  "OPERA", "IPHONE",  "ANDROID"]}
  {Versions: ["7.0+*", "3.0+",  "3.0+",  "3.0+",  "10.0+", "1.0+",  "1.0+"]}


Getting started   
  http://diveintohtml5.info/canvas.html

  (*) http://www.html5canvastutorials.com/tutorials/html5-canvas-tutorials-introduction/

  https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Canvas_tutorial


Why canvas?
  http://davidwalsh.name/canvas-demos
  http://davidwalsh.name/webgl-demo
  http://html5hub.com/web-graphics-trends-in-2013/

1. Sample drawing

  https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D


2. Manipulating pixels:
  
  http://net.tutsplus.com/tutorials/javascript-ajax/canvas-from-scratch-pixel-manipulation/

  http://tech.bellycard.com/blog/where-d-the-water-go-google-maps-water-pixel-detection-with-canvas/

3. File API + Canvas - Drawing loaded file on canvas

  http://davidwalsh.name/resize-image-canvas

4. HTML + Canvas - Drawing html on canvas

https://developer.mozilla.org/en/docs/HTML/Canvas/Drawing_DOM_objects_into_a_canvas

https://developer.mozilla.org/en-US/docs/HTML/CORS_Enabled_Image

5. GetUserMedia + Canvas - Drawing video on canvas

http://html5hub.com/using-the-getusermedia-api-with-the-html5-video-and-canvas-elements/

6. Libraries

http://www.storminthecastle.com/projects/goo.js/

http://html2canvas.hertzen.com/

2d
  http://libcanvas.github.io/
  http://impactjs.com/
  http://kineticjs.com/
  easel.js www.createjs.com/#!/EaselJS‎
  http://paperjs.org/
  http://fabricjs.com (@kangax Perfection Kills)
  http://http://processingjs.org/

webgl 
  http://threejs.org/
  http://www.babylonjs.com/  

Examples:

  bits manipulation: http://www.hmp.is.it/creating-chroma-key-effect-html5-canvas/
  minesweeper & libcanvas  http://habrahabr.ru/post/168705/
  libcanvas & start http://habrahabr.ru/post/181554/

  simple polygons (Math rulez): http://www.storminthecastle.com/2013/07/24/how-you-can-draw-regular-polygons-with-the-html5-canvas-api/

  http://29a.ch/2010/3/24/normal-mapping-with-javascript-and-canvas-tag

  Mini-district   http://www.p01.org/releases/MINI_DISTRICT/


Tainted canvas fix:

  You must have a server hosting images with the appropriate Access-Control-Allow-Origin header
  crossOrigin = 'Anonymous';  
  https://developer.mozilla.org/en-US/docs/HTML/CORS_Enabled_Image
  
  crossOrigin = 'http://maps.googleapis.com/crossdomain.xml';
  http://tech.bellycard.com/blog/where-d-the-water-go-google-maps-water-pixel-detection-with-canvas/