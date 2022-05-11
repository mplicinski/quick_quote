var saveSUP_4_4 = app.trustedFunction( function(oDoc) {
	app.beginPriv();
	oDoc.extractPages({nStart:36, nEnd:37, cPath: "../QuickQuote/Apps/SuperiorApps/" + oDoc.getField("AD2").valueAsString + "_" + "SUPAPP" + ".pdf"}); app.endPriv();
});





