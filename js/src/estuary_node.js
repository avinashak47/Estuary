function EstuaryNode() {
	//coordinates are for the center of the Node
	this.coords_x = 0;
	this.coords_y = 0;
	this.text = "";
	this.font_size = 0;	
	this.font_style = "";
	this.instances = {};
	this.fillColor = "";	

	//render time data
	this.textWidth = 0;
	
}

EstuaryNode.prototype.setCoords = function( coords_x, coords_y ) { 
	this.coords_x = coords_x;
	this.coords_y = coords_y;
}; 

EstuaryNode.prototype.setText  = function( text ) { this.text = text; };
EstuaryNode.prototype.setFontSize = function( size ) { this.font_size = size; }; 
EstuaryNode.prototype.setFillColor = function( fontColor ) { this.fillColor = String(fontColor); };
EstuaryNode.prototype.setFontStyle = function( fontStyle ) { this.font_style = String(fontStyle); };

EstuaryNode.prototype.getCanvasFontString = function() {
	var retStr = this.font_size+"pt"+" "+ this.font_style;
	return retStr;
}

EstuaryNode.prototype.render = function( canvasReference ) {
	if ( canvasReference == null ) { return false; }
	var context = canvasReference.getContext('2d');
	if (context == null) { return false; }
	context.font = this.getCanvasFontString();
	
	this.textWidth = context.measureText(this.text);
	var shapeHandler = new EstuaryShapes();
	//TODO : moves these scaling factors into its own class , this is nastay prototyping! 
	shapeHandler.drawEllipse (context,  this.coords_x, this.coords_y, this.textWidth.width*1.5 , this.font_size*3.5 );	
	context.fillText( this.text, this.coords_x + parseFloat(this.textWidth.width*1.5/5) , this.coords_y + parseFloat(this.font_size*2.1));
	
	return true;
}

