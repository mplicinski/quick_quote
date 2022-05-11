var saveSUP_8_8 = app.trustedFunction( function(oDoc) {
	app.beginPriv();
	oDoc.extractPages({nStart:36, nEnd:38, cPath: "../QuickQuote/Apps/SuperiorApps/" + oDoc.getField("AD2").valueAsString + "_" + "SUPAPP" + ".pdf"}); app.endPriv();
});





