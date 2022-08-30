sap.ui.define([
    "sap/m/Button",
    "sap/m/MessageToast"
], 
/**
 * 
 * @param {typeOf sap.m.Button} Button 
 * @param {typeOf sap.m.MessageToast} MessageToast 
 */
function(Button, MessageToast) {
 
    new Button({
        text:"Ready", 
        press: function(){
            MessageToast.show("Hello World");
        } 
    }).placeAt("content");
    
});