var saveLLD = app.trustedFunction( function(oDoc) {
	app.beginPriv();
	oDoc.extractPages({nStart:40, nEnd:42, cPath: "../QuickQuote/Apps/LloydsApps/" + oDoc.getField("AD2").valueAsString + "_" + "LLOYDSAPP" + ".pdf"}); app.endPriv();
});



