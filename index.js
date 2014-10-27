(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 550,
	fps: 30,
	color: "#333333",
	manifest: []
};



// symbols:



(lib.mc_title = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("KEYBOARD", "bold 20px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 246;
	this.text.setTransform(-2,-14);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125,-14,250,28);


(lib.mc_letterBG = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.008)").s().rr(-27.5,-27.5,55,55,3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.mc_actionBG = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.008)").s().rr(-55,-27.5,110,55,3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55,-27.5,110,55);


(lib.Z = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("Z", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.Y = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("Y", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.X = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("X", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.W = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("W", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.V = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("V", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.U = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("U", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.T = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("T", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.SPC = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("spc", "35px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 66;
	this.text.setTransform(-2,-18.3);

	this.instance = new lib.mc_actionBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55,-27.5,110,55);


(lib.S = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("S", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.R = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("R", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.Q = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("Q", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.P = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("P", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.O = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("O", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.N = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("N", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.M = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("M", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.L = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("L", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.K = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("K", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.J = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("J", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.I = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("I", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.H = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("H", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.G = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("G", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.F = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("F", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.END = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("END", "35px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 66;
	this.text.setTransform(-2,-18.3);

	this.instance = new lib.mc_actionBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55,-27.5,110,55);


(lib.E = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("E", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.DEL = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("DEL", "35px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 66;
	this.text.setTransform(-2,-18.3);

	this.instance = new lib.mc_actionBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55,-27.5,110,55);


(lib.D = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("D", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.C = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("C", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.B = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("B", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.A = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("A", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._9 = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("9", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._8 = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("8", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._7 = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("7", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._6 = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("6", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._5 = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("5", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._4 = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("4", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._3 = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("3", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._2 = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("2", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._1 = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("1", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._0 = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("0", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.Symbol = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text(".", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.Symbol_1 = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("!", "40px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 41;
	this.text.setTransform(-2,-20.6);

	this.instance = new lib.mc_letterBG();

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.KeyboardCartoonist = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var c = this;
		
		/*var buttons = [c._0, this._1, this._2, this._3, this._4, this._5, this._6, this._7, this._8, this._9,  
		this._a, this._b, this._c, this._d, this._e, this._f, this._g, this._h, this._i, this._j, 
		this._k, this._l, this._m, this._n, this._o, this._p, this._q, this._r, this._s, this._t, 
		this._u, this._v, this._w, this._x, this._y, this._z, this._ponto, this._exclamacao, 
		this._spc, this._del, this._end];*/
		
		var btns = ["_0", "_1", "_2", "_3", "_4", "_5", "_6", "_7", "_8", "_9", 
		"_a", "_b", "_c", "_d", "_e", "_f", "_g", "_h", "_i", "_j", 
		"_k", "_l", "_m", "_n", "_o", "_p", "_q", "_r", "_s", "_t", 
		"_u", "_v", "_w", "_x", "_y", "_z", "_ponto", "_exclamacao", 
		"_spc", "_del", "_end"];
		
		function inicializa()
		{
			for (var i = 0; i < btns.length; i++)
			{
				c[btns[i]].clickCont = 0;
				c[btns[i]].name = btns[i];
				c[btns[i]].on("click", clickHandler);
			}
		}
		
		function popup(key)
		{
			key.scaleX = key.scaleY = 1.2;
			
			setTimeout(function() 
			{
				key.scaleX = key.scaleY = 1.0;
			}, 100);
		}
		
		function clickHandler(e)
		{
			var str = e.currentTarget.name.substr(1,3);
			//e.currentTarget.bg.gotoAndPlay("s1");
		
			popup(e.currentTarget);
			
			playAudio("click");
			
			if (str == "end")
			{
				// dispatch event of field concluded
				return;
			}
			
			if (str == "del")
			{
				c.label.text = c.label.text.substr(0, c.label.text.length - 1);
				return;
			}
			
			if (c.label.text.length >= 20)
				return;
			
			str = str == "pon" ? "." : str == "exc" ? "!" : str == "spc" ? " " : str;
			c.label.text += str;
		}
		
		inicializa();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// letter
	this._l = new lib.L();
	this._l.setTransform(287.5,275);

	this._v = new lib.V();
	this._v.setTransform(342.5,330);

	this._w = new lib.W();
	this._w.setTransform(397.5,330);

	this._x = new lib.X();
	this._x.setTransform(452.5,330);

	this._y = new lib.Y();
	this._y.setTransform(507.5,330);

	this._z = new lib.Z();
	this._z.setTransform(562.5,330);

	this._ponto = new lib.Symbol();
	this._ponto.setTransform(617.5,330);

	this._s = new lib.S();
	this._s.setTransform(672.5,275);

	this._i = new lib.I();
	this._i.setTransform(672.5,220);

	this._h = new lib.H();
	this._h.setTransform(617.5,220);

	this._g = new lib.G();
	this._g.setTransform(562.5,220);

	this._f = new lib.F();
	this._f.setTransform(507.5,220);

	this._e = new lib.E();
	this._e.setTransform(452.5,220);

	this._d = new lib.D();
	this._d.setTransform(397.5,220);

	this._c = new lib.C();
	this._c.setTransform(342.5,220);

	this._b = new lib.B();
	this._b.setTransform(287.5,220);

	this._a = new lib.A();
	this._a.setTransform(232.5,220);

	this._k = new lib.K();
	this._k.setTransform(232.5,275);

	this._u = new lib.U();
	this._u.setTransform(287.5,330);

	this._spc = new lib.SPC();
	this._spc.setTransform(370,385);

	this._del = new lib.DEL();
	this._del.setTransform(480,385);

	this._end = new lib.END();
	this._end.setTransform(590,385);

	this._exclamacao = new lib.Symbol_1();
	this._exclamacao.setTransform(672.5,330);

	this._t = new lib.T();
	this._t.setTransform(727.5,275);

	this._j = new lib.J();
	this._j.setTransform(727.5,220);

	this._9 = new lib._9();
	this._9.setTransform(727.5,165);

	this._8 = new lib._8();
	this._8.setTransform(672.5,165);

	this._7 = new lib._7();
	this._7.setTransform(617.5,165);

	this._6 = new lib._6();
	this._6.setTransform(562.5,165);

	this._5 = new lib._5();
	this._5.setTransform(507.5,165);

	this._4 = new lib._4();
	this._4.setTransform(452.5,165);

	this._3 = new lib._3();
	this._3.setTransform(397.5,165);

	this._2 = new lib._2();
	this._2.setTransform(342.5,165);

	this._1 = new lib._1();
	this._1.setTransform(287.5,165);

	this._0 = new lib._0();
	this._0.setTransform(232.5,165);

	this._r = new lib.R();
	this._r.setTransform(617.5,275);

	this._q = new lib.Q();
	this._q.setTransform(562.5,275);

	this._p = new lib.P();
	this._p.setTransform(507.5,275);

	this._o = new lib.O();
	this._o.setTransform(452.5,275);

	this._n = new lib.N();
	this._n.setTransform(397.5,275);

	this._m = new lib.M();
	this._m.setTransform(342.5,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this._m},{t:this._n},{t:this._o},{t:this._p},{t:this._q},{t:this._r},{t:this._0},{t:this._1},{t:this._2},{t:this._3},{t:this._4},{t:this._5},{t:this._6},{t:this._7},{t:this._8},{t:this._9},{t:this._j},{t:this._t},{t:this._exclamacao},{t:this._end},{t:this._del},{t:this._spc},{t:this._u},{t:this._k},{t:this._a},{t:this._b},{t:this._c},{t:this._d},{t:this._e},{t:this._f},{t:this._g},{t:this._h},{t:this._i},{t:this._s},{t:this._ponto},{t:this._z},{t:this._y},{t:this._x},{t:this._w},{t:this._v},{t:this._l}]}).wait(1));

	// nome
	this.label = new cjs.Text("", "35px 'Cartoonist'", "#FFFF00");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 37;
	this.label.lineWidth = 737;
	this.label.setTransform(478,56.7);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// bg
	this.text = new cjs.Text("cartoonist", "16px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 189;
	this.text.setTransform(94.5,531.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.047)").s().p("AoBGzIAAtlIQDAAIAANlg");
	this.shape.setTransform(480,275,9.325,6.322);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,550);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// AJUSTES NAS DIMENSÕES
		var keepAspectRatio = false;
		//var fullscreenSwitch = this.fullscreenSwitch;
		
		window.onresize = function()
		{
			onResize();
		}
		
		function onResize()
		{
			// browser viewport size
			var w = window.innerWidth;
			var h = window.innerHeight;
			
			// stage dimensions
			var ow = 960; // your stage width
			var oh = 550; // your stage height
			
			/*if ((fullscreenSwitch.currentFrame == 1) && (window.innerWidth < window.innerHeight))
				keepAspectRatio = false;
			else 
				keepAspectRatio = true;*/
			
			if (keepAspectRatio)
			{
				// keep aspect ratio
				var scale = Math.min(w / ow, h / oh);
				stage.scaleX = scale;
				stage.scaleY = scale;
				
				// adjust canvas size
				stage.canvas.width = ow * scale;
				stage.canvas.height = oh * scale;
			}
			else
			{
				// scale to exact fit
				stage.scaleX = w / ow;
				stage.scaleY = h / oh;
				
				// adjust canvas size
				stage.canvas.width = ow * stage.scaleX;
				stage.canvas.height = oh * stage.scaleY;
			}
			
			//bg.cache(0, 0, stage.canvas.width / stage.scaleX, stage.canvas.height / stage.scaleY);
			
			// update the stage
			stage.update();
		}
		
		onResize();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Camada 1
	this.instance = new lib.KeyboardCartoonist();
	this.instance.setTransform(480,275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// title
	this.instance_1 = new lib.mc_title();
	this.instance_1.setTransform(480,-46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:24},14,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,214.6,960,610.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;