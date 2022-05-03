canvas= new fabric.Canvas('myCanvas');
// Create canvas variable
 block_y=1;
 block_x=1;

obj_image_width = 350;
obj_image_height = 430;

var obj_img= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function (Img){
		obj_img=Img;

        obj_img.scaleToWidth(obj_image_width);
		obj_img.scaleToHeight(obj_image_height);
		obj_img.set({
			top:block_y,
			left:block_x
		});
		canvas.add(obj_img);
	})

	
	// to upload images
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image('rr1.png')
		
		// upload red ranger
	}
	if(keyPressed == '71')
	{
		block_x =270;
		new_image('gr.png')
		// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		block_x =420;
		new_image('yr.png')
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 700;
		new_image('pr.png')
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 850;
		new_image('br.png')
	// upload blue ranger
	}
	
}

