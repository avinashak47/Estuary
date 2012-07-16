
function masterTestExecutor ( canvas ) {
	var canvasDom = document.getElementById(canvas);
	var testNode = new EstuaryNode();

	testNode.setText("jajajaja testing!");
	testNode.setCoords( 100, 100 );
	testNode.setFontSize(18);
	testNode.setFontStyle("Arial");
	
	testNode.render( canvasDom );

        testNode.setText("test2222!");
        testNode.setCoords( 200, 300 );
        testNode.setFontSize(22);
        testNode.setFontStyle("Times New Roman");

        testNode.render( canvasDom );

        testNode.setText("jajajaja!");
        testNode.setCoords( 500, 50 );
        testNode.setFontSize(14);
        testNode.setFontStyle("Arial");

        testNode.render( canvasDom );

        testNode.setText("smallish test");
        testNode.setCoords( 500, 500 );
        testNode.setFontSize(10);
        testNode.setFontStyle("Arial");

        testNode.render( canvasDom );


}
