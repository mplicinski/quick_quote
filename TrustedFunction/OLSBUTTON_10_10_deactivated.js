var saveOLS_10_10 = app.trustedFunction( function(oDoc) {
	app.beginPriv();
	oDoc.extractPages({nStart:11, nEnd:14, cPath: "../QuickQuote/Apps/OlsonApps/" + oDoc.getField("AD2").valueAsString + "_" + "OLSAPP" + ".pdf"}); app.endPriv();
});



