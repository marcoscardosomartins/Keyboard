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


(lib.mc_letterBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{s1:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.008)").s().rr(-27.5,-27.5,55,55,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().rr(-27.5,-27.5,55,55,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,0,0.671)").s().p("Ai4ETQhZgBgBhZIAAlxQABhZBZgBIFxAAQBZABABBZIAAFxQgBBZhZABg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,0,0.337)").s().p("Ai4ETQhZgBgBhZIAAlxQABhZBZgBIFxAAQBZABABBZIAAFxQgBBZhZABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.mc_actionBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.008)").s().rr(-55,-27.5,110,55,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().rr(-55,-27.5,110,55,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,0,0.671)").s().p("AnKETQhbgBABhZIAAlxQgBhZBbgBIOVAAQBbABgBBZIAAFxQABBZhbABg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,0,0.337)").s().p("AnKETQhbgBABhZIAAlxQgBhZBbgBIOVAAQBbABgBBZIAAFxQABBZhbABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-27.5,110,55);


(lib.Z = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdCeIAAhRIBTiZIhJAAIAAhRICoAAIAJBLIhjCaIBSAAIAABWg");
	this.shape.setTransform(-0.1,-1.9);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.Y = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiCfIAAihIhbiVIBUgIIApBEIAohEIBVAGIhNCXIAAChg");
	this.shape.setTransform(0,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.X = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcCfIgcg8IgbA8IhjAAIBLiXIg+ifIBQgIIAhBEIAfhEIBVAAIhGCnIBRCXg");
	this.shape.setTransform(0,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.W = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhwCaIg1kuIBOgGIAUCJIAhiOIBAAGIAbCNIAciTIBQAAIg+E8IhTAAIgYiBIgbCDg");
	this.shape.setTransform(-0.1,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.V = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglCfIhJkzIBOgLIAgCPIAbiPIBUAGIhCE4g");
	this.shape.setTransform(-0.1,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.U = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeCXQgVgIgPgOQgQgPgJgUQgJgUAAgXIgDjQIBQABIAFDGQAAAbATAAQARAAABgkIADjAIBSAAIgCDKQgBAYgGAVQgHAVgLAQQgMAQgRAJQgQAJgUAAQgWABgUgJg");
	this.shape.setTransform(-0.2,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.T = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjCaIAAjbIg/AAIgHhYIDTAAIAABTIg8AAIAADgg");
	this.shape.setTransform(-0.2,-1.5);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.SPC = function() {
	this.initialize();

	// Camada 1
	this.bg = new lib.mc_actionBG();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AByAIQAAgbAIgaQAHgbAPgWQAPgUAUgMQAWgNAbAAQAMAAAMACIAWAEQAIACAHAFQAGAEABAEIgfBJQgQgKgQAAQgKgBgIAGQgJAFgHAKQgFAJgEALQgDAMAAAKQAAALADAKQADAJAHAIQAGAHAJADQAIAFAMAAQAXAAAQgOIAUBHQgjAWgpABQhoAAAAiEgAhHCMIAAkRIBGgEIAFgBIAHgBIAAAAQAqABAVAZQAXAZAAAvQAABHg8AVQgPAGgPgBIACBUgAAFgIQANgBAJgIQAKgHAAgMQAAgQgLgKQgKgJgQAAIAAAAgAknBIIA9ghQAEAHAFAFQAFAGAGAFQAFAFAGADQAGACAGAAQAKABABgRQgBgEgDgDQgDgEgFgDIgMgIIgNgHQgNgIgLgKQgLgJgHgLQgIgLgEgNQgFgMAAgNQABgRAFgPQAGgOAMgKQAKgLAPgGQAPgFARgBQAOABANADQANADAMAGQALAGAJAHQAKAJAFAJIgsAwQgDgGgEgFIgLgJQgEgEgGgCQgGgDgEAAQgSABAAATQAAANAaAQQATALAMAJQAMAHAGAGQAbAbAAAnQAAAMgHAMQgFAMgKAJQgJAKgNAHQgMAFgLABQhPAAgrhEg");
	this.shape.setTransform(0.1,-1.8);

	this.addChild(this.shape,this.bg);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55,-27.5,110,55);


(lib.S = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhqBSIBGglQADAHAHAHIAMALQAGAGAIADQAEAEAGAAQAMAAAAgSQAAgFgDgEQgEgEgGgEQgGgFgFgEIgPgIQgPgJgMgMQgNgKgJgMQgIgNgFgPQgFgOAAgPQAAgTAHgRQAHgQAMgNQAMgLARgHQARgHASAAQAQAAAPAEQAPAEANAGQANAHALAKQAKAIAHALIgyA2IgJgLIgLgLIgNgHQgHgDgFAAQgSAAAAAXQAAAOAcATQAVAMAOAKQAOAJAHAHQAeAfABAsQAAAOgIANQgHAOgLALQgLAMgOAGQgNAIgNgBQhYAAgxhNg");
	this.shape.setTransform(-0.2,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.R = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhqiaQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgDAbgBQArAAAfAEQAeAEAVALQAVAMAJAVQAKAXAAAlQAAAogkAiIA9B4IhHAKIg0hRIAABOIhTAFgAgVgVQAcgHABgWIAAgDQgCgLgGgJQgJgIgRgCg");
	this.shape.setTransform(-0.5,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.Q = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArCIQgZARgjAAQg7AAgdgpQgdgqAAhPQAAgiAHgbQAIgbAOgUQAOgUAVgKQAVgMAZAAQA5AAAdAtQAcAtAABdQAAAMgBAMIgFAYIAzBSIhQAFgAg2gIQAAAPACAPQADAOAFAKQAEAKAHAGQAGAGAIAAQAMAAAHgNIgXguIAjAAIAAgDQAAhIgmABQgcgBAAA6g");
	this.shape.setTransform(-0.4,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.P = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhgCfIAAk4IBQgEIAHgBIAGgBIADAAQAuABAZAdQAaAcAAA2QAABShEAYQgRAGgQAAIADBegAgGgKQAMgBALgIQALgJAAgOQAAgSgMgLQgMgLgQAAIgBAAg");
	this.shape.setTransform(-1,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.O = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhUB1QgegqAAhRQAAgiAHgcQAIgcAOgUQAOgUAVgLQAVgMAcAAQAZAAAWAPQAWAPAPAYQAQAZAIAjQAIAiAAAmQAAAggHAXQgIAZgOARQgOARgVAKQgVAJgbgBQg5AAgegqgAgggFQAAAPACAPQADAPAEALQAFAKAHAGQAGAFAHAAQAHABAGgGQAGgFAFgJQAEgIADgLQACgLAAgMQAAhLgnAAQgcABAAA6g");
	this.shape.setTransform(-1.1,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.N = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpCfIAAk0IBOAAIA3CCIAAiMIBOAFIAAE3IhMgFIg7hmIAHBtg");
	this.shape.setTransform(-0.2,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.M = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA0CfIAAiQIg0BdIgshIIAAB3IhRAAIAAkxIBOgGIAoBuIAxhxIBUAAIAAE+g");
	this.shape.setTransform(0.1,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.L = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQCfIAAk2IBOgIIAADnIBTAAIAABXg");
	this.shape.setTransform(0.3,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.K = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhniYIBHgFIAABdIAzhdIBVAAIhJCPIBHCnIhTAAIguhYIAABYIhMAFg");
	this.shape.setTransform(0.7,-1.9);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.J = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjCXQgQgGgOgMQgOgLgJgPQgKgPgDgQIgCgQIgDgZIBNADQAAAOAHALQAHALAJAAQAIAAAIgHQAHgIAAgKIgFjOIBfAAIgNDsQgXBPhLAAQgPAAgQgHg");
	this.shape.setTransform(-0.2,-1.9);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.I = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxCfIAAk+IBjAAIAAE+g");
	this.shape.setTransform(-0.4,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.H = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVCfIAAhsIgsAAIAABsIhegIIAAkyIBWAAIAAB5IA/AAIAAh9IBWAAIAAE+g");
	this.shape.setTransform(-0.2,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.G = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtCVQgYgLgQgVQgQgUgIgeQgJgeAAglQAAhxBSgiQAYgMAaAAQAwABAxAdIgqBOQgNgSgqAAQgWAAgMATQgNATAAAgQAAARADAPQAEAPAGALQAGALAJAFQAHAGAMAAQAiAAAAgaIAAgDIgigDIgFhMIBogDQADATACARIABAnQAAA2gOASQgeAqhEAAQgcABgYgLg");
	this.shape.setTransform(0,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.F = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNCbIAAk2ICYAAIAABOIhLAAIAAAqIBNAAIAABHIhLAAIAAB3g");
	this.shape.setTransform(0.7,-1.6);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.END = function() {
	this.initialize();

	// Camada 1
	this.bg = new lib.mc_actionBG();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACKCKQgJAAgIgCIgNkMQAWgHAcAAQBAAAAhAmQAgAmAABFQAABAggAjQghAjhAAAIgUgCgAC3A0QAIgCAHgGQAGgGAFgGQAFgIACgIQADgKAAgGQAAgKgDgIQgDgIgFgHQgFgHgHgEQgHgFgIgBgAhkCMIAAkOIBFAAIAvBxIAAh6IBEAFIAAEPIhCgEIgzhZIAGBggAkeCMIAAkSICRAAIAABHIhIAEIACAkIBEAAIAAA4Ig/AAIAAAfIBIAAIAABMg");
	this.shape.setTransform(-0.1,-1.8);

	this.addChild(this.shape,this.bg);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55,-27.5,110,55);


(lib.E = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWCdIAAk5IClAAIAABRIhRAFIACAqIBNAAIAAA/IhJAAIAAAkIBTAAIAABWg");
	this.shape.setTransform(0.2,-1.8);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.DEL = function() {
	this.initialize();

	// Camada 1
	this.bg = new lib.mc_actionBG();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB/CMIAAkQIBEgHIAADKIBLAAIAABNgAgzCMIAAkSICPAAIAABHIhIAEIACAkIBEAAIAAA4Ig/AAIAAAfIBIAAIAABMgAjuCKQgJAAgIgCIgNkMQAVgHAdAAQBAAAAhAmQAgAmAABFQAABAggAjQghAjhAAAIgUgCgAjBA0QAHgCAIgGQAGgGAFgGQAFgIACgIQADgKAAgGQAAgKgDgIQgDgIgFgHQgFgHgIgEQgHgFgHgBg");
	this.shape.setTransform(-0.4,-1.8);

	this.addChild(this.shape,this.bg);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55,-27.5,110,55);


(lib.D = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCCfIgTgDIgQkzQAZgIAhAAQBGAAAmArQAlArAABPQAABLglAnQglAnhHAAIgXAAgAgQA8QAKgDAGgGQAIgHAFgIQAFgJADgKQADgKAAgIQAAgKgDgKQgDgJgGgIQgGgIgGgFQgIgFgKgBg");
	this.shape.setTransform(-1.1,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.C = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhmAKQgBgfAJggQAJgeAQgYQARgYAZgOQAYgOAdAAQAOAAANACQAOABALAEQAKADAHAEQAHAEACAGIglBTQgRgMgSAAQgMAAgKAHQgKAFgFALQgHALgEANQgDANAAAMQAAANADALQAEALAHAIQAGAIAJAEQALAGANAAQAaAAASgQIAXBQQgnAagvAAQh2AAABiVg");
	this.shape.setTransform(0.1,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.B = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbCfIgLk6IBHgDIAWgBQAuAAAbAXQAbAVAAAoQAAAOgCANQgDAMgEAKQgFALgFAGQgGAHgHACQAJACAIAHQAJAIAFALQAGALAEANQADAOAAAPQAAASgJAOQgIAOgPALQgOAKgVAGQgUAFgVAAgAgQAlIAAA6IAHAAQAjgBAAgcQAAgdgkAAIgGAAgAgRglIAEAAIAFABQAZAAAAgYQAAgOgJgIQgIgHgPAAIgFAAg");
	this.shape.setTransform(-1,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.A = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiCCfIBJk+IB4AAIBEE2IhgAAIgNg4IgwAAIgLBAgAgQAKIAgAAIgQhVg");
	this.shape.setTransform(-0.5,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._9 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhSCOQAGgGAZgkIBDhlQgQAGgTAAQgSAAgOgFQgPgFgKgLQgLgKgGgOQgGgPAAgQQAAgQAIgQQAIgQAOgNQANgLATgIQATgIAUAAQAVAAARAHQASAGANAKQANALAIAOQAHAOABAQIAAADQAAATgEAUQgEATgIATQgGANgXApQgYApglBBgAgWhYQgHAGAAALQAAAJAIAGQAHAGAMAAQAIAAAHgGQAIgHAAgKQAAgKgIgGQgIgGgJABQgLgBgHAHg");
	this.shape.setTransform(0.1,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._8 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGCfQgUAAgQgGQgRgHgMgMQgNgLgHgQQgHgRAAgUQAAhBAtgPQgdgWAAgrIAAgHQABgRAHgPQAHgNALgKQAMgLARgFQAPgGAQAAQAPAAAQAHQAPAGAMALQAMALAIAOQAHAOAAAPQAAAvgfAYQApAQAABAQAAAqgYAWQgXAVg0AEgAgQAsQgIAHAAAMQAAAMAHAJQAHAJAKAAIAJgCQAEgCAEgDQAEgEACgEQADgFAAgGQAAgMgHgJQgGgJgMAAQgJAAgIAHgAgQhIQgBAVATgBQATABAAgWQAAgXgTAAQgTAAABAYg");
	this.shape.setTransform(-1.1,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._7 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTCdIBbjsIhnAAIAAhNIC/AAIAABIIhjDxg");
	this.shape.setTransform(-0.1,-1.8);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._6 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglCUQgTgMgNgVQgOgWgIgdQgIgdAAgjIAAgHQAAhJAcgmQAbglAvgEIAGAAQA0AAAnA1Ig1AyQgQgbgYABQgSAAgLAOQgJAPgBAbIABAFIAAAFQAUgOAbABQARAAAPAHQAQAIALANQAMALAGASQAHASAAAWQAAATgIARQgJARgNAMQgOAMgTAHQgSAIgTgBQgTAAgSgLgAgNAoQgGAIAAANQAAAZAZAAQALAAAIgIQAGgIABgLQgBgNgHgHQgJgJgMAAQgIAAgIAKg");
	this.shape.setTransform(-0.9,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._5 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHCfQgNABgPgEQgOgFgNgHQgNgGgLgJQgMgKgHgLIBOgqQAPARAMAAQAaAAAAgXQAAgHgEgHQgEgHgHgFQgHgFgHgDQgJgDgKAAIgSABIg1ADIAVi6ICkAAIgFBUIhgAAIgIAgIAKgBIAIAAQBpAAAABpQAAAWgGARQgFASgNAMQgLAMgUAHQgTAHgcADIgEAAIgHAAg");
	this.shape.setTransform(-0.4,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._4 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAACeIAAhjIhmAAIgFhAIBXiYIBgAAIAACJIAgAAIAABRIgZAAIAABhgAgWgUIAWACIAAg6g");
	this.shape.setTransform(-0.5,-1.9);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._3 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhgBnIA2gsQASAOAQAAQAXAAAAgXQAAgJgIgHQgHgFgIgBIgOABIgNABIAAg6IAgAAQAWAAAAgVQAAgLgGgIQgHgIgJAAQgOAAgNARIhCgYQACgRAJgOQAIgNANgKQANgKARgGQARgGARAAQAUABASAGQASAIANAMQAMANAIARQAHASAAAUQAAAngfAZQAgAUAAA4QAAASgIAPQgIAQgNAKQgNALgSAHQgSAGgTAAQhBAAgfg4g");
	this.shape.setTransform(-0.5,-2);

	// Camada 2
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._2 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhaCfIAAhMIBUhkQAIgMAEgIQAGgJAAgGQgBgSgPgBQgMAAgLAaIhHABQAAgYAGgWQAGgUALgQQAMgPAPgJQAQgJAVAAQA4AAAbAYQAbAYAAA0QAAA8hTBLIBIgGIAABZg");
	this.shape.setTransform(0,-2);

	// Camada 2
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._1 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQCfIAAi4IgxAAIAAg8QATgIAfhCIBRADIAAE7g");
	this.shape.setTransform(-0.3,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib._0 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhSB4IgCgDQgegqAAhRQAAgiAHgcQAIgcAOgUQAOgUAVgLQAVgMAcAAQAZAAAWAPQAWAPAPAYQAQAZAIAjQAIAiAAAmQAAAggHAXQgHAWgMAQIgDAEQgOARgVAKQgVAJgbgBQg3ABgegogAgggFQAAAPACAPQADAPAEALQAFAKAHAGQAGAFAHAAQAHABAGgGQAGgFAFgJQAEgIADgLQACgLAAgMQAAhLgnAAQgcABAAA6g");
	this.shape.setTransform(-1.1,-2);

	// Camada 2
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.Symbol = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXA4QgLgFgJgIQgIgJgEgLQgFgLAAgMQAAgLAFgLQAEgMAIgIQAJgIALgFQAMgFALAAQAMAAALAFQALAFAJAIQAIAIAFAMQAFALAAALQAAAMgFALQgFALgIAJQgJAIgKAFQgMAFgMAAQgLAAgMgFg");
	this.shape.setTransform(-0.1,7.8);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.Symbol_1 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaCUQgLgMAAgQQAAgRALgMQALgLAPAAQAIAAAHAEQAHADAGAFQAFAFAEAIQADAHAAAIQAAAIgDAHQgEAHgFAGQgGAFgHAEQgHACgIAAQgPAAgLgLgAgfAuIgRjIIBhgFIgPDNg");
	this.shape.setTransform(-0.1,-2);

	// bg
	this.bg = new lib.mc_letterBG();

	this.addChild(this.bg,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.KeyboardCartoonistBreaked = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var c = this;
		
		var buttons = [c._0, this._1, this._2, this._3, this._4, this._5, this._6, this._7, this._8, this._9,  
		this._a, this._b, this._c, this._d, this._e, this._f, this._g, this._h, this._i, this._j, 
		this._k, this._l, this._m, this._n, this._o, this._p, this._q, this._r, this._s, this._t, 
		this._u, this._v, this._w, this._x, this._y, this._z, this._ponto, this._exclamacao, 
		this._spc, this._del, this._end];
		
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
		
		function clickHandler(e)
		{
			var str = e.currentTarget.name.substr(1,3);
			
			e.currentTarget.bg.gotoAndPlay("s1");
			
			playSound("click");
			
			if (str == "end")
				return;
			
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

	// letters
	this._end = new lib.END();
	this._end.setTransform(590,385);

	this._del = new lib.DEL();
	this._del.setTransform(480,385);

	this._spc = new lib.SPC();
	this._spc.setTransform(370,385);

	this._exclamacao = new lib.Symbol_1();
	this._exclamacao.setTransform(672.5,330);

	this._ponto = new lib.Symbol();
	this._ponto.setTransform(617.5,330);

	this._z = new lib.Z();
	this._z.setTransform(562.5,330);

	this._y = new lib.Y();
	this._y.setTransform(507.5,330);

	this._x = new lib.X();
	this._x.setTransform(452.5,330);

	this._w = new lib.W();
	this._w.setTransform(397.5,330);

	this._v = new lib.V();
	this._v.setTransform(342.5,330);

	this._u = new lib.U();
	this._u.setTransform(287.5,330);

	this._t = new lib.T();
	this._t.setTransform(727.5,275);

	this._s = new lib.S();
	this._s.setTransform(672.5,275);

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

	this._l = new lib.L();
	this._l.setTransform(287.5,275);

	this._k = new lib.K();
	this._k.setTransform(232.5,275);

	this._j = new lib.J();
	this._j.setTransform(727.5,220);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this._0},{t:this._1},{t:this._2},{t:this._3},{t:this._4},{t:this._5},{t:this._6},{t:this._7},{t:this._8},{t:this._9},{t:this._a},{t:this._b},{t:this._c},{t:this._d},{t:this._e},{t:this._f},{t:this._g},{t:this._h},{t:this._i},{t:this._j},{t:this._k},{t:this._l},{t:this._m},{t:this._n},{t:this._o},{t:this._p},{t:this._q},{t:this._r},{t:this._s},{t:this._t},{t:this._u},{t:this._v},{t:this._w},{t:this._x},{t:this._y},{t:this._z},{t:this._ponto},{t:this._exclamacao},{t:this._spc},{t:this._del},{t:this._end}]}).wait(1));

	// nome
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,0,0,3).p("Ah3AAIDvAA");
	this.shape.setTransform(480,93.4,25,1);

	this.label = new cjs.Text("", "35px 'Cartoonist'", "#FFFF00");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 37;
	this.label.lineWidth = 737;
	this.label.setTransform(478,56.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.label},{t:this.shape}]}).wait(1));

	// bg
	this.text = new cjs.Text("cartoonist", "16px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 189;
	this.text.setTransform(94.5,531.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.047)").s().p("AoBGzIAAtlIQDAAIAANlg");
	this.shape_1.setTransform(480,275,9.325,6.322);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,550);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Camada 2
	this.keyboard = new lib.KeyboardCartoonistBreaked();
	this.keyboard.setTransform(480,275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.keyboard).wait(30));

	// title
	this.instance = new lib.mc_title();
	this.instance.setTransform(480,-46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:24},14,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,214.6,960,610.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;