var saveACE = app.trustedFunction( function(oDoc) {
	app.beginPriv();
	oDoc.extractPages({nStart:43, nEnd:47, cPath: "../QuickQuote/Apps/AceApps/" + oDoc.getField("AD2").valueAsString + "_" + "ACEAPP" + ".pdf"}); app.endPriv();
});



