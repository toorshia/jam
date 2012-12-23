Ext.define('JAM.controller.Header', {
    extend : 'Ext.app.Controller',

    config : {

        views : ['Header'],

        refs : {
            mainMenuButton : '[action=menuButton]'
        },

        control : {
            mainMenuButton : {
                tap : function(btn) {
                 JAM.app.getController('MainContainer').toggleContainer();
             }
         }
     }

 }

});
