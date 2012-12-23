Ext.define("JAM.view.Header", {
    extend : 'Ext.Toolbar',

    config : {
        id : 'header',
        title: 'swipe to open &rarr;',
        ui : 'JAM-header',
        docked : 'top',
        layout : {
            type : 'hbox',
            align : 'center'
        },
        items : [{
            action : 'menuButton',
            ui : 'JAM-plain',
            text : '=',
            //iconMask : true,
            //iconCls : 'list2'
        }, {
            xtype : 'spacer',
            width : '2px',
            cls : 'x-JAM-menu-split'
        }, {
            xtype : 'spacer'
        }]
    }
});


