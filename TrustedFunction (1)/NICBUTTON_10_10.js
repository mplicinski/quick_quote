var saveNIC_10_10 = app.trustedFunction( function(oDoc) {
	app.beginPriv();
	oDoc.extractPages({nStart:29, nEnd:35, cPath: "../QuickQuote/Apps/NICOApps/" + oDoc.getField("AD2").valueAsString + "_" + "NICOAPP" + ".pdf"}); app.endPriv();
});



