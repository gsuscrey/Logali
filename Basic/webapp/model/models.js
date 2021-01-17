sap.ui.define([
	"sap/ui/model/json/JSONModel" // module or template JSON to model. this use in VIEW - XML
], function (JSONModel) {
	/*parte privada*/
	"use strict";

	return {
		createRecipient: function() {
			var oData = {
				recipient: {
					name: "World"
				}
			};
		//opt1
			//var oModel = new JSONModel(oData);
			//return oModel;
		//opt2:
			return new JSONModel(oData);
		}	
	};
});