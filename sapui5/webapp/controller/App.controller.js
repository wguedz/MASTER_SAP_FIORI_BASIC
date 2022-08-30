sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "sap/m/MessageToast"
], 
/**
 * @param {typeOf sap.ui.core.mvc.Controller} Controller  
 * @param {typeOf sap.m.MessageToast} MessageToast 
 */
function(Controller, MessageToast) {
    'use strict'; 

    return Controller.extend("logaligroup.com.sapui5.Controller", {
        onPress: function(){
            MessageToast.show("Hello World");
        }
    });
    
});