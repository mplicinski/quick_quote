var saveCNT = app.trustedFunction( function(oDoc) {
	app.beginPriv();
	oDoc.extractPages({nStart:25, nEnd:28, cPath: "../QuickQuote/Apps/CountryFinancialApps/" + oDoc.getField("AD2").valueAsString + "_" + "COUNTRYAPP" + ".pdf"}); app.endPriv();
});



