sap.ui.define([
	//rutas de recursos o modulos.
	"sap/ui/core/UIComponent",
	"logaligroup/Basic/model/models",
	"sap/ui/model/resource/ResourceModel",
	"./controller/HelloDialog"
], function (UIComponent, models, ResourceModel,HelloDialog) { //pasamos la instancia
	/*  llamamos al padre con extend ya que es una funcion init*/
	return UIComponent.extend("logaligroup.Basic.Component", {
/*********************************************************************/	
    //call the firs xml using Metadata - delete index.js
    /* MANIFEST.JSON es usado aca para tener toda la configuracion*/
			 metadata: {
			 	manifest: "json"
			},
/*****************   *************************************************/		
	    //call the firs Models - delete in Controller.js
		init: function () {
			//call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			/* se copia las funciones o llamadas a las vista que tiene el controlador a este file 	para que este sea el que permita el acceso a otras app.
		 	establece un nuevo modelo */
			this.setModel(models.createRecipient());

			//  function para el i18n internacionalizacion de texto 
			// set i18n on view
			var i18nModel = new ResourceModel({ //instancia/		
				bundleName: "logaligroup.Basic.i18n.i18n" // ruta completa de archivo

			});
			this.setModel(i18nModel, "i18n"); // pasamos el recurso y el tipo de dato		  	
		
/***************** New atributo for Dialog xml *************************/	
			this._helloDialog = new HelloDialog(this.getRootControl()); //llamamos la instancia a objeto 
/***************** Usar el enrutamiento **************/
            this.getRouter().initialize();
		},
		exit: function(){  //Eliminamos inst cuando no se acaba la llamada al componente
			this._helloDialog.destroy();
			delete this._helloDialog;
		},
		openHelloDialog: function(){
			this._helloDialog.open();
		}
	});
});