sap.ui.define([
	"logaligroup/Basic/model/formatter", //call i18n to change status
	"sap/ui/model/resource/ResourceModel"], // recursos de plataforma
	function(formatter,ResourceModel){
		QUnit.module("Formatting Functions", { 
	     beforeEach: function(){ 
	    	this._oResourceModel = new ResourceModel({
	    		bundleUrl: sap.ui.require.toUrl("logaligroup/Basic") + "/i18n/i18n.properties"	//use controller and model Basic
	    	});	
	     },
	     afterEach: function() {
	     	this._oResourceModel.destroy();
	     }
		});
		QUnit.test("Should return the translated text", function (assert){
		
			var oModel = this.stub(); // with template "https://openui5.hana.ondemand.com/resources/sap/ui/thirdparty/sinon-qunit.js" 
			oModel.withArgs("i18n").returns(this._oResourceModel); //instancia Model 
			
			var oViewStub = { 
				getModel: oModel
			};
			var oControllerStub = {
				getView: this.stub().returns(oViewStub)//instancia Controller 
			
			};
			var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub); //union
			///Assert
			assert.strictEqual(fnIsolatedFormatter("A"),"New","The long text for status A is correct");
			assert.strictEqual(fnIsolatedFormatter("B"),"In Process","The long text for status B is correct");
			assert.strictEqual(fnIsolatedFormatter("C"),"empty","The long text for status B is correct");
		});
	});