sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ui5_ns.security_ui5.controller.View1", {
		onInit: function () {
			var oModel = new sap.ui.model.odata.v2.ODataModel({
				serviceUrl: "/xsodata/odata.xsodata/",
				defaultUpdateMethod: "sap.ui.model.odata.UpdateMethod.Put"
					// synchronizationMode : "None"
					// "useBatch" : false
			});
			this.getView().setModel(oModel, "airportModel");

			var oTable = this.getView().byId("sTable");
			oTable.setModel(this.getView().getModel("airportModel"));

		},
		onBeforeRendering: function () {
			var iconBar = this.getView().byId("iconBar");
			var adminFragment = sap.ui.xmlfragment("ui5_ns.security_ui5.view.AdminTab");
			var res_data = $.ajax({
				url: '/api/scopes/edit',
				timeout: 360000,
				headers: {
					'Accept': 'application/json'
				},
				'Accept': 'application/json',
				type: 'get',
				contentType: false,
				processData: false,
				success: (res) => {
					// console.log(res);
					let body = res.responseJSON;
					console.log(body);
					// iconBar.destroyItems();
					iconBar.addItem(adminFragment);
				},
				error: (res) => {
					// console.log(res);
					let body = res.responseJSON;
					console.log(body);
					// iconBar.destroyItems();
				}
			});
			// var form = this.getView().byId(this.createId("formId"));
			// var MAX = 5;
			// for (var i = 0; i < MAX; i++) {
			// 	form.addContent(new sap.m.Label({
			// 		text: "label"
			// 	}));
			// 	form.addContent(new sap.m.Text({
			// 		text: "text"
			// 	}));
			// }
			// console.log(form.getContent());
		}
	});
});