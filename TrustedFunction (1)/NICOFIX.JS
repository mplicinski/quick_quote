var myFIX = app.trustedFunction( function(oDoc) {
	app.beginPriv();
	oDoc.importAnFDF({cPath: "../QuickQuote/DevelopmentFiles/therest.fdf"}); app.endPriv();
});




