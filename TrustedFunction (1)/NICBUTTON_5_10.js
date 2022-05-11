var saveNIC_10_5 = app.trustedFunction( function(oDoc) {
	app.beginPriv();
	oDoc.extractPages({nStart:29, nEnd:34, cPath: "../QuickQuote/Apps/NICOApps/" + oDoc.getField("AD2").valueAsString + "_" + "NICOAPP" + ".pdf"}); app.endPriv();
});



