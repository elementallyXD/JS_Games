var Input = new TGDInput();

function TGDInput(){
	this.Q = false;
	this.W = false;
	this.E = false;
	this.R = false;
	this.T = false;
	this.Y = false;
	this.U = false;
	this.I = false;
	this.O = false;
	this.P = false;
	this.A = false;
	this.S = false;
	this.D = false;
	this.F = false;
	this.G = false;
	this.H = false;
	this.J = false;
	this.K = false;
	this.L = false;
	this.Z = false;
	this.X = false;
	this.C = false;
	this.V = false;
	this.B = false;
	this.N = false;
	this.M = false;
	this.TAB = false;
	this.SHIFT = false;
	this.CTRL = false;
	this.ALT = false;
	this.ENTER = false;
	this.UP = false;
	this.DOWN = false;
	this.LEFT = false;
	this.RIGHT = false;
}

addEventListener("keydown", function(e){
	switch(e.keyCode){
		case "Q".charCodeAt(0): Input.Q = true; break;
		case "W".charCodeAt(0): Input.W = true; break;
		case "E".charCodeAt(0): Input.E = true; break;
		case "R".charCodeAt(0): Input.R = true; break;
		case "T".charCodeAt(0): Input.T = true; break;
		case "Y".charCodeAt(0): Input.Y = true; break;
		case "U".charCodeAt(0): Input.U = true; break;
		case "I".charCodeAt(0): Input.I = true; break;
		case "O".charCodeAt(0): Input.O = true; break;
		case "P".charCodeAt(0): Input.P = true; break;
		case "A".charCodeAt(0): Input.A = true; break;
		case "S".charCodeAt(0): Input.S = true; break;
		case "D".charCodeAt(0): Input.D = true; break;
		case "F".charCodeAt(0): Input.F = true; break;
		case "G".charCodeAt(0): Input.G = true; break;
		case "H".charCodeAt(0): Input.H = true; break;
		case "J".charCodeAt(0): Input.J = true; break;
		case "K".charCodeAt(0): Input.K = true; break;
		case "L".charCodeAt(0): Input.L = true; break;
		case "Z".charCodeAt(0): Input.Z = true; break;
		case "X".charCodeAt(0): Input.X = true; break;
		case "C".charCodeAt(0): Input.C = true; break;
		case "V".charCodeAt(0): Input.V = true; break;
		case "B".charCodeAt(0): Input.B = true; break;
		case "N".charCodeAt(0): Input.N = true; break;
		case "M".charCodeAt(0): Input.M = true; break;
		case 9: Input.TAB = true; break;
		case 16: Input.SHIFT = true; break;
		case 17: Input.CTRL = true; break;
		case 18: Input.ALT = true; break;
		case 32: Input.SPACE = true; break;
		case 13: Input.ENTER = true; break;
		case 37: Input.LEFT = true; break;
		case 38: Input.UP = true; break;
		case 40: Input.DOWN = true; break;
		case 39: Input.RIGHT = true; break;
	}
})

addEventListener("keyup", function(e){
	switch(e.keyCode){
		case "Q".charCodeAt(0): Input.Q = false; break;
		case "W".charCodeAt(0): Input.W = false; break;
		case "E".charCodeAt(0): Input.E = false; break;
		case "R".charCodeAt(0): Input.R = false; break;
		case "T".charCodeAt(0): Input.T = false; break;
		case "Y".charCodeAt(0): Input.Y = false; break;
		case "U".charCodeAt(0): Input.U = false; break;
		case "I".charCodeAt(0): Input.I = false; break;
		case "O".charCodeAt(0): Input.O = false; break;
		case "P".charCodeAt(0): Input.P = false; break;
		case "A".charCodeAt(0): Input.A = false; break;
		case "S".charCodeAt(0): Input.S = false; break;
		case "D".charCodeAt(0): Input.D = false; break;
		case "F".charCodeAt(0): Input.F = false; break;
		case "G".charCodeAt(0): Input.G = false; break;
		case "H".charCodeAt(0): Input.H = false; break;
		case "J".charCodeAt(0): Input.J = false; break;
		case "K".charCodeAt(0): Input.K = false; break;
		case "L".charCodeAt(0): Input.L = false; break;
		case "Z".charCodeAt(0): Input.Z = false; break;
		case "X".charCodeAt(0): Input.X = false; break;
		case "C".charCodeAt(0): Input.C = false; break;
		case "V".charCodeAt(0): Input.V = false; break;
		case "B".charCodeAt(0): Input.B = false; break;
		case "N".charCodeAt(0): Input.N = false; break;
		case "M".charCodeAt(0): Input.M = false; break;
		case 9: Input.TAB = false; break;
		case 16: Input.SHIFT = false; break;
		case 17: Input.CTRL = false; break;
		case 18: Input.ALT = false; break;
		case 32: Input.SPACE = false; break;
		case 13: Input.ENTER = false; break;
		case 37: Input.LEFT = false; break;
		case 38: Input.UP = false; break;
		case 40: Input.DOWN = false; break;
		case 39: Input.RIGHT = false; break;
	}
})

//addEventListener("keydown", function(e){alert(e.keyCode)})