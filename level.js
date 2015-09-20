var c=1;
a = new Array();
var time=0;
var sec=0;
var min=0;
var num;
var myname;
var setint = setInterval(function(){changetimer()},1000);

function createboxes()
{
	num=parseInt(localStorage.getItem("numlevel"));
	h=window.innerHeight;
	w=window.innerWidth;
	h1=h/2-(num/2)*60;
	w1=w/2-(num/2)*60;
	var hdiv = document.createElement('div');
	document.body.appendChild(hdiv);
	hdiv.id = "hdivtag";
	hdiv.style.top = h1+"px";
	hdiv.style.left = w1+"px";
	hdiv.style.position = 'absolute';
	hdiv.style.border = "1px solid black";
	hdiv.style.height = "50px";
	hdiv.style.width = (num*60)+"px";
	hdiv.style.textAlign = "center";
	var image = document.createElement('img');
	hdiv.appendChild(image);
	image.src = "smiley.jpeg";
	var timer = document.createElement('div');
	timer.id = "timenow";
	timer.style.position = "absolute";
	document.body.appendChild(timer);
	timer.style.left = w1 + (num*60) - 80 + "px";
	timer.style.top = h1+"px";
	timer.style.width = "80px";
	timer.style.height = "50px";
	timer.style.border = "1px solid black";
	timer.style.borderLeft = "1px solid white";
	document.getElementById("timenow").innerHTML = "0:00";
	
	for (var i = 0; i < num; i++) 
	{
		for (var j = 0; j < num; j++)
		{
		var divtag = document.createElement('div');
		divtag.id = "box"+c;
		divtag.style.position = 'absolute';
		divtag.style.top = h1+(i*60)+50 + 'px';
		divtag.style.left = w1+(j*60) + 'px'; 
		divtag.style.border = "1px solid black";
		divtag.style.width = "60px";
		divtag.style.height = "60px";
		divtag.style.textAlign = "center";
		divtag.setAttribute("onmousedown","mousedown(event,this.id);");
		document.body.appendChild(divtag);
		c++;
		}
	}
	placebombs(num);
}

function mousedown(e,id)
{
	if(e.which==1)
		bombornot(id,num);
	else
	if(e.which==3)
		setflag(id);
}

function changetimer()
{
	time++;
	sec++;
	if(sec==60)
	{
		min++;
		sec=0;
	}
	document.getElementById("timenow").innerHTML = min+":"+sec;
}

function checkbombs(n)
{
	t=0;
	for(j=(n-1);j>=0;j--)
	{
		if(a[n]==a[j])
		{
			t=1;
			break;
		}
	}
	return t;
}

function placebombs(num)
{
	s=num*num;
	q=parseInt(s/4);
	for(i=0;i<q;i++)
	{
		k=1;
		while(k==1)
		{
			a[i]=Math.floor((Math.random()*s)+1);
			k=checkbombs(i);
		}
	}
}

function setflag(boxid)
{
	k=boxid.split("box");
	temp=1;
	n=parseInt(k[1]);
	document.oncontextmenu=function(){return false;};
	document.getElementById("box"+n).innerHTML = "<img src='flag2.png' />";
	nextlevel();
}

function bombornot(boxid,num)
{
	k=boxid.split("box");
	temp=1;
	n=parseInt(k[1]);
	for(i=0;i<q;i++)
	{
		if(a[i]==n)
		{
			for(i=0;i<q;i++)
			document.getElementById("box"+a[i]).innerHTML = "<img src='bomb.png' />";
			document.getElementById("hdivtag").innerHTML = "<img src='sadsmiley.jpeg' />";
			temp=0;
			gameover();
		}
	}
	if(temp==1)
	{
		if(n==1)
		{
			count=0;
			for(i=0;i<q;i++)
			if(a[i]==(n+1)||a[i]==(n+num)||a[i]==(n+num+1))
				count++;
			document.getElementById("box"+n).innerHTML = count;
		}
		else
		if(n==num)
		{
			count=0;
			for(i=0;i<q;i++)
			if(a[i]==(n-1)||a[i]==(n+num-1)||a[i]==(n+num))
				count++;
			document.getElementById("box"+n).innerHTML = count;
		}
		else
		if(n==(s-num+1))
		{
			count=0;
			for(i=0;i<q;i++)
			if(a[i]==(n-num)||a[i]==(n-num+1)||a[i]==(n+1))
				count++;
			document.getElementById("box"+n).innerHTML = count;
		}
		else
		if(n==s)
		{
			count=0;
			for(i=0;i<q;i++)
			if(a[i]==(n-num-1)||a[i]==(n-num)||a[i]==(n-1))
				count++;
			document.getElementById("box"+n).innerHTML = count;
		}
		else
		{
			for(i=1;i<=q/2;i++)
			{
				if(n==((num*i)+1))
				{
					count=0;
					for(i=0;i<q;i++)
					if(a[i]==(n-num)||a[i]==(n-num+1)||a[i]==(n+1)||a[i]==(n+num)||a[i]==(n+num+1))
						count++;
					document.getElementById("box"+n).innerHTML = count;
				}
				else
				if(n==num+(num*i))
				{
					count=0;
					for(i=0;i<q;i++)
					if(a[i]==(n-num-1)||a[i]==(n-num)||a[i]==(n-1)||a[i]==(n+num-1)||a[i]==(n+num))
						count++;
					document.getElementById("box"+n).innerHTML = count;
				}
				else
				if(n==(i+1))
				{
					count=0;
					for(i=0;i<q;i++)
					if(a[i]==(n-1)||a[i]==(n+1)||a[i]==(n+num-1)||a[i]==(n+num)||a[i]==(n+num+1))
						count++;
					document.getElementById("box"+n).innerHTML = count;
				}
				else
				if(n==(s-i))
				{
					count=0;
					for(i=0;i<q;i++)
					if(a[i]==(n-num-1)||a[i]==(n-num)||a[i]==(n-num+1)||a[i]==(n-1)||a[i]==(n+1))
						count++;
					document.getElementById("box"+n).innerHTML = count;
				}
			}
			for(j=num+2;j<(s-num);j++)
			{
				if(((j%num)!=0)&&((j%num)!=1))
				{
					if(n==j)
					{
						count=0;
						for(i=0;i<q;i++)
						if(a[i]==(n-num-1)||a[i]==(n-num)||a[i]==(n-num+1)||a[i]==(n-1)||a[i]==(n+1)||a[i]==(n+num-1)||a[i]==(n+num)||a[i]==(n+num+1))
							count++;
						document.getElementById("box"+n).innerHTML = count;
					}
				}
			}
		}
	}
	nextlevel();
}

function gameover()
{
	var lose = document.createElement('div');
	lose.id = "lost";
	document.body.appendChild(lose);
	lose.style.position = "absolute";
	lose.style.top = "0px";
	lose.style.left = "0px"; 
	lose.style.width = "1360px";
	lose.style.height = "640px";
	lose.style.backgroundColor = "black";
	lose.style.textAlign = "center";
	lose.style.opacity = "0.9";
	lose.style.zIndex = "1";
	lose.style.color = "white";
	lose.style.fontFamily = "papyrus";
	lose.style.fontSize = "100px";
	document.getElementById("lost").innerHTML = "You Lose";
	clearInterval(setint);		
}

function nextlevel()
{
	temp=0;
	for(i=1;i<=s;i++)
	{
		if(!document.getElementById("box"+i).innerHTML)
		{
			temp=1;
			break;
		}
	}
	if(temp==0)
	{
		var win = document.createElement('div');
		win.id = "won";
		document.body.appendChild(win);
		win.style.position = 'absolute';
		win.style.top = "0px";
		win.style.left = "0px"; 
		win.style.color = "white";
		win.style.width = "100%";
		win.style.height = "100%";
		win.style.backgroundColor = "black";
		win.style.opacity = "0.9";
		win.style.fontSize = "80px";
		win.style.fontFamily = "papyrus";
		win.style.textAlign = "center";
		win.style.zIndex = "1";
		document.getElementById("won").innerHTML = "Congratulations! You've conquered this level.";	
		
		var b = document.createElement('div');
		b.id = "proceed";
		document.body.appendChild(b);
		b.style.position = 'absolute';
		b.style.top = "300px";
		b.style.left = "400px";
		b.style.width = "600px";
		b.style.height = "50px";
		b.style.zIndex = "1";
		b.style.fontFamily = "papyrus";
		b.style.textAlign = "center";
		b.style.fontSize = "40px";
		b.style.color = "white";
		b.style.border = "0";
		document.getElementById("proceed").innerHTML = "You feature in the Leaderboard";
		clearInterval(setint);		
		myname = prompt("Please enter your name:");
		gettime(myname,min,sec);
	}
}

function gettime(myname,mins,secs)
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST","ajaxtry.php?name="+myname+"&min="+mins+"&sec="+secs,true);
	xmlhttp.send();
}

function displayform()
{
	var form = document.createElement('form');
	form.id = "getinp";
	document.body.appendChild(form);
	form.onsubmit = "scorecardput.php";
	form.method = "POST";
	form.style.textAlign = "center";
	form.style.zIndex = "100";
	form.style.backgroundColor = "white";
	var inp = document.createElement('input');
	inp.id = "getname";
	inp.style.zIndex = "101";
	inp.type = "text";
	inp.name = "name";
	inp.style.color = "black";
	inp.style.backgroundColor = "white";
	form.appendChild(inp);
}