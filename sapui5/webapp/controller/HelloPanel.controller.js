sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast" 
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeOf sap.m.MessageToast} MessageToast  
     */

    function (Controller, MessageToast) {
        'use strict';

        return Controller.extend("logaligroup.com.sapui5.Controller.HelloPanel", {

            onInit: function () {
            },

            onPress: function () {

                var sRecipient = this.getView().getModel("oDataModel").getProperty("/recipient/name");
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sMsg = oBundle.getText("toastMsg", [sRecipient]);
                MessageToast.show(sMsg);

            },

            onOpenDialog: function () {
                this.getOwnerComponent().openHelloDialog();
            }

        });

    });