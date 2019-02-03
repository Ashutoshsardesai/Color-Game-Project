var num=6;
var numsquares=6;
var colors=generateRandomColors();
var square=document.querySelectorAll(".square");
var pickcolor=pickcolors();
var msg=document.querySelector("#message");
var pick=document.querySelector("#pickcolor");
var resetbtn=document.querySelector("#reset");
var h1=document.querySelector("h1");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
pick.textContent=pickcolor;
easyBtn.addEventListener("click",function()
{
	numsquares=3;
	h1.style.backgroundColor="#5dcc7e";
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	for(var i=0;i<colors.length;i++)
	{
		colors[i]="rgb(0, 0, 0)";
	}
	colors=generateRandomColors();
	pickcolor=pickcolors();
	pick.textContent=pickcolor;
	for(var i=0;i<num;i++)
	{
		
		if(colors[i]==="rgb(0, 0, 0)")
		{
			square[i].style.visibility="hidden";
		}
		else
		{
			square[i].style.backgroundColor=colors[i];
		}
		
		
		
	}
});
hardBtn.addEventListener("click",function()
{
	numsquares=6;
	h1.style.backgroundColor="#5dcc7e";
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors=generateRandomColors();
	pickcolor=pickcolors();
	pick.textContent=pickcolor;
	for(var i=0;i<numsquares;i++)
	{
			square[i].style.backgroundColor=colors[i];
			square[i].style.visibility="visible";
		
		
		
	}

})
for(var i=0;i<square.length;i++)
{
	square[i].style.backgroundColor=colors[i];

	square[i].addEventListener("click",function()
	{
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===pickcolor)
		{
			msg.textContent="Correct";
			changecolor(clickedcolor);
			h1.style.backgroundColor=clickedcolor;
			resetbtn.textContent="Play Again";
		}
		else
		{
			this.style.backgroundColor="#232323"
			msg.textContent="Try Again";
		}
	})
}
function changecolor(color)
{
	// changing colors all all squares when right color is picked
 for(var i=0;i<colors.length;i++)
 {
 	square[i].style.backgroundColor=color;
 }
}
function pickcolors()
{
	var random =Math.floor(Math.random()*numsquares);
	return colors[random];
}
function generateRandomColors()
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		if(i>=numsquares)
			arr.push("rgb(0, 0, 0)");
		else
		arr.push(RandomColor());
	}
	return arr;
}
function RandomColor()
{
	var r=(Math.floor(Math.random()*256));
	var g=(Math.floor(Math.random()*256));
	var b=(Math.floor(Math.random()*256));
	return "rgb(" + r+ ", " + g + ", " + b + ")";
}
resetbtn.addEventListener("click",function()
{
	resetbtn.textContent="New Colors";
	colors=generateRandomColors(numsquares);
	pickcolor=pickcolors();
	pick.textContent=pickcolor;
	for(var i=0;i<square.length;i++)
{
	square[i].style.backgroundColor=colors[i];
}
    h1.style.backgroundColor="#5dcc7e";
    msg.textContent="";

});