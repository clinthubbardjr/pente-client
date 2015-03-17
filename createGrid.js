window.onload = initialize;




////////// Functions //////////
/* Initial Onload Function */
function initialize() {
	// alert(grid.innerHTML);
	
	var pointInstances = document.getElementById("pointInstances");
	var pointLabel = document.getElementById("pointLabel");
	
	var increment = 2;
    	
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
    	
    	var col = point % 19;
    	var row = Math.floor(point / 19);
    
    	alphaGroup = 'abcdefghijklmnopqrstuvwxyz'[row];
    	
    	alphaGroupY = increment * row;
    	numGroupX = increment * col;
    	numGroup = col + 1;
    	
    	// Inject Use Instances into <g>
    	pointInstances.innerHTML += "<use onmouseover=\"changePointlabel(this)\" xlink:href = \"#points\" x = \"" + numGroupX + "\" y = \"" + alphaGroupY + "\" class = \"points " + "row-" + alphaGroup + " col-" + numGroup + "\"" + "id = \"" + alphaGroup + numGroup + "\"" + " />";
    }    
}