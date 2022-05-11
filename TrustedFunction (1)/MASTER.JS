var myEXPORT = app.trustedFunction( function(oDoc) {
	app.beginPriv();
	oDoc.exportAsFDF({cPath: "../QuickQuote/MasterFiles/" + oDoc.getField("AD2").value + "_" + "MASTERAPP" + ".fdf"}); app.endPriv();
});




