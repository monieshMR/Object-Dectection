 function setup()
 {
     canvas = createCanvas(640, 402);
     canvas.center();
 }

 img = "";

 function preload()
 {
     img =loadImage('laptop.jpg');
 }

 function draw()
 {
     image(img, 0, 0, 640, 420);
     fill("#FF0000");
     text("Laptop", 45, 75);
     noFill();
     stroke("#FF0000");
     rect(90, 50, 450, 350 );
 }