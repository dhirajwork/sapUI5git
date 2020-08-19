sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("destTest.destTest.controller.View1", {
		onInit: function () {
$.ajax({
                url: "/northwind/V3/Northwind/Northwind.svc/Products",
                type: "GET",
                dataType: "json",
                    async: true,
                    contentType: "application/json",
                success: function(data){
                    var oModel = new sap.ui.model.json.JSONModel(data.value);
                    this.getView().setModel(oModel,"oAjaxModel");
                    console.log(data);
                }.bind(this),
                error: function(err){}
            });
		}
	});
});