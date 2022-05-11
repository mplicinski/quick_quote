var saveOLS_5_5 = app.trustedFunction( function(oDoc) {
	app.beginPriv();
	oDoc.extractPages({nStart:11, nEnd:13, cPath: "../QuickQuote/Apps/OlsonApps/" + oDoc.getField("AD2").valueAsString + "_" + "OLSAPP" + ".pdf"}); app.endPriv();
});


