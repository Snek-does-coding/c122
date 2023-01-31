function preload()
{

}
function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,40,40,560,410)

    rect(5, 0, 55, 500);  
    rect(580, 0, 55, 500);  
    rect(0, 5, 640, 55);  
    rect(0, 420, 640, 55);  
    fill(212, 175, 55)
circle(30, 30, 100);
circle(30, 450, 100);
circle(610, 30, 100);
circle(610, 450, 100);
}
function take_snapshot()
{
    save('frame');
}