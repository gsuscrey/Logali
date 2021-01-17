sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
	//	"logaligroup/Basic/model/models",
	//	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, Fragment) {
	/*Private - controlador privado*/
	"use strict"; /*muestra lo privado */
	return Controller.extend("logaligroup.Basic.controller.HelloPanel", {
		/* ------ Controlador extendido - Devolvemos la instancia publica ---*/
		/* function inicial que es llamado por el framework automaticamente, cuando instancia el controlador y la vista */
		onInit: function () {

		},
		onShowHello: function () {
			/*ampliamos el uso de boton texto y lo hacemos dinamico (entrada y salida)
			a traves de i18n or modelo de text
			obtenemos el atributo de la instancia de la vista "recipient" y lo modificamos*/

			// read text from i18n / model
			var sHello = this.getView().getModel("i18n").getResourceBundle().getText("sayHello");
			/* sin var    1.-instVista,   2.-soloInsti18n  3.-obtAtributo 4,-obtCampoTexto*/
			var sName = this.getView().getModel().getProperty("/recipient/name");
			/* sin var    1.-instVista,   2.-instGeneral  3.-obtPropiedadesDelaVista*/
			var sMsg = sHello.concat(" ").concat(sName);
			/* con var or inside method */
			//MessageToast.show("Hello World");
			MessageToast.show(sMsg);
		},

		onOpenDialog: function () {

			// var oView = this.getView();

			// if (!this.byId("helloDialog")) { // condition id if not is using in this momento

			// 	Fragment.load({ //using function in Fragment; with id fragment and name ubication
			// 		id: oView.getId(),
			// 		name: "logaligroup.Basic.view.HelloDialog",
			// 		controller: this //agg atributo cuando usas sub botones en dialogos
			// 	}).then(function (oDialog) { //return oDialog with dependencia solo cuando la vista abra 
			// 		oView.addDependent(oDialog);
			// 		oDialog.open();
			// 	});
				
			// } else {
			// 	this.byId("helloDialog").open();
			// }
		// },
		// onCloseDialog: function (){
		// 	this.byId("helloDialog").close(); 
//**************** Cambiamos al Component.js ***********************************
			this.getOwnerComponent().openHelloDialog(); // llamda al component
		}
	});
});