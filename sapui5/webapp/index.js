sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], 
/**
 * @param {typeOf sap.ui.core.mvc.XMLView} XMLView  
 */
function(XMLView) {
   
	XMLView.create({viewName: "logaligroup.com.sapui5.view.App"}).then(function (oView) {
		oView.placeAt("content");
	});

});
