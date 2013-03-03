Ext.define("JAM.view.MainContainer", {
    extend : 'Ext.Panel',

    config : {
        id : 'mainContainer',
        layout : 'fit',
        scrollable : null,

        slideSelector : 'x-toolbar-JAM-header',
        slideOpenDuration : 200,
        slideCloseDuration : 100,
        canDrag : true,

        menuPlaceholder : {
            xtype : 'container',
            width : (window.innerWidth * 0.7),
            cls : 'x-JAM-slidenav-menu',
            layout: {
                type : 'card',
                align : 'center'
            },
            scrollable : null
        },

        containerPlaceholder : {
            cls: 'x-JAM-slidenav-container',
            layout: {
                type : 'fit',
                align : 'center'
            },
            scrollable : null
        }
    },

    initialize : function() {
        this.menuPlaceholder = JAM.app.getController('MainContainer').createMenu();
        this.menuPlaceholder.add(Ext.create('JAM.view.Menu'));
        this.containerPlaceholder = JAM.app.getController('MainContainer').createContainer();
        this.containerPlaceholder.add([Ext.create('JAM.view.Header'), Ext.create('JAM.view.Home')]);
        this.add([this.menuPlaceholder, this.containerPlaceholder]);
    }
});