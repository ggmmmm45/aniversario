var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{

 fabric.Image.fromURL('flork-aniversario.png',function(Img){
blockImageObject = Img;
blockImageObject.scaleToWidth(700);
blockImageObject.scaleToHeight(511);
blockImageObject.set({
    top:0,
    left:0
});
canvas.add(blockImageObject);
 });  

	
}

function playSound(){
	x.play();
}
