window.onload = initialize;




////////// Functions //////////
/* Initial Onload Function */
function initialize() {
	// alert(grid.innerHTML);
	
	
	var pointInstances = document.getElementById("pointInstances");
	var pointLabel = document.getElementById("pointLabel");
	
	var increment = 40;
    	
	// Alphabetical Row Group
	var alphaGroup = "z";
	// (Y) Y position based off of alphabetical group
	var alphaGroupY = 0;
	
	// Numerical Col Group
	var numGroup = 0;
	// (X) X position based off of numerical group
	var numGroupX = 0;
	
	for (point = 0; point < 361; point++) {
    	//console.log(i);
    	
    	if (point < 19 && point > -1) {
	    	alphaGroup = "a";
	    	alphaGroupY = increment * 0;
    	}
    	else if (point > 18 && point < 38) {
	    	alphaGroup = "b";
	    	alphaGroupY = increment * 1;
    	}
    	else if (point > 37 && point < 57) {
	    	alphaGroup = "c";
	    	alphaGroupY = increment * 2;
    	}
    	else if (point > 56 && point < 76) {
	    	alphaGroup = "d";
	    	alphaGroupY = increment * 3;
    	}
    	else if (point > 75 && point < 95) {
	    	alphaGroup = "e";
	    	alphaGroupY = increment * 4;
    	}
    	else if (point > 94 && point < 114) {
	    	alphaGroup = "f";
	    	alphaGroupY = increment * 5;
    	}
    	else if (point > 113 && point < 133) {
	    	alphaGroup = "g";
	    	alphaGroupY = increment * 6;
    	}
    	else if (point > 132 && point < 152) {
	    	alphaGroup = "h";
	    	alphaGroupY = increment * 7;
    	}
    	else if (point > 151 && point < 171) {
	    	alphaGroup = "i";
	    	alphaGroupY = increment * 8;
    	}
    	else if (point > 170 && point < 190) {
	    	alphaGroup = "j";
	    	alphaGroupY = increment * 9;
    	}
    	else if (point > 189 && point < 209) {
	    	alphaGroup = "k";
	    	alphaGroupY = increment * 10;
    	}
    	else if (point > 208 && point < 228) {
	    	alphaGroup = "l";
	    	alphaGroupY = increment * 11;
    	}
    	else if (point > 227 && point < 247) {
	    	alphaGroup = "m";
	    	alphaGroupY = increment * 12;
    	}
    	else if (point > 246 && point < 266) {
	    	alphaGroup = "n";
	    	alphaGroupY = increment * 13;
    	}
    	else if (point > 265 && point < 285) {
	    	alphaGroup = "o";
	    	alphaGroupY = increment * 14;
    	}
    	else if (point > 284 && point < 304) {
	    	alphaGroup = "p";
	    	alphaGroupY = increment * 15;
    	}
    	else if (point > 303 && point < 323) {
	    	alphaGroup = "q";
	    	alphaGroupY = increment * 16;
    	}
    	else if (point > 322 && point < 342) {
	    	alphaGroup = "r";
	    	alphaGroupY = increment * 17;
    	}
    	else if (point > 341 && point < 361) {
	    	alphaGroup = "s";
	    	alphaGroupY = increment * 18;
    	}
    	else {
	    	alphaGroup = "z";
    	}
    	
    	
    	if (point == 0 || point == 0+19 || point == 0+38 || point == 0+57 || point == 0+76 || point == 0+95 || point == 0+114 || point == 0+133 || point == 0+152 || point == 0+171 || point == 0+190 || point == 0+209 || point == 0+228 || point == 0+247 || point == 0+266 || point == 0+285 || point == 0+304 || point == 0+323 || point == 0+342) {
	    	numGroup = 1;
	    	numGroupX = increment * 0;
    	}
    	else if (point == 1 || point == 1+19 || point == 1+38 || point == 1+57 || point == 1+76 || point == 1+95 || point == 1+114 || point == 1+133 || point == 1+152 || point == 1+171 || point == 1+190 || point == 1+209 || point == 1+228 || point == 1+247 || point == 1+266 || point == 1+285 || point == 1+304 || point == 1+323 || point == 1+342) {
	    	numGroup = 2;
	    	numGroupX = increment * 1;
    	}
    	else if (point == 2 || point == 2+19 || point == 2+38 || point == 2+57 || point == 2+76 || point == 2+95 || point == 2+114 || point == 2+133 || point == 2+152 || point == 2+171 || point == 2+190 || point == 2+209 || point == 2+228 || point == 2+247 || point == 2+266 || point == 2+285 || point == 2+304 || point == 2+323 || point == 2+342) {
	    	numGroup = 3;
	    	numGroupX = increment * 2;
    	}
    	else if (point == 3 || point == 3+19 || point == 3+38 || point == 3+57 || point == 3+76 || point == 3+95 || point == 3+114 || point == 3+133 || point == 3+152 || point == 3+171 || point == 3+190 || point == 3+209 || point == 3+228 || point == 3+247 || point == 3+266 || point == 3+285 || point == 3+304 || point == 3+323 || point == 3+342) {
	    	numGroup = 4;
	    	numGroupX = increment * 3;
    	}
    	else if (point == 4 || point == 4+19 || point == 4+38 || point == 4+57 || point == 4+76 || point == 4+95 || point == 4+114 || point == 4+133 || point == 4+152 || point == 4+171 || point == 4+190 || point == 4+209 || point == 4+228 || point == 4+247 || point == 4+266 || point == 4+285 || point == 4+304 || point == 4+323 || point == 4+342) {
	    	numGroup = 5;
	    	numGroupX = increment * 4;
    	}
    	else if (point == 5 || point == 5+19 || point == 5+38 || point == 5+57 || point == 5+76 || point == 5+95 || point == 5+114 || point == 5+133 || point == 5+152 || point == 5+171 || point == 5+190 || point == 5+209 || point == 5+228 || point == 5+247 || point == 5+266 || point == 5+285 || point == 5+304 || point == 5+323 || point == 5+342) {
	    	numGroup = 6;
	    	numGroupX = increment * 5;
    	}
    	else if (point == 6 || point == 6+19 || point == 6+38 || point == 6+57 || point == 6+76 || point == 6+95 || point == 6+114 || point == 6+133 || point == 6+152 || point == 6+171 || point == 6+190 || point == 6+209 || point == 6+228 || point == 6+247 || point == 6+266 || point == 6+285 || point == 6+304 || point == 6+323 || point == 6+342) {
	    	numGroup = 7;
	    	numGroupX = increment * 6;
    	}
    	else if (point == 7 || point == 7+19 || point == 7+38 || point == 7+57 || point == 7+76 || point == 7+95 || point == 7+114 || point == 7+133 || point == 7+152 || point == 7+171 || point == 7+190 || point == 7+209 || point == 7+228 || point == 7+247 || point == 7+266 || point == 7+285 || point == 7+304 || point == 7+323 || point == 7+342) {
	    	numGroup = 8;
	    	numGroupX = increment * 7;
    	}
    	else if (point == 8 || point == 8+19 || point == 8+38 || point == 8+57 || point == 8+76 || point == 8+95 || point == 8+114 || point == 8+133 || point == 8+152 || point == 8+171 || point == 8+190 || point == 8+209 || point == 8+228 || point == 8+247 || point == 8+266 || point == 8+285 || point == 8+304 || point == 8+323 || point == 8+342) {
	    	numGroup = 9;
	    	numGroupX = increment * 8;
    	}
    	else if (point == 9 || point == 9+19 || point == 9+38 || point == 9+57 || point == 9+76 || point == 9+95 || point == 9+114 || point == 9+133 || point == 9+152 || point == 9+171 || point == 9+190 || point == 9+209 || point == 9+228 || point == 9+247 || point == 9+266 || point == 9+285 || point == 9+304 || point == 9+323 || point == 9+342) {
	    	numGroup = 10;
	    	numGroupX = increment * 9;
    	}
    	else if (point == 10 || point == 10+19 || point == 10+38 || point == 10+57 || point == 10+76 || point == 10+95 || point == 10+114 || point == 10+133 || point == 10+152 || point == 10+171 || point == 10+190 || point == 10+209 || point == 10+228 || point == 10+247 || point == 10+266 || point == 10+285 || point == 10+304 || point == 10+323 || point == 10+342) {
	    	numGroup = 11;
	    	numGroupX = increment * 10;
    	}
    	else if (point == 11 || point == 11+19 || point == 11+38 || point == 11+57 || point == 11+76 || point == 11+95 || point == 11+114 || point == 11+133 || point == 11+152 || point == 11+171 || point == 11+190 || point == 11+209 || point == 11+228 || point == 11+247 || point == 11+266 || point == 11+285 || point == 11+304 || point == 11+323 || point == 11+342) {
	    	numGroup = 12;
	    	numGroupX = increment * 11;
    	}
    	else if (point == 12 || point == 12+19 || point == 12+38 || point == 12+57 || point == 12+76 || point == 12+95 || point == 12+114 || point == 12+133 || point == 12+152 || point == 12+171 || point == 12+190 || point == 12+209 || point == 12+228 || point == 12+247 || point == 12+266 || point == 12+285 || point == 12+304 || point == 12+323 || point == 12+342) {
	    	numGroup = 13;
	    	numGroupX = increment * 12;
    	}
    	else if (point == 13 || point == 13+19 || point == 13+38 || point == 13+57 || point == 13+76 || point == 13+95 || point == 13+114 || point == 13+133 || point == 13+152 || point == 13+171 || point == 13+190 || point == 13+209 || point == 13+228 || point == 13+247 || point == 13+266 || point == 13+285 || point == 13+304 || point == 13+323 || point == 13+342) {
	    	numGroup = 14;
	    	numGroupX = increment * 13;
    	}
    	else if (point == 14 || point == 14+19 || point == 14+38 || point == 14+57 || point == 14+76 || point == 14+95 || point == 14+114 || point == 14+133 || point == 14+152 || point == 14+171 || point == 14+190 || point == 14+209 || point == 14+228 || point == 14+247 || point == 14+266 || point == 14+285 || point == 14+304 || point == 14+323 || point == 14+342) {
	    	numGroup = 15;
	    	numGroupX = increment * 14;
    	}
    	else if (point == 15 || point == 15+19 || point == 15+38 || point == 15+57 || point == 15+76 || point == 15+95 || point == 15+114 || point == 15+133 || point == 15+152 || point == 15+171 || point == 15+190 || point == 15+209 || point == 15+228 || point == 15+247 || point == 15+266 || point == 15+285 || point == 15+304 || point == 15+323 || point == 15+342) {
	    	numGroup = 16;
	    	numGroupX = increment * 15;
    	}
    	else if (point == 16 || point == 16+19 || point == 16+38 || point == 16+57 || point == 16+76 || point == 16+95 || point == 16+114 || point == 16+133 || point == 16+152 || point == 16+171 || point == 16+190 || point == 16+209 || point == 16+228 || point == 16+247 || point == 16+266 || point == 16+285 || point == 16+304 || point == 16+323 || point == 16+342) {
	    	numGroup = 17;
	    	numGroupX = increment * 16;
    	}
    	else if (point == 17 || point == 17+19 || point == 17+38 || point == 17+57 || point == 17+76 || point == 17+95 || point == 17+114 || point == 17+133 || point == 17+152 || point == 17+171 || point == 17+190 || point == 17+209 || point == 17+228 || point == 17+247 || point == 17+266 || point == 17+285 || point == 17+304 || point == 17+323 || point == 17+342) {
	    	numGroup = 18;
	    	numGroupX = increment * 17;
    	}
    	else if (point == 18 || point == 18+19 || point == 18+38 || point == 18+57 || point == 18+76 || point == 18+95 || point == 18+114 || point == 18+133 || point == 18+152 || point == 18+171 || point == 18+190 || point == 18+209 || point == 18+228 || point == 18+247 || point == 18+266 || point == 18+285 || point == 18+304 || point == 18+323 || point == 18+342) {
	    	numGroup = 19;
	    	numGroupX = increment * 18;
    	}
       	else {
	    	numGroup = 0;
    	}
    	
    	
    	pointInstances.innerHTML += "<use onmouseover=\"changePointlabel(this)\" xlink:href = \"#points\" x = \"" + numGroupX + "\" y = \"" + alphaGroupY + "\" class = \"" + alphaGroup + "\"" + "id = \"" + alphaGroup + numGroup + "\"" + " />";
    }
    
}

/*
	var circle = document.createElement("circle");
	circle.setAttribute("id", "newdot");
	circle.setAttribute("fill", "rgb(255,0,0)");
	circle.setAttribute("fill-opacity", 1);
	circle.setAttribute("cx", 10);
	circle.setAttribute("cy", 10);
	circle.setAttribute("r", 5);
	
	grid.appendChild(circle);
*/

/*
grid.innerHTML =
	"<defs> <symbol id=\"points\"> <circle fill=\"rgb(255,0,0)\" fill-opacity=\"1\" cx=\"10\" cy=\"10\" r=\"5\"> </circle> </symbol> </defs>"
	+
	"<use xlink:href=\"#points\" x=\"0\" y=\"0\" />"
	+
	"<use xlink:href=\"#points\" x=\"100\" y=\"100\" />";
*/