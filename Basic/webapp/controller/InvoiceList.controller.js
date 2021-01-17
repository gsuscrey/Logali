sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
	], function(Controller,JSONModel,formatter,Filter,FilterOperator){
		return Controller.extend("logaligroup.Basic.controller.InvoiceList",{
// INI- using formarrt text to Status by models
			formatter: formatter,
// FIN- using formarrt text to Status by models		
			onInit: function(){
				var oViewModel = new JSONModel({
					currency:"EUR"
					});
					this.getView().setModel(oViewModel,"view"); 
				} ,
			onFilterInvoices: function(oEvent){
				//build filter array
				var aFilter=[];
				//getContent
				var sQuery = oEvent.getParameter("query");
				if (sQuery) {
					aFilter.push(new Filter("ProductName",FilterOperator.Contains,sQuery));
				}
				//filter binding
				var oList = this.byId("invoiceList");
				var oBinding = oList.getBinding("items");
				oBinding.filter(aFilter);
			},
			onPress: function(oEvent){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("detail");
			}
		});
	
});