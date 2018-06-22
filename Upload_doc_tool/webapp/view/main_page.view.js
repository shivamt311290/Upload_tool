sap.ui.jsview("view1.view.main_page", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.main_page
	 */
	getControllerName: function() {
		return "view.controller.main_page";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.main_page
	 */
	createContent: function(oController) {
		var obutton = new sap.m.Button(this.createId("helloButton"), {
			text : "clickme",
			press : [oController.onHelloworld, oController]
		});
		
		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: [ obutton ]
		});

		return oPage;
	}	

});