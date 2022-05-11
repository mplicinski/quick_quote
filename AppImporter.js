var importAPPS = app.trustedFunction( function(oDoc,odc) {
	app.beginPriv();
        var bdc = app.browseForDoc({cFileFilter: 2});
	var odc = app.openDoc({cPath: bdc.cPath, bHidden: true});
        odc.cPath.exportAnFDF({cPath: "../QuickQuote/AppsReceivedBack/"+ odc.documentFileName.replace(/\.pdf$/i, ".fdf")})
        oDoc.importAnFDF({cPath: "../QuickQuote/DevelopmentFiles/therest.fdf"});
	closeDoc();
        app.endPriv();
});



