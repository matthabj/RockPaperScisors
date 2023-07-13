var objects = {"rock":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 32c12.5 0 24.1 6.4 30.8 17L503.4 394.4c5.6 8.9 8.6 19.2 8.6 29.7c0 30.9-25 55.9-55.9 55.9H55.9C25 480 0 455 0 424.1c0-10.5 3-20.8 8.6-29.7L225.2 49c6.6-10.6 18.3-17 30.8-17zm65 192L256 120.4 176.9 246.5l18.3 24.4c6.4 8.5 19.2 8.5 25.6 0l25.6-34.1c6-8.1 15.5-12.8 25.6-12.8h49z"/></svg>`,
			   "paper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/></svg>`,
			   "scisors":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>`,
			   "water":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/></svg>`,
			   "fire":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/></svg>`}
var beats = {"rock":   ["scisors","water"],
			 "scisors":["paper","water"],
			 "paper":  ["rock","water"],
			 "water":  ["fire"],
			 "fire":   ["rock","paper","scisors"]}
var color = {"rock":"#CC884C","paper":"#DED6B4","scisors":"#E44B39","water":"#183F54","fire":"#F9B446"}
var things = [];
class Object
{
	constructor(type, x = 0 , y = 0)
	{
		this.type = type;
		this.x = x;
		this.y = y;
		this.vx = 0;
		this.vy = 0;
		this.dir = Math.random()*Math.PI*2;
		this.Start();
	}
	Start()
	{
		this.object = document.createElement("div");
		
		this.object.innerHTML = objects[this.type];
		this.object.firstChild.style.fill = color[this.type];
		
		this.object.style.position = "absolute";
		this.object.style.top = this.y + "px";
		this.object.style.left = this.x + "px";
		
		things.push(this);
		document.body.appendChild(this.object);
	}
	Update()
	{
		if(this.closest == null){this.dir += Math.random() - 0.5;}
		else{this.dir = Math.atan2(this.closest.y - this.y, this.closest.x - this.x)}
		
		var stepX = this.x + Math.cos(this.dir) * 3;
		var stepY = this.y + Math.sin(this.dir) * 3;
		
		var flip = (stepX > 0 && stepY > 0 && stepX < document.body.clientWidth - 40 && stepY < document.body.clientHeight-40);
		
		
		this.vx = Math.cos(this.dir) * flip * 3;
		this.vy = Math.sin(this.dir) * flip * 3;
		
		
		this.x += this.vx;
		this.y += this.vy;
		
		this.object.style.top = this.y + "px";
		this.object.style.left = this.x + "px";
		
		this.Colision();
		
		this.object.innerHTML = objects[this.type];
		this.object.firstChild.style.fill = color[this.type];
	}
	Colision()
	{
		if(this.closest != null){if(this.closest.type == this.type){this.closest = null}}
		var closest = this.closest;
		
		var d = 100;
		for(thing of things)
		{
			var dist = Math.sqrt(((thing.x - this.x) ** 2) + ((thing.y - this.y) ** 2));
			if(beats[this.type].includes(thing.type)&&d>dist){closest = thing;d = dist;}
			if(thing == this){continue}
			let r1x = this.x;
			let r1y = this.y;
			let r1w = 30;
			
			let r2x = thing.x;
			let r2y = thing.y;
			let r2w = 30;
			
			if (r1x + r1w >= r2x &&
				r1x <= r2x + r2w &&       
				r1y + r1w >= r2y &&       
				r1y <= r2y + r2w) {       
				
				if(beats[this.type].includes(thing.type))
				{
					thing.type = this.type;
				}
			}
		}
		this.closest = closest;
	}
}

function Update()
{
	for(thing of things)
	{
		thing.Update();
	}
	setTimeout(Update,10);
}
new Object("rock",600, 100);
new Object("rock",600, 100);
new Object("rock",600, 100);
new Object("rock",600, 100);
new Object("rock",600, 100);

new Object("paper",400, 400);
new Object("paper",400, 400);
new Object("paper",400, 400);
new Object("paper",400, 400);
new Object("paper",400, 400);

new Object("scisors",800, 400);
new Object("scisors",800, 400);
new Object("scisors",800, 400);
new Object("scisors",800, 400);
new Object("scisors",800, 400);



Update();

var mouseX,mouseY;

document.addEventListener("mousemove",function(e) {mouseX = e.clientX;mouseY = e.clientY;})

document.addEventListener("keydown", function(e) {
	let key = e.key;
	switch(key)
	{
		case "z": new Object("rock",mouseX,mouseY);break;
		case "x": new Object("paper",mouseX,mouseY);break;
		case "c": new Object("scisors",mouseX,mouseY);break;
		case "v": new Object("water",mouseX,mouseY);break;
		case "b": new Object("fire",mouseX,mouseY);break;
		
	}
});