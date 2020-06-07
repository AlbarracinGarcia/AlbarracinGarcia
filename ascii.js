var cnv,img;
var resdiv;
    var options = [' ','`','.',',-',"':",';_~','"','*|','!l',
'+=','>','<L','\\i','/^','1?','Jv','r','()cx','7}','sz',
'3u','2Ckty{','jn','4FVY','5P[]af','qw','Sde','Eo',
'NOZ','9HXgh','GTU','$AIm','QW','KM','%8','#06@','bp',
'D','&','R','B'];
var reversedOptions = options.slice().reverse();
var len = options.length - 1;
var gui,btn,livebtn;
var live = false;
var grayScale = false;
var ascii = false;
var filter = false;
var reverse = false;
var filterOptions = 0;
var capture;
var pg;

function setup() {
  //paragraph for display of ascii result
  resdiv = createP('');
  resdiv.style('font-family', '"Courier new", Courier, monospace');
  resdiv.style('font-size', '10');
  //video capture elements
  pg = createGraphics(240,120);
  capture = createCapture(VIDEO);
  capture.size(240, 120);
  capture.hide();
 
  //gui elements
  gui = createDiv('');
  livebtn = createButton('LIVE');
  livebtn.mousePressed(function(){live=!live;});
  livebtn.parent(gui);
  filterbtn = createButton('CHANGE FILTER');
  filterbtn.parent(gui);
  filterbtn.style('display', 'none');
  filterbtn.mousePressed(function(){changeFilter(1);});
  cnv = createCanvas(240,120);
  background(255);
}

function draw() {
  changeFilter(0);
  if (live) {
    image(capture, 0, 0, width, height);
    cnv.style('position', 'fixed');
    cnv.style('top', '0');
    filterbtn.style('display', 'block');
   if (ascii) {
       calcCapture(getOptions());
   }
   if (grayScale) {
     toBlackAndWhite();
     image(pg, 0, 0, width, height);
   }
  }
}

function calcCapture(options) {
  pg.image(capture,0,0,240,120);
  var res = '<pre>';
  for (var i=0; i<60; i++) {
    var line = '';
    for (var j=0; j<200; j++) {
      var x = pg.get(round(j*1.143),i*2);
      var f = (1-x[0]/255.0);
      f = f*f; //square factor to lighten up, because less bright characters
      var v = round(f*len);
      var index = floor(random(options[v].length));
      var chr = options[v][index];
      if (chr==' ') chr='&nbsp;';
      if (chr=='<') chr='&lt;';
      if (chr=='>') chr='&gt;';
      if (chr=='"') chr='&quot;';
      line += chr;
    }

    res += line+'<br>';
  }
  res += '</pre>';
  resdiv.html(res);
}

function changeFilter(pase) {
  let selection = (filterOptions + pase) % 3;
  switch(selection) {
    case 0:
        grayScale = false;
        reverse = false;
        ascii = true;
        break;
    case 1:
        reverse = true;
        break;
    case 2:
        ascii = false;
        reverse = false;
        grayScale = true;
        break;
  }
  filterOptions += pase;
}

 function toBlackAndWhite() {
  pg.image(capture,0,0,240,120);
  pg.loadPixels();
  for (let i = 0; i < pg.width; i++) {
    for (let j = 0; j < pg.height; j++) {
      let pixel = pg.get(i,j);
      let average = calculateAverageFromPixel(pixel);
        pg.set(i, j, color(average, average, average));
    }
  }
  pg.updatePixels();
}

function calculateAverageFromPixel(pixel) {
   return pixel[0] + pixel[1] + pixel[2] / 3; 
}

function getOptions() {
 if (reverse) {
    return reversedOptions;
 }
 return options;
}