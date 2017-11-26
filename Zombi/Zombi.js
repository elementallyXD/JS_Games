var requestAnimationFrame = requestAnimationFrame || function(func){return setTimeout(function(){func()}, 15)}; 
var canv = document.getElementById("canv"); 
var ctx = canv.getContext ("2d");
var sx = canv.getBoundingClientRect().left;
var sy = canv.getBoundingClientRect().top;

var deltaTime;
var lastFrame;
var hero = new Player(400,300,20); 
var zombi = [];
var bullets = [];

addEventListener('click', function(e){
	bullets.push(new Bullet(hero.x, hero.y, e.pageX-sx, e.pageY-sy))
})

function game(){ 
	deltaTime = (Date.now()-lastFrame)*0.001;
	lastFrame = Date.now();
	update(); 
	draw(); 
	if(hero.hp>0)
		requestAnimationFrame(game);
	else{
		alert("LOOSE. Click some where to restart!");
		canv.addEventListener('click', restart);
	}

} 

function update(){
	hero.action();

	for (i=0;i<zombi.length;i++){ 
		var vectorX = hero.x - zombi[i].x;
		var vectorY = hero.y - zombi[i].y;
		var lenR = Math.sqrt(vectorX*vectorX+ vectorY*vectorY);
		if(lenR!=0){
			zombi[i].speedX = vectorX * zombi[i].speed / lenR;
			zombi[i].speedY = vectorY * zombi[i].speed / lenR;
		} 
		else {
			zombi[i].speedX = 0;
			zombi[i].speedY = 0;
		}
		zombi[i].action();
	}
	for(var i = 0; i < bullets.length; i++){
		bullets[i].action();
	} 
}

function draw(){ 
canv.width=canv.width; 
hero.malkol(); 
	for (i=0;i<zombi.length;i++){
		zombi[i].malkol();
	}
	for (var i=0;i< bullets.length;i++){
		bullets[i].malkol();
	}

	ctx.strokeStyle="black";
	ctx.lineWidth = 2;
	ctx.strokeRect(600, 30,120,10);
	ctx.fillStyle = "red";
	ctx.fillRect(602,32, (116/100)*hero.hp, 6);
	ctx.strokeStyle="#3A0000"; 
	ctx.strokeRect(0, 0, 800, 600); 
} 

function restart(){
	hero = new Player(400,300,20); 
 	zombi = [];
 	bullets = [];
	lastFrame = Date.now();

	canv.removeEventListener('click', restart);

	requestAnimationFrame(game); 
}

function Player(x,y,r){ 
	this.x=x; 
	this.y=y; 
	this.radius=r;
	this.hp=100;

	this.malkol=function(){ 
		ctx.beginPath(); 
		ctx.arc(this.x,this.y,this.radius,0,Math.PI*2); 
		ctx.fillStyle="#4B54FF"; 
		ctx.fill(); 
	} 

	this.action=function(){
		if(Input.A) this.x -= 125 * deltaTime;
		if(Input.D) this.x += 125 * deltaTime;
		if(Input.W) this.y -= 125 * deltaTime;
		if(Input.S) this.y += 125 * deltaTime;
						
		if (this.x < this.radius) this.x=this.radius;
		if (this.x > canv.width-this.radius) this.x=canv.width-this.radius;
		if (this.y < this.radius) this.y=this.radius;
		if (this.y > canv.height-this.radius) this.y=canv.height-this.radius;
	}
}
			
function Zombis(x,y){ 
	this.x=x; 
	this.y=y; 
	this.radius=randomaizer(25,35);
	this.speedX=randomaizer(1,2); 
	this.speedY=randomaizer(1,2); 
	this.speed = 1;
	this.hp=20;
					 

	this.malkol=function(){ 
		if (this.hp>0){
			ctx.beginPath(); 
			ctx.arc(this.x,this.y,this.radius,0,Math.PI*2); 
			ctx.fillStyle="green";
			ctx.fill();
		} 
	} 

	this.action=function(){ 
		if(this.hp>0){
			this.x+=this.speedX; 
			this.y+=this.speedY;

			if ((Math.sqrt((hero.x-this.x)*(hero.x-this.x)+(hero.y-this.y)*(hero.y-this.y))) < hero.radius+this.radius){
				hero.hp-=10*deltaTime;
			}
		}
	} 
}

function Bullet(x, y, x1, y1){
	this.speed = 15;
	this.x = x;
	this.y = y;
	var LenRB = Math.sqrt((x-x1)*(x-x1)+(y-y1)*(y-y1))
	this.speedX = (x1-x)*this.speed/LenRB; 
	this.speedY = (y1-y)*this.speed/LenRB;
	this.radius = 5;
	
	this.action = function(){
		this.x+=this.speedX;
		this.y+=this.speedY;

			for(i=0;i<zombi.length;i++)
				if((Math.sqrt((zombi[i].x-this.x)*(zombi[i].x-this.x)+(zombi[i].y-this.y)*(zombi[i].y-this.y))) < zombi[i].radius+this.radius)
					zombi[i].hp = 0;
			
	}
				
	this.malkol = function(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius-3, 0, Math.PI*2)
		ctx.lineWidth = 6;
		ctx.stroke();
	}
} 	 

function Granade(x,y,tx,ty){
	this.x = x;
	this.y = y;
	this.speed = 4;
	var LenRB = Math.sqrt((x-x1)*(x-x1)+(y-y1)*(y-y1))
	this.speedX = (x1-x)*this.speed/LenRB; 
	this.speedY = (y1-y)*this.speed/LenRB;
	this.radius = 8;
	this.targetX = tx;
	this.targetY = ty;

	this.action = function(){

	}

	this.malkol = function(){

	}
}
function SpawnZomisFunct(){
switch (randomaizer(1,4)){
	case 1: zombi.push(new Zombis(randomaizer(-30,canv.width+30),-30));
	case 2: zombi.push(new Zombis(-30,randomaizer(-30,canv.height+30)));
	case 3: zombi.push(new Zombis(canv.width+30,randomaizer(-30,canv.height+30)));
	case 4: zombi.push(new Zombis(randomaizer(-30,canv.width+30), canv.height+30));
	}
}

SpawnZomisFunct();

setTimeout(function run() {
 	SpawnZomisFunct();
  setTimeout(run, 2000);
}, 1000);

lastFrame = Date.now();

requestAnimationFrame(game); 