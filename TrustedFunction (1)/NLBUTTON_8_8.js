var saveNL_8_8 = app.trustedFunction( function(oDoc) {
	app.beginPriv();
	oDoc.extractPages({nStart:15, nEnd:22, cPath: "../QuickQuote/Apps/NorthlandApps/" + oDoc.getField("AD2").valueAsString + "_" + "NLAPP" + ".pdf"}); app.endPriv();
});





