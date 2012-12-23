Ext.define('JAM.controller.Menu', {
    extend : 'Ext.app.Controller',

    config : {
        views : ['Menu'],

        refs : {
            getButton : '[action=getButton]',
            shitButton : '[action=shitButton]',
            doneButton : '[action=doneButton]',
            settingsButton : '[action=settingsButton]',
            helpButton : '[action=helpButton]',
            logoutButton : '[action=logoutButton]'
        },
        
        control : {

            getButton : {
                tap : function() {
                    JAM.app.getController('MainContainer').closeContainer();
                }

            },

            shitButton : {
                tap : function() {
                    JAM.app.getController('MainContainer').closeContainer();
                }

            },

            doneButton : {
                tap : function() {
                    JAM.app.getController('MainContainer').closeContainer();
                }

            },

            settingsButton : {
                tap : function() {
                    JAM.app.getController('MainContainer').closeContainer();
                }

            },
    
            helpButton : {
                tap : function() {
                    JAM.app.getController('MainContainer').closeContainer();
                }

            },

            logoutButton : {
                tap : function() {
                    JAM.app.getController('MainContainer').closeContainer();
                }
            }
        }
    }

});
