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

            /*
            You can do view switch in many ways, depending on the way you organized your app.
            Here are two suggestions:

            1. Change active item in "Home.js" view's content container element.
            2. Change active item in "MainContainer.js" view - you'll need to include "Header.js" view in new view though.

            So why didn't I simply put "Header.js" as a part of "MainContainer.js" view, avoiding the need to re-include it every time view is switched?

            */

            getButton : {
                tap : function() {
                    JAM.app.getController('MainContainer').menuItemTap("JAM.view.Get");
                }

            },

            shitButton : {
                tap : function() {
                    JAM.app.getController('MainContainer').menuItemTap("JAM.view.Shit");
                }

            },

            doneButton : {
                tap : function() {
                    JAM.app.getController('MainContainer').menuItemTap("JAM.view.Done");
                }

            },

            settingsButton : {
                tap : function() {
                    JAM.app.getController('MainContainer').menuItemTap("JAM.view.Settings");
                }

            },

            helpButton : {
                tap : function() {
                    JAM.app.getController('MainContainer').menuItemTap("JAM.view.Help");
                }

            },

            logoutButton : {
                tap : function() {
                    JAM.app.getController('MainContainer').menuItemTap("JAM.view.Signout");
                }
            }
        }
    }

});
