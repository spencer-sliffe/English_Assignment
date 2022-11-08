var cur=0;
var size=29;
var id=["images/1.jpeg","images/2.jpeg","images/3.jpeg","images/4.jpeg","images/5.jpeg","images/6.jpeg","images/7.jpeg","images/8.jpeg","images/9.jpeg","images/10.jpeg",
"images/11.jpeg","images/12.jpeg","images/13.jpeg","images/14.jpeg","images/15.jpeg","images/16.jpeg","images/17.jpeg","images/18.jpeg","images/19.jpeg", "images/20.jpeg",
"images/21.jpeg","images/22.jpeg","images/23.jpeg","images/24.jpeg","images/25.jpeg","images/26.jpeg","images/27.jpeg","images/28.jpeg","images/29.jpeg", "images/30.jpeg"]

function previous()
{
	if(cur==0)
	{
		cur=size
	}
	else
	{
	  	cur--
	}
	let img=document.getElementById('id')
	img.src=id[cur]
}

function next()
{
	if(cur==size)
	{
		cur=0
	}
	else
	{
	    cur++
	}
	let img=document.getElementById('id')
	img.src=id[cur]
}
