Ext.define("JAM.view.Menu", {
    extend : 'Ext.List',

    config : {
        id : 'menu'
    },

    initialize : function() {
        var userBar = {
            xtype : 'toolbar',
            docked : 'top',
            ui : 'JAM-toolbar',
            cls : 'x-JAM-mainmenu',
            layout : {
                type : 'hbox',
                align : 'center'
            },
            items : [{
                xtype : 'container',
                cls : 'x-JAM-user-title',
                html : 'Home Button?',
                flex : 1
            }]
        };

        var get = {
            action : 'getButton',
            xtype : 'button',
            ui : 'JAM-menu',
            iconMask : true,
            iconCls : 'download ico-green',
            text : 'Get'
        };

        var shit = {
            action : 'shitButton',
            xtype : 'button',
            ui : 'JAM-menu',
            iconMask : true,
            iconCls : 'cloud_black ico-blue',
            text : 'Shit'
        };

        var done = {
            action : 'doneButton',
            xtype : 'button',
            ui : 'JAM-menu',
            iconMask : true,
            iconCls : 'check_black1 ico-orange',
            text : 'Done'
        };

        var settings = {
            action : 'settingsButton',
            xtype : 'button',
            ui : 'JAM-menu',
            iconMask : true,
            iconCls : 'settings9 ico-grey x-icon-small',
            text : 'Ingredients'
        };

        var help = {
            action : 'helpButton',
            xtype : 'button',
            ui : 'JAM-menu',
            iconMask : true,
            iconCls : 'help_black ico-grey x-icon-small',
            text : 'Help'
        };

        var logout = {
            action : 'logoutButton',
            xtype : 'button',
            ui : 'JAM-menu',
            iconMask : true,
            iconCls : 'power_on ico-grey x-icon-small',
            text : 'Sign Out'
        };

        var list = {
            xtype : 'container',
            layout : {
                type : 'vbox',
                pack : 'top'
            },
            items : [get, shit, done, settings, help, logout]
        };

        this.setItems([userBar, list]);
        userBar, get, shit, done, settings, help, logout = null;
    }
});
