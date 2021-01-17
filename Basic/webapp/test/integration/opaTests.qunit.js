/* global QUnit */
/* template in qnitTes.qunit.html*/

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function( ) {
	sap.ui.require([
		"logaligroup/Basic/test/integration/NavigationJourney"
		],function(){
		 QUnit.start();
		}); 	
});
