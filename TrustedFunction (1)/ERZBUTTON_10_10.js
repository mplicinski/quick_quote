var saveERZ_10_10 = app.trustedFunction( function(oDoc) {
	app.beginPriv();
	oDoc.extractPages({nStart:6, nEnd:10, cPath: "../QuickQuote/Apps/ERZApps/" + oDoc.getField("AD2").valueAsString + "_" + "ERZAPP" + ".pdf"}); app.endPriv();
});





