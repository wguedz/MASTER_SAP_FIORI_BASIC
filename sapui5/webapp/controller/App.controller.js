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
    function (Controller, MessageToast, JSONModel, ResourceModel, Models) {
        'use strict';

        return Controller.extend("logaligroup.com.sapui5.controller.App", {

            onInit: function () {

            },

            onOpenDialogHeader: function () {
                this.getOwnerComponent().openHelloDialog();
            }

        });

    });