sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
],
    /**
     * 
     * @param {typeOf sap.ui.base.ManagedObjectt} ManagedObjectt 
     * @param {typeOf sap.ui.core.Fragment} Fragment 
     * 
     */
    function (ManagedObject, Fragment) {
        'use strict';

        return ManagedObject.extend("logaligroup.SAPUI5.controller.HelloDialog", {

            constructor: function (oView) {
                this._oView = oView;
            },

            exit: function () {
                delete this._oView;
            },

            open: function () {

                const oView = this._oView;

                let oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                };

                if (!oView.byId("helloDialog")) {
                    Fragment.load({
                        id: oView.getId(),
                        name: "logaligroup.com.sapui5.view.HelloDialog",
                        controller: oFragmentController
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    oView.byId("helloDialog").open();
                }

            }

        });

    });