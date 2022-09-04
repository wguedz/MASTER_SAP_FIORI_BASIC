sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel", 
    "sap/ui/model/resource/ResourceModel", 
    "../model/Models"
    
], 
/**
 * @param {typeOf sap.ui.core.mvc.Controller} Controller  
 * @param {typeOf sap.m.MessageToast} MessageToast 
 * @param {typeOf sap.ui.model.json.JSONModel} JSONModel 
 */
function(Controller, MessageToast, JSONModel,ResourceModel, Models) {
    'use strict'; 

    return Controller.extend("logaligroup.com.sapui5.Controller", {

        onInit: function(){
            // // set i18n model on view
            // var i18nModel = new ResourceModel({
            //     bundleName: "logaligroup.com.sapui5.i18n.i18n" });
            // this.getView().setModel(i18nModel, "i18n");

            // this.getView().setModel(Models.createRecipient(),"oDataModel");
            
            // var oData = {  
            //     recipient: {
            //         name: "World"
            //     }  
            // };       

            // var oModel = new JSONModel(oData);
            // this.getView().setModel(oModel,"oDataModel");
            
        },     

        onPress: function(){
              
            var sRecipient = this.getView().getModel("oDataModel").getProperty("/recipient/name");
            var oBundle    = this.getView().getModel("i18n").getResourceBundle();
            var sMsg  =  oBundle.getText("toastMsg", [sRecipient]);
            MessageToast.show(sMsg);

        }

    });
    
});